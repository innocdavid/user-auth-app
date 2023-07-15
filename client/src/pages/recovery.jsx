import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import logo from '../assets/images/avatar.png';
import { validatePassword } from '../helper/validate';

import styles from '../assets/styles/username.module.css';

export default function PasswordRecovery() {
  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-4xl font-bold">Recovery</h4>
            <small className="py-2 text-xl w-5/6 text-center text-gray-500">
              Enter OTP to recover password.
            </small>
          </div>
          <form className="pt-3">
            <div className="textbox flex flex-col items-center gap-5">
              <div className="input text-center">
                <span className="py-2 text-sm text-left text-gray-500">
                  Please enter the 6 digit OTP sent to your email address.
                </span>
                <div className="textbot flex flex-col items-center gap-5">
                  <input type="text" placeholder="OTP" className={styles.input_field}/>
                  <button type="submit" className={styles.btn}>Recover</button>
                </div>
              </div>
              <div className="text-center py-4">
                <span className="text-gay-500">
                  Can't get OTP? <button className="text-sky-600">Resend</button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
