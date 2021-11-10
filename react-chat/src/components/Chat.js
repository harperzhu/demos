

export function ChatSection({messageHistory}) {

    //have an array of Objects
    console.log(messageHistory);

    //want an array of Elements
    //this to have all the messages
    const messageElemArray = messageHistory.map((aMessageObj) => {
        //draw a black box
        const transformed = <Message messageData={aMessageObj} key={aMessageObj.timestamp} />
        //return the drawn-on version
        return transformed; //goes into new array
    })
        
    //want an array of Elements
    //this to have all the messages
    // const messageElemArray = [
    //     <Message messageData={messageHistory[0]} key={messageHistory[0].timestamp} />,
    //     <Message messageData={messageHistory[1]} />,
    //     <Message messageData={messageHistory[2]} />,
    //     <Message messageData={messageHistory[3]} />,
    // ]

    if(messageHistory.length === 0){
        return (
            <div>
                <p>No messages yet! Start a conversation</p>
            </div>
        );
    }

    return (
        <div>
            {messageElemArray}
        </div>
    )
}

function Message(props) {
    console.log(props);

    const userImg = props.messageData.userImg;
    const userName = props.messageData.userName;
    const text = props.messageData.text;

    return (
        <div className="message d-flex">
            <div>
                <img src={userImg}/>
            </div>
            <div className="message-body">
                <p>{userName}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}