import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Loading from '../components/Loading';
import { CButton } from '@coreui/react';

const ViewBloodRequest = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const fetchData = async () => {
        setLoading(true);
        try {
            const email = localStorage.getItem("email");
            const response = await axios.get(`https://black-coated-tackle.000webhostapp.com/bloodbankdatabase/page/viewRequestToHospital.php?email=${email}`);

            console.log("Response Data:", response.data);

            if (response.data.success) {
                if(!response.data.request) {
                    toast.error("No Request Available");
                    return;
                }
                console.log("Request Data:", response.data.request);
                console.log(typeof(response.data.request));
                const string = response.data.request;

                if (string.length === 0) {
                    toast.error("No Request Available");
                    return;
                }

                const substring = string.slice(1);
                const array = substring.split(';');

                // Use map to convert the JSON strings to objects and set the state
                const parsedData = array.map((item) => {
                    try {
                        return JSON.parse(item);
                    } catch (error) {
                        console.error("JSON parsing error for item:", item);
                        return null;
                    }
                }).filter(item => item !== null); // Filter out any null values from failed JSON.parse

                setData(parsedData);
                console.log("Parsed Data:", parsedData);
                toast.success("Request Fetched Successfully");
            } else {
                toast.error("Can't Fetch Request, Try Again");
            }
        } catch (error) {
            toast.error("Can't Fetch Request, Try Again");
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const deleteAll = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://black-coated-tackle.000webhostapp.com/bloodbankdatabase/deleteRequest.php?email=${localStorage.getItem("email")}`);
            if (response.data.success) {
                toast.success("All Requests Deleted Successfully");
                setData([]); // Clear the data after successful deletion
            } else {
                toast.error("Can't Delete Request, Try Again");
            }
        } catch (error) {
            toast.error("Can't Delete Request, Try Again");
            console.log(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (!localStorage.getItem("email")) {
            navigate("/login");
        } else {
            fetchData();
        }
    }, [navigate]);

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-2 w-[50%] mx-[33%]'>
                        <h1>Your blood request from people :</h1>
                        <div>
                            {data.length === 0 && (
                                <h1 className='mx-[33%] my-[30%]'>No Request Available</h1>
                            )}
                        </div>
                        <div className='mx-[150px]'>
                            {data.map((item, index) => (
                                <div className='flex flex-col gap-2' key={index}>
                                    <div className='flex flex-row gap-3'>
                                        <h4>{index + 1 + ")"}</h4>
                                        <h4>Name: {item?.name}</h4>
                                    </div>
                                    <h4>Address: {item?.city}, {item?.state} - {item?.pincode}</h4>
                                    <h4>Contact: {item?.mobileNumber}, Email: {item?.email}</h4>
                                    <div className='bg-green-500 rounded p-1 mx-auto flex flex-col gap-2'>
                                        <h4>Blood Required: {item?.requestBlood}</h4>
                                        <h4>Quantity: {item?.quantity} Bottles</h4>
                                    </div>
                                    <hr></hr>
                                </div>
                            ))}
                        </div>
                    </div>
                    {
                    data.length > 0 &&
                    <div className='flex flex-col gap-2 w-[50%] mx-[33%]'>
                        <h4>If all blood is delivered then click here:</h4>
                        <CButton className='mx-auto' color="primary" onClick={(e) => deleteAll(e)}>Delete All Requests</CButton>
                    </div>
                    }
                </div>
            )}
        </div>
    );
}

export default ViewBloodRequest;
