export default function ChannelNav(props) {

  //props is a set of ALL THE ARGUMENTS
  // console.log("channelNav props: ", props); //will be an object {}
  // console.log("channelList", props.channelList);
  // console.log("currentChannel", props.currentChannel);
  // console.log("favoriteChannel", props.favoriteChannel);

  const channelList = props.channelList; //an array of strings

  const channelListItems = channelList.map((channelName) => {
    return (
      <li className="list-item" key={channelName}>#{channelName}</li>
    )
  })

  return (
    <nav className="channel-list bg-secondary text-light h-100 py-3">
      <ul>
        {/* array of list items */}
        {/* [<li>, <li>, <li>, <li>] */}
        {channelListItems}
      </ul>
    </nav>
  )
}