import React from "react";
import User from './customercss.module.css'
import Image from "next/image";
import UserPhoto from '../../../assets/userphoto.jpg'
export default function Customer() {
    return (
        <>
            <section>
                <h1 className={User.customer}>CUSTOMER EXPERIANCE</h1>
            </section>
            <div className={User.testimonial}>

                <div className={User.testbox}>
                    <Image src={UserPhoto} className={User.testimage} />
                    <h2 style={{ display: 'flex', justifyContent: 'center' }}> Ramesh Sharma</h2>
                    <h3 style={{ display: 'flex', justifyContent: 'center' }}>Lorem ipsum dolor sit amet consect, adipisicing elit. Blanditiis, excepturi sapiente dignissimos doloribus consectetur dolore ipsam culpa laboriosam dolorum temporibus in asperiores magnam quia quam nulla. Rem maiores quibusdam soluta hic corporis quis error eaque perspiciatis atque! Perferendis, quo laboriosam.</h3>
                </div>
                <div className={User.testbox}>
                    <Image src={UserPhoto} className={User.testimage} />
                    <h2 style={{ display: 'flex', justifyContent: 'center' }}>Suresh Sharma</h2>
                    <h3 style={{ display: 'flex', justifyContent: 'center' }}>Lorem ipsum dolor sit amet consec, adipisicing elit. Blanditiis, excepturi sapiente dignissimos doloribus consectetur dolore ipsam culpa laboriosam dolorum temporibus in asperiores magnam quia quam nulla. Rem maiores quibusdam soluta hic corporis quis error eaque perspiciatis atque! Perferendis, quo laboriosam.</h3>
                </div>
                <div className={User.testbox}>
                    <Image src={UserPhoto} className={User.testimage} />
                    <h2 style={{ display: 'flex', justifyContent: 'center' }}>Mahesh Sharma</h2>
                    <h3 style={{ display: 'flex', justifyContent: 'center' }}>Lorem ipsum dolor sit amet consect, adipisicing elit. Blanditiis, excepturi sapiente dignissimos doloribus consectetur dolore ipsam culpa laboriosam dolorum temporibus in asperiores magnam quia quam nulla. Rem maiores quibusdam soluta hic corporis quis error eaque perspiciatis atque! Perferendis, quo laboriosam.</h3>
                </div>
            </div>
        </>
    )
}