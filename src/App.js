import React from 'react';

import TagsInput from './components/TagsInput';
import Hashtags from './components/Hashtags';
import Example from './components/Example';
import { ContentMenu } from './components/ContentMenu';
import { Cards } from './components/ContentCards';
import { Values } from './components/Values';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { 
	posts, 
	comments, 
	your_events, 
	event_responses, 
	objectTest_1, objectTest_2, testObject } from './jsonion.facebook-archive.js';
import seedPosts from './facebook-santappl/posts/your_posts_1.json';
import seedComments from './facebook-santappl/comments/comments.json';
// import seedYourEvents from './facebook-santappl/events/your_events.json';
// import seedEventResponses from './facebook-santappl/events/your_event_responses.json';

import jsonionDB, { inMemory } from './jsonion.db.js';
import runRemap, { remap } from './packages/jsonion-remap';
import TrieSearch from 'trie-search';

import { wordHistogram, toHistogram } from './jsonion-histogram.js';
import { camelCaseHashtag, sortTags, isArray, isObject } from './helpers/util';

import logo from './logo.svg';
import './App.css';
import './bootstrap.css';


//
// Seed database

var d_b = new jsonionDB(inMemory),
    collections = {},

ctx = {
	Facebook: {
		displayName: "Sant Applause"
	}
},
onMap = {
	'post': toHistogram,
	'comment': toHistogram,
	'joinedEvent': toHistogram,
	'yourEvent': toHistogram
},

postsPreparsed = new remap(posts),
commentsPreparsed = new remap(comments);
// yourEventsPreparsed = new remap(your_events),
// eventReponsesPreparsed = new remap(event_responses);


collections.posts = postsPreparsed.run(seedPosts, ctx.Facebook, onMap);
collections.comments = commentsPreparsed.run(seedComments, ctx.Facebook, onMap)['comments'];
// collections.your_events = yourEventsPreparsed.run(seedYourEvents, ctx.Facebook, onMap)['your_events'];
// collections.event_responses = eventReponsesPreparsed.run(seedEventResponses, ctx.Facebook, onMap)['event_responses']['events_joined'];

// console.log(collections.posts);
// console.log(collections.comments);
// console.log(commentsPreparsed);

/*
collections.fbContents.sort((a, b) => {
	if (typeof a.timestamp === 'undefined')
		a.timestamp = a.start_timestamp;
	if (typeof b.timestamp === 'undefined')
		b.timestamp = b.start_timestamp;
	return b.timestamp - a.timestamp 
});
*/

d_b.seedCollections(collections, null);

var trie = new TrieSearch('keyword');
trie.addAll(wordHistogram);

