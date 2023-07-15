import React from 'react';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import logo from '../assets/images/avatar.png';
import { validateResetPassword } from '../helper/validate';

import styles from '../assets/styles/username.module.css';

export default function PasswordReset() {

  const formik = useFormik({
    initialValues: {
      password: '',
      confirm_password: '',
    },
    validate: validateResetPassword,
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
            <h4 className="text-4xl font-bold ">Reset</h4>
            <small className="py-4 text-xl text-center text-gray-500">
              Enter new password.
            </small>
            <form className='pt-4' onSubmit={formik.handleSubmit}>
              <div className="textbot flex flex-col items-center gap-5">
                <input {...formik.getFieldProps('password')}  type="password" placeholder="New Password" className={styles.input_field}/>
                <input {...formik.getFieldProps('confirm_password')}  type="password" placeholder="Repeat Password" className={styles.input_field}/>
                <button type="submit" className={styles.btn}>Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
