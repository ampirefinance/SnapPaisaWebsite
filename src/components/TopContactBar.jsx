import React from 'react';
import "../css/Common.css";
import { FaMapMarked } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { NBFC_ADDRESS } from "../Utils/constant";

const TopContactBar = () => {
    return (
        <>
            <div className="top_bar_wrapper">
                <div className="top_bar_container flex flex-center">
                    <div className="contact_details address_number flex flex-center">
                        <p className='flex address flex-center x_sm_none'><span><FaMapMarked className='icon' /></span><span>{NBFC_ADDRESS}</span></p>
                        <p className='ml30 number flex flex-center'><span><IoCall className='icon' /></span><span>+91 88000 02890</span></p>
                    </div>
                    <div className="contact_details mail flex flex-center">
                        <span><IoIosMail className='icon' /></span><span>infospeedoloan.com</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopContactBar