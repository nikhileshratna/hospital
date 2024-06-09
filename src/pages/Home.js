import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CButton } from '@coreui/react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';
import Loading from '../components/Loading';


const Home = () => {
  const [data, setData] = useState(null);
  const [reqBlood, setReqBlood] = useState("O+");
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://black-coated-tackle.000webhostapp.com/bloodbankdatabase/availableBlood.php");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
    console.log(data);
  }, []);

  const arrayOfObjects = data ? data.split(";").filter(item => item).map(item => JSON.parse(item)) : [];

  const bloodGroup = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];

  const clickHandler = async (e, email) => {
    e.preventDefault();

    if (!localStorage.getItem("email")) {
      toast.error("Please Login First");
      navigate("/login");
      return;
    } else if (localStorage.getItem("userType") !== "user") {
      toast.error("Hospital can not Request Blood");
      return;
    } else if (quantity <= 0) {
      toast.error("Quantity should be greater than 0");
      return;
    }
    const userEmail = localStorage.getItem("email");

    try {
      setLoading(true);
      const response = await axios.post("https://black-coated-tackle.000webhostapp.com/bloodbankdatabase/requestBlood.php", {
        email: email,
        reqBlood: reqBlood,
        quantity: quantity,
        userEmail: userEmail,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(email, reqBlood, quantity,userEmail);
      console.log(response.data);

      if (response.data.success) {
        toast.success("Request Sent Successfully To Hospital");
      } else {
        toast.error("Can't Send Request To Hospital, Try Again");
      }

      setLoading(false);
    } catch (error) {
      console.error("There was an error sending the request:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      {(loading || !data) && <Loading />}

      {!loading && (arrayOfObjects.length === 0) && <h1 className='text-center'>No Hospital Available</h1>}

      {!loading && arrayOfObjects.length > 0 &&
        <div className='flex items-center gap-2 flex-col'>
          {arrayOfObjects.map((item, index) => {
            const bloodData = item?.availableBlood;
            const bloodObj = JSON.parse(bloodData);

            return (
              <div key={index}>
                <h3>Hospital Name: {item?.name}</h3>
                <h6>Address : {item?.city}, {item?.state} - {item?.pincode}</h6>
                <h6>Contact : {item?.contact}, Email : {item?.email}</h6>
                <div>
                  {bloodGroup.map((bg) => (
                    <div key={bg} className='flex flex-row gap-5'>
                      <p>Blood Group: {bg}</p>
                      <p>Quantity Available(Bottles): {bloodObj?.[bg] ?? 0}</p>
                    </div>
                  ))}
                </div>
                <div className='flex flex-col gap-3'>
                  <h4>Want to Request Blood From This Hospital?</h4>
                  <label htmlFor='blood'>Select Your Blood Group:</label>
                  <select id='blood' className='border border-black w-[30%] mx-auto' value={reqBlood} name="reqBlood" onChange={(e) => setReqBlood(e.target.value)}>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                  <label htmlFor='quantity'>Enter number of bottles you want:</label>
                  <input
                    type="number"
                    className='border border-black w-[30%] mx-auto'
                    name="quantity"
                    id='quantity'
                    onChange={(e) => setQuantity(e.target.value)}
                    value={quantity}
                  />
                  <CButton color="primary" className='w-[30%] mx-auto' onClick={(e) => clickHandler(e, item?.email)}>Request Blood</CButton>
                </div>
              </div>
            )
          })}
        </div>
      }
    </div>
  );
}

export default Home;
