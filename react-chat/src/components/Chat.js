
export default function MessageList(props) {

    //have: an array of 6 message objects ({})
    const messageArray = props.messages;
    console.log(messageArray);

    // const componentArray = []
    // for(let i=0; i<messageArray.length; i++){
    //     //make a <Message> for it.
    //     const aMessageObj = messageArray[i];
    //     const theElem = <Message message={messageArray[i]} key={messageArray[i].timestamp} />;
    //     componentArray.push(theElem);
    // }

    const componentArray = messageArray.map((aMessageObj) => {
        const theElem = <Message message={aMessageObj} key={aMessageObj.timestamp} />;
        return theElem
    });


    //Need: an array of <Message> components
    // const componentArray = [
    //     <Message message={messageArray[0]} key={messageArray[0].timestamp} />,
    //     <Message message={messageArray[1]} key={messageArray[1].timestamp} />,
    //     <Message message={messageArray[2]} key={messageArray[2].timestamp} />,
    //     <Message message={messageArray[3]} key={messageArray[3].timestamp} />,
    // ]

    return (
        <div>
            {/* need: an array of 6 <Message> components */}
            {componentArray}

            {/*                access a global variable */}
            {/* Message(message = messageArray[0]) */}
            {/* <Message message={messageArray[0]} />     userName={"Polly"} text={"wants a cracker"} userImg={"img/Parrot.png"} /> */}
            {/* <Message message={messageArray[1]} />
            <Message message={messageArray[2]} />
            <Message message={messageArray[3]} /> */}
        </div>
    )
}

export function Message(props) {

    console.log(props);

    const {userName, userImg, text} = props.message;
    // const userName = props.message.userName; //"Parrot";
    // const userImg = props.message.userImg;
    // const text = props.message.text;

    return (
        <div className="message d-flex">
            <div>
                <img src={userImg} alt={userName} />
            </div>
            <div>           
                <p>{userName}</p>
                <p>{text}</p>
            </div>            
        </div>
    )
}