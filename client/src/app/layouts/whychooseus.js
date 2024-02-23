import React from "react";
import Why from './why.module.css'
import Image from "next/image";
import { IoMdCall } from "react-icons/io";
import { CiFlag1 } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { HiCurrencyRupee } from "react-icons/hi2";
import { IoFlagSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import user from '../../../assets/userphoto.jpg'
export default function whyChooseUs(){
    return(
        <>
          <h1 className={Why.heading}>Why <span style={{color:'#0d6efd'}}>Choose</span> Us?</h1>
            <div className={Why.container}>
              
                <div className={Why.item}>
                    <div className={Why.photo}>
                        <IoMdCall   style={{margin:'10px',width:'80px',height:'80px'}} />
                    </div>
                    <div>
                        <h2>24 Hour Support</h2>
                    <h4>Lorem ipsum dolor sit amet consec, adipisicing elit. Blanditiis, excepturi sapiente dignissimos doloribus consectetur dolore ipsam culpa laboriosam dolorum temporibus in</h4>
                    </div>
                </div>
                <div className={Why.item}>
                    <div className={Why.photo}>
                        <CiFlag1   style={{margin:'10px',width:'80px',height:'80px'}} />
                    </div>
                    <div>
                        <h2>Best Price</h2>
                    <h4>Lorem ipsum dolor sit amet consec, adipisicing elit. Blanditiis, excepturi sapiente dignissimos doloribus consectetur dolore ipsam culpa laboriosam dolorum temporibus in</h4>
                    </div>
                </div>
                <div className={Why.item}>
                    <div className={Why.photo}>
                        <FaCheckCircle   style={{margin:'10px',width:'80px',height:'80px'}} />
                    </div>
                    <div>
                        <h2>Verified License</h2>
                    <h4>Lorem ipsum dolor sit amet consec, adipisicing elit. Blanditiis, excepturi sapiente dignissimos doloribus consectetur dolore ipsam culpa laboriosam dolorum temporibus in</h4>
                    </div>
                </div>
                <div className={Why.item}>
                    <div className={Why.photo}>
                        <MdCancel   style={{margin:'10px',width:'80px',height:'80px'}} />
                    </div>
                    <div>
                        <h2>Free Cancelation</h2>
                    <h4>Lorem ipsum dolor sit amet consec, adipisicing elit. Blanditiis, excepturi sapiente dignissimos doloribus consectetur dolore ipsam culpa laboriosam dolorum temporibus in</h4>
                    </div>
                </div>
            </div>
        </>
    )
}