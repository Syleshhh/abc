import React, { useEffect } from 'react';
import "../../assets/styles/welcome.css"
import companyLogo from "../../assets/images/anaimalaiscocologo.png"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsSignInOrSignUp } from '../../redux/slice';

const WelcomePage = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setIsSignInOrSignUp(""))
    },[])
  return (
    <div className="welcome-page">
      <div className="container text-center">
        <img
          src={companyLogo}  
          alt="Company Logo"
          className="company-logo"
        />        
        <h1 className="company-name">Anaimalais Coco</h1>
        <p className="company-details">Coimbatore, Tamil Nadu</p>
        <div className="button-group">
            <Link to="/signin">
          <button onClick={()=>dispatch(setIsSignInOrSignUp("signin"))} className="btn btn-primary m-2">Sign In</button>
          </Link>
          <Link to="/signup">
          <button onClick={()=>dispatch(setIsSignInOrSignUp("signup"))} className="btn btn-secondary m-2">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
