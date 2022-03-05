/*

  # jsonion database – a lightweight localStorage or inMemory data store

    */

import _ from 'lodash'
import { isArray, isObject } from './helpers/util'

var isLocalStorage = (typeof window !== 'undefined' && window.localStorage !== 'undefined')


 //
//Adapters: localStorage, inMemory

export var localStorage = function (d_b) {

	if(!isLocalStorage){
		d_b = inMemory(d_b);

	} else {

		d_b.setItem = (key, value) => {
			value = JSON.stringify(value)
			window.localStorage.setItem(key, value);
			return true;
		}
		d_b.getItem = (key) => {
			var item = window.localStorage.getItem(key);
			if(item !== 'undefined')
				return JSON.parse(item);
			else
				return [];
		}
		d_b.removeItem = (key) => {
			window.localStorage.removeItem(key);
		}
		d_b.clear = function() {
			window.localStorage.clear();
		}

	}

	return d_b;
}


export var inMemory = function (d_b) {

	if (typeof window !== 'undefined') {
		window.jsonionData = {};

		d_b.setItem = (key, value) => {
			window.jsonionData[key] = value;
			return true;
		};
		d_b.getItem = (key) => {
			return (typeof window.jsonionData[key] !== 'undefined') 
			 ? window.jsonionData[key] : [];
		};
		d_b.removeItem = (key) => {
			delete window.jsonionData[key];
			return true;
		};
		d_b.clear = function() {
			window.jsonionData = {}
		}

		return d_b;
	}

	if (typeof global !== 'undefined' && typeof window === 'undefined') {
		global.jsonionData = {};

		d_b.setItem = (key, value) => {
			global.jsonionData[key] = value;
			return true;
		};
		d_b.getItem = (key) => {
			return (typeof global.jsonionData[key] !== 'undefined') 
			 ? global.jsonionData[key] : [];
		};
		d_b.removeItem = (key) => {
			delete global.jsonionData[key];
			return true;
		};
		d_b.clear = function() {
			global.jsonionData = {};
		}

		return d_b;
	}
}

export default class d_b {

	constructor(adapter) {
		if (typeof adapter === 'function') {
			this.d_b = {};

			this.d_b.concat = _.concat;
			this.d_b.forEach = _.forEach;
			this.d_b.findIndex = _.findIndex;
			this.d_b.find = _.find;

	    this.d_b.data = {};
	    this.d_b.alias = {};
	    this.d_b.schema = {};
	    this.d_b.augmentations = null;

			this.d_b = adapter(this.d_b);
		}
	}

	getItem (key) {
		return this.d_b.getItem(key);
	}

	setItem (key, value) {
		return this.d_b.setItem(key, value);
	}

	insertRows (collectionKey, dataNodes, idPredicate = null) {
		var collection = this.d_b.getItem(collectionKey),
		    insert = [],
		    update = 0,

		    errors = [],
				schema = (d_b.schema[collectionKey] !== 'undefined') 
					? d_b.schema[collectionKey] : null;

		if (typeof dataNodes !== 'object')
			return false;

		if (!isArray(dataNodes))
			dataNodes = [dataNodes];

		if (!collection) {
			collection = dataNodes;

		} else {
			dataNodes.forEach((object) => {
				if (idPredicate && typeof object[idPredicate] === 'undefined')
					return;

				var validationStatus = d_b.validate(schema, object);
				if (validationStatus !== true){
					errors.push({
						[object[idPredicate]]: validationStatus
					})
					return;
				}

				var index;
				if (idPredicate)
					index = this.d_b.findIndex(collection, {[idPredicate]: object[idPredicate]});
				else
					index = -1;

				if (index === -1) {
					insert.push(object);
				} else {
					collection[index] = object;
					update++;
				}
			})

			if (!insert.length && !update)
				return false;

			if (insert.length)
				collection = this.d_b.concat(collection, insert);
		}

		this.d_b.setItem(collectionKey, collection);
		return true
	}

	updateRow (collectionKey, dataNode, idKey) {
		return this.insertRows(collectionKey, dataNode, idKey);
	}

	query (collectionKey, predicate) {
		var collection = this.d_b.getItem(collectionKey);
		return this.d_b.find(collection, predicate);
	}

	queryRow (collectionKey, i) {
		var collection = this.d_b.getItem(collectionKey);
		return collection[i];
	}

	validate (schema, dataNode) { return true; }


	 //
	// Initializing database with seed data

	seedCollection (collectionKey, seedData, uniqueIdPredicate = null) {
		this.insertRows(collectionKey, seedData, uniqueIdPredicate);
		return true;
	}

	seedCollections (collections, idPredicates = ['id']) {

		if (Object.keys(collections).length) {
			this.d_b.forEach(collections, (seedData, collectionKey) => {

				var buffer = [],
				    idMatch = null,
				    index = -1;

				if (isArray(seedData)) {
					seedData.forEach((dataNode) => {

						if (idPredicates) {
							for (var i = 0; i < idPredicates.length; i++) {
								if (typeof dataNode[ idPredicates[i] ] !== 'undefined') {
									idMatch = idPredicates[i];
									index = this.d_b.findIndex(buffer, {[idMatch]: dataNode[idMatch]});

									if (index === -1) {
										buffer = this.d_b.concat(buffer, dataNode);
									} else {
										buffer[index] = dataNode;
									}

									break;
								}
							};
						} else {
							buffer = this.d_b.concat(buffer, dataNode);
						}
					});

				} else if (isObject(seedData)) {
					buffer = seedData;
				}

				this.d_b.setItem(collectionKey, buffer)
			});
		}

		return true;
	}

	findIndex (array, predicate) {
		return this.d_b.findIndex(array, predicate);
	}

	concat () {
		return this.d_b.concat(...arguments);
	}
}