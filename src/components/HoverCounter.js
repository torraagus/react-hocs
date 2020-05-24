import React, { Component } from "react";
import withCounter from "./hocs/withCounter";

class HoverCounter extends Component {
	render() {
		const { count, incrementCount, name } = this.props;
		return (
			<div>
                <h1 onMouseOver={incrementCount}>{name} hovered {count} times</h1>
			</div>
		);
	}
}

export default withCounter(HoverCounter, 5);
