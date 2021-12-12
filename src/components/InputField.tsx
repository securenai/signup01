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
		<div className="input-container">
			<div
				className={`input-field ${stretch ? 'input-stretch' : 'input-default'}`}
				onClick={() => setIsActive(true)}
				onBlur={() => {
					setIsActive(inputValue.length > 0);
				}}>
				{isActive ? (
					<div className="input-field-active">
						<span className="label-active">{label}</span>
						<div className="input-field-wrapper">
							<div className="input-field-wrapper2">
								<input
									className={`input input-${type}`}
									autoFocus
									type={type}
									value={inputValue}
									spellCheck={false}
									onChange={(e) => setInputValue(e.target.value)}
								/>
								{showPassword && (
									<div className="show-password">{inputValue}</div>
								)}
							</div>
						</div>
					</div>
				) : (
					<span className="label">{label}</span>
				)}
				{type === 'password' && (
					<div className="aaa">
						{showPassword ? (
							<ShowPwd onClick={() => setShowPassword(!showPassword)} />
						) : (
							<HidePwd onClick={() => setShowPassword(!showPassword)} />
						)}
					</div>
				)}
			</div>
			{validate && (
				<div className="validate">
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
					{/* {type === 'email' && (
						<>
							<Validation
								ruleDesc="valid email"
								rule="e1"
								value={inputValue}
							/>
						</>
					)} */}
				</div>
			)}
		</div>
	);
};

export default InputField;
