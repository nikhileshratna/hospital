import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { CButton } from '@coreui/react';
import Loading from '../../components/Loading';

const EditBloodInfo = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const[loading ,setLoading] = useState(false);
    
    const fetchData = async () => {
        setLoading(true);
        try {
            const email = localStorage.getItem("email");

            const response = await axios.get(`https://black-coated-tackle.000webhostapp.com/bloodbankdatabase/page/bloodInfo.php?email=${email}`);
          
            console.log(response.data);

            if (response.data.success) {
                setData(response.data.request);
            }
        } catch (error) {
            console.log("Can't Fetch Request, Try Again");
        }
        setLoading(false);
    }

    const clickHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const email = localStorage.getItem("email");
            const response = await axios.post(`https://black-coated-tackle.000webhostapp.com/bloodbankdatabase/page/editBloodInfo.php`, {
                email: email,
                updatedBlood: JSON.stringify(data),
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.data.success) {
                toast.success("Details Updated Successfully");
                console.log(response.data.message);
            } else {
                toast.error(response.data.message || "Can't Update Details, Try Again");
            }
        } catch (error) {
            toast.error("Can't Update Details, Try Again");
        }
        setLoading(false);
    }

    useEffect(() => {
        if (!localStorage.getItem("email")) {
            navigate("/login");
        }
        fetchData();
    }, []);

    const bloodGroup = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];
    
    const handleInputChange = (e, bloodType) => {
        setData({ ...data, [bloodType]: (e.target.value) });
    };

    return (
        <div>
        {
        loading ? (<Loading/>) :
        (<div>
            <h1>Edit your Available Blood</h1>
            <div>
            {
                bloodGroup.map((item, index) => (
                    <div key={index} className='flex flex-col mx-[20px]'>
                        <label>Enter the number of bottles of {item} :</label>
                        <input 
                            type="number" 
                            className='border border-black w-[30%] mx-[255px]' 
                            onChange={(e) => handleInputChange(e, item)}
                            value={data[item] ?? 0}
                        />
                    </div>
                ))
            }
            </div>

            <div className='flex flex-row gap-3 mx-[25%] mt-[2%]'>
                <CButton onClick={(e) => clickHandler(e)} color="primary">Save Chnages</CButton>
                <CButton onClick={() => navigate("/addBloodInfo")} color="primary">Back</CButton>
            </div>
        </div>)
    }
    </div>
    )
}

export default EditBloodInfo;
