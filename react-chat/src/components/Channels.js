import { NavLink } from 'react-router-dom';

export default function ChannelNav({ channelList }) {
  //const channelList = props.channelList;

  const channelListItems = channelList.map((channelName) => {
    return (
      <li className="nav-item" key={channelName}>
        <NavLink to={"/chat/"+channelName} className="nav-link">{channelName}</NavLink>
      </li>
    )
  })

  return (
    <nav className="channel-list bg-secondary text-light h-100 py-3 px-2">
      <ul className="nav nav-pills flex-column">
        {channelListItems}
      </ul>
    </nav>
  )
}