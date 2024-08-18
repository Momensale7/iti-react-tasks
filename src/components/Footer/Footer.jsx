import React, { Component } from 'react'
import ContactButton from '../ContactButton/ContactButton'

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer class="mt-4 bg-dark">
  <div class="container">
    <div class="text-center p-5">
      <ContactButton/>
      <p class="text-white text-center mt-2">© Copyright Viral. All Rights Reserved</p>
    </div>
  </div>
</footer>
      </>
    )
  }
}
