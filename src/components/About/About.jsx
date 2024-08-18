import React, { Component } from 'react'
import Head from '../Head/Head'
export default class About extends Component {
  render() {
    return (
      <>
        <section className='container mt-5'>
          <div className="row">
          <div className="col-4">
      <Head text="About Me"/>
      </div>
          <div className="col-8">
          <p className="fs-6 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ut eaque architecto fugiat molestias reprehenderit nihil aperiam laboriosam laudantium quisquam dolor accusamus magni nostrum, unde voluptas similique blanditiis, provident error?Itaque inventore dolorum, architecto natus deleniti, recusandae neque repudiandae veritatis dolores vel cumque nemo laudantium, nisi suscipit officiis minus molestias magnam est!</p>
          <p className="fs-6 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ut eaque architecto fugiat molestias reprehenderit nihil aperiam laboriosam laudantium quisquam dolor accusamus magni nostrum, unde voluptas similique blanditiis, provident error?Itaque inventore dolorum, architecto natus deleniti, recusandae neque repudiandae veritatis dolores vel cumque nemo laudantium, nisi suscipit officiis minus molestias magnam est!</p>
          <button className='btn border text-white bg-dark'>download my cv</button>
      </div>
          </div>
        </section>
      </>
    )
  }
}
