import React from 'react'
import b from '../assets/rr.jpg'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-pink-200/20 text-base">
  <aside>
    <img src={b} alt="" />
    </aside> 
  <nav>
    <h6 className="footer-title text-xl">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title text-xl">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title text-xl">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  )
}

export default Footer