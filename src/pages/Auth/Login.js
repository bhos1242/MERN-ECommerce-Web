import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "../../css/Login.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {
          email,
          password,
        }
      );

      if (res && res.data.success) {
        console.log(res.data.message);
        toast.success(res.data && res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title="Login - vtech E-comm">
      <div className="login my-3 container">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Login</h3>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
