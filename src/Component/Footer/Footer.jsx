import React from 'react'
import './Footer.css'

import { HiOutlineUsers } from 'react-icons/hi'
import { BiMap } from 'react-icons/bi'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlineImage } from 'react-icons/md'
import { HiOutlineLogin } from 'react-icons/hi'
import { HiOutlineLink } from 'react-icons/hi'

import Logo from '../../assets/logo.png'


const Footer = () => {
    return (
        <div className="footer-wrapper">
            <hr />
            <div className="footer">
                <div className="logo">
                    <img src={Logo} alt="" />
                    <span>Amazon</span>
                </div>
                <div className="block">
                    <div className="details">
                        <span>Contact Us</span>
                        <div className="pngLine">
                            <BiMap className='footer-icon' />
                            <span>111 north avenue Orlando, FL 32801</span>
                        </div>
                        <div className="pngLine">
                            <BsTelephone className='footer-icon-phone' />
                            <span>352-306-4415</span>
                        </div>
                        <div className="pngLine">

                            <MdOutlineImage className='footer-icon' />
                            <span>111 north avenue Orlando, FL 32801</span>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="details">
                        <span>Account</span>
                        <div className="pngLine">
                            <HiOutlineLogin className='footer-icon' />
                            <span>Sign In</span>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="details">
                        <span>Company</span>
                        <div className="pngLine">
                            <HiOutlineUsers className='footer-icon' />
                            <span>About us</span>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="details">
                        <span>Resources</span>
                        <div className="pngLine">
                            <HiOutlineLink className='footer-icon' />
                            <span>Safety Privacy & Terms</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right">
                    <span>Copyright ©2022 by Amazon, Inc.</span>
                    <span>All rights reserved.</span>
                </div>
        </div>
    )
}

export default Footer
