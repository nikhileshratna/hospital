import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost/bloodbankdatabase/availableBlood.php")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
    }

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  const obj = data;
  // const obj = JSON.parse(data);
  let jsonString = obj;

// Add commas between the JSON objects to make it a valid JSON array
jsonString = jsonString.replace(/}{/g, '},{');
jsonString = `[${jsonString}]`;

// Parse the JSON array into an array of objects
let arrayOfObjects = JSON.parse(jsonString);


  const map = new Map();
  const bloodGroup = ["O+"," O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];

  // useEffect(() => {

    bloodGroup.map((item) => {
      map.set(item, 0);
    });

  // },[])

  return (
    <div>
      {
        arrayOfObjects.map((item, index) => {
          for(let key in item) {
            map.set(key, map.get(key) + item[key]);
          }
        })
      }
      {
        bloodGroup.map((item) => {
          return (
            <div>
              <h1>{item} : {map.get(item)}</h1>
            </div>
          )
        })
      }
    
    </div>
  );
}

export default Home;
