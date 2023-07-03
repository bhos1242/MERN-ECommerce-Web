import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-hot-toast";
import "../../css/Resister.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Resister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/resister`,
        {
          name,
          email,
          password,
          phone,
          address,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong");
    }
  };
  return (
    <Layout title="Resister-vtech E-comm">
      <div className="resister my-3">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Resistration</h3>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
              placeholder="Enter Your Name Here"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter Your Email Here"
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
              aria-describedby="emailHelp"
              placeholder="Enter Your Password Here"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputPhone"
              aria-describedby="emailHelp"
              placeholder="Enter Your Phone Here"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputAddress"
              placeholder="Enter Address Here"
              name="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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

export default Resister;
