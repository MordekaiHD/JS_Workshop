import '../../Style/StyleRegistracion/style.css';
import React, { useState } from "react";

function RegistracionCentrale() {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstname.match(/^[A-Za-z]+$/)) {
      newErrors.firstname = "Only letters are allowed.";
    }
    if (!formData.lastname.match(/^[A-Za-z]+$/)) {
      newErrors.lastname = "Only letters are allowed.";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select your gender.";
    }

    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
      newErrors.password = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully", formData);
    } else {
      console.log("Form contains errors.");
    }
  };
  return (
    <div className="main__registration">
      <form className="main__address" onSubmit={handleSubmit}>
        <div className="main__user">
          <h2 className="main__user__title">Your Name</h2>
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="main__user__input"
          />
          {errors.firstname && <p className="error">{errors.firstname}</p>}

          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="main__user__input"
          />
          {errors.lastname && <p className="error">{errors.lastname}</p>}

          <div className="main__user__chekbox">
            <input
              type="radio"
              name="gender"
              value="male"
              className="main__user__checkbox__input"
              id="checkbox1"
              onChange={handleChange}
              checked={formData.gender === "male"}
            />
            <label htmlFor="checkbox1" className="main__user__checkbox__label1">Male</label>

            <input
              type="radio"
              name="gender"
              value="female"
              className="main__user__checkbox__input main__user__checkbox__input_right"
              id="checkbox2"
              onChange={handleChange}
              checked={formData.gender === "female"}
            />
            <label htmlFor="checkbox2" className="main__user__checkbox__label2">Female</label>

            <input
              type="radio"
              name="gender"
              value="other"
              className="main__user__checkbox__input main__user__checkbox__input_right"
              id="checkbox3"
              onChange={handleChange}
              checked={formData.gender === "other"}
            />
            <label htmlFor="checkbox3" className="main__user__checkbox__label2">Other</label>
          </div>

          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>

        <div className="main__details">
          <h2 className="main__details__title">Login details</h2>

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="main__details__input"
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="main__details__input"
          />
          <p
            className="main__details__text"
            style={errors.password ? { color: "red" } : {}}
          >
            Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters
          </p>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button type="submit" className="main__button">
          JOIN NOW
          <svg width="17.000977" height="9.918610" viewBox="0 0 17.001 9.91861" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.54 0.2C11.6 0.14 11.68 0.08 11.77 0.05C11.85 0.01 11.94 0 12.04 0C12.13 0 12.22 0.01 12.31 0.05C12.39 0.08 12.47 0.14 12.54 0.2L16.79 4.45C16.85 4.52 16.91 4.6 16.94 4.68C16.98 4.77 17 4.86 17 4.95C17 5.05 16.98 5.14 16.94 5.23C16.91 5.31 16.85 5.39 16.79 5.46L12.54 9.71C12.41 9.84 12.22 9.91 12.04 9.91C11.85 9.91 11.67 9.84 11.54 9.71C11.4 9.57 11.33 9.39 11.33 9.2C11.33 9.02 11.4 8.84 11.54 8.7L15.28 4.95L11.54 1.21C11.47 1.14 11.42 1.06 11.38 0.98C11.35 0.89 11.33 0.8 11.33 0.7C11.33 0.61 11.35 0.52 11.38 0.43C11.42 0.35 11.47 0.27 11.54 0.2Z"
              fill="#FFFFFF"
            />
            <path
              d="M0 4.95C0 4.77 0.07 4.59 0.2 4.45C0.34 4.32 0.52 4.25 0.7 4.25L15.58 4.25C15.77 4.25 15.95 4.32 16.08 4.45C16.21 4.59 16.29 4.77 16.29 4.95C16.29 5.14 16.21 5.32 16.08 5.46C15.95 5.59 15.77 5.66 15.58 5.66L0.7 5.66C0.52 5.66 0.34 5.59 0.2 5.46C0.07 5.32 0 5.14 0 4.95Z"
              fill="#FFFFFF"
            />
          </svg>
        </button>
      </form>
      <div className="main__informaocion">
        <h2 className="main__informaocion__title">LOYALTY HAS ITS PERKS</h2>
        <p className="main__informaocion__text">
          Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:
        </p>
        <div className="main__informaocion__list">
          {["15% off welcome offer", "Free shipping, returns and exchanges on all orders", "$10 off a purchase on your birthday", "Early access to products", "Exclusive offers & rewards"].map((perk, index) => (
            <p key={index} className="main__informaocion__list__text">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z" fill="black" />
              </svg>
              {perk}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RegistracionCentrale;