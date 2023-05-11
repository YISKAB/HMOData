import axios from "axios";
import { useState } from "react";
const URL = "http://localhost:27017/api";

function User(props) {
  const [vaccine, setVaccine] = useState([]);




  const getAllVaccineOfUser = async (ID) => {
    try {
      const resp = await axios.get(`${URL}/vaccines/`, ID);
      if (resp.status === 200) {
        setVaccine(resp.data);
      } else {
        console.log("notFond")
      }
    } catch (e) {
      console.log(e);
    }
  }

  const user = props.user;

  return (
    <div className="card">
      <div style={{ width: "100px" }}><img src={user.imageUrl} className="card-img-top" alt="" /></div>
      <div className="card-body">
        <h5 className="card-title">{user.firstName} {user.lastName} </h5>
        <div className="card-text">
          ID: {user.id} <br />
          Adress:{user.city} , {user.street} {user.houseNumber} <br />
          Phone: {user.phone} <br />
          Cell Phone:{user.cellPhone} <br />
          Date Of Illness: {user.dateOfIllness} <br />
          Date Of Recovery: {user.dateOfRecovery} <br />
          Vaccines: {vaccine !== undefined &&
            user.vaccines.map((v) => {
              return <p>{v.data} , {v.maker}</p>;

            })}<br />
          {/* Add Vaccine:<br />
          Date:
          <input type="date" onChange={(e) => setDate(e.target.value)} /><br />
          Maker:
          <input type="text" onChange={(e) => setMaker(e.target.value)} /><br />
          <button onClick={addVaccine}>Add</button>
          {vaccines === undefined &&
            <div>
              <input onChange={(e) => { props.setImageUrl(e.target.value) }} type="text">ImageUrl</input>
              <button type="button" className="btn btn-primary btn-sm">Add Vaccine</button>
            </div>
          } */}
        </div>
      </div>
    </div>
  );
}
export default User;
