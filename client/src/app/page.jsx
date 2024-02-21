'use client'
import Link from 'next/link'
import Scarpio from '../../assets/scarpio.png'
import Page from './page.module.css'
import Image from 'next/image'
import Fortuner from '../../assets/fortuner.png'
import Innova from '../../assets/innova.png'
import Dzire from '../../assets/dzire.png'
import Thar from '../../assets/thar.jpg'
import UserPhoto from '../../assets/userphoto.jpg'
import { useEffect, useState } from 'react'
import Swift from '../../assets/swift.png'
import { useRouter } from 'next/navigation'
import Ertiga from '../../assets/ertiga.png'
import Etios from '../../assets/etios.png'
import Carens from '../../assets/carens.png'
import Alto from '../../assets/alto.png'
import Loader from './loading.js'
import Navbar from './layouts/navbar.js'
import Vehicle from './layouts/vehicle.js'
import Customer from './layouts/customer.js'
import Footer from './layouts/footer.js'
export default function Home() {
  const router=useRouter()
 
   const user=JSON.parse(localStorage.getItem('user'))
  //  const myTimeout = setTimeout(() => window.location.reload(), 1000);
  //  function myStopFunction() {
  //    clearTimeout(myTimeout);
  //  }
  const handlelogout=async(e)=>{
    e.preventDefault();
    localStorage.clear("user") 
   window.location.reload()
   
  }


  return (
    <>
    <body style={{ margin: '0px' }}>
      <div className={Page.container}>
      <Navbar/>
        <header className={Page.header}>
          <div className={Page.hometext}>
            <h1 className={Page.movingtext} style={{ fontSize: '50px', marginBottom: '0' }}>CAR4YOU</h1>
            <h2 style={{ fontSize: '25px', marginTop: '0%' }}>"Discover Freedom on Four Wheels."</h2>
            <div className={Page.homebutton}>
              <button style={{ fontSize: '20px',backgroundColor:'#0d6efd', color: 'white', padding: '7px 13px 7px 13px', border: "none", borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}>Get Details</button>
              <button style={{ fontSize: '20px',backgroundColor:'#0d6efd', color: 'white', padding: '7px 13px 7px 13px', border: "none", borderRadius: '5px', cursor: 'pointer' }}>Explore More</button>
            </div>
          </div>
          <div className={Page.homeimage}>
            <Image
              src={Fortuner} className={Page.homefortuner}/>
          </div>

        </header>
        <section className={Page.section}>
        <h1 style={{fontSize: '35px',textAlign:'center', textAlign:'center', paddingTop: '2%', marginBottom: '5px' }}>Explore Our Top Deals</h1>
        <h1 className={Page.dealerheading}>From Top Rated Delear</h1>
       
        <main className={Page.main}>
          <Vehicle/>
        </main>
       
       
        </section>
        <Customer/>
       <Footer/>
      </div>
     
    </body>
     {/* <Loader/> */}
    </>
  )
}
