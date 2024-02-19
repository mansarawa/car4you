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
    </nav>
    <div className={Terms.terms}>
   <h1 className={Terms.termheading}>Terms and Conditions for Car Rental</h1>
       <p>
       
In addition to the vehicle are the following is included in the car rental: All tires, tools, documents, accessories as well as equipment.  The renter<br/>
agrees to all conditions and terms printed on this contract and to the
information written on the contract with the same number and date as these car rental terms.<br/><br/>

1. The renter fully agrees to the terms and conditions of this contract and has received a copy thereof.<br/><br/>

2. The renter has received the mentioned vehicle and its accessories in proper and safe condition.<br/><br/>

3. The renter agrees to return the vehicle to the lessor on the agreed date and place, as written in the contract, or earlier if the lessor so insists. Should the vehicle not be returned on the agreed time, a fee equal to 1/3 of the daily rate shall be charged for each hour of delay.<br/><br/>

4. Liability and driver insurance are according to Icelandic law. Third party liability insurance shall be equivalent to the amount stipulated by the car's insurance company at each time. The renters own liability for damages on the car is limited to the worth of the car. The renter can limit his liability by purchasing a collision damage waiver (CDW) for a fixed amount which is determined each time by the lessor.  The driver liability in excess of ISK 220,000,- for 2wd and 330,000,- for 4wd and vans.<br/><br/>

5. The collision damage waiver (CDW) does not cover:<br/><br/>
a) Damages done on purpose or by total carelessness of the driver.<br/><br/>
b) Damages caused when the driver is intoxicated, under the influence of drugs, or by any other cause which renders him unfit to safely drive a vehicle.<br/><br/>
c) Damages to the engine caused by water, such as when crossing un-bridged rivers or driving in water.<br/><br/>
d) Damages which occur while the car is being raced or test-driven.<br/><br/>
e) Damages caused through war activity, mutiny, riots, and uproar or by sabotage.<br/><br/>
f) Burns on seats, carpets or floor mats.<br/><br/>
g) Damages to wheels, tires, springs, batteries, glass (lights & windows), and radio as well as damages caused by theft of certain parts of the vehicle.<br/><br/>
h) Damages caused by driving on bumpy roads on parts such as:<br/><br/>
transmission, drive shafts, or other parts in or on the vehicle's under wagon. Damages which occur on the under wagon when the vehicle hits the uneven road, such as ridges left by road planers, or rocks stuck in the road or the roadside. Same applies to damages which occur when loose rocks or other items hit the vehicle while it is being driven.<br/><br/>
i) Damages caused when the vehicle is driven where driving is forbidden, also by driving off-road, on trails not marked on charts as normal roads, on snow piles, on ice, over un-bridged rivers or streams, on beaches, in dirt or on any other kind of off-roads.<br/><br/>
j) Damages when sand, gravel, ash, lava or other earth materials are blown on the vehicle.<br/><br/>
k) Should the vehicle be moved by sea, damages caused to it by the ocean water will not be paid<br/><br/>.
l) Damages caused by the wind blowing up the door while opening it.<br/><br/>
m) Other cases are referred to the general conditions of the comprehensive vehicle insurance.<br/><br/>

 

6. SUPER CDW: CDW covers damages to the rental vehicle; it waives liability in case of any damages to the vehicle in excess of ISK 220.000 for 2wd and ISK 330.000 for 4wd and vans. But when you take Super CDW you change that to ISK 100.000 for 2wd and 160.000 ISK for 4wd and vans. Super CDW is available for ISK 1.300,- per day. But no insurance covers damages to the underside of the car.<br/><br/>

7. The car must be operated and driven with great care. The renter shall be liable for all damage to the car and injury sustained by passengers caused by collision or accident, which is not paid by the insurance company of the vehicle.<br/><br/>

8. In case of a collision or accident, the renter must report it instantly to law enforcement authorities and to the lessor, and must not leave the scene of the accident or collision until such action has been taken and after the police has arrived on the scene.<br/><br/>

