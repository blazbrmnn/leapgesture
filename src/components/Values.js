import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import { RgbStringColorPicker } from 'react-colorful';

import { PieChart } from 'react-minimal-pie-chart';

import { camelCaseHashtag } from '../helpers/util'

import "./Values.css";
import "./Values-TagPanel.css";
import "./Values-Checkbox.css";

const colors = {
	blue: "#0d6efd",
	indigo: "#6610f2",
	purple: "#6f42c1",
	pink: "#d63384",
	red: "#dc3545",
	orange: "#fd7e14",
	yellow: "#ffc107",
	green: "#198754",
	teal: "#20c997",
	cyan: "#0dcaf0"
}

export class Values extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			headlineWidth: null,
			showPanel: false,
			color: {}
		}

		this.text = {
	  	values: "Core Values",
	  	placeholder: "Enter a value of yours",
	  	colorPicker: "Pick a matching color"
	  }
	}

  componentDidMount() {
		this.resizeHeadlineWings();
		this.resizeTagPanel();
  }

  componentDidUpdate() {
		this.resizeHeadlineWings();
		this.resizeTagPanel();
  }

  resizeHeadlineWings = () => {
		var rootElement = document.getElementById("values"),
		    elements,
		    width;

		if (rootElement) {
			elements = rootElement.getElementsByClassName("btn-group")[0];

			width = "calc(50% - "+(elements.offsetWidth / 2 + 1)+"px)";

			elements = rootElement.getElementsByClassName("headline-divider");

			elements[0].style.width = width;
			elements[1].style.width = width;
		}
  }

  resizeTagPanel = () => {
		var rootElement = document.getElementById("values"),
		    elements,
		    width;

		if (rootElement) {
			elements = rootElement.getElementsByClassName("btn-group");

			width = (elements[0].offsetWidth - 1)+"px";

			elements = rootElement.getElementsByClassName("trigger");
			elements[0].style.width = width;
		}
  }

	toggleEsc = e => {
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop,
		    clientHeight = window.innerHeight,
		    element = document.getElementById("tag-panel-top"),
		    elementOffsetY = element.offsetTop,
		    elementHeight = element.offsetHeight + element.offsetTop;

		// if (scrollTop <= elementHeight && ) {
			if (this.state.show && e.key == "Escape")
				this.toggle(false);
		// }
	}

	toggle(bool) {
		if (bool === true) {
			this.setState({
				showPanel: true
			});
		} else {
			this.setState({
				showPanel: false
			});
		}
	}

	onKeyUp = event => {
		if (event.key === "Enter" && event.target.value !== "") {
			var text = event.target.value,
			    color = document.getElementById("color-picker").style.background;

			this.props.addValue(text, color, this.props.tagSelected, this.props.wordCount);

			event.target.value = "";
		}
	}

	setColor = (input) => {
		this.setState({ color: input });
	}

	findValue = (valueText) => {
		var index = this.props.values.findIndex(valueObj => {
			if (valueObj.text == valueText) {
				var x = valueObj.tags.findIndex(tagObj => {
					if (tagObj.tag == this.props.tagSelected.tag)
						return true;
				});

				if (x != -1)
					return true;
			}
		});

		if (index != -1)
			return true;
		else
			return false;
	}

	render() {
		var color, newColors = [], index = -1,
		    currentTagColors = [];

		if (this.state.color) {
			index = this.props.values.findIndex(value => {
				if (value.color == this.state.color)
					return true;
			});

			if (index == -1)
				color = this.state.color;
		}

		if (!Object.keys(this.state.color).length || index >= 0) {
			Object.keys(colors).forEach(color => {
				var aRgbHex = colors[color].substring(1).match(/.{1,2}/g),
				    aRgb = [
				    	parseInt(aRgbHex[0], 16),
				    	parseInt(aRgbHex[1], 16),
				    	parseInt(aRgbHex[2], 16)
				    ],
				    rgb = `rgb(${aRgb[0]}, ${aRgb[1]}, ${aRgb[2]})`;

				var index = this.props.values.findIndex(value => {
					if (value.color == rgb)
						return true;
				});

				if (index == -1) {
					newColors.push(colors[color]);
				}
			});

			color = newColors[Math.floor(Math.random() * newColors.length)];
		}

		this.props.values.forEach(valueObj => {
			if (this.findValue(valueObj.text))
				currentTagColors.push(valueObj.color);
		});

		return (
		<Container id="values">
			<Row>
				<Col>
					<form>
						<div className="btn-group" role="group">
						  <input 
						  	id="btnradiovalues-1"
						  	value=""
						  	type="radio"
						  	key={`abc-1`}
						  	className="btn-check" 
						  	name="btnradio"
						  	disabled
						  />
						  <label key={`bbc-1`} className="btn btn-primary" htmlFor="btnradiovalues-1">{this.text.values}</label>
						  {this.props.tagSelected && (
						  	<>
								  <input 
								  	id="btnradiovalues-2"
								  	value=""
								  	type="radio"
								  	key={`abc-2`}
								  	className="btn-check" 
								  	name="btnradio"
								  	checked
								  />
								  <label key={`bbc-2`} className="btn btn-primary" htmlFor="btnradiovalues-2">
								  	{this.props.tagSelected.tag}
								  </label>
								</>
						  )}
						</div>

						<hr className="headline-divider left" />
						<hr className="headline-divider right" />

						<div 
							className={(this.state.showPanel) ? 'values tag-panel show' : 'values tag-panel'} 
						>
							<a 
								className="trigger"
								onClick={() => this.toggle(true)}
							>
								<div className="pegged"></div>
								<i>·</i>
							</a>

							<div className="window">
								<a onClick={() => this.toggle(false)}>
									<i>·</i>
									<div className="pegged"></div>
								</a>
								<ul>
									{this.props.tags.map((obj, index) => (
										<li 
											key={obj.tag} 
											onClick={
												(this.props.tagSelected &&
												 obj.tag !== this.props.tagSelected.tag) 
												? () => this.props.selectTag(obj.tag)
												: null
											}
											className={
												(this.props.tagSelected &&
												 obj.tag == this.props.tagSelected.tag) 
													? 'selected' : ''
											}
										>
											{obj.tag}
										</li>
									))}
								</ul>
							</div>
						</div>
					</form>
				</Col>
			</Row>
			{(this.props.values.length != 0) && 
				<Row style={{"marginTop": "65px"}}>
					<Col lg={{ span: 4, offset: 4}} md={{ span: 6, offset: 3}} xs={{ span: 10, offset: 1 }}>
						
						<PieChart
							lineWidth={30}
						  data={this.props.values.map(value => {
						  	return {
							  	title: value.text,
							  	value: value.sum,
							  	color: value.color
						  	}
						  })}
						/>
					</Col>
				</Row>
			}
			<Row style={{"marginTop": "50px"}}>
				<Col>
          <Card key="123">
          	<div className="percentage">
          		{currentTagColors.map(value => (
          			<div style={{width: (100 / currentTagColors.length)+"%", background: value}}></div>
          		))}
          	</div>
          	<Card.Body style={{"paddingTop": "22px", "paddingBottom": "13px"}}>
          		{this.props.values.map((value, idx) => (
          			<div className="checkbox-item">
          				<span 
          					className="before-check"
          					style={{background: value.color}}
          				></span>
									<input 
										value={value.text}
										checked={this.findValue(value.text)}
										onChange={(e) => this.props.setValue(value.text, e.currentTarget.checked, this.props.tagSelected, this.props.wordCount)}
										type="checkbox" 
										id={`cbx${idx}`} 
										style={{display: "none"}}
										className="cbx-check" />
									<label htmlFor={`cbx${idx}`} className="check">
									  <svg width="18px" height="18px" viewBox="0 0 18 18">
									    <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
									    <polyline points="1 9 7 14 15 4"></polyline>
									  </svg>
										<span>
											{value.text}
										</span>
									</label>
								</div>
          		))}
          		<div>
	          		<input 
	          			className="value-input"
	          			type="text" 
	          			placeholder={this.text.placeholder}
	          			onKeyUp={this.onKeyUp}
	          		/>
						    <OverlayTrigger
						      trigger="click"
						      key="top"
						      placement="top"
						      rootClose={true}
						      overlay={
						        <Popover id={`popover-positioned-bottom`}>
						          <Popover.Header as="h3">{this.text.colorPicker}</Popover.Header>
						          <Popover.Body>
						            <RgbStringColorPicker color={color} onChange={this.setColor} />
						          </Popover.Body>
						        </Popover>
						      }
						    >
						      <span id="color-picker" style={{background: color}}></span>
						    </OverlayTrigger>
	          	</div>
          	</Card.Body>
          </Card>
				</Col>
			</Row>
		</Container>
		)
	}
}