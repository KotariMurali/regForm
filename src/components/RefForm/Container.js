import React, { useState } from "react";
import Presentation from "./Presentation";
const Container = () => {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [Phone, setPhone] = useState("");
  const [PhoneError, setPhoneError] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log("heloo");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const checkemail = emailPattern.test(e.target.value);
    if (checkemail === true) {
      setEmail(e.target.value);
      setEmailError("");
      // console.log("heloo");
    } else {
      setEmail(e.target.value);
      setEmailError("invalid email id");
      // console.log("heloo murali");
    }
  };
  const handlePhone = (e) => {
    const numberPattern = /^\d{10}$/;
    const checkPhone = numberPattern.test(e.target.value);
    if (checkPhone === true) {
      setPhone(e.target.value);
      setPhoneError("");
      // console.log("true");
    } else {
      setPhone(e.target.value);
      setPhoneError("invalid phone number");
      // console.log("false");
    }
  };
  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setSelectedDate(new Date("2014-08-18T21:11:54"));
  };
  console.log();
  return (
    <div>
      <Presentation
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
        handleFirstName={handleFirstName}
        firstName={firstName}
        handleLastName={handleLastName}
        LastName={LastName}
        Email={Email}
        Phone={Phone}
        handleEmail={handleEmail}
        handlePhone={handlePhone}
        EmailError={EmailError}
        PhoneError={PhoneError}
        handleClear={handleClear}
      />
    </div>
  );
};

export default Container;
