import React from "react";
import Get from './get.module.css'
import Image from "next/image";
import getcar from '../../../assets/getcar.png'
export default function GetStarted(){
    return(
        <>
            <div className={Get.container}>
                <div className={Get.item}>
                    <Image src={getcar} style={{width:"100%"}}/>
                </div>
                <div className={Get.item}>
                    <h1 style={{marginBottom:'5%'}}>Ready To Get Started ?</h1>
                    <h4>Lorem ipsum dolor sit amet consec, adipisicing elit. Blanditiis, excepturi sapiente dignissimos doloribus consectetur dolore ipsam culpa laboriosam dolorum temporibus in</h4>
                </div>
            </div>
        </>
    )
}