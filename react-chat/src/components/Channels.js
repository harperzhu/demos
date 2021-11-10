
export default function ChannelList( { channelList } ) {
    //const channelList = props.channelList;

    const channelListItems = channelList.map((channelName) => {
        return (
            <li className="list-item" key={channelName}>{channelName}</li>
        )
    })  


    return (
        <nav className="channel-list bg-secondary text-light">
            <ul>
                {channelListItems}
            </ul>
        </nav>
    )
}