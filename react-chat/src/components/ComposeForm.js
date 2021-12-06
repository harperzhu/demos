import React, {useState} from 'react';

import {useParams} from 'react-router-dom';

export default function ComposeForm(props) {
  const [textValue, setTextValue] = useState('');
  const urlParams = useParams();

  const handleInput = (event) => {
    setTextValue(event.target.value);
  }

  const handleSubmit = (event) => {
    console.log("submitting", textValue);
    props.whatToDoOnSubmit(textValue, props.user, urlParams.channelName);
    setTextValue(''); //clear old value
  }

  return (
		<form className="my-2">
			<div className="input-group">
        {props.user && <img src={props.user.photoURL} alt={props.user.displayName + " avatar"} /> }
				<textarea 
          className="form-control" rows="2" placeholder="Type a new message"
          value={textValue}
          onChange={handleInput}
          disabled={!props.user}
        ></textarea>
        {props.user && 
          <button className="btn btn-secondary" type="button" onClick={handleSubmit}>
            <span className="material-icons">send</span>
          </button>
        }
			</div>
		</form>
	);
}