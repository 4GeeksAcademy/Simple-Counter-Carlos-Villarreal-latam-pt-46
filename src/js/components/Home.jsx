import React from "react";
import PropTypes, { func } from "prop-types";
import {Icon} from "./icon";

export function SimpleCounter(prop) {
	return (
		<div className="container">
			<div className="Clock">
				<Icon/>
			</div>
			<div className="nine">{props.digitNine %10}</div>
			<div className="eight">{props.digitEight %10}</div>
			<div className="seven">{props.digitSeven %10}</div>
			<div className="six">{props.digitSix %10}</div>
			<div className="five">{props.digitFive %10}</div>
			<div className="four">{props.digitFour %10}</div>
			<div className="three">{props.digitThree %10}</div>
			<div className="two">{props.digitTwo %10}</div>
			<div className="one">{props.digitOne %10}</div>
		</div>
	)
}

SimpleCounter.PropTypes = {
	digitNine: PropTypes.number,
	digitEight: PropTypes.number,
	digitSeven: PropTypes.number,
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
}