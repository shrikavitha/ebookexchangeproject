import React, { useState } from 'react';
import Axios from 'axios';

function Delete() {
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Use string interpolation to insert the id value into the URL
    Axios.delete(`http://localhost:8080/deletebyParamcust?id=${id}`)
      .then(response => {
        // Handle the response here, e.g., show a success message
        console.log('Deleted Successfully!', response);
      })
      .catch(error => {
        // Handle errors here
        console.error('Error deleting:', error);
      });
  }

  return (
    <div className="App" style={{ backgroundImage: `url("https://i.pinimg.com/564x/52/17/c5/5217c521542d3c754a36fc825f23de6c.jpg")`, height: "750px", width: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <header className="App-header">
        <div className="logIn-form">
          <form onSubmit={handleSubmit}>
            <p>Delete a Review!</p>

            <input
              type="text"
              placeholder="ID please"
              value={id}
              onChange={(e) => { setId(e.target.value) }}
            />

            <div class="btn-container">
              <button id="btn4" type="submit">Delete</button>
            </div>
            <p id="btn-text" class="hidden">Deleted Successfully!</p>
          </form>
        </div>
      </header>
    </div>
  )
}

export default Delete;