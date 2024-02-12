'use client'
import { useEffect,useState } from "react";
import Link from "next/link";
import myBooking from '../mybooking/myBooking.module.css'
export default  function page()  {
  const [data, setData] = useState([])
  const [pickup, setPickup] = useState()
    const user=JSON.parse(localStorage.getItem('user'))
    const userid=user._id;
    async function handelfunction(){
      try {
        const res= await fetch('http://localhost:3004/mybooking',
      {
        method:'post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          userid:userid
        })
      })
      const  result=await res.json();
      const bookresult=result.book;
      console.log(result)
      return setData(bookresult); 
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
      handelfunction()
    }, [])
   

    const handleLogout = (e) => {
      e.preventDefault();
      localStorage.clear("user");
      window.location.reload();
    };
  
  return (
  
    <div >
       <nav className={myBooking.hnav}>
      <ul className={myBooking.ul}>
        <li className={myBooking.li}><Link href='/' className={myBooking.link}>Home</Link></li>
        <li className={myBooking.li}><Link href='/service' className={myBooking.link}>Services</Link></li>
        <li className={myBooking.li}><Link href='/terms' className={myBooking.link}>Terms&conditions</Link></li>
        {!user && <li className={myBooking.li}><Link href='/registeruser' className={myBooking.link}>Register</Link></li>}
        {!user ? (
          <>
            <li className={myBooking.li}><Link href='/login' className={myBooking.link}>Login</Link></li>
          </>
        ) : (
          <>
            <li className={myBooking.li}><Link href='/mybooking' className={myBooking.link}>My Bookings</Link></li>
            <li className={myBooking.li}><Link onClick={handleLogout} href='' id={myBooking.logout} className={myBooking.link}>Logout</Link></li>
          </>
        )}
        <div className={myBooking.burger}>
          <div className={myBooking.line}></div>
          <div className={myBooking.line}></div>
          <div className={myBooking.line}></div>
        </div>
      </ul>
    </nav>
      <table className={myBooking.table}>
        <tr className={myBooking.row} style={{backgroundColor:'#0d6efd'}}>
            <th>Pickup</th>
            <th>Drop</th>
            <th>Pickup Date</th>
            <th>Drop Date</th>
            <th>Status</th>
        </tr>
      
        {
        data.map((item)=>(
          <tr className={myBooking.row}>
        
           <td> {item.pickup}</td>
           <td>{item.drop}</td>
           <td>{item.pickupdate}</td>
           <td>{item.dropdate}</td>
           <td style={{color:item.status === "accept"?"green":item.status === "rejected"?"red":item.status==="completed"?"#0d6efd":"black"}}>{item.status}</td>
          
          </tr>
        ))
        }
        </table>
    </div>
  )
}


