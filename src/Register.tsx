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
			<div className="register__container">
				<div className="register__form">
					<div className="return">
						<Back />
						<span className="return__back">Back</span>
					</div>
					<div className="register__intro">Start from free</div>
					<div className="register__title">Create an account</div>
					<div className="register__options">
						<Button label="Sign up with Google" icon="google" />
						<Button label="Sign up with Facebook" icon="facebook" />
					</div>
					<div className="register__email">
						<span>Or use your email for registration</span>
						<div className="register__email--line"></div>
					</div>
					<div className="register__name">
						<InputField label="First Name" />
						<InputField label="Last Name" />
					</div>
					<InputField label="E-mail" stretch />
					<InputField label="Password" stretch type="password" validate />
					<div className="register__agreement">
						<CheckBox />
						<div>
							By creating account, you agree to accept our Privacy Policy, Terms
							of Service and Notification settings.
						</div>
					</div>
					<Button label="Create an Free Account!" stretch submit />
					<div className="register__isMember">
						Already have an account?
						<span className="register__isMember--login">Log in</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
