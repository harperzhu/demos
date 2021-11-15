import React, {useState} from 'react';

export default function ComposeForm(props) {

  console.log(props);

  const [textValue, setTextValue] = useState('');

  const handleInput = (event) => {
    setTextValue(event.target.value);
  }

  const handleSubmit = (event) => {
    console.log("submitting", textValue);
    props.whatToDoOnSubmit(textValue);
    setTextValue(''); //clear old value
  }

  return (
		<form className="my-2">
			<div className="input-group">
				<textarea 
          className="form-control" rows="2" placeholder="Type a new message"
          value={textValue}
          onChange={handleInput}
        ></textarea>
				<button className="btn btn-secondary" type="button" onClick={handleSubmit}>
					<span className="material-icons">send</span>
				</button>
			</div>
		</form>
	);
}