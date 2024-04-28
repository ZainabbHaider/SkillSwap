import React, { useState } from "react";
import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";


function Register() {
  const [file, setFile] = useState(undefined);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    phone: "",
    desc: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleCoverUpload = async () => {
    setUploadingCover(true);
    try {
      const cover = await upload(file);
      setUser((prev) => {
        return { ...prev, img: cover };
      });
      setUploadingCover(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    for (const key in user) {
      if (key !== "phone" && key !== "desc" && key !== "img" && user[key] === "") {
        console.log(key, user);
        setError(`Please fill in all required fields (*)`);
        return;
      }
    }

    // const url = await upload(file);
    // console.log(url);
    try {
      await newRequest.post("/auths/register", {
        ...user
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(user);
  // console.log(url);
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          {error && <p className="error">{error}</p>}
          <label htmlFor="">
            Username<span>*</span>
          </label>
          <input
            name="username"
            type="text"
            placeholder="name"
            onChange={handleChange}
          />
          <label htmlFor="">
            Email<span>*</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="">
            Password<span>*</span>
          </label>
          <input name="password" type="password" onChange={handleChange} />
          <div className="images">
            <div className="imagesInputs">
              <label htmlFor=""> Profile Picture</label>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <button onClick={handleCoverUpload}>
              {uploadingCover ? "uploading" : "Upload"}
            </button>
          </div>
          <label htmlFor="">
            Country<span>*</span>
          </label>
          <input
            name="country"
            type="text"
            placeholder="USA"
            onChange={handleChange}
          />
          <button type="submit">Register</button>
          {/* {error && <p className="error">{error}</p>} */}
        </div>
        <div className="right">
          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handleChange}
          />
          <label htmlFor="">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Register;
