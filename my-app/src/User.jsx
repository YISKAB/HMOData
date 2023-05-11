

function User(props) {

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
          Vaccines: {user.vaccines.map((v) => {
            return <p>{v.date} , {v.maker}</p>;
          })}<br />
        </div>
      </div>
    </div>
  );
}
export default User;
