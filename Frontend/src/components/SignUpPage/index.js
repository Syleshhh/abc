import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useState } from 'react';
import axios from 'axios'

// Yup validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
});

const SignUpPage=()=> {
  // const [name,setName]=useState();
  // const [email,setEmail]=useState();
  // const [password,setPassword]=useState();
  const handleSubmit = (values) => {
    // console.log(values);
    let a=values["name"];
    let b=values["email"];
    let c=values["password"]
    console.log(a,b,c)
    axios.post('http://localhost:3333/register',{a,b,c})
    .then(result=>console.log(result))
    .catch(err=>console.log(err,"...."));
    
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Sign Up</h3>

              {/* Formik Form */}
              <Formik
                initialValues={{ name: '', email: '', password: '', allowExtraEmails: false }}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSubmit(values)}
              >
                {({ isSubmitting }) => (
                  <Form >
                    {/* Full Name Field */}
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Full Name</label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Jon Snow"
                        // onChange={(e)=>setName(e.target.value)}
                      />
                      <ErrorMessage name="name" component="div" className="text-danger" />
                    </div>

                    {/* Email Field */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="your@email.com"
                        // onChange={(e)=>setEmail(e.target.value)}
                      />
                      <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>

                    {/* Password Field */}
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="••••••"
                        // onChange={(e)=>setPassword(e.target.value)}
                      />
                      <ErrorMessage name="password" component="div" className="text-danger" />
                    </div>

                    {/* Allow Extra Emails Checkbox */}
                    <div className="form-check mb-3">
                      <Field
                        type="checkbox"
                        name="allowExtraEmails"
                        id="allowExtraEmails"
                        className="form-check-input"
                      />
                      <label htmlFor="allowExtraEmails" className="form-check-label">
                        I want to receive updates via email.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                      {isSubmitting ? 'Signing up...' : 'Sign up'}
                    </button>

                    <div className="text-center mt-3">
                      Already have an account?{' '}
                      <Link to="/signin">Sign in</Link>
                    </div>
                  </Form>
                )}
              </Formik>

              {/* Divider */}
              <hr className="my-4" />

              {/* Social Sign Up Buttons */}
              <button className="btn btn-outline-danger w-100 mb-2" onClick={() => alert('Sign up with Google')}>
                Sign up with Google
              </button>
              <button className="btn btn-outline-primary w-100" onClick={() => alert('Sign up with Facebook')}>
                Sign up with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;