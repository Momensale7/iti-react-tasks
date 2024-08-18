// import React from 'react'

import { useState } from "react"

export default function Register() {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    rePassword: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    rePassword: "",
  })
  const changeData = (e) => {
    const { name, value } = e.target;
    setRegisterForm({
      ...registerForm,
      [name]: value,
    })
    if (name == "name") {
      setErrors({
        ...errors,
        name: e.target.value.length == 0 ? "Required" : e.target.value.length < 3 && "Please Inasert a Valid Name"
      })
    }
    if (name == "email") {
      setErrors({
        ...errors,
        email: e.target.value.length == 0 ? "Required" : /[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.target.value) ? null :'enter a valid email'
      })
    }
    if (name == "userName") {
      setErrors({
        ...errors,
        userName: e.target.value.length == 0 ? "Required" : /^[A-Za-z0-9]{3,}$/.test(e.target.value) ?  null:'atleast 3 char with no spaces'

      })
    }
    if (name == "password") {
      setErrors({
        ...errors,
        password: e.target.value.length == 0 ? "Required" : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;"'<>,.?/~`-])[A-Za-z\d!@#$%^&*()_+{}[\]:;"'<>,.?/~`-]{8,}$/.test(e.target.value) ? null : 'ex:P@ssword123'
      })
    }
    if (name == "rePassword") {
      console.log("pass",registerForm.password);
      console.log("re",e.target.value);
      
      setErrors({
        ...errors,
        rePassword: e.target.value.length == 0 ? "Required" :e.target.value != registerForm.password?'passwords not matched': null
      })
    }
  }
  const submitData = (e) => {
      e.preventDefault()
  }
  const isFormValid = () => {
    return !(
      errors.name ||
      errors.email ||
      errors.userName ||
      errors.password ||
      errors.rePassword ||
      !registerForm.name ||
      !registerForm.email ||
      !registerForm.userName ||
      !registerForm.password ||
      !registerForm.rePassword
    );
  };

  return (
    <>
      <div className="container text-white">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 mb-4 text-white">Register Now :</h1>
            <form onSubmit={(e) => submitData(e)} className="py-4 px-3">

              <div className="form-group mb-4">
                <label htmlFor="name">Name</label>
                <input value={registerForm.name} onChange={(e) => changeData(e)} type="text" id="name" name="name" className={`form-control  ${errors.name && "border-danger"}`} />
                <p className="text-danger">  {errors.name} </p>
              </div>

              <div className="form-group mb-4">
                <label htmlFor="email">Email address</label>
                <input value={registerForm.email} onChange={(e) => changeData(e)} type="email" id="email" name="email" className={`form-control  ${errors.email && "border-danger"}`} />
                <p className="text-danger">  {errors.email} </p>
              </div>

              <div className="form-group mb-4">
                <label htmlFor="userName">user Name</label>
                <input value={registerForm.userName} onChange={(e) => changeData(e)} type="tel" id="userName" name="userName" className={`form-control  ${errors.userName && "border-danger"}`} />
                <p className="text-danger">  {errors.userName} </p>
              </div>

              <div className="form-group mb-4">
                <label htmlFor="password">Password</label>
                <input value={registerForm.password} onChange={(e) => changeData(e)} type="password" id="password" name="password" className={`form-control  ${errors.password && "border-danger"}`} />
                <p className="text-danger">  {errors.password} </p>
              </div>

              <div className="form-group mb-4">
                <label htmlFor="confirm_password">Confirm password</label>
                <input value={registerForm.rePassword} onChange={(e) => changeData(e)} type="password" id="confirm_password" name="rePassword" className={`form-control  ${errors.rePassword && "border-danger"}`} />
                <p className="text-danger">  {errors.rePassword} </p>
              </div>




              <button type="submit" disabled={!isFormValid()} 
                  className="btn btn-primary d-block ms-auto">
                register
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}
