import React, { useState } from 'react';

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';

export default function ProfilePage(props) {
  //convenience
  const displayName = props.user ? props.user.displayName : null;

  const [imageFile, setImageFile] = useState(undefined)
  let initialURL = '/img/null.png'
  if(props.user && props.user.photoURL) {
    initialURL = props.user.photoURL
  }
  const [imagePreviewUrl, setImagePreviewUrl] = useState(initialURL)

  //image uploading!
  const handleChange = (event) => {
    if(event.target.files.length > 0 && event.target.files[0]) {
      const imageFile = event.target.files[0]
      setImageFile(imageFile);
      setImagePreviewUrl(URL.createObjectURL(imageFile));
    }
  }

  const handleImageUpload = async (event) => {
    console.log("Uploading", imageFile);

    //upload to storage
    const storage = getStorage(); //get a reference to the storage
    const newImageRef = ref(storage, "userImages/"+props.user.uid+".png")
    await uploadBytes(newImageRef, imageFile) //upload to storage        
    const url = await getDownloadURL(newImageRef) //give me a https://thing.png

    await updateProfile(props.user, {photoURL: url});    

  }

  return (
    <div className="container">
      <h2>
        {props.user && displayName+"'s"} Profile
      </h2>

      <div className="mb-5 image-upload-form">
        <img src={imagePreviewUrl} alt="user avatar preview" className="mb-2"/>
        <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label>
        <button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button>
        <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange}/>
      </div>
    </div>
  )
}