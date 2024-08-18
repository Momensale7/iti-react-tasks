import React, { Component } from 'react'
import "./Home.css"
import ContactButton from '../ContactButton/ContactButton'
export default class Home extends Component {
  render() {
    return (
      <>
        <section className='home d-flex justify-content-center'>
            <div className="container">
            <div className="d-flex homeText justify-content-center h-100 flex-column">
            <h1 className='fs-1 text-white'>John Adams</h1>
            <h2 className='fs-1 text-white'>Web developer & designer </h2>
            <div>
            <ContactButton/>
            </div>
            </div>
            </div>
        </section>
      </>
    )
  }
}
