import "./log.css";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Email format must be xxx@xxxx.com"
      ),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission
        console.log("Form Submitted", values);
      }}
    >
      {({ isSubmitting }) => (
        <div className="d-flex justify-content-around  align-items-center flex-wrap w-100 h-100">
        <Form className="login-container ">
          <h1>Login</h1>
          <hr />
          <div>
            <label htmlFor="email">Email Address</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
