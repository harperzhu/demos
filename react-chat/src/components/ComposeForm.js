import React, {useState} from 'react';

export default function ComposeForm(props) {
  const [textValue, setTextValue] = useState('');

  const handleInput = (event) => {
    setTextValue(event.target.value);
  }

  const handleSubmit = (event) => {
    console.log("submitting", textValue);
    props.whatToDoOnSubmit(textValue, props.user);
    setTextValue(''); //clear old value
  }

  // if(!props.user) { //if user is null
  //   return (
	// 		<div className="input-group">
	// 			<textarea 
  //         className="form-control" rows="2" placeholder="Log in in to chat"
  //         value={textValue}
  //         onChange={handleInput}
  //         disabled={true}
  //       ></textarea>
  //     </div>
  //   )
  // }

  return (
		<form className="my-2">
			<div className="input-group">
        {props.user && <img src={'img/'+props.user+'.png'} alt={props.user + " avatar"} /> }
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