import React, { useState } from "react";
import "./AddProject.css";
import axios from "axios";

export function AddProject() {
  const [data, setData] = useState({
    title: "",
    description: "",
    demo_url: "",
    github_url: "",
    visible: "",
  });
  const [img, setImg] = useState(null);
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("image", img);
    formData.append("title", data.title); // Assuming data is your form data state
    formData.append("description", data.description);
    formData.append("demo_url", data.demo_url);
    formData.append("github_url", data.github_url);
    formData.append("visible", data.visible);

      axios
        .post("http://127.0.0.1:8000/api/v1/projects/", formData)
        .then((res) => {
          console.log(res);
          setData({
            title: "",
            description: "",
            demo_url: "",
            github_url: "",
            visible: "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
  };

  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();

  //   formData.append("image", img);
  //   formData.append("data", data);
  //   axios.post("http://127.0.0.1:8000/api/v1/projects/", {
  //     data: formData,
  //   })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   setData({
  //     name: "",
  //     about: "",
  //     price: "",
  //     territory: "",
  //     weight: "",
  //   });
  // };

  return (
    <div id="AddCard">
      <h2>Add Project</h2>
      <form className="AddForm" onSubmit={handleSubmit}>
        <input
          value={data.title}
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleInputChange}
        />
        <input
          value={data.demo_url}
          type="text"
          placeholder="Netlify link"
          name="demo_url"
          onChange={handleInputChange}
        />
        <input
          value={data.github_url}
          type="text"
          placeholder="Github link"
          name="github_url"
          onChange={handleInputChange}
        />
        <input
          value={data.visible}
          type="text"
          placeholder="Is project visible true/false"
          name="visible"
          onChange={handleInputChange}
        />
        <div>
          {img ? (
            <label>
              <img src={URL.createObjectURL(img)} alt="" />
              <input
                type="file"
                onChange={(e) => {
                  setImg(e.target.files[0]);
                }}
              />
            </label>
          ) : (
            <label>
              <div>+</div>
              <input
                type="file"
                onChange={(e) => {
                  setImg(e.target.files[0]);
                }}
              />
            </label>
          )}

          <textarea
            value={data.description}
            name="description"
            placeholder="About project"
            onChange={handleInputChange}
          ></textarea>
        </div>

        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}
