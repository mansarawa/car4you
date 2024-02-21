'use client'
import React from "react"
import Link from "next/link"
import Nav from './navbar.module.css'
import { useRouter } from "next/navigation"
export default function Navbar(){
    const router=useRouter()
    const user=JSON.parse(localStorage.getItem('user'))
    const handlelogout=async(e)=>{
        localStorage.clear();
        window.location.reload()
        router.push('/login')
    }
    return(
        <>
          <nav className={Nav.hnav}>
      <ul className={Nav.ul}>
        <li className={Nav.li}><Link href='/' className={Nav.link}>Home</Link></li>
        <li className={Nav.li}><Link href='/service' className={Nav.link}>Services</Link></li>
        <li className={Nav.li}><Link href='/terms' className={Nav.link}>Terms&conditions</Link></li>
        {!user && <li className={Nav.li}><Link href='/registeruser' className={Nav.link}>Register</Link></li>}
        {!user ? (
          <>
            <li className={Nav.li}><Link href='/login' className={Nav.link}>Login</Link></li>
          </>
        ) : (
          <>
            <li className={Nav.li}><Link href='/mybooking' className={Nav.link}>My Bookings</Link></li>
            <li className={Nav.li}><Link onClick={handlelogout} href='' id={Nav.logout} className={Nav.link}>Logout</Link></li>
          </>
        )}
        <div className={Nav.burger}>
          <div className={Nav.line}></div>
          <div className={Nav.line}></div>
          <div className={Nav.line}></div>
        </div>
      </ul>
    </nav>
        </>
    )
}