import { useEffect, useState } from "react";
import React from "react";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import Footer from "./components/footer/Footer";

const url = "https://randomuser.me/api/";
// const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [userData, setUserData] = useState({
    picture: "",
    name: "",
    email: "",
    dob: "",
    location: "",
    phone: "",
    login: "",
  });

  const getUser = async () => {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.results[0]);
    setUserData(data.results[0]);
  };

  useEffect(() => {
    getUser();
  }, []);

  const [userTitle, setUserTitle] = useState("");
  const updateUserTitle = (value) => {
    setUserTitle(value);
  };

  const handleName = () => {
    const value = `My name is ${userData.name.first} ${userData.name.last}`;
    updateUserTitle(value);
  };

  const handleEmail = () => {
    const value = `My email is ${userData.email}`;
    updateUserTitle(value);
  };

  const handleAge = () => {
    const value = `I am ${userData.dob.age} years old`;
    updateUserTitle(value);
  };

  const handleStreet = () => {
    const value = `I live in ${userData.location.city}, ${userData.location.country}`;
    updateUserTitle(value);
  };

  const handlePhone = () => {
    const value = `My phone number is ${userData.phone}`;
    updateUserTitle(value);
  };

  const handlePassword = () => {
    const value = `My username is ${userData.login.username}`;
    updateUserTitle(value);
  };

  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>

      <div className="block">
        <div className="container">
          <img
            src={userData.picture.medium}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">
            My name is{" "}
            {userData.name && userData.name.first
              ? userData.name.first + " " + userData.name.last
              : ""}
          </p>
          <p className="user-value">{userTitle}</p>
          <div className="values-list">
            <button className="icon" data-label="name" onMouseOver={handleName}>
              {userData.gender === "male" ? (
                <img src={manSvg} alt="man" id="iconImg" />
              ) : (
                <img src={womanSvg} alt="woman" id="iconImg" />
              )}
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleEmail}
            >
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>
            <button className="icon" data-label="age" onMouseOver={handleAge}>
              <img src={womanAgeSvg} alt="age" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleStreet}
            >
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handlePhone}
            >
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handlePassword}
            >
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" type="button">
              new user
            </button>
            <button className="btn" type="button">
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              <tr className="body-tr"></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
