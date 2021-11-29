import React, { useState } from 'react';

function App(props) {
  //control form
  const [queryInput, setQueryInput] = useState('');

  const handleChange = (event) => {
    setQueryInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }


  return (
    <div className="container">
      <header><h1>AJAX Demo</h1></header> 

      <form method="GET" action="https://api.github.com/search/repositories">
        <input type="text" name="repo" className="form-control mb-2" placeholder="Search Github for..."
          value={queryInput} onChange={handleChange}
        />
        <button type ="submit" className="btn btn-primary">Search!</button>
      </form>

      <div>
        {/* results go here */}
      </div>
    </div>
  )
}

export default App;