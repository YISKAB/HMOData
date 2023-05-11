import React, { useState } from "react";
import User from "./User";
import axios from "axios";
import "./App.css"
const URL = "http://localhost:27017/api";

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
  const [vaccines, setVaccines] = useState([]);



  const getAllUsers = async () => {
    try {
      const resp = await axios.get(`${URL}/users/`);
      if (resp.status === 200) {
        setUsers(resp.data);
      } else {
        console.log("unknown error: " + resp.status);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const addUser = async (user, vaccine) => {
    try {
      // { ...user, vaccines: [...vaccines, vaccine._id] }
      await axios.post(`${URL}/users/`, user);
    }
    catch (e) {
      console.log(e);
    }
  }
  const addVaccine = async () => {
    try {
      const resp = await axios.post(`${URL}/vaccines/`, { date, maker });
      if (resp.status === 200)
        setVaccines([...vaccines, resp._id])
    }
    catch (e) {
      console.log(e);
    }
  }

  // const getAllVaccineOfUser = async (ID) => {
  //   try {
  //     const resp = await axios.get(`${URL}vaccines/${ID}`);
  //     if (resp.status === 200) {
  //       setVaccines(resp.data);
  //     } else {
  //       console.log("unknown error: " + resp.status);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  return (
    <>
      <h1>Users</h1>
      <button onClick={getAllUsers}>All Users</button>
      {users.map((user) => {
        return <div><User key={user._id} user={user} setImageUrl={setImageUrl} /></div>
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
          Add Vaccine:<br />
          Date:
          <input type="date" onChange={(e) => setDate(e.target.value)} /><br />
          Maker:
          <input type="text" onChange={(e) => setMaker(e.target.value)} /><br />
          {/* <button onClick={addVaccine} type="button" className="btn btn-primary btn-sm">Add Vaccine</button> */}
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}

export default App;
