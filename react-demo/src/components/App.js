import React, { useState, useEffect } from 'react';

//example GitHub repo data
const EXAMPLE_DATA = [
  { name: "react", html_url: "https://github.com/facebook/react" },
  { name: "react-bootstrap", html_url: "https://github.com/react-bootstrap/react-bootstrap" },    
  { name: "react-router", html_url: "https://github.com/remix-run/react-router" },
];


function App(props) {
  const [data, setData] = useState([]);
  //control form
  const [queryInput, setQueryInput] = useState('');

  const initialSearch = props.initialSearch;

  useEffect(() => {
    //function: what to do when the app FIRST loads

    //all together now
    //fetch("/chat_log.json") //root is the public folder
    fetch("https://api.github.com/search/repositories?q="+initialSearch)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("recieved:", data);
            setData(data.items);
        })
        .catch((error) => {
            console.log(error);
        })

    function cleanup() {
      console.log("component is being removed")
      console.log("turn off the lights")
    }
    return cleanup;
  }, [])


  const handleChange = (event) => {
    setQueryInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); //don't send normal form data

    //all together now
    fetch("https://api.github.com/search/repositories?q="+queryInput)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("recieved:", data);
            setData(data.items);
        })
        .catch((error) => {
            console.log(error);
        })
  }

  //render the data
  console.log("rendering with data", data);

  const dataElemArray = data.map((repo) => {
    return <li key={repo.html_url}><a href={repo.html_url}>{repo.full_name}</a></li>
  })

  return (
    <div className="container">
      <header><h1>AJAX Demo</h1></header> 



      <form method="GET" action="https://api.github.com/search/repositories" onSubmit={handleSubmit}>
        <input type="text" className="form-control mb-2" 
          name="q"
          placeholder="Search Github for..."
          value={queryInput} onChange={handleChange}
        />
        <input type="hidden" name="sort" value="best_match"></input>
        <button type="submit" className="btn btn-primary">Search!</button>
      </form>


      {data.length === 0 && <p>No results yet</p>}
      {data.length !== 0 &&

        <div className="mt-4">
          <h2>Results</h2>
          {/* results go here */}
          {dataElemArray}
        </div>
      }
    </div>
  )
}

export default App;