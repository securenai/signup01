import React, { useState } from 'react';
import './InputField.css';
import { ReactComponent as ShowPwd } from '../assets/icons/show-pwd-icon.svg';
import { ReactComponent as HidePwd } from '../assets/icons/hide-pwd-icon.svg';
import Validation from './Validation';

interface InputFieldProps {
	label: string;
	stretch?: boolean;
	type?: string;
	validate?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
	label,
	stretch,
	type = 'text',
	validate
}) => {
	const [isActive, setIsActive] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [inputValue, setInputValue] = useState(''); // controlled component

	return (
		<div className="input__container">
			<div
				className={`input__field ${
					stretch ? 'input__field--stretch' : 'input__field--default'
				}`}
				onClick={() => setIsActive(true)}
				onBlur={() => {
					setIsActive(inputValue.length > 0);
				}}>
				{isActive ? (
					<div className="input__field--active">
						<span className="input__label--active">{label}</span>
						<div className="input__field--active-wrapper">
							<div className="input__field--active-width">
								<input
									className={`input__text input__text--${type}`}
									autoFocus
									type={type}
									value={inputValue}
									spellCheck={false}
									onChange={(e) => setInputValue(e.target.value)}
								/>
								{showPassword && (
									<div className="input__field--active-password">
										{inputValue}
									</div>
								)}
							</div>
						</div>
					</div>
				) : (
					<span className="input__label">{label}</span>
				)}
				{type === 'password' && (
					<div className="input__field--showpass">
						{showPassword ? (
							<ShowPwd onClick={() => setShowPassword(!showPassword)} />
						) : (
							<HidePwd onClick={() => setShowPassword(!showPassword)} />
						)}
					</div>
				)}
			</div>
			{validate && (
				<div className="input__field--validate">
					{type === 'password' && (
						<>
							<Validation
								ruleDesc="8 Characters min."
								rule="p1"
								value={inputValue}
							/>
							<Validation ruleDesc="One number" rule="p2" value={inputValue} />
						</>
					)}
				</div>
			)}
		</div>
	);
};

export default InputField;
