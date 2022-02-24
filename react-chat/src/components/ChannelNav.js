import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ChannelNav(props) {
  const channelList = props.channelList; //an array of strings

  const channelListItems = channelList.map((channelName) => {
    return (
      <li className="list-item" key={channelName}>
        <NavLink to={"/chat/"+channelName}>#{channelName}</NavLink>
      </li>
    )
  })

  return (
    <nav className="channel-list bg-secondary text-light h-100 py-3">
      <ul>
        {channelListItems}
      </ul>
    </nav>
  )
}