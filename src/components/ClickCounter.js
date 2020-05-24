import React, { Component } from "react";
import withCounter from "./hocs/withCounter";

class ClickCounter extends Component {
	render() {
		const { count, incrementCount, name } = this.props;
		return (
			<div>
				<button onClick={incrementCount}>{name} clicked {count} times</button>
			</div>
		);
	}
}

export default withCounter(ClickCounter, 3);
