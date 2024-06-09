import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../components/Loading';

const Signupuser = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        password: "",
        confirmPassword: "",
        city: "",
        state: "",
        zip: "",
        mobileNumber: "" // Add mobileNumber to match the PHP script
    });
    const[loading ,setLoading] = useState(false);

    const addDataToDb = async (data) => {
        setLoading(true);
        try {
            const response = await axios.post("https://black-coated-tackle.000webhostapp.com/bloodbankdatabase/auth/signupUser.php", data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
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
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = new URLSearchParams(formData).toString();
        if(formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        try {
            await addDataToDb(data);
        } catch (error) {
            console.error(error);
            toast.error("An error occurred while submitting the form");
        }
        
        console.log(formData);
    };

    return (
        <div>
            { loading ? (<Loading />) :
        (<div>
            <h1 className="text-center">Signup to get your blood</h1>
            <form className="needs-validation w-[70%] mx-auto mt-5" noValidate onSubmit={submitHandler}>
                <div className="form-row">
                    <div className="col-md-4 mb-3 flex flex-col w-full">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="firstName">First name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                placeholder="First name"
                                required
                                name="firstName"
                                autoComplete="given-name"
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            />
                            <div className="valid-tooltip">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="lastName">Last name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="Last name"
                                required
                                name="lastName"
                                autoComplete="family-name"
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            />
                            <div className="valid-tooltip">
                                Looks good!
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Please select your Gender:</p>
                        <div className="flex flex-row gap-2">
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                            />
                            <label htmlFor="male">Male</label>
                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                            />
                            <label htmlFor="female">Female</label>
                            <input
                                type="radio"
                                id="other"
                                name="gender"
                                value="other"
                                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                            />
                            <label htmlFor="other">Other</label>
                        </div>
                    </div>
                </div>
                <div className="form-row w-[40%]">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            required
                            name="email"
                            autoComplete="email"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <div className="invalid-tooltip">
                            Please provide a valid Email.
                        </div>
                    </div>
                    <div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="password">Enter Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                required
                                name="password"
                                autoComplete="new-password"
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                required
                                name="confirmPassword"
                                autoComplete="new-password"
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            className="form-control"
                            id="city"
                            placeholder="City"
                            required
                            name="city"
                            autoComplete="address-level2"
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        />
                        <div className="invalid-tooltip">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            className="form-control"
                            id="state"
                            placeholder="State"
                            required
                            name="state"
                            autoComplete="address-level1"
                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        />
                        <div className="invalid-tooltip">
                            Please provide a valid state.
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="zip">Zip</label>
                        <input
                            type="text"
                            className="form-control"
                            id="zip"
                            placeholder="Zip"
                            required
                            name="zip"
                            autoComplete="postal-code"
                            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        />
                        <div className="invalid-tooltip">
                            Please provide a valid zip.
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="mobileNumber"
                        placeholder="Mobile Number"
                        required
                        name="mobileNumber"
                        autoComplete="tel"
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    />
                    <div className="invalid-tooltip">
                        Please provide a valid mobile number.
                    </div>
                </div>
                <button className="btn btn-primary mt-[2rem]" type="submit">Submit form</button>
            </form>
        </div>)}
        </div>
    );
};

export default Signupuser;
