import React from 'react';
import Marquee from "react-fast-marquee";

import "./Hashtags.css";
import "./Hashtags-Marquee.css";

export default class Hashtags extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showPanel: false
		}
	}

	componentDidMount() {
		document.addEventListener('keyup', this.toggleEsc);
	}

	componentWillUnmount() {
		document.removeEventListener('keyup', this.toggleEsc);
	}

	toggleEsc = e => {
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop,
		    clientHeight = window.innerHeight,
		    element = document.getElementById("tag-panel-top"),
		    elementOffsetY = element.offsetTop,
		    elementHeight = element.offsetHeight + element.offsetTop;

		if (scrollTop <= elementHeight) {
			if (this.state.showPanel && e.key == "Escape")
				this.toggle(false);
		}
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

	render() {
		var hashtags = this.props.hashtags.map((obj) => {
			var tag = obj.keyword,
			    index;

		  index = this.props.tags.findIndex((obj) => {
		    if (typeof obj.tag === 'string' && obj.tag === tag)
		      return true;
		  });

			return {
				...obj, 
				selected: (index !== -1) ? true : false
			}
		});

		return (
			<>
				<div 
					id="tag-panel-top"
					className={(this.state.showPanel) ? 'tag-panel show' : 'tag-panel'} 
					style={(!this.props.hashtags.length) ? {display: "hidden"} : {}}
				>
					<a className="trigger" onClick={() => this.toggle(true)}>
						<div className="pegged"></div>
						<ul
							style={(this.props.dropdownOpen) ? {} : {}}
						>
							<Marquee
								gradientColor={[40, 44, 52]} 
								style={{
									color: "#b5b5b5",
								}}
							>
								{hashtags.map((obj) => {
									if (!obj.selected) {
										return (
											<li key={obj.keyword}>{obj.keyword}</li>
										)
								}})}
							</Marquee>
						</ul>
						<i>·</i>
					</a>

					<div className="window">
						<a onClick={() => this.toggle(false)}>
							<i>·</i>
							<div className="pegged"></div>
						</a>
						<ul>
							{hashtags.map((obj, index) => (
								<li 
									key={obj.keyword} 
									onClick={(!obj.selected) 
										? () => this.props.addTag(obj)
										: () => this.props.removeTag(obj.keyword)}
									className={(obj.selected) ? 'selected' : ''}
								>
									{obj.keyword}
								</li>
							))}
						</ul>
					</div>
				</div>
				{/*<div 
					id="hashtags-backdrop"
					className={(this.state.show) ? 'show' : ''} 
					onClick={() => this.toggle(false)}></div>*/}
			</>
		)
	}
}