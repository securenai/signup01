import React from 'react';
import './CheckBox.css';

interface CheckBoxProps {}

const CheckBox: React.FC<CheckBoxProps> = () => {
	return (
		<div>
			<label className="container">
				<input type="checkbox"></input>
				<span className="checkmark"></span>
			</label>
		</div>
	);
};

export default CheckBox;
