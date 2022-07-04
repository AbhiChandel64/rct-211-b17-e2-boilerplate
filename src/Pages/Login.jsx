import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthReducer/action";

const Login = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((d) => d.authReducer);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (data.isAuth) {
    window.location.href = "/";
  }

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (isError) {
    alert("Invalid username or passoword");
    return (window.location.href = "/login");
  }

  return (
    <div>
      <h2>LOGIN</h2>
      <form>
        <div>
          <label>User Email</label>
          <br />
          <input
            data-cy="login-email"
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value.trim());
            }}
          />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input
            data-cy="login-password"
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          data-cy="login-submit"
          disabled={!email || !password}
          onClick={() => login(email, password)(dispatch)}
        >
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
