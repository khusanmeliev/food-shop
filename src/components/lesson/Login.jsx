import "./Login.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";

function Login() {
  const initialValues = { username: "", password: "" };

  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="box">
            <div className="title">ADMIN PANEL</div>
            <div className="inputs">
              <input
                type="text"
                name="username"
                placeholder="username"
                onChange={handleChange}
                autoComplete="off"
              />
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="btn">
              <Button
                type="submit"
                variant="outlined"
                style={{
                  width: 150,
                  margin: 20,
                  color: "white",
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
