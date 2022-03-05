import React from 'react'
import Autosuggest from 'react-autosuggest'
import TagsDropdown from './TagsDropdown';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ripple } from './rippleButton';

import Trie from '../packages/jsonion-trie/trie.js';
import { camelCaseHashtag } from '../helpers/util'

import './TagsInput-AutoSuggest.css'
import './TagsInput.css'

class TagsInput extends React.Component {
	constructor(props) {
		super(props);

		// Define state for value and suggestion collection
		this.state = {
		  value: '',
		  inputWidth: 250,
		  suggestions: []
		};

		this.keywords = {};
		this.cumulativeResults = {};
		this.currentKeywordIndex = 0;
		this.totalCumulativeResults = {};
	}

	componentDidMount() {
		this.input.focus();
		this.handleResize();

		window.addEventListener("resize", this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleResize);
	}

	handleResize = () => {
		this.setState({
			inputWidth: document.getElementById("tags-input").offsetWidth
		});
	};

	storeInputReference = autosuggest => {
		if (autosuggest !== null) {
			this.input = autosuggest.input;
		}
	};


	 //
	// Filter logic

	updateSearchTerms = (inputValue) => {
		var inputKeywords = inputValue.split(/(?:\,\ |\,|\ )/g),

		    buffer, bufferResults, bufferCumulativeResults,
		    i = -1, keywordObj, match, currentKeyword,
		    x, y,

		    resultKeywords = {}, nextKeywordIndex = null,
		    cumulativeResults = {}, cumulativeDerived = [];


		 // Step 1: Compare all input keywords with cache
		// ... build cumulative results for modified keywords

		for (let inputKeyword of inputKeywords) {
			i++;

			Object.keys(this.keywords).forEach((index) => {
				keywordObj = this.keywords[index];

				if (keywordObj.key === inputKeyword) {
					resultKeywords[i] = keywordObj;
					cumulativeDerived.push(keywordObj.key);
				}
			});

			if (typeof resultKeywords[i] === 'undefined') {
				bufferResults = [];
				bufferCumulativeResults = {};

				buffer = this.props.trie.search(inputKeyword);
				buffer.forEach((keywordObj) => {
					bufferResults.push(keywordObj);

					Object.keys(keywordObj.ref).forEach((collectionKey) => {
						if (typeof bufferCumulativeResults[collectionKey] !== 'object')
							bufferCumulativeResults[collectionKey] = [];

						keywordObj.ref[collectionKey].forEach(object => {
							var x = bufferCumulativeResults[collectionKey].findIndex(index => {
								if (object.i === index.i)
									return true
							});

							if (x != -1) {
								bufferCumulativeResults[collectionKey][x].n = 
									bufferCumulativeResults[collectionKey][x].n + object.n;
							} else {
								bufferCumulativeResults[collectionKey] = 
									bufferCumulativeResults[collectionKey].concat([{...object}]);
							}
						});
					});
				});

				nextKeywordIndex = i;
				resultKeywords[i] = {
					key: inputKeyword,
					results: bufferResults,
					cumulativeResults: bufferCumulativeResults
				}
			}
		}


		 //
		// Step 2: Calculate cumulative results against the modified keyword

		if (nextKeywordIndex !== null && 
		    nextKeywordIndex !== this.currentKeywordIndex) {

			cumulativeResults = {};

			Object.keys(resultKeywords).forEach((index) => {
				if (index != nextKeywordIndex) {
					keywordObj = resultKeywords[index];

					if (Object.keys(cumulativeResults).length === 0) {
						cumulativeResults = keywordObj.cumulativeResults;
					} else {
						bufferCumulativeResults = {};

						Object.keys(keywordObj.cumulativeResults).forEach((collectionKey) => {
							if (typeof cumulativeResults[collectionKey] === 'object') {
								for (let resultObject of cumulativeResults[collectionKey]) {

									x = keywordObj.cumulativeResults[collectionKey].findIndex(result => {
										if (result.i === resultObject.i)
											return true;
									});

									if (x !== -1) {
										if (typeof bufferCumulativeResults[collectionKey] !== 'undefined') {
											y = bufferCumulativeResults[collectionKey].findIndex(result => {
												if (result.i === resultObject.i)
													return true;
											});
										} else {
											bufferCumulativeResults[collectionKey] = [];
											y = -1;
										}

										if (y !== -1) {
											bufferCumulativeResults[collectionKey][y].n =
												keywordObj.cumulativeResults[collectionKey][x].n + resultObject.n;
										} else {
											bufferCumulativeResults[collectionKey] = 
												bufferCumulativeResults[collectionKey].concat([{...resultObject}]);

											bufferCumulativeResults[collectionKey]
												[bufferCumulativeResults[collectionKey].length - 1].n =
													keywordObj.cumulativeResults[collectionKey][x].n + resultObject.n;
										}
									}
								}
							}
						});

						cumulativeResults = bufferCumulativeResults;
					}
				}
			});
		}


		 //
		// Step 3: Store persistent data

		this.keywords = resultKeywords;
		this.currentKeywordIndex = (nextKeywordIndex !== null) ? nextKeywordIndex : this.currentKeywordIndex;

		if (inputKeywords.length > 1) {
			this.cumulativeResults = (Object.keys(cumulativeResults).length)
				? cumulativeResults : this.cumulativeResults;
		} else {
			this.cumulativeResults = {};
		}


		 // Step 4: Filter results
		// Calculating intersection of cumulative results with current keyword

		currentKeyword = this.keywords[this.currentKeywordIndex];
		if (typeof currentKeyword !== 'undefined') {
			if (currentKeyword.results.length && Object.keys(this.cumulativeResults).length) {
				buffer = [];
				bufferCumulativeResults = {};

				for (i = 0; i < currentKeyword.results.length; i++) {
					keywordObj = currentKeyword.results[i];
					match = false;

					Object.keys(this.cumulativeResults).forEach((collectionKey) => {
						if (typeof keywordObj.ref[collectionKey] === 'object') {
							for (let resultObject of keywordObj.ref[collectionKey]) {
								x = this.cumulativeResults[collectionKey].findIndex(result => {
									if (result.i === resultObject.i)
										return true;
								});

								if (x != -1) {
									match = true;

									if (typeof bufferCumulativeResults[collectionKey] !== 'undefined') {
										y = bufferCumulativeResults[collectionKey].findIndex(result => {
											if (result.i == resultObject.i)
												return true;
										});
									} else {
										y = -1;
										bufferCumulativeResults[collectionKey] = [];
									}

									if (y != -1) {
										bufferCumulativeResults[collectionKey][y].n =
											bufferCumulativeResults[collectionKey][y].n + resultObject.n;
									} else {
										bufferCumulativeResults[collectionKey] = 
											bufferCumulativeResults[collectionKey].concat([{...resultObject}]);

										bufferCumulativeResults[collectionKey]
											[bufferCumulativeResults[collectionKey].length - 1].n = 
												this.cumulativeResults[collectionKey][x].n + resultObject.n;
									}
								}
							}
						}
					});

					if (match) {
						buffer.push({
							keyword: keywordObj.keyword,
							n: keywordObj.n
						});
					}
				}

				this.totalCumulativeResults = bufferCumulativeResults;
			} else {
				buffer = currentKeyword.results;
				this.totalCumulativeResults = {};
			}
		} else {
			buffer = [];
			this.totalCumulativeResults = {};
		}

		buffer.sort((a, b) => {
			return b.n - a.n;
		});

		return buffer;
	}