9. Renter shall return the vehicle to the office of the lessor which has been agreed upon at the beginning of the rental period, along with all tires, tools, accessories and equipment in same condition as it was when received, though ordinary wear and tear is accepted. Lessor may repossess the vehicle without notice at any time if it is illegally parked, used in violation of law, against the terms of this agreement or is apparently abandoned.<br/><br/>

10. Under no circumstances is it permitted to use the vehicle, operate or drive:<br/><br/>
a) In violation of Icelandic law, or the conditions and terms of this contract.<br/><br/>
b) For the transportation of passengers or property against payment.<br/><br/>
c) To propel or tow any vehicle, trailer or other objects.<br/><br/>
d) By any person other than the renter signing this contract, unless by written consent of lessor.<br/><br/>
e) Off-roads, that is roads that are not marked as normal driving roads on a road map.<br/><br/>

11. Any violation of Icelandic law, or of any of the terms or conditions of this contract, by the renter or any other driver which the renter has granted permission to operate or drive the vehicle, renders the renter is fully responsible for all damages done to the vehicle what ever the cause may be.<br/><br/>

12. The number of kilometers (km) the vehicle is driven while this contract is valid is decided by reading the standard km reading device (speedometer) attached to the vehicle by the manufacturer. Renter shall report immediately if the speedometer is not working or seizes to function during the rental period.<br/><br/>

13. Lessor shall not be liable for disappearance or damage to any property left, stored or transported by renter or other persons, in or on the vehicle, either before or after it has been returned to lessor.<br/><br/>

14. Renter agrees to pay lessor on demand:<br/><br/>
a) Deposit of the probable rental cost.<br/><br/>
b) All expenses incurred by lessor in returning the vehicle back to lessor's station, if it has been left somewhere else, regardless of condition of the vehicle, roads or weather.<br/><br/>
c) A sum equal to the value of all the tires (regardless of road conditions), the tools and accessories which have been damaged, lost or stolen from the vehicle.<br/><br/>

15. Renter is not authorized to have the vehicle or its accessories repaired or altered. The renter shall not permit any lien to be placed upon the vehicle without lessors prior consent. Renter shall pay all unauthorized charges in connection with the use, repairs, or safekeeping of the vehicle.<br/><br/>

16. The rental fee is paid up front. Discount agreed upon from that fee will be discontinued on the 10th day of the following month. From that day highest possible monthly interest will be added to the whole sum. VAT  will be added to the discontinued discount.If it is written in the rental contract that discount is to be granted from the rental fee, this discount will be discontinued if renter causes injuries to another party or damages the vehicle and is not 100% in the right.<br/><br/>

17. Renter agrees to pay all costs which lessor may incur in collecting payment by law. Renters self risk with Gravel Protection is 20.000isk.<br/><br/>

18. Any legal proceedings arising from this contract shall be conducted before the Reykjavik Municipal Court without prior submission to a board of conciliation.<br/><br/>

19. All car must be retuned with full tank of gas . Service for refuel is 2.500 kr.<br/><br/>

20. Renter agrees to pay all costs to Lessor incurred in collecting payment from Renter. A credit card number or imprint is taken at start of all rentals for security reasons. It may be used to pay all extra charges, including extra kilometre's, extra days, extra insurance, parking fines, refilling gasoline, damages or any cost due to the car rental as a result of the renters use of the car.<br/><br/>

CANCELLATION POLICY:<br/><br/>
If you cancel 15 days or more before pick up time:<br/><br/>
- you pay nothing or you get 100% refund of what you have already paid.<br/><br/>
<br/><br/>
If you cancel 14 days before pickup time:<br/><br/>
- you pay 20% of the total or you get 80% refund if you have already paid.<br/><br/>
If you cancel 48 hrs. before pick up time or a no-show:<br/><br/>
- you pay 80% of the total or you get 20% refund if you have already paid.<br/><br/>
       </p>

    </div>
          <footer style={{backgroundColor:'#0d6efd',height:'50px',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h4 style={{color:"white",textAlign:'center',}}>@ Copyright 2021-mansarawa</h4>
          </footer>
    </div>
  )
}
