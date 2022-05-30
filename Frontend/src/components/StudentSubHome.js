import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const STDHome = () => {
  const [users, setUsers] = useState();

 useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`http://localhost:8000/stdSubmit`);
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="row">


      {users?.map((user) => (
        <div className="col-md-3 card me-3 mt-2 p-0 mb-2 d-flex" key={user._id}>
          
      <h2>{user.name}</h2>
          <a href={user.pdf} download>Click to download</a>
          <div className="p-2">
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default STDHome;