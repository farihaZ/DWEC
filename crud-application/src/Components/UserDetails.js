import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Users from "../Service/User";

export default function UserDetail() {
  const [UserDetail, setUserDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Users.getUserById(id).then((response) => {
      setUserDetail(response.data);
    });
  });
  return (
    <div>
      <div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <strong>Name:</strong>
            {UserDetail.first_name}
          </li>
          <li class="list-group-item">
            <strong>UserName:</strong>
            {UserDetail.last_name}
          </li>
          <li class="list-group-item">
            <strong>Email:</strong>
            {UserDetail.email}
          </li>
          <li class="list-group-item">
            <Link to="/users">
              <button class="btn btn-primary">Go Back</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
