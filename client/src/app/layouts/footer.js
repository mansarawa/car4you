import React from "react";
import Footcss from './footercss.module.css'
import Link from "next/link";
export default function Footer(){
    return(
        <>
             <footer style={{width:'100%'}}>
      
      <div className={Footcss.footermain}>
        <div className={Footcss.item}>
          <h1>CAR4YOU</h1>
        <div className={Footcss.footermenu}>
        
        <Link href='/service' className={Footcss.link} style={{marginTop:'2%',fontSize:'20px',color:'white'}}>Services</Link>
        <Link href='/terms' className={Footcss.link} style={{marginTop:'2%',fontSize:'20px',color:'white'}}>Terms&conditions</Link>
        
        </div>
        </div>
        <div className={Footcss.item}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14202.987360075716!2d74.8523169!3d27.1327827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396b7928ccd939c3%3A0x1e9a0504ab3b6120!2sCar%204%20you%20kuchaman!5e0!3m2!1sen!2sin!4v1700743212490!5m2!1sen!2sin" style={{width:"200px", height:"100px", border:0, allowfullscreen:"", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
        </div>
        <div className={Footcss.item}>
          <h3> D-24, Midc Phase Ii, Manpada Rd</h3>
          <h3>+91-9595958696</h3>
          <h3>car4you@gmail.com</h3>
        </div>
      </div>
    </footer>
        </>
    )
}