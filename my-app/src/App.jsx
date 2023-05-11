import React, { useEffect, useState } from "react";
import User from "./User";
import axios from "axios";
import "./App.css"
const URL = "http://localhost:27017/api/users";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [id, setId] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [dateOfIllness, setDateOfIllness] = useState();
  const [dateOfRecovery, setDateOfRecovery] = useState();
  const [date, setDate] = useState();
  const [maker, setMaker] = useState("");
  const [users, setUsers] = useState([]);


  useEffect(() => {
    axios.get(URL).then(resp => {
      setUsers(resp.data)
    }).catch(error => {
      console.log(error);
    })
  });

  const updataImg = (img) => {
    setImageUrl(img);
  }

  const addUser = async (user) => {
    try {
      await axios.post(URL, user);
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <h1>Users</h1>
      {users.map((user) => {
        return <div><User key={user._id} user={user} setImageUrl={updataImg} /></div>
      })}
      <div style={{ float: "right" }}>
        <h1>Add User</h1>
        <form onSubmit={() => addUser({ firstName, lastName, id, city, street, houseNumber, phone, cellphone, imageUrl, dateOfIllness, dateOfRecovery, vaccines: [{ date, maker }] }
        )}>
          First Name:
          <input type="text" onChange={(e) => setFirstName(e.target.value)} /> <br />
          Last Name:
          <input type="text" onChange={(e) => setLastname(e.target.value)} /> <br />
          ID:
          <input type="text" onChange={(e) => setId(e.target.value)} /> <br />
          City:
          <input type="text" onChange={(e) => setCity(e.target.value)} /> <br />
          Street:
          <input type="text" onChange={(e) => setStreet(e.target.value)} /> <br />
          House Number:
          <input type="text" onChange={(e) => setHouseNumber(e.target.value)} /> <br />
          Phone:
          <input type="text" onChange={(e) => setPhone(e.target.value)} /> <br />
          Cell Phone:
          <input type="text" onChange={(e) => setCellphone(e.target.value)} /> <br />
          Image URL:
          <input type="text" onChange={(e) => setImageUrl(e.target.value)} /> <br />
          Date Of Illness:
          <input type="date" onChange={(e) => setDateOfIllness(e.target.value)} /> <br />
          Date Of Recovery:
          <input type="date" onChange={(e) => setDateOfRecovery(e.target.value)} /> <br />
          Vaccine 1:<br />
          Date:
          <input type="date" onChange={(e) => setDate(e.target.value)} /><br />
          Maker:
          <input type="text" onChange={(e) => setMaker(e.target.value)} /><br />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}

export default App;
