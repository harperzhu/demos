import React, {useState} from 'react';

export default function ComposeForm(props) {

	const [textValue, setTextValue] = useState('');

	const handleUpdate = (event) => {
		const newValue = event.target.value;
		setTextValue(newValue);
	}

	const handleClick = (event) => {
		event.preventDefault(); //just in case
		console.log("submitting", textValue);
		props.whatToDoOnSubmit(textValue);
		setTextValue('');
	}

	return (
		<form className="my-2">
			<div className="input-group">
				<textarea 
					className="form-control" rows="2" 
					placeholder="Type a new message"
					value={textValue}
					onChange={handleUpdate}
					>
				</textarea>
				<button 
					className="btn btn-secondary" type="button"
					disabled={textValue===''}
					onClick={handleClick}
					>
					<span className="material-icons">send</span>
				</button>
			</div>
		</form>
	);
}