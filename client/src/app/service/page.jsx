'use client'
import React from 'react'
import Link from 'next/link'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Service from './service.module.css'
import Cardriver from '../../../assets/cardriver.png'
import Weddingcar from '../../../assets/weddingcars.png'
import Image from 'next/image'
import Carservice from '../../../assets/carservice.png'
export default function page() {
  const user=JSON.parse(localStorage.getItem('user'))
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear("user");
    window.location.reload();
  };
  return (
    <div className={Service.container}>
        <nav className={Service.hnav}>
      <ul className={Service.ul}>
        <li className={Service.li}><Link href='/' className={Service.link}>Home</Link></li>
        <li className={Service.li}><Link href='/service' className={Service.link}>Services</Link></li>
        <li className={Service.li}><Link href='/terms' className={Service.link}>Terms&conditions</Link></li>
        {!user && <li className={Service.li}><Link href='/registeruser' className={Service.link}>Register</Link></li>}
        {!user ? (
          <>
            <li className={Service.li}><Link href='/login' className={Service.link}>Login</Link></li>
          </>
        ) : (
          <>
            <li className={Service.li}><Link href='/mybooking' className={Service.link}>My Bookings</Link></li>
            <li className={Service.li}><Link onClick={handleLogout} href='' id={Service.logout} className={Service.link}>Logout</Link></li>
          </>
        )}
        <div className={Service.burger}>
          <div className={Service.line}></div>
          <div className={Service.line}></div>
          <div className={Service.line}></div>
        </div>
      </ul>
    </nav>
      <h1 className={Service.heading}>OUR SERVICES</h1>
      <div className={Service.servicebox}>
        <div className={Service.carservice}>
          <Image src={Carservice} className={Service.imgser} />
          <div className={Service.txtbox}>
            <h1>Car Service</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, sapiente necessitatibus? Quos nesciunt ea obcaecati praesentium similique deleniti at veritatis.</h2>

          </div>

        </div>
        <div className={Service.carservice}>
          <Image src={Cardriver} style={{ borderRadius: '100%', width: '200px', height: '200px' }} />
          <div className={Service.txtbox}>
            <h1>Driver</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsam rem suscipit dicta obcaecati illum accusamus sequi saepe labore, nulla ex consequuntur nesciunt, cumque ratione minima tempore delectus neque commodi.</h2>

          </div>
        </div>
        <div className={Service.carservice}>
          <Image src={Weddingcar} style={{ borderRadius: '100%', width: '200px', height: '200px' }} />
          <div className={Service.txtbox}>
            <h1>Wedding car</h1>
            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, qui beatae eius, temporibus aut minima veritatis repellendus laudantium non aperiam totam pariatur doloremque quas obcaecati incidunt veniam magni suscipit molestias.</h2>
          </div>

        </div>
        <div className={Service.carrent}>

        </div>

      </div>
    </div>
  )
}
