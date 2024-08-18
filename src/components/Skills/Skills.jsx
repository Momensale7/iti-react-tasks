import React, { Component } from 'react'
import Progress from '../Progress/Progress'

export default class Skills extends Component {
  render() {
    return (
      <>
        <section className='container bg-dark text-white my-3'>
            <h2 className='text-center fw-bold mb-3 fs-1 '>Skills</h2>
            <p className='text-center fs-6 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam similique vero quo ratione. Quibusdam numquam, voluptatum odit itaque quidem beatae enim deserunt? Ab facere architecto, et animi itaque accusantium.</p>
            <div className="row">
                <div className="col-5">
                <p className='fw-bold mb-2'>My focus</p>
                <ul className='unstayled'>
                    <li>wep design</li>
                    <li>ui/ux</li>
                    <li>mobile app design</li>
                    
                </ul>
                </div>
                <div className="col-7">
                <Progress text="css" color="success" precentege="60%"/>
                <Progress text="js" color="info" precentege="70%" />
                <Progress text="react" color="warning " precentege="80%"/>
                <Progress text="tailwind" color="danger" precentege="90%"/>
                </div>
            </div>
        </section>
      </>
    )
  }
}
