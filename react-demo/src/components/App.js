import { MessageList } from './Messages';

export default function App() {

    const messagesArray = [
        "See you later alligator",
        "After a while crodocile",
        "Take care, polar bear",
        "Gotta go, buffalo",
        "Toodaloo, kangaroo",
        "Out the door, dinosaur"
    ]

    return (
        <div>
            <h1>Message Center</h1>
            <MessageList messages={messagesArray} />
        </div>
    )
}