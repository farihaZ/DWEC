import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Users from "../Service/User";

export default function CreateUser() {
  const [Name, setName] = useState("");
  const [NickName, setNickName] = useState("");
  const [Email, setEmail] = useState("");
  const navigate = useNavigate();

  const postData = async (e) => {
    e.preventDefault();
    console.log(Name);
    console.log(NickName);
    console.log(Email);
    const User = {
      first_name: Name,
      last_name: NickName,
      email: Email
    };
    Users.createUser(User).then((response) => {
      alert("The user has been created", response.data);
      navigate("/Users");
    });

    //https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html
  };

  return (
    <div class="container">
      <form>
        <div class="form-group">
          <label class="col-sm-2 col-form-label">Name :</label>
          <input
            class="form-control"
            type="text"
            placeholder="Name"
            onBlur={(e) => setName(e.target.value)}
          />
          <br />
          <label class="col-sm-2 col-form-label">NickName :</label>
          <input
            class="form-control"
            type="text"
            placeholder="Nickname"
            onBlur={(e) => setNickName(e.target.value)}
          />
          <br />
          <label class="col-sm-2 col-form-label">Email :</label>
          <input
            class="form-control"
            type="email"
            placeholder="Email"
            onBlur={(e) => setEmail(e.target.value)}
          />
          <br />
          <button class="btn btn-secondary" type="reset">
            Cancel
          </button>
          <button class="btn btn-primary" onClick={postData} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
