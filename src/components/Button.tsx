import React from 'react';
import './Button.css';
import { ReactComponent as Google } from '../assets/icons/google-icon.svg';
import { ReactComponent as Facebook } from '../assets/icons/facebook-icon.svg';

interface ButtonProps {
	label: string;
	stretch?: boolean;
	submit?: boolean;
	icon?: string;
}

const Button: React.FC<ButtonProps> = ({ label, stretch, submit, icon }) => {
	const renderIcon = () => {
		return icon === 'google' ? <Google /> : <Facebook />;
	};

	return (
		<div
			className={`button ${submit ? 'button-submit' : ''} ${
				stretch ? 'button-stretch' : 'button-default'
			}`}>
			<div className="button-content">
				{icon && <div>{renderIcon()}</div>}
				{label}
			</div>
		</div>
	);
};

export default Button;
