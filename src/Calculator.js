import React, { Component } from 'react';
import {Link} from "react-router-dom"


class Calculator extends Component {
	doMath() {
		const operator = this.props.match.params.operator;
		const firstNum = this.props.match.params.firstNum;
		const secondNum = this.props.match.params.secondNum;
		if (operator === "add") {
			return <div className="Calculator-sum">
                <h1>Your sum is {firstNum + secondNum}</h1>
                <Link to="/">Go Back</Link>
            </div>;
		}
		if (operator === "subtract") {
			return <div className="Calculator-sum">
                <h1>Your sum is {firstNum - secondNum}</h1>
                <Link to="/">Go Back</Link>
            </div>;
		}
		if (operator === "multiply") {
			return <div className="Calculator-sum">
                <h1>Your sum is {firstNum * secondNum}</h1>
                <Link to="/">Go Back</Link>
            </div>;
		}
		if (operator === "divide") {
			return <div className="Calculator-sum">
                <h1>Your sum is {firstNum / secondNum}</h1>
                <Link to="/">Go Back</Link>
            </div>;
		}
	}
	render() {
		const hasValues =
			this.props.match.params.operator &&
			this.props.match.params.firstNum &&
			this.props.match.params.secondNum;
		return (
			<div className='Calculator container w-50'>
				{!hasValues ? (
					<div>
						<h1>Add your values to the route!</h1>
						<p>For example /operator/num/num</p>
						<p>Valid operators are:</p>
						<ul>
							<li>add</li>
							<li>subtract</li>
							<li>multiply</li>
							<li>divide</li>
						</ul>
					</div>
				) : (
					this.doMath()
				)}
			</div>
		);
	}
}

export default Calculator;
