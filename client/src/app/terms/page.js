'use client'
import Link from 'next/link'
import React from 'react'
import Terms from './terms.module.css'

export default function page() {
  const user=JSON.parse(localStorage.getItem('user'))
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear("user");
    window.location.reload();
  };
  return (

    <div>
        <nav className={Terms.hnav}>
      <ul className={Terms.ul}>
        <li className={Terms.li}><Link href='/' className={Terms.link}>Home</Link></li>
        <li className={Terms.li}><Link href='/service' className={Terms.link}>Services</Link></li>
        <li className={Terms.li}><Link href='/terms' className={Terms.link}>Terms&conditions</Link></li>
        {!user && <li className={Terms.li}><Link href='/registeruser' className={Terms.link}>Register</Link></li>}
        {!user ? (
          <>
            <li className={Terms.li}><Link href='/login' className={Terms.link}>Login</Link></li>
          </>
        ) : (
          <>
            <li className={Terms.li}><Link href='/mybooking' className={Terms.link}>My Bookings</Link></li>
            <li className={Terms.li}><Link onClick={handleLogout} href='' id={Terms.logout} className={Terms.link}>Logout</Link></li>
          </>
        )}
        <div className={Terms.burger}>
          <div className={Terms.line}></div>
          <div className={Terms.line}></div>
          <div className={Terms.line}></div>
        </div>
      </ul>
    </nav>terms</div>
  )
}
