
import React, { useState } from 'react';
import Axios from 'axios';
import BackgroundImage from '../../assets/images/bg.jpg'
import '../../App.css'
function Update() {
    const [id, setId] = useState("")
    const [name, setname] = useState("")
    const [gender, setgender] = useState("")
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")
    const [city, setcity] = useState("")
    const [phonenumber, setphonenumber] = useState("")
    



  const handleSubmit = (e) => {
      e.preventDefault();
      const data={id,name,gender,email,address,city,phonenumber};
      Axios.put('http://localhost:8080/updatecust', {
         id:id,
          name:name,
          gender:gender,
          email:email,
          address:address,
          city:city,
          phonenumber:phonenumber
         
      }).then(response=>{console.log(response.data)})
    }

  return (
    <div className="App">
      <header className="App-header"> 
      <header style={ HeaderStyle }>
      <div className="center-container">
        <div className="logIn-form">
            <form onSubmit={handleSubmit}>
                <p>Book Id</p>

                <input
                type="text"
                placeholder="ID please"
                onChange={(e) => {setId(e.target.value)}}
                />

                <p> Name</p>

                <input
                  type="text"
                  placeholder="Name please"
                  onChange={(e) => {setname(e.target.value)}}
                />

                <p> gender</p>

                <input
                  type="text"
                  placeholder = "" 
                  onChange={(e) => {setgender(e.target.value)}}
                />

                <p>email</p>

                <input 
                type="text"
                placeholder = "email" 
                onChange={(e) => {setemail(e.target.value)}}
                />

                <p>address </p>

                <input 
                type="text"
                placeholder = "Address" 
                onChange={(e) => {setaddress(e.target.value)}}
                />
                <p>city </p>

                <input 
                type="text"
                placeholder = "city" 
                onChange={(e) => {setcity(e.target.value)}}
                />
                <p>phonenumber</p>

                <input 
                type="text"
                placeholder = "Phonenumber" 
                onChange={(e) => {setphonenumber(e.target.value)}}
                />

                <div class="btn-container">
                    <button id="btn4" type="submit">Update</button>
                </div>
                <p id="btn4-text" class="hidden">Updated Successfully!</p>

            </form>
        </div>
        </div>
      </header>
      </header>
    </div>
  );

  }
  const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
export default Update;