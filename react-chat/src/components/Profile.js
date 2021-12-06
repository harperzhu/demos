import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';

export default function ProfilePage(props) {
  const [imageFile, setImageFile] = useState(undefined)
  let initialURL = '/img/null.png'
  if(props.user && props.user.photoURL) {
    initialURL = props.user.photoURL
  }
  const [imageUrl, setImageUrl] = useState(initialURL)
  
  //image uploading!
  const handleChange = (event) => {
    if(event.target.files.length > 0 && event.target.files[0]) {
      const imageFile = event.target.files[0]
      setImageFile(imageFile);
      setImageUrl(URL.createObjectURL(imageFile));
    }
  }

  const handleImageUpload = (event) => {
    console.log("Uploading", imageFile);
  }

  return (
    <div className="container">
      <h2>
        {props.user && props.user.displayName+"'s"} Profile
      </h2>

      <div className="mb-5 image-upload-form">
        <img src={imageUrl} alt="user avatar preview" className="mb-2"/>
        <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label>
        <button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button>
        <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange}/>
      </div>
    </div>
  )
}