import React, { useState, useEffect } from 'react';

function App(props) {
  const [repoArray, setRepoArray] = useState([]);
  //control form
  const [queryInput, setQueryInput] = useState('');

  useEffect(() => {
    const uri = "https://api.github.com/search/repositories?q="+"react";
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRepoArray(data.items)
        //data only exists here! no where else
      })
      .catch((error) => {
        console.log(error);
      })

  }, [])



  const handleChange = (event) => {
    setQueryInput(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const uri = "https://api.github.com/search/repositories?q="+queryInput;
    console.log("fetching from", uri);

    // let data = []
    // try {
    //   const res = await fetch(uri);
    //   data = await res.json();
    //   console.log(data);
    // } catch(error) {
    //   console.log(error);
    // }
    // console.log(data);
    
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRepoArray(data.items)
        //data only exists here! no where else
      })
      .catch((error) => {
        console.log(error);
      })

    console.log("fetch sent");
  }

  // const handleResponse = (response) => {
  //   console.log("response received");
  //   const anotherPromise = response.json()
  //   return anotherPromise;    
  // }


  let repoElements = repoArray.map((repo) => {
    return <li key={repo.id}>{repo.full_name}</li>
  })


  return (
    <div className="container">
      <header><h1>AJAX Demo</h1></header> 

      <form method="GET" action="https://api.github.com/search/repositories" onSubmit={handleSubmit}>
        <input type="text" name="q" className="form-control mb-2" placeholder="Search Github for..."
          value={queryInput} onChange={handleChange}
        />
        <button type ="submit" className="btn btn-primary">Search!</button>
      </form>

      <div>
        <ul>
          {repoElements}
        </ul>
      </div>
    </div>
  )
}

export default App;