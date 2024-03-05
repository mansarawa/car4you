'use client'
import Link from 'next/link'
import Image from 'next/image'
import Fortuner from '../../../assets/fortuner.png'
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Book from './book.module.css'

export default function page  (params)  {
  
  const router=useRouter()

  //console.log(params.params.book[1])

  const [pickup, setPickup] = useState()
  const [drop,setDrop]=useState();
  const [alert,setAlert]=useState('');
  const carname=params.params.book[1];
  const [pickupdate,setPickpupdate]=useState();
  const [dropdate,setDropdate]=useState();
  const [process, setProcess] = useState('process')
  const user=JSON.parse(localStorage.getItem('user'))
  const [pickuptime, setPickuptime] = useState('')
  const [phone,setPhone]=useState('')
  const [droptime, setDroptime] = useState('')

   if(user._id==null)
   {
    router.push('/login')
   }
  
   const userid=user._id
   const name=user.username
  console.log(user)
  const handlesubmit=async(e)=>{
    e.preventDefault();
    const res=await fetch('https://car4you-w1rx.onrender.com/book',{
      method:"post",
      headers:{
        "Content-Type":'application/json'
      },
      body:JSON.stringify({
        pickup:pickup,
        drop:drop,
        pickupdate:pickupdate,
        dropdate:dropdate,
        status:process,
        carname:carname,
        name:name,
        phone:phone,
        userid:userid,
        // pickuptime:pickuptime,
        // droptime:droptime
      })
      
    }
  
    )
    const result=await res.json();
    if(result.message =='conform')
    {
      console.log("booking conformed")
      setAlert('Congratulations Your booking has been sent')
      setInterval(()=>{
        router.push('/mybooking')
      },3000)
    }
   // router.push('/');
    
  }

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear("user");
    window.location.reload();
  };
  return (
    <div className={Book.container}>
     <nav className={Book.hnav}>
      <ul className={Book.ul}>
        <li className={Book.li}><Link href='/' className={Book.link}>Home</Link></li>
        <li className={Book.li}><Link href='/service' className={Book.link}>Services</Link></li>
        <li className={Book.li}><Link href='/terms' className={Book.link}>Terms&conditions</Link></li>
        {!user && <li className={Book.li}><Link href='/registeruser' className={Book.link}>Register</Link></li>}
        {!user ? (
          <>
            <li className={Book.li}><Link href='/login' className={Book.link}>Login</Link></li>
          </>
        ) : (
          <>
            <li className={Book.li}><Link href='/mybooking' className={Book.link}>My Bookings</Link></li>
            <li className={Book.li}><Link onClick={handleLogout} href='' id={Book.logout} className={Book.link}>Logout</Link></li>
          </>
        )}
        <div className={Book.burger}>
          <div className={Book.line}></div>
          <div className={Book.line}></div>
          <div className={Book.line}></div>
        </div>
      </ul>
    </nav>
        <div className={Book.booking}>
          <form onSubmit={handlesubmit}>
          <h1 className={Book.heading}>Booking For {carname ? carname.charAt(0).toUpperCase() + carname.slice(1) : 'Car'}</h1>
          <h1 className={Book.heading2}>{alert}</h1>
          <div className={Book.inputbox}>
            <span>Pick up </span> 
            <input type="text" required onChange={(e)=>setPickup(e.target.value)} style={{padding:'7px',outline:"none",border:'none'}} name="location" id="" />
          </div>
          <div className={Book.inputbox}>
            <span>Drop</span>
            <input type="text" required onChange={(e)=>setDrop(e.target.value)} style={{padding:'7px',outline:"none",border:'none'}} name="location" id="" />
          </div>
          <div className={Book.inputbox}>
            <span>Pick-Up Date</span>
            
            <input type="datetime-local" required onChange={(e)=>setPickpupdate(e.target.value)} style={{padding:'7px' ,outline:"none",border:'none'}} name="pick" id="" />
            
            </div>
          <div className={Book.inputbox}>
            <span>Return Date</span>
            
            <input type="datetime-local" required onChange={(e)=>setDropdate(e.target.value)} style={{padding:'7px',outline:"none",border:'none'}} name="return" id="" />
           
            
            </div>
            <div className={Book.inputbox}>
              <span>Phone Number</span>
              <input type="number" required placeholder='7777-666-555' onChange={(e)=>setPhone(e.target.value)} style={{padding:'7px',outline:"none",border:'none'}} name="phone" id="" />
            </div>
            <div className={Book.inputbox}>
              <button style={{padding:'7px',marginTop:'10%',outline:"none",border:'none',cursor:'pointer',background:'#0d6efd',border:"none",borderRadius:'5px',color:'#fff',fontSize:'18px'}}>Submit</button>
            </div>
            </form>
        </div>
      
    </div>
  )
}
