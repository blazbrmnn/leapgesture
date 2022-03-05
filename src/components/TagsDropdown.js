import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

import { ripple } from './rippleButton';
import { sortTags } from '../helpers/util';

import './TagsDropdown.css';


export default class TagsDropdown extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			scrollbarActive: false,
			menuHeight: null
		}
	}

	componentDidMount() {
		this.handleResize();
		window.addEventListener("resize", this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleResize);
	}

	handleResize = (e = null) => {
		var menuHeight = (this.props.tags.length * 26) + 12,
		    menuTopBottom = 8 * 2,
		    menuMarginTop = 30 + 10,
		    marginBottom = 30,

		    boundary = menuMarginTop + menuTopBottom + menuHeight + marginBottom,
		    height = window.innerHeight - menuMarginTop - menuTopBottom - marginBottom;

		if (window.innerHeight > boundary) {
			this.setState({
				scrollbarActive: false,
				menuHeight: null
			});
		} else {
			this.setState({
				scrollbarActive: true,
				menuHeight: height
			});
		}
	}

	toggleDropdown(boolValue) {
		this.handleResize();

		if (this.props.trackDropdownState)
			this.props.trackDropdownState(boolValue);
	}

	render() {
		const tags = [...this.props.tags];

		tags.sort(sortTags);

		let rippleElements = document.getElementsByClassName('ripple');

		for (let i = 0; i < rippleElements.length; i++) {
		  rippleElements[i].addEventListener('click', ripple);
		}

		return (
		  <Dropdown 
		  	className="tags-dropdown"
		  	onToggle={(e) => this.toggleDropdown(e)}
		  	style={(tags.length == 0) ? {display: "none"} : null}
		  >
		    <Dropdown.Toggle 
		    	as={(typeof this.props.renderAs !== 'undefined') ? this.props.renderAs : "button"}
		    	className="ripple btn btn-secondary"
		    	style={
		    		(this.props.tagSelected)
		    		? {background: "#61dafb"} : null
		    	}
		    >
		    	{(this.props.tagSelected && 
		    		this.props.tagSelected.tag[0] !== '#') ? ('#') : ('')}
					{(this.props.tagSelected)
					? this.props.tagSelected.tag : "#"}
		    </Dropdown.Toggle>

		    <Dropdown.Menu 
		    	variant="dark" 
		    	className={(this.state.scrollbarActive) ? 'scrollbar' : ''}
		    	style={(this.state.menuHeight) ? {height: this.state.menuHeight} : null}
		    >
					{tags.map((obj, index) => {
						if (this.props.tagSelected && this.props.tagSelected.tag == obj.tag) {
							return (
								<Dropdown.Item
									as="li"
									key={obj.tag}
									className={'active'}
								>
									<a 
										onClick={() => this.props.selectTag(obj.tag)}
									>
										{(obj.tag[0] !== '#') ? ('#') : ''}{obj.tag}
									</a>
									<i 
										className="tag-close-icon"
										onClick={() => this.props.removeTag(obj.tag)}
									>
										x
									</i>
								</Dropdown.Item>
							)
						} else {
							return (
								<Dropdown.Item
									as="li"
									key={obj.tag} 
								>
									<a onClick={() => this.props.selectTag(obj.tag)}>
										{(obj.tag[0] !== '#') ? ('#') : ''}{obj.tag}
									</a>
									<i 
										className="tag-close-icon"
										onClick={() => this.props.removeTag(obj.tag)}
									>
										x
									</i>
								</Dropdown.Item>
							)
						}
					})}
		    </Dropdown.Menu>
		  </Dropdown>
		)
	}
}