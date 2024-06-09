import 'bootstrap/dist/css/bootstrap.min.css';  
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Navbar1() {  
  const navigate = useNavigate();
  return (  
    <nav className='bg-black h-12 flex flex-row gap-2 items-center'>  
      <div className='flex flex-row gap-2 justify-around w-full px-4'>  
        <div className='flex flex-row gap-4'>
          <Link to="/" className='text-white'>Blood Bank</Link>
          <Link to="/" className='text-white'>Home</Link>  
          {
            (localStorage.getItem("email") && localStorage.getItem("userType") === "hospital") && (
              <>
                <Link to="/viewBloodRequest" className='text-white'>View Blood Request</Link>
                <Link to="/addBloodInfo" className='text-white'>Add Blood Info</Link>
              </>
            )
          }
        </div>
        <div className='flex flex-row gap-4'>
          {
            !localStorage.getItem("email") && (
              <>
                <Link to="/signup" className='text-white'>Signup</Link>  
                <Link to="/login" className='text-white'>Login</Link> 
              </>
            )
          } 
          {
            localStorage.getItem("email") && (
              <Link 
                to="/login"
                className='text-white cursor-pointer'
                onClick={() => {
                  toast.success("Logout Successful");
                  localStorage.clear();
                }}
              >
                Logout
              </Link>
            )
          }  
        </div>
      </div>  
    </nav>  
  );  
}  

export default Navbar1;
