import React from 'react';
import './Validation.css';
import { ReactComponent as NotVerified } from '../assets/icons/not-verified.svg';
import { ReactComponent as Verified } from '../assets/icons/verified.svg';

interface ValidationProps {
	value: string;
	rule: string;
	ruleDesc: string;
}

const validate = (rule: string, value: string) => {
	if (rule === 'p1') {
		return value.length >= 8;
	} else if (rule === 'p2') {
		return /\d/.test(value);
	}
};

const Validation: React.FC<ValidationProps> = ({ value, rule, ruleDesc }) => {
	const isValid = validate(rule, value);
	return (
		<div
			className={`validation__item ${
				isValid ? 'validation__item--valid' : ''
			}`}>
			{isValid ? <Verified /> : <NotVerified />}
			<div className="validation__item--desc">{ruleDesc}</div>
		</div>
	);
};

export default Validation;