var hashtags = trie.search("#");


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			tags: [],
			tagSelected: null,
			dropdownOpen: false,
			////////////
			filterValue: null,
			dataset: {
				selected: [], // filterValue: 1
				timeline: [], // filterValue: 2
				priority: []  // filterValue: 3
			},
			values: []
		}

		this.datasetChanged = {
			selected: "",
			timeline: "",
			priority: ""
		}

		this.datasetMap = new Map([
			["1", "selected"],
			["2", "timeline"],
			["3", "priority"]
		]);
	}

	setFilterValue = (radioId, tags = null) => {
		this.setState({ filterValue: radioId });

		if (radioId >= 1 && radioId <= 3) {
			if (!tags) {
				if (radioId == 1) {
					if (this.state.tagSelected) {
						this.renderDataset(radioId, this.state.tagSelected);
					} else {
						if (this.datasetChanged.selected.length) {
							var x = this.state.tags.findIndex(tagObject => {
								if (tagObject.tag == this.datasetChanged.selected)
									return true
							});

							if (x != -1) {
								var tag = this.state.tags[x];

								this.renderDataset(radioId, tag);
								this.setState({ tagSelected: tag });
							} else
								this.setState({ filterValue: null });
						} else
							this.setState({ filterValue: null });
					}
				} else {
					if (this.state.tags.length)
						this.renderDataset(radioId, this.state.tags);	
					else
						this.setState({ filterValue: null });
				}
			} else {
				if (tags.length || isObject(tags))
					this.renderDataset(radioId, tags);
				else
					this.setState({ filterValue: null });
			}
		}
	}

	renderDataset = (filterValue, tags) => {
		var tags = (isArray(tags)) ? tags : [tags],
		    key = this.datasetMap.get(filterValue),
		    buffer = [], x,
		    results = [], wordCount = 0;

		if (!tags.length)
			return;

		if (this.changeInDataset(filterValue, tags)) {
			tags.forEach(tag => {
				if (tag) {
					Object.keys(tag.results).forEach(collectionKey => {
						tag.results[collectionKey].forEach(resultObj => {
							x = buffer.findIndex(index => {
								if (resultObj.i === index.i)
									return true
							});

							if (x != -1) {
								buffer[x].n =
									buffer[x].n + resultObj.n;
							} else {
								buffer.push({
									collection: collectionKey, 
									...resultObj
								});
							}
						});
					});
				}
			});

			if (filterValue == 1 || filterValue == 3) {
				buffer.sort((a, b) => {
					return b.n - a.n;
				});
			}

			results = buffer.map(object => {
				var result = d_b.queryRow(object.collection, object.i);

				if (filterValue == 1 &&
				    typeof result["__"] !== 'undefined' &&
				    typeof result["__"].wordCount !== 'undefined')
					wordCount = wordCount + result["__"].wordCount;

				return result;
			});

			if (filterValue == 2) {
				results.sort((a, b) => {
					if (typeof a.timestamp === 'undefined')
						a.timestamp = a.start_timestamp;
					if (typeof b.timestamp === 'undefined')
						b.timestamp = b.start_timestamp;
					return b.timestamp - a.timestamp 
				});
			}

			if (filterValue == 1) {
				this.setState({
					dataset: {
						...this.state.dataset,
						[key]: results,
						[key+"__wordcount"]: wordCount
					}
				});
			} else {
				this.setState({
					dataset: {
						...this.state.dataset,
						[key]: results
					}
				});
			}
		}
	}

	changeInDataset = (filterValue, tags) => {
		var key = this.datasetMap.get(filterValue),
		    datasetChanged = this.datasetChanged[key],
		    result = "";

		tags.sort(sortTags);

		tags.forEach(tag => {
			if (tag)
				result = result + tag.tag;
		})

		this.datasetChanged[key] = result;

		return (datasetChanged !== result);
	}

	trackDropdownState = (boolValue) => {
		this.setState({ dropdownOpen: boolValue });
	}

	addTag = (tagObject) => {
		var index,
		    tag = (typeof tagObject.keyword !== 'undefined')
		    	? camelCaseHashtag(tagObject.keyword) 
		    	: camelCaseHashtag(tagObject.tag);

	  index = this.state.tags.findIndex((obj) => {
	    if (typeof obj.tag === 'string' && obj.tag === tag)
	      return true;
	  });

		if(index === -1) {
			tagObject['tag'] = tag;
			tagObject['lowercase'] = tag.toLowerCase();

			if (typeof tagObject.ref !== 'undefined') {
				tagObject['results'] = tagObject.ref;
				delete tagObject.ref;
				delete tagObject.keyword;
			}

			this.setState({
				tags: [...this.state.tags, tagObject],
				tagSelected: tagObject
			});

			this.setFilterValue("1", tagObject);

		} else
			this.selectTag(tag);
	}

	selectTag = (tag) => {
    var x = this.state.tags.findIndex((obj) => {
      if (typeof obj.tag === 'string' && obj.tag === tag)
        return true;
    });

		if (x !== -1) {
			if (this.state.tagSelected) {
				if (this.state.tagSelected.tag !== tag) {
					this.setState({ tagSelected: this.state.tags[x] });
					this.setFilterValue("1", this.state.tags[x]);
				} else {
					this.setState({ tagSelected: null });
					this.setFilterValue("0", null);
				}
			} else {
				this.setState({ tagSelected: this.state.tags[x] });
				this.setFilterValue("1", this.state.tags[x]);
			}
		}
	}

	removeTag = (tag) => {
		var tags = this.state.tags.filter(obj => obj.tag !== tag);

		this.setState({
			tags: tags,
		});

		if (this.state.tagSelected && this.state.tagSelected.tag === tag) {
			this.setState({ tagSelected: null });
			this.setFilterValue("0", null);
		}

		this.removeTagFromValues(tag);
	}

	addValue = (valueText, color, tagSelected, wordCount) => {
		var values = this.state.values,
		    tag = tagSelected.tag,
		    partialWordCount;

		var index = values.findIndex(object => {
			if (object.text == valueText)
				return true
		});

		if (index === -1) {
			[values, partialWordCount] = this.updateAllValues(values, tag, true, wordCount);

			this.setState({
				values: [...values, {
					text: valueText, 
					color: color,
					tags: [{tag, partialWordCount}],
					sum: partialWordCount
				}]
			});
		}
	}

	setValue = (valueText, bool, tagSelected, wordCount) => {
		var values = this.state.values,
		    tag = tagSelected.tag,
		    partialWordCount, partialWordCount_0, alterSum;

		var index = values.findIndex(valueObj => {
			if (valueObj.text == valueText)
				return true
		});

		if (index != -1) {
			var x = values[index].tags.findIndex(tagObj => {
				if (tagObj.tag == tag)
					return true;
			});

			[values, partialWordCount] = this.updateAllValues(values, tag, bool, wordCount);

			if (bool === true) {
				var tagObj = {
					tag, partialWordCount
				};

				if (x == -1) {
					values[index].tags.push(tagObj);
					values[index].sum = values[index].sum + partialWordCount;
				}
			} else {
				if (x != -1) {
					values[index].tags.splice(x, 1);
					values[index].sum = values[index].sum - partialWordCount;
				}
			}
		}

		this.setState({ values: values });
	}

	updateAllValues = (values, tag, bool, wordCount) => {
		var i = -1, index = -1, first = true, 
		    tagOccurenceNum, partialWordCount,
		    alterSum;

		for (let value of values) {
			i++;

			index = value.tags.findIndex(tagObj => {
				if (tagObj.tag == tag)
					return true
			});

			if (index != -1 && first == true) {
				first = false;

				tagOccurenceNum
					= Math.round(wordCount / value.tags[index].partialWordCount);

				if (bool)
					partialWordCount = wordCount / (tagOccurenceNum + 1);
				if (!bool && tagOccurenceNum > 1)
					partialWordCount = wordCount / (tagOccurenceNum - 1);
				if (!bool && tagOccurenceNum == 1)
					partialWordCount = wordCount;

				alterSum = 
					partialWordCount - value.tags[index].partialWordCount;
			}

			if (index != -1) {
				values[i].tags[index].partialWordCount = partialWordCount;
				values[i].sum = values[i].sum + alterSum;
			}
		}

		if (typeof partialWordCount === 'undefined') {
			partialWordCount = wordCount;
			alterSum = wordCount;
		}

		return [values, partialWordCount];
	}

	removeTagFromValues = (tag) => {
		var i = -1, j, reduceSum,
		    values = this.state.values;

		values.forEach(valueObj => {
			i++; j = -1; reduceSum = 0;

			valueObj.tags.forEach(tagObj => {
				j++;
				if (tagObj.tag == tag) {
					reduceSum += tagObj.partialWordCount;
					values[i].tags.splice(j, 1);
				}
			});

			values[i].sum = values[i].sum - reduceSum;
		});

		this.setState({ values: values });
	}

	render() {
		return (
		<div className="App">
			<Container>
				<Row>
					<Col className="tags-input-padding">
						<TagsInput 
							trie={trie}
							tags={this.state.tags}

							tagSelected={this.state.tagSelected}

							addTag={this.addTag}
							removeTag={this.removeTag}
							selectTag={this.selectTag}

							trackDropdownState={this.trackDropdownState}
						/>
						<Hashtags
							trie={trie}
							hashtags={hashtags}
							tags={this.state.tags} 

							addTag={this.addTag}
							removeTag={this.removeTag}
							selectTag={this.selectTag}

							dropdownOpen={this.state.dropdownOpen}
						 />
					</Col>
				</Row>
				<Row>
					<Col>
						<ContentMenu
							filterValue={this.state.filterValue}
							setFilterValue={this.setFilterValue}
						/>
					</Col>
				</Row>
			</Container>
			{(typeof this.state.dataset[this.datasetMap.get(this.state.filterValue)] !== 'undefined' &&
			  this.state.dataset[this.datasetMap.get(this.state.filterValue)].length) ? (
			  	<>
			  		<Cards dataset={this.state.dataset[this.datasetMap.get(this.state.filterValue)]} />
			  		<Values 
			  			values={this.state.values}
			  			addValue={this.addValue}
			  			setValue={this.setValue}
			  			removeValue={this.removeValue}

			  			wordCount={this.state.dataset[this.datasetMap.get("1")+"__wordcount"]}

			  			tags={this.state.tags} 
			  			tagSelected={this.state.tagSelected}
			  			selectTag={this.selectTag}
			  		/>
			  	</>
			  ) : (
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<p>
							Welcome to #LeapGest whitepaper tutorial app!<br/><code>Scripted with React.js</code>
						</p>
						<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn React
						</a>
					</header>
				)}
		</div>
		);
	}
}



//console.log();
//console.log(remap(seedYourEvents, your_events, {context: context}));
//console.log(remap(seedYourEventResponses.event_responses, event_responses, {context: context}));


export default App;