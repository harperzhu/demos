//blue messages
function BlueMessage(props) { //{message, isLoud, color, blinking}) {
  //const {message, isLoud, color, blinking} = props;
  // const messsage = props.message;
  // const isLoud = props.isLoud;
  // const color = props.color;
  // const blinking = props.blinking;



  console.log(props);

  let textToShow = props.message;

  if (props.isLoud) {
    textToShow = textToShow.toUpperCase();
  }

  return (
    <p className="text-primary">{textToShow}</p>
  );
}

function GreenMessage(props) {
  return (
    <p className="text-success">{props.message}</p>
  )
}

export function MessageList(props) {  

  const propArray = props.messages; //array of strings

  //the loop
  const anArrayOfElements = propArray.map((aString) => {
    let transformed = <GreenMessage message={aString} />
    return transformed;
  })

  // const anArrayOfElements = [ //array of elements
  //   <GreenMessage message={props.messages[0]} />,
  //   <GreenMessage message={props.messages[1]} />,
  //   <GreenMessage message={props.messages[2]} />
  // ]

  return (
    <div>
      <h2>Blue Messages</h2>
      <BlueMessage message="Hello World" isLoud={true} />
      <BlueMessage message="Nice day" />
      <h2>Green Messages</h2>
      {/* render the element array */}
      {anArrayOfElements}
    </div>
  )
}
