import React, { useReducer, useState } from "react";
import "./Add.scss";
import { INITIAL_STATE, skillReducer } from "../../reducers/skillReducer";
// import { set } from "mongoose";
import upload from "../../utils/upload.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [state, dispatch] = useReducer(skillReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleCoverUpload = async () => {
    setUploadingCover(true);
    try {
      const cover = await upload(singleFile);

      setUploadingCover(false);
      dispatch({ type: "ADD_COVER", payload: { cover } });
    } catch (err) {
      console.log(err);
    }
  };
  const handleImagesUpload = async () => {
    setUploadingImages(true);
    try {

      const images = await Promise.all(
        [...files].map(async (file) => {
          if (!file || !(file instanceof File)) {
            console.log("Invalid file object");
          }
          const url = await upload(file);
          return url;
        })
      );
      setUploadingImages(false);
      dispatch({ type: "ADD_IMAGES", payload: { images } });
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate(); 

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (skill) => {
      return newRequest.post('/skills', skill)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["mySkills"]);
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate('/myskills');
  }
  // console.log([...files])
  console.log(state)
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Skill</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. I will do something I'm really good at"
              onChange={handleChange}
            />
            <label htmlFor="">Category</label>
            <select name="category" id="category" onChange={handleChange}>
              <option value="Handycraft">Handycraft</option>
              <option value="Sports">Sports</option>
              <option value="Languages">Languages</option>
              <option value="Photography">Photography</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Video & Animation">Video & Animation</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="MusicInstruments">Music & Instruments</option>
              <option value="Art">Art</option>
              <option value="Cooking">Cooking</option>
              <option value="ProgrammingTech">Programming & Tech</option>
              <option value="Other">Other</option>
            </select>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">Cover Image</label>
                <input
                  type="file"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
              </div>
              <button onClick={handleCoverUpload}>
                {uploadingCover ? "uploading" : "Upload"}
              </button>
            </div>
            <label htmlFor="">Description</label>
            <textarea
              name="desc"
              id=""
              placeholder="Brief descriptions to introduce your service to customers"
              cols="0"
              rows="16"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="details">
            <label htmlFor="">Short Description</label>
            <textarea
              name="shortDesc"
              id=""
              placeholder="Short description of your service"
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">Upload Images (Show you skill!)</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button onClick={handleImagesUpload}>
                {uploadingImages ? "uploading" : "Upload"}
              </button>
            </div>
            <label htmlFor="">Lessons (e.g. 3 days)</label>
            <input name="lessons" type="number" onChange={handleChange} />
            <button onClick={handleSubmit}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
