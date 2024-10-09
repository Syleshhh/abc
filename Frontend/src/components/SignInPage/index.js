import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

// Yup validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const SignInPage=(props)=> {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <Row className="w-100">
        <Col xs={12} sm={8} md={6} lg={5} className="mx-auto">
          <div className="card p-4 shadow-sm">
            <h1 className="text-center mb-4">Sign In</h1>

            {/* Formik Form */}
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                // Handle form submission
                console.log(values);
                setSubmitting(false);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  {/* Email Field */}
                  <Form.Group controlId="email" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.email && !!errors.email}
                    />
                    {touched.email && errors.email && (
                      <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    )}
                  </Form.Group>

                  {/* Password Field */}
                  <Form.Group controlId="password" className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <Form.Label>Password</Form.Label>
                      {/* <Button variant="link" onClick={handleClickOpen} className="p-0">
                        Forgot your password?
                      </Button> */}
                    </div>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="••••••"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.password && !!errors.password}
                    />
                    {touched.password && errors.password && (
                      <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                    )}
                  </Form.Group>

                  {/* Remember Me */}
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>

                  {/* Submit Button */}
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 mb-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Signing in...' : 'Sign In'}
                  </Button>

                  {/* Sign Up */}
                  <div className="text-center">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-primary">
                      Sign Up
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>

            {/* Divider */}
            <hr className="my-4" />
            <p className="text-center mb-3">or</p>

            {/* Social Buttons  */}
            <Button
              variant="outline-danger"
              className="w-100 mb-2"
              onClick={() => alert('Sign in with Google')}
            >
              <i class="bi bi-google"></i> Sign in with Google
            </Button>
             <Button
              variant="outline-primary"
              className="w-100"
              onClick={() => alert('Sign in with Facebook')}
            >
              <i class="bi bi-facebook"></i> Sign in with Facebook
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignInPage;  