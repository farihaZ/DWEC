import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Users from "../Service/User";

export default function UserList() {
  const [UserData, setUserData] = useState([]);
  useEffect(() => {
    Users.getUsers().then((response) => {
      setUserData(response.data);
    });
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }
  const onDelete = (id) => {
    Users.deleteUser(id).then(() => {
      alert("The user has been deleted");
      refreshPage();
    });
  };
  return (
    <div>
      <div>
        <nav class="navbar navbar-light bg-light justify-content-between">
          <a class="navbar-brand">Crud Application</a>
          <Link to="/CreateUser">
            <button class="btn btn-success my-2 my-sm-0">Create User</button>
          </Link>
        </nav>
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
            </tr>
          </thead>

          <tbody>
            {UserData.map((data) => {
              return (
                <tr>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.email}</td>
                  <td>
                    <button
                      onClick={() => onDelete(data.id)}
                      class="btn btn-danger"
                    >
                      Delete
                    </button>
                    <Link to={`/UserDetail/${data.id}`}>
                      <button class="btn btn-primary">UserDetails</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
