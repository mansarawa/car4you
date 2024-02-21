import React from "react";
import Car from './car.module.css'
import Link from "next/link";
import Swift from '../../../assets/swift.png'
import Innova from '../../../assets/innova.png'
import Image from 'next/image'
import Etios from '../../../assets/etios.png'
import Alto from '../../../assets/alto.png'
import Scarpio from '../../../assets/scarpio.png'
import Ertiga from '../../../assets/ertiga.png'
import Carens from '../../../assets/carens.png'
import Thar from '../../../assets/thar.jpg'
import Fortuner from '../../../assets/fortuner.png'
export default function Vehicle(){
    const vehicles=[{
        name:'Fortuner',
        image:Fortuner,
        price:'200per hour',

    },{
        name:"Thar",
        image:Thar,
        price:"200per hour",
      
    },{
        name:'Scarpio',
        image:Scarpio,
        
        price:'200per hour'
    },{
        name:'Innova',
        image:Innova,
       
        price:'200per hour'
    },,{
        name:'Ertiga',
        image:Ertiga,
     
        price:'200per hour'
    },{
        name:'Carens',
        image:Carens,
        
        price:'200per hour'
    },{
        name:'Alto',
        image:Alto,
    
        price:'200per hour'
    },,{
        name:'Swift',
        image:Swift,
    
        price:'200per hour'
    },{
        name:'Etios',
        image:Etios,
   
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
                    <h1>{item.name}</h1>
                    <h2>{item.price}</h2>
                    <Link href={`/book/${item.name}`} className={Car.rent}>Rent Now</Link>
                    </div>
                ))
            }
        
        </main>
        </div>
        </>
    )
}