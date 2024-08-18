import React, { Component } from 'react'
import Head from '../Head/Head'
import Card from '../Card/Card'

export default class Portfolio extends Component {
  render() {
    return (
      <section className='container'>
        <Head text="Portfolio"/>
        <div className="row g-3">
        <Card text="web development" color="secondary"/>
        <Card text="web design" color="dark"/>
        <Card text="ui/ux" color="secondary"/>
        <Card text="web devlopment" color="dark"/>
        <Card text="mobile design" color="secondary"/>
        <Card text="pwa development" color="dark"/>
        </div>
      </section>
    )
  }
}
