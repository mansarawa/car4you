import React from "react";
import Car from './car.module.css'
import Link from "next/link";
import Swift from '../../../assets/swift.png'
import Innova from '../../../assets/innova.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGasPump } from '@fortawesome/free-solid-svg-icons';
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import Etios from '../../../assets/etios.png'
import Alto from '../../../assets/alto.png'
import Scarpio from '../../../assets/scarpio.png'
import Ertiga from '../../../assets/ertiga.png'
import Carens from '../../../assets/carens.png'
import Thar from '../../../assets/thar.jpg'
import { IoIosStar  } from "react-icons/io";

import Fortuner from '../../../assets/fortuner.png'
export default function Vehicle(){
    const user=JSON.parse(localStorage.getItem('user'))
    const vehicles=[{
        name:'Fortuner',
        image:Fortuner,
        price:'200per hour',
        milege:'8 Kmpl'
    },{
        name:"Thar",
        image:Thar,
        price:"200per hour",
        milege:'13 Kmpl'
      
    },{
        name:'Scarpio',
        image:Scarpio,
        milege:'10 Kmpl',
        price:'200per hour'
    },{
        name:'Innova',
        image:Innova,
        milege:'8 Kmpl',
        price:'200per hour'
    },,{
        name:'Ertiga',
        image:Ertiga,
        milege:'14 Kmpl',
        price:'200per hour'
    },{
        name:'Carens',
        image:Carens,
        milege:'11 Kmpl',
        price:'200per hour'
    },{
        name:'Alto',
        image:Alto,
        milege:'22 Kmpl',
        price:'200per hour'
    },,{
        name:'Swift',
        image:Swift,
        milege:'18 Kmpl',
        price:'200per hour'
    },{
        name:'Etios',
        image:Etios,
        milege:'18 Kmpl',
        price:'200per hour'
    }]
    return(
        <>
        <div className={Car.container}>
        <main className={Car.main}>
       
            {
                vehicles.map((item)=>(
                    <div className={Car.cars}>
                    <Image src={item.image} className={Car.carslogo}/>
                    <div style={{display:'flex',marginLeft:'2.5%',width:'95%',justifyContent:'space-between'}}>
                        <h1>{item.name}</h1>
                   
                        <h2>{item.price}</h2>
                    </div>

                    <div>
                     <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>   
                        <div className={Car.item}>
                            <FontAwesomeIcon icon={faGasPump} className={Car.icon}/>
                            <h5>{item.milege}</h5>
                        </div>
                        <div className={Car.item}>
                            <MdAirlineSeatReclineNormal className={Car.icon}/>
                            <h5>{item.milege}</h5>
                        </div>
                        <div className={Car.item}>
                            <IoIosStar  className={Car.icon}/>
                            <h5>{item.milege}</h5>
                        </div>
                        <div className={Car.item}>
                            <MdAirlineSeatReclineNormal className={Car.icon}/>
                            <h5>{item.milege}</h5>
                        </div>
                        <div className={Car.item}>
                            <MdAirlineSeatReclineNormal className={Car.icon}/>
                            <h5>{item.milege}</h5>
                        </div>
                        <div className={Car.item}>
                            <MdAirlineSeatReclineNormal className={Car.icon}/>
                            <h5>{item.milege}</h5>
                        </div>
                    </div>
                    </div>
                    {
                        (!user ?<Link href='/login' className={Car.rent}>Rent Now </Link>
                        :<Link href={`/book/${item.name}`} className={Car.rent}>Rent Now</Link>)
                        }
                    </div>
                ))
            }
        
        </main>
        </div>
        </>
    )
}