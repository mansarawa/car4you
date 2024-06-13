'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios'
import Register from './register.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
const page = () => {
    const router=useRouter();
    const [email,setEmail]=useState()
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const user=JSON.parse(localStorage.getItem("user"))
    const handleSubmit=async(e)=>{
      e.preventDefault();
        const res=await fetch('https://car4you-1-m3s8.onrender.com/createuser',{
          method:'post',
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            email:email,
            username:username,
            password:password
          })
        })
        const result =await res.json();
        if(result.success)
        {         
            router.push('/login')
            console.log("created successfully")
        }
        else{
          console.log("please fill right info")
        }
           }
  return (
    <div className='container'>
       <nav className={Register.hnav}>
      <ul className={Register.ul}>
        <li className={Register.li}><Link href='/' className={Register.link}>Home</Link></li>
        <li className={Register.li}><Link href='/service' className={Register.link}>Services</Link></li>
        <li className={Register.li}><Link href='/terms' className={Register.link}>Terms&conditions</Link></li>
        {!user && <li className={Register.li}><Link href='/registeruser' className={Register.link}>Register</Link></li>}
        {!user ? (
          <>
            <li className={Register.li}><Link href='/login' className={Register.link}>Login</Link></li>
          </>
        ) : (
          <>
            <li className={Register.li}><Link href='/mybooking' className={Register.link}>My Bookings</Link></li>
            <li className={Register.li}><Link onClick={handleLogout} href='' id={Register.logout} className={Register.link}>Logout</Link></li>
          </>
        )}
        <div className={Register.burger}>
          <div className={Register.line}></div>
          <div className={Register.line}></div>
          <div className={Register.line}></div>
        </div>
      </ul>
    </nav>
    <form onSubmit={handleSubmit} className={Register.form}>
  <div className={Register.mb3}>
    <label htmlFor="exampleInputEmail1" className="form-label">
      UserName
    </label>
    <input
      type="text"
      name='username'
      onChange={(e)=>setUsername(e.target.value)}
      className={Register.input}
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
   
  </div>
  <div className={Register.mb3}>
    <label htmlFor="exampleInputPassword1" className="form-label">
      Email
    </label>
    <input
      type="email"
      name='email'
      onChange={(e)=>setEmail(e.target.value)}
      className={Register.input}
      id="exampleInputPassword1"
    />
  </div>
  <div className={Register.mb3}>
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      name='password'
      onChange={(e)=>setPassword(e.target.value)}
      className={Register.input}
      id="exampleInputPassword1"
    />
  </div>

  <button type="submit" className={Register.submit}>
    Submit
  </button>
</form>
</div>
  )
}

export default page