import React, {useState} from 'react';

export default function ComposeForm(props) {
	const [textValue, setTextValue] = useState('');

	const user = props.user;

	const handleUpdate = (event) => {
		const newValue = event.target.value;
		setTextValue(newValue);
	}

	const handleClick = (event) => {
		event.preventDefault(); //just in case
		console.log("submitting", textValue);
		props.whatToDoOnSubmit(textValue, user); //App.addMessage
		setTextValue('');
	}

	// if(!user) { //not logged in
	// 	return <p>{ "Please log in to chat!" }</p>
	// }

	return (
		<form className="my-2">
			<div className="input-group">
				{ user && <img src={'img/'+user+'.png'} alt={user+" avatar"} /> }
				<textarea 
					className="form-control" rows="2" 
					placeholder="Type a new message"
					value={textValue}
					onChange={handleUpdate}
					disabled={!user}
					>
				</textarea>
				{user && 
					<button 
						className="btn btn-secondary" type="button"
						disabled={!user || textValue===''}
						onClick={handleClick}
						>
						<span className="material-icons">send</span>
					</button>
					}
			</div>
		</form>
	);
}