import { useRef, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import Navbar from "./pages/Navbar";
import  { Toaster } from 'react-hot-toast';
import ViewBloodRequest from "./pages/ViewBloodRequest";
import BloodInfo from "./pages/addBloodInfo/BloodInfo";
import EditBloodInfo from "./pages/addBloodInfo/EditBloodInfo";
import Loading from "./components/Loading";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} /> */}
        </Route>
        <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/viewBloodRequest" element={<ViewBloodRequest />} />
          <Route path="/addBloodInfo" element={<BloodInfo />} />
          <Route path="/editAvailableBlood" element={<EditBloodInfo/>}></Route>
      </Routes> 
    </BrowserRouter>
    );  
}

export default App;
