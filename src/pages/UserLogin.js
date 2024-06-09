import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import {  useNavigate } from "react-router-dom";
import Loading from '../components/Loading';

const UserLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const[loading ,setLoading] = useState(false);

  const checkDetails = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://black-coated-tackle.000webhostapp.com/bloodbankdatabase/auth/loginUser.php',
        data,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      if(response.data.success) {
        localStorage.setItem("userType" , "user");
        localStorage.setItem("email" , data.email);
        toast.success(response.data.message);
        navigate('/');
    }
    else{
        toast.error(response.data.message);
    }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      checkDetails(formData);
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while submitting the form');
    }
  };

  return (
    <div>
    {
    loading ? (<Loading />) :
    (<div className="w-[50%] mx-auto">
      <h1>User Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group flex flex-col gap-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            value={formData.email}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group flex flex-col gap-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            value={formData.password}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>)}</div>
  );
};

export default UserLogin;
