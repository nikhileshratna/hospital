import React, { useEffect ,useState} from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { CButton } from '@coreui/react';
import Loading from '../../components/Loading';

const BloodInfo = () => {
    const [data, setData] = useState({});
    const[loading ,setLoading] = useState(false);
    const bloodGroup = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];
    const navigate = useNavigate();
    
    const fetchData = async () => {
        setLoading(true);
        try {
            const email = localStorage.getItem("email");

            // Pass email as a query parameter
            const response = await axios.get(`https://black-coated-tackle.000webhostapp.com/bloodbankdatabase/page/bloodInfo.php?email=${email}`);
          
            console.log(response.data);

            if(response.data.success){
                toast.success("Available Blood Fetched Successfully");
                setData(response.data.request);
            } else {
                toast.error("Can't Fetch Request, Try Again");
            }
        } catch (error) {
            toast.error("Can't Fetch Request, Try Again");
        }
        setLoading(false);
    } 

    useEffect(() => {
        if(!localStorage.getItem("email")) {
            navigate("/login");
        }
        fetchData();
    }, []);

    return (
        <div>
            {
            loading ? (<Loading/>) :

        (<div className='flex flex-col gap-2 w-[50%] mx-[33%]'>
            
            <h3>Your total blood request from people :</h3>
            <div className='mx-[150px]'>
            {
                bloodGroup.map((item, index) => (
                    <div key={index}>
                        <h2>{item} : {data?.[item] ?? 0}</h2>
                    </div>
                ))
            }
            </div>

            <div className='flex flex-col gap-2 align-center justify-center w-[50%]'>
              <CButton onClick={() => navigate("/editAvailableBlood")} color="primary">Edit Available Blood</CButton>

              <CButton onClick={() => navigate("/viewBloodRequest")} color="primary" >View Blood Request</CButton>
            </div>
        </div>)
            }
        </div>
    );
}

export default BloodInfo;
