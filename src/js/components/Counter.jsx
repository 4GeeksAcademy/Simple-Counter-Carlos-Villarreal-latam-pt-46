import React from 'react';
import ReactDOM from 'react-dom';

let counter = 0;

const SimpleCounter = () => {

	counter ++
	const six = Math.floor(counter / 100000) % 10
	const five = Math.floor(counter / 10000) % 10
	const four = Math.floor(counter / 1000) % 10
	const three = Math.floor(counter / 100) % 10
	const two = Math.floor(counter / 10) % 10
	const one = Math.floor(counter / 1) % 10

return (
		<div className="d-flex justify-content-center my-5">
			<div className="card d-grid place-items-center d-flex justify-content-center mx-1 bg-dark text-white align-items-center" style={{width: "12%", height: "200px", fontSize: "900%"}}><i className="fa-regular fa-clock"></i></div>
			<div className="card d-grid place-items-center d-flex justify-content-center mx-1 bg-dark text-white align-items-center" style={{width: "12%", height: "200px", fontSize: "900%"}}>{six}</div>
			<div className="card d-grid place-items-center d-flex justify-content-center mx-1 bg-dark text-white align-items-center" style={{width: "12%", height: "200px", fontSize: "900%"}}>{five}</div>
			<div className="card d-grid place-items-center d-flex justify-content-center mx-1 bg-dark text-white align-items-center" style={{width: "12%", height: "200px", fontSize: "900%"}}>{four}</div>
			<div className="card d-grid place-items-center d-flex justify-content-center mx-1 bg-dark text-white align-items-center" style={{width: "12%", height: "200px", fontSize: "900%"}}>{three}</div>
			<div className="card d-grid place-items-center d-flex justify-content-center mx-1 bg-dark text-white align-items-center" style={{width: "12%", height: "200px", fontSize: "900%"}}>{two}</div>
			<div className="card d-grid place-items-center d-flex justify-content-center mx-1 bg-dark text-white align-items-center" style={{width: "12%", height: "200px", fontSize: "900%"}}>{one}</div>
		</div>
	);
};

export default SimpleCounter;