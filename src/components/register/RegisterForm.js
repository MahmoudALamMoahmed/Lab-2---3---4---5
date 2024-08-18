import React, { useState } from "react";
import "./reg.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validate = (name, value) => {
    let tempErrors = { ...errors };

    switch (name) {
      case "email":
        if (!value) {
          tempErrors.email = "Email is required";
        } else if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
        ) {
          tempErrors.email = "Invalid email format";
        } else {
          delete tempErrors.email;
        }
        break;

      case "name":
        if (!value) {
          tempErrors.name = "Name is required";
        } else {
          delete tempErrors.name;
        }
        break;

      case "username":
        if (!value) {
          tempErrors.username = "Username is required";
        } else if (/\s/.test(value)) {
          tempErrors.username = "Username cannot contain spaces";
        } else {
          delete tempErrors.username;
        }
        break;

      case "password":
        if (!value) {
          tempErrors.password = "Password is required";
        } else if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            value
          )
        ) {
          tempErrors.password =
            "Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one digit, and one special character";
        } else {
          delete tempErrors.password;
        }
        break;

      case "confirmPassword":
        if (!value) {
          tempErrors.confirmPassword = "Please confirm your password";
        } else if (value !== formData.password) {
          tempErrors.confirmPassword = "Passwords do not match";
        } else {
          delete tempErrors.confirmPassword;
        }
        break;

      default:
        break;
    }

    setErrors(tempErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    validate(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log("Form Submitted", formData);
      // Handle successful registration here
    }
  };

  return (
    <div className="d-flex justify-content-center  align-items-center flex-wrap">
    <form className="register-container mt-4 " onSubmit={handleSubmit}>
      <h1 className="">Register</h1>
      <hr />
      <div className="input-container">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>

      <div className="input-container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="error">{errors.name}</div>}
      </div>

      <div className="input-container">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <div className="error">{errors.username}</div>}
      </div>

      <div className="input-container">
        <label htmlFor="password">Password</label>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.password && <div className="error">{errors.password}</div>}
      </div>

      <div className="input-container">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="password-container">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <span
            className="toggle-password"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.confirmPassword && (
          <div className="error">{errors.confirmPassword}</div>
        )}
      </div>

      <button type="submit" disabled={Object.keys(errors).length > 0}>
        Register
      </button>
    </form>
    </div>
  );
};

export default RegisterForm;
