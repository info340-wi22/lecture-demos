import React from 'react';

export default function ChannelNav(props) {
  const channelList = props.channelList; //an array of strings

  const channelListItems = channelList.map((channelName) => {
    return (
      <li className="list-item" key={channelName}>#{channelName}</li>
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