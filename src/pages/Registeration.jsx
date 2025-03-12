import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import "../App.css";

const Registeration = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    registrationType: "Individual",
    occupation: "Others",
    modeOfAttendance: "Physical",
    reasonForAttending: "",
  });

  const registrationsRef = collection(db, "registrations");

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phoneNumber
    );
  };

  async function register(registrationData) {
    try {
      setLoading(true);
      const docRef = await addDoc(registrationsRef, {
        ...registrationData,
        timestamp: serverTimestamp(),
      });
      alert("Registered Successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        registrationType: "Individual",
        occupation: "Others",
        modeOfAttendance: "Physical",
        reasonForAttending: "",
      });
      setLoading(false);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      alert("An error occurred");
      setLoading(false);
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="formContainer">
      <h1>Fill the form to register!</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (isFormValid()) {
            register(formData);
          } else {
            alert("Please fill in all required fields.");
          }
        }}
      >
        <h2>Basic Information</h2>
        <div className="nameContainer">
          <label>
            <span>First Name</span>
            <input
              type="text"
              placeholder="John"
              value={formData.firstName}
              onChange={(e) => {
                setFormData((prev) => {
                  return { ...prev, firstName: e.target.value };
                });
              }}
            />
          </label>
          <label>
            <span>Last Name</span>
            <input
              type="text"
              placeholder="Doe"
              value={formData.lastName}
              onChange={(e) => {
                setFormData({ ...formData, lastName: e.target.value });
              }}
            />
          </label>
        </div>
        <label>
          <span>E-mail</span>
          <input
            type="email"
            placeholder="John"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </label>
        <label>
          <span>Phone Number</span>
          <input
            type="text"
            placeholder="********"
            value={formData.phoneNumber}
            onChange={(e) => {
              setFormData({ ...formData, phoneNumber: e.target.value });
            }}
          />
        </label>

        <h2>Professional Information</h2>

        <label>
          <span>Registration Type</span>
          <select
            value={formData.registrationType}
            onChange={(e) => {
              setFormData({ ...formData, registrationType: e.target.value });
            }}
          >
            <option value={"Individual"}>Individual</option>
            <option value={"Organization"}>Organization</option>
            <option value={"Sponsor"}>Sponsor</option>
          </select>
        </label>
        <label>
          <span>Occupation</span>
          <select
            value={formData.occupation}
            onChange={(e) => {
              setFormData({ ...formData, occupation: e.target.value });
            }}
          >
            <option value={"Engineer"}>Engineer</option>
            <option value={"Doctor"}>Doctor</option>
            <option value={"Teacher"}>Teacher</option>
            <option value={"Others"}>Others</option>
          </select>
        </label>
        <label>
          <span>Mode of attendance</span>
          <select
            value={formData.modeOfAttendance}
            onChange={(e) => {
              setFormData({ ...formData, modeOfAttendance: e.target.value });
            }}
          >
            <option value={"Physical"}>Physical</option>
            <option value={"Online"}>Online</option>
          </select>
        </label>
        <label>
          <span>Reason for attending (optional)</span>
          <textarea
            value={formData.reasonForAttending}
            onChange={(e) => {
              setFormData({ ...formData, reasonForAttending: e.target.value });
            }}
          />
        </label>

        <button className="buttons" disabled={loading || !isFormValid()}>
          {loading ? "Loading..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Registeration;
