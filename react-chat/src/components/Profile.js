import React, { useState, useEffect } from 'react';

import { Redirect } from 'react-router-dom';

export default function ProfilePage(props) {
  const [imageFile, setImageFile] = useState(undefined)
  const [imageUrl, setImageUrl] = useState('/img/null.png')

  const user = props.user;
  
  useEffect(() => {
    if(user && user.photoURL)
      setImageUrl(user.photoURL) //use user's photo if logged in
  }, [user])

  //image uploading!
  const handleChange = (event) => {
    if(event.target.files.length > 0 && event.target.files[0]) {
      const imageFile = event.target.files[0]
      setImageFile(imageFile);
      setImageUrl(URL.createObjectURL(imageFile));
    }
  }

  const handleImageUpload = (event) => {
    //upload to storage
  }

  return (
    <div className="container">
      <h2>
        {user.displayName}'s Profile
      </h2>

      <div className="mb-5 image-upload-form">
        <img src={imageUrl} className="mb-2"/>
        <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label>
        <button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button>
        <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange}/>
      </div>
    </div>
  )
}