import { useFormik } from 'formik'
import { useState } from 'react'
import styles from './login.module.css'
import * as Yup from "yup"
export default function Login() {
  const[isShown,setIsShown]=useState(false)
  const validationSchema = Yup.object({
    email: Yup.string().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "enter a valid email").required("Email is required"),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;"'<>,.?/~`-])[A-Za-z\d!@#$%^&*()_+{}[\]:;"'<>,.?/~`-]{8,}$/, "Minimum eight characters, at least one letter and one number").required("password is required"),
  })
  const formik = useFormik({
    initialValues: {
      "email": "",
      "password": "",
    },
    onSubmit: register,
    validationSchema
  })
  function register() {
    console.log(formik.values);
  }
  const changeType =()=>{
    setIsShown(!isShown)
  }
  return (
    <div>
      <div className="container text-white">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 mb-4 text-white">Login Now :</h1>
            <form onSubmit={formik.handleSubmit} className="py-4 px-3">
              <div className="form-group mb-4">
                <label htmlFor="email">Email address</label>
                <input value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" id="emailLogin" name="email" className={`form-control`} />
                {formik.errors.email && formik.touched.email && <p className='text-danger p-1 rounded-md '>{formik.errors.email}</p>}
              </div>
              <div className="form-group mb-4 position-relative">
                <label htmlFor="password">Password</label>
                <input value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} type={isShown?'text':"password"} id="passwordLogin" name="password" className={`form-control position-relative`} />
                <div className="position-relative px-1">
                {isShown?<i onClick={changeType} className={`${styles.topc} fa-regular fa-eye fa-solid text-dark fa-eye-slash position-absolute  `}></i>:
                <i onClick={changeType} className={`${styles.topc} fa-solid fa-eye-slash position-absolute text-dark  `}></i>}
                </div>
                {formik.errors.password && formik.touched.password && <p className='text-danger p-1 rounded-md '>{formik.errors.password}</p>}
              </div>
              <button type="submit"
                className="btn btn-primary d-block ms-auto">
                login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
