export default function ChannelNav({ channelList }) {
  //const channelList = props.channelList;

  const channelListItems = channelList.map((channelName) => {
    return (
      <li className="list-item" key={channelName}>{channelName}</li>
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