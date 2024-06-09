import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../components/Loading';

const Signuphospital = () => {
    const [formData, setFormData] = useState({
        hospitalName: "",
        email: "",
        password: "",
        confirmPassword: "",
        city: "",
        state: "",
        zip: "",
        mobileNumber: "",
        availableBlood :JSON.stringify({
            "A+": 0,
            "B+": 0,
            "AB+": 0,
            "O+": 0,
            "A-": 0,
            "B-": 0,
            "AB-": 0,
            "O-": 0,
        }),
    });

    const[loading ,setLoading] = useState(false);

    const addDataToDb = async (data) => {
        setLoading(true);
        try {
            const response = await axios.post("https://black-coated-tackle.000webhostapp.com/bloodbankdatabase/auth/signupHospital.php", data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            console.log(response.data);
            if(response.data.success) {
                toast.success(response.data.message);
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
        // const data = new URLSearchParams(formData).toString();
        if(formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        try {
            await addDataToDb(formData);
            
        } catch (error) {
            console.error(error);
            toast.error("An error occurred while submitting the form");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
        {
        loading ? (<Loading />) :

        (<div>
            <h1 className='text-center'>Signup as a Hospital and donate your blood</h1>
            <form className="needs-validation w-[70%] mx-auto mt-5" noValidate onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col-md-4 mb-3 flex flex-col w-full">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationTooltip01" className='w-full'>Enter Hospital Name</label>
                            <input type="text" className="form-control" id="validationTooltip01" placeholder="Hospital name" required
                                name="hospitalName" value={formData.hospitalName} onChange={handleChange} />
                            <div className="valid-tooltip">
                                Looks good!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-row w-[40%]">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationTooltip02">Email Address</label>
                        <input type="email" className="form-control" id="validationTooltip02" placeholder="Email" required
                            name='email' value={formData.email} onChange={handleChange} />
                        <div className="invalid-tooltip">
                            Please provide a valid Email.
                        </div>
                    </div>
                    <div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationTooltip03">Enter Password</label>
                            <input type="password" className="form-control" id="validationTooltip03" required
                                name='password' value={formData.password} onChange={handleChange} />

                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationTooltip04">Confirm Password</label>
                            <input type="password" className="form-control" id="validationTooltip04" required
                                name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationTooltip05">City</label>
                        <input type="text" className="form-control" id="validationTooltip05" placeholder="City" required
                            name='city' value={formData.city} onChange={handleChange} />
                        <div className="invalid-tooltip">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="validationTooltip06">State</label>
                        <input type="text" className="form-control" id="validationTooltip06" placeholder="State" required
                            name='state' value={formData.state} onChange={handleChange} />
                        <div className="invalid-tooltip">
                            Please provide a valid state.
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="validationTooltip07">Zip</label>
                        <input type="text" className="form-control" id="validationTooltip07" placeholder="Zip" required
                            name='zip' value={formData.zip} onChange={handleChange} />
                        <div className="invalid-tooltip">
                            Please provide a valid zip.
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="validationTooltip08">Mobile Number</label>
                        <input type="text" className="form-control" id="validationTooltip08" placeholder="Mobile Number" required
                            name='mobileNumber' value={formData.mobileNumber} onChange={handleChange} />
                        <div className="invalid-tooltip">
                            Please provide a valid Mobile Number.
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary mt-[2rem]" type="submit">Submit form</button>
            </form>
        </div>)}</div>
    );
};

export default Signuphospital;
