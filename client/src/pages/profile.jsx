import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import logo from '../assets/images/avatar.png';
import { validateProfile } from '../helper/validate';
import convertToBase64 from '../helper/converter';

import styles from '../assets/styles/username.module.css';

export default function Profile() {

  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      telephone: '',
      email: '',
      address: '',
    },
    validate: validateProfile,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => { 
      values = await Object.assign(values, { profile: file || '' });
      console.log(values); 
    },
  });
  
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }
  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-4xl font-bold">Profile</h4>
            <small className="py-2 text-xl w-3/4 text-center text-gray-500">
              You can update your profile.
            </small>
            <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center">
                <label htmlFor="profile">
                  <img src={file || logo} alt="logo" className={styles.profile_img} />
                </label>
                <input onChange={onUpload} type="file" id="profile" name="profile" />
              </div>
              <div className="textbot flex flex-col items-center gap-5">
                <div className="name flex w-3/4 gap-10">
                  <input {...formik.getFieldProps('firstName')}  type="text" placeholder="First Name" className={styles.input_field}/>
                  <input {...formik.getFieldProps('lastName')}  type="text" placeholder="Last Name" className={styles.input_field}/>
                </div>
                <div className="name flex w-3/4 gap-10">
                  <input {...formik.getFieldProps('telephone')}  type="text" placeholder="Telephone" className={styles.input_field}/>
                  <input {...formik.getFieldProps('email')}  type="text" placeholder="Email" className={styles.input_field}/>
                </div>
                <div className="name flex w-3/4 gap-8">
                  <input {...formik.getFieldProps('address')}  type="text" placeholder="Address" className={styles.input_field}/>
                </div>
                <div className="name flex w-3/4 gap-8">
                  <button type="submit" className={styles.btn}>Update</button>
                </div>
              
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

