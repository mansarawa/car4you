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
            
These terms and conditions outline the rules and regulations for the use of car-4-you's Website, located at [Your Website URL].

By accessing this website we assume you accept these terms and conditions. Do not continue to use [Your Company Name]’s website if you do not agree to take all of the terms and conditions stated on this page.

The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.

Cookies

We employ the use of cookies. By accessing [Your Company Name]’s website, you agreed to use cookies in agreement with the car-4-you's Privacy Policy.

Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.

License

Unless otherwise stated,car-4-youand/or its licensors own the intellectual property rights for all material on [Your Company Name]. All intellectual property rights are reserved. You may access this fromcar-4-youfor your own personal use subjected to restrictions set in these terms and conditions.

You must not:

Republish material from [Your Company Name]
Sell, rent, or sub-license material from [Your Company Name]
Reproduce, duplicate or copy material from [Your Company Name]
Redistribute content from [Your Company Name]
This Agreement shall begin on the date hereof.

Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website.car-4-youdoes not filter, edit, publish, or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of [Your Company Name],its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws,car-4-youshall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.

[Your Company Name] reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.

You warrant and represent that:

You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party;
The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy
The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.
You hereby grantcar-4-youa non-exclusive license to use, reproduce, edit, and authorize others to use, reproduce, and edit any of your Comments in any and all forms, formats, or media.

Hyperlinking to our Content

The following organizations may link to our Website without prior written approval:

Government agencies;
Search engines;
News organizations;
Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and
System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.

We may consider and approve other link requests from the following types of organizations:

commonly-known consumer and/or business information sources;
dot.com community sites;
associations or other groups representing charities;
online directory distributors;<br/>
internet portals;<br/>
accounting, law, and consulting firms; and<br/>
educational institutions and trade associations.<br/>
We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of [Your Company Name]; and (d) the link is in the context of general resource information.<br/>

These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.<br/>

If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to [Your Company Name]. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.<br/>

Approved organizations may hyperlink to our Website as follows: <br/>

By use of our corporate name; or <br/>
By use of the uniform resource locator being linked to; or <br/>
By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site. <br/>
No use of car-4-you's logo or other artwork will be allowed for linking absent a trademark license agreement. <br/>



Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website. <br/>

Content Liability <br/>

We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third-party rights.<br/>

Your Privacy <br/>

Please read Privacy Policy


          </p>

    </div>
    </div>
  )
}