	getSuggestions = value => {
		const inputValue = value.trim().toLowerCase();
		const inputLength = inputValue.length;

		return inputLength === 0 ? [] : this.updateSearchTerms(inputValue);
	};

	// Trigger suggestions
	getSuggestionValue = (suggestion) => {
		var keywordResults = [];

		Object.keys(this.keywords).forEach(index => {
			if (index == this.currentKeywordIndex)
				keywordResults.push(suggestion.keyword);
			else
				keywordResults.push(this.keywords[index].key);
		});

		return keywordResults.join(" ");
	};

	// Render Each Option
	renderSuggestion = suggestion => (
		<div>
			{suggestion.keyword}
		</div>
	);

	// OnChange event handler
	onChange = (event, { newValue }) => {
		this.setState({
			value: newValue
		});

		if (!newValue.length) {
			this.keywords = {};
			this.cumulativeResults = {};
			this.currentKeywordIndex = 0;
			this.totalCumulativeResults = {};
		}
	};

	// Suggestion rerender when user types
	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: this.getSuggestions(value)
		});
	};

	// Triggered on clear
	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		});
	};

	addTag = event => {
		if (event.key === "Enter" && event.target.value !== "") {
			var tag = event.target.value,
			    results;

			if (Object.keys(this.keywords).length === 1)
				results = this.keywords[0].cumulativeResults;
			if (Object.keys(this.keywords).length > 1)
				results = this.totalCumulativeResults;

			this.props.addTag({tag, results});

			this.setState({
				value: "",
			});
		}
	};

	render() {
		const { value, suggestions } = this.state;

		// Resize handle
		var	toggleTagCollapse = false,
				
				inputPadding = 15 + 20 + 5,
		    inputBorder = 2 * 2,
		    inputWidth = this.state.inputWidth,

		    uncollapsed = {
			    tagMargin: 4,
			    tagPadding: 8 * 2,
			    tagButtonWidth: 16,
			    tagButtonMargin: 8,
			  },

			  collapsed = {
			  	toggleMargin: 4,
			  	togglePadding: 8 * 2,
			  	toggleIconWidth: 7.2
			  },

			  uncollapsedTagWidth =
			  	uncollapsed.tagMargin + uncollapsed.tagPadding + 
					uncollapsed.tagButtonWidth + uncollapsed.tagButtonMargin,

			  collapsedButtonWidth =
			  	collapsed.toggleMargin + collapsed.togglePadding,

		    tagFontWidth = 7.2,

		    uncollapsedElementWidth = inputWidth - inputPadding - inputBorder,
		    collapsedElementWidth = inputWidth - inputPadding - inputBorder;

		if (typeof this.props.tags !== 'undefined' && this.props.tags.length) {
			this.props.tags.forEach((obj) => {
				uncollapsedElementWidth = uncollapsedElementWidth - uncollapsedTagWidth;
				uncollapsedElementWidth = uncollapsedElementWidth - Math.floor(
					(obj.tag.length + 1) * tagFontWidth
				);
			});
		}

		if (this.props.tagSelected && 
		    this.props.tagSelected.tag !== this.props.tagRemoved) {
			collapsedElementWidth = collapsedElementWidth - collapsedButtonWidth;
			collapsedElementWidth = collapsedElementWidth - Math.floor(
				(this.props.tagSelected.tag.length + 2) * tagFontWidth
			)
		}

		if ((!this.props.tagSelected) || // [???]
		    (this.props.tagSelected && 
		     this.props.tagSelected.tag == this.props.tagRemoved)) {
			collapsedElementWidth = collapsedElementWidth - collapsedButtonWidth;
			collapsedElementWidth = collapsedElementWidth - Math.floor(
				2 * tagFontWidth
			)
		}

		if (uncollapsedElementWidth >= 250) {
			toggleTagCollapse = false;
			inputWidth = uncollapsedElementWidth;
		} else {
			toggleTagCollapse = true;
			inputWidth = collapsedElementWidth;
		}

		// Option props
		const inputProps = {
			placeholder: 'Type in keywords and press enter',
			value,
			onChange: this.onChange,
			onKeyUp: this.addTag,
			style: {width: inputWidth}
		};

		// Adding AutoSuggest component
		return (
		<div id="tags-input">
			<ul id="tags">
				{!toggleTagCollapse ?
					this.props.tags.map((obj, index) => (
						<li key={index} 
							className={
								(this.props.tagSelected && 
								 this.props.tagSelected.tag === obj.tag) ? 'tag selected' : 'tag'
							}
						>
							<a 
								className="tag-title"
								onClick={() => this.props.selectTag(obj.tag)}
							>{(obj.tag[0] !== '#') ? ('#') : ''}{obj.tag}</a>
							<i 
								className="tag-close-icon"
								onClick={() => this.props.removeTag(obj.tag)}
							>
								x
							</i>
						</li>
					))
					: (
						<TagsDropdown 
							tags={this.props.tags} 
							tagSelected={this.props.tagSelected} 
							tagRemoved={this.props.tagRemoved}
							removeTag={this.props.removeTag}
							selectTag={this.props.selectTag}
							trackDropdownState={this.props.trackDropdownState}
						/>
					)}
			</ul>
			<Autosuggest
				suggestions={suggestions}
				onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
				onSuggestionsClearRequested={this.onSuggestionsClearRequested}
				getSuggestionValue={this.getSuggestionValue}
				renderSuggestion={this.renderSuggestion}
				inputProps={inputProps}
				ref={this.storeInputReference}
			/>
		</div>
		);
	}
}

export default TagsInput;