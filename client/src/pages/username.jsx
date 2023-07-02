import React from 'react';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import logo from '../assets/images/avatar.png';
import { validateUsername } from '../helper/validate';

import styles from '../assets/styles/username.module.css';

export default function Username() {

  const formik = useFormik({
    initialValues: {
      username: ''
    },
    validate: validateUsername,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => { console.log(values); },
  });
  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-4xl font-bold mt-2">Login</h4>
            <small className="py-2 text-xl w-5/6 text-center text-gray-500">
              Explore more by connecting with us.
            </small>
            <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center py-4">
                <img src={logo} alt="logo" className={styles.profile_img} />
              </div>
              <div className="textbot flex flex-col items-center gap-5">
                <input {...formik.getFieldProps('username')}  type="text" placeholder="Username" className={styles.input_field}/>
                <button type="submit" className={styles.btn}>Let's Go</button>
              </div>
              <div className="text-center py-4">
                <span className="text-gay-500">
                  Not a member? <Link to="/register" className="text-sky-600">Register now!</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
