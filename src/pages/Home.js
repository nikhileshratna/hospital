import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost/bloodbankdatabase/availableBlood.php");
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  // Split the data into an array of objects
  // const arrayOfObjects = data.split(";").map(item => JSON.parse(item));
  const arrayOfStrings = data.split(";");
  arrayOfStrings.pop();
  let arrayOfObjects = [];
  arrayOfObjects = arrayOfStrings.map(item => JSON.parse(item));
  console.log(arrayOfObjects);


  const map = new Map();
  const bloodGroup = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];

  

  // arrayOfObjects.forEach(item => {
  //   const bloodData = item?.availableBlood;
  //   const bloodObj = JSON.parse(bloodData);
  // });

  return (
  
    <div className='flex items-center gap-2 flex-col'>
      {
        arrayOfObjects.map(item => {
          const bloodData = item?.availableBlood;
          const bloodObj = JSON.parse(bloodData);
          return (
          <div>
          <h4>Hospital Name : {item?.name}</h4>
            <div>
              {
                bloodGroup.map((item) => {
                  return (
                    <div className='flex flex-row gap-5'>
                      <p>Blood Group : {item}</p>
                      <p>Quantity : {bloodObj?.[item] ?? 0}</p>
                    </div>
                  )
                })
              }
            </div>
            <div className='flex flex-col gap-3'>
            <h4>Want to Request Blood From This Hospital></h4>
            <label for='blood'>Select Your Blood Group</label>
          
            <select id='blood' className='border border-black'>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            <button className='border border-black'>Request</button>

            </div>

          </div>
          
          
        )


        
        })
      }
    </div>
  );
}

export default Home;
