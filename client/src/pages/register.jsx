import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import logo from '../assets/images/avatar.png';
import { validateRegister } from '../helper/validate';
import convertToBase64 from '../helper/converter';

import styles from '../assets/styles/username.module.css';

export default function Register() {

  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: ''
    },
    validate: validateRegister,
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
            <h4 className="text-4xl font-bold">Register</h4>
            <small className="py-2 text-xl w-3/4 text-center text-gray-500">
              Explore more by registering with us.
            </small>
            <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center py-3">
                <label htmlFor="profile">
                  <img src={file || logo} alt="logo" className={styles.profile_img} />
                </label>
                <input onChange={onUpload} type="file" id="profile" name="profile" />
              </div>
              <div className="textbot flex flex-col items-center gap-5">
                <input {...formik.getFieldProps('email')}  type="email" placeholder="Email" className={styles.input_field}/>
                <input {...formik.getFieldProps('username')}  type="text" placeholder="Username" className={styles.input_field}/>
                <input {...formik.getFieldProps('password')}  type="password" placeholder="Password" className={styles.input_field}/>
                <button type="submit" className={styles.btn}>Register</button>
              </div>
              <div className="text-center py-4">
                <span className="text-gay-500">
                  Already Registered? <Link to="/" className="text-sky-600">Login now!</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
