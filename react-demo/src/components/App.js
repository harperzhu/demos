import React, { useState, useEffect } from 'react';

function App(props) {
  const [stateData, setStateData] = useState([])
  //control form
  const [queryInput, setQueryInput] = useState('');

  //call at top level, pass a function
  useEffect(() => {
    const uri = "https://api.github.com/search/repositories?q=react";

    fetch(uri)
      .then((res) => res.json() ) //encode
      .then((body) => { //have data
        //do something with body
        console.log(body);
        setStateData(body.items);
      })
      .catch((err) => {
        console.log(err);
      })

  }, [])


  const handleChange = (event) => {
    setQueryInput(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const uri = "https://api.github.com/search/repositories?q="+queryInput;
    console.log("querying" +uri);
    // const promise = fetch(uri)
    // const combinedPromise = promise.then(handleReponseReceived);
    // combinedPromise.then((body) => {
    //   console.log(body);
    // })

    //let body = [] //default value for body
    // try {
    //   const response = await fetch(uri)
    //   const body = await response.json(); //assign new thing
    //   console.log(body);
    // } catch(err) {
    //   console.log(err);
    // }

    fetch(uri)
      .then((res) => res.json() ) //encode
      .then((body) => { //have data
        //do something with body
        console.log(body);
        setStateData(body.items);
      })
      .catch((err) => {
        console.log(err);
      })

    console.log("request has been sent")

  }

  const handleReponseReceived = (response) => {
    console.log("response received")
    const anotherPromise = response.json(); //encode the content -- open the letter
    return anotherPromise;
  }


  const elements = stateData.map((elem) => {
    return <li key={elem.id}>{elem.name}</li>
  })

  return (
    <div className="container">
      <header><h1>AJAX Demo</h1></header> 

      <form method="GET" action="https://api.github.com/search/repositories" onSubmit={handleSubmit}>
        <input type="text" name="q" className="form-control mb-2" placeholder="Search Github for..."
          value={queryInput} onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">Search!</button>
      </form>

      <div>
        <ul>{ elements }</ul>
      </div>
      {/* <MyComponent message="Hello" dataArray={[1,2,3]} /> */}
    </div>
  )
}


//                    props
// function MyComponent( {message, data}  ) {
//   // console.log(message, data);

//   return <div></div>
// }

export default App;