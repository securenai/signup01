import React from 'react';
import Button from './components/Button';
import CheckBox from './components/CheckBox';
import InputField from './components/InputField';
import { ReactComponent as Back } from './assets/icons/back.svg';
import './Register.css';

export interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
	return (
		<div className="register">
			<div className="register_form">
				<div className="register_form_content">
					<div className="return">
						<Back />
						<span className="Return-back">Back</span>
					</div>
					<div className="register_form_intro">Start from free</div>
					<div className="register_form_title">Create an account</div>
					<div className="signin_options">
						<Button label="Sign up with Google" icon="google" />
						<Button label="Sign up with Facebook" icon="facebook" />
					</div>
					<div className="register_alt">
						<span>Or use your email for registration</span>
						<div className="line"></div>
					</div>
					<div className="name">
						<InputField label="First Name" />
						<InputField label="Last Name" />
					</div>
					<InputField label="E-mail" stretch />
					<InputField label="Password" stretch type="password" validate />
					<div className="register_agreement">
						<CheckBox />
						<div>
							By creating account, you agree to accept our Privacy Policy, Terms
							of Service and Notification settings.
						</div>
					</div>
					<Button label="Create an Free Account!" stretch submit />
					<div className="register_redirect">
						Already have an account?
						<span className="log_in">Log in</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
