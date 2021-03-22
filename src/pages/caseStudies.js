import React from 'react'
import './csa.css'
import Zoom from 'react-reveal/Zoom';

function imgslider() {
	return (
	
		<div className = "sum1">
			<Zoom left>
			
				<h2>MANAGEMENT TEAM</h2>
				</Zoom>
				
		      <div class="wine-row">
			  <Zoom left cascade>
                <img className="whyimg" src="http://www.managementser.com/wp-content/uploads/bfi_thumb/sunil-diwan-nkuvf1qqxg33t0xzlytnv87en9f7bhxv3pbk0oga0o.jpg" />
               <div class="wine-text-container">
               <div><h5>SUNIL DIWAN</h5></div>
                <div><h6>PROPRIETOR</h6></div>
                <div><p>Experience of 26 years in the field of collections and verifications. Worked for Multi National Banks and Financial Institutions such as Citicorp, Kotak Mahindra, Dewan Housing Finance in the initial years.</p></div>
               </div>
          </Zoom>
			   </div>
			 <div>
			 <div class="wine-row">
			 <Zoom left cascade>
                <img className="whyimg" src="http://www.managementser.com/wp-content/uploads/bfi_thumb/priyanka-dewan-nkuvereiu9oy9bd0accrlstc40u5ytstea57qmvlx4.jpg" />
               <div class="wine-text-container">
               <div><h5>PRIYANKA DEWAN</h5></div>
			   <div><h6>BUSINESS HEAD</h6></div>
                <div><p>MBA, 10 years of corporate experience with CRISIL, IIT Delhi, Airtel. Leads Strategic Change Management, Technology Adoption and Business Development.</p></div>
               </div>
			   </Zoom>
			   </div>
			   </div>

			   <div>
			 <div class="wine-row">
			 <Zoom left cascade>
			   <img className="whyimg" src="http://www.managementser.com/wp-content/uploads/bfi_thumb/manav-dewan-nl4vr6ydkdz2zi6he8xrqr33fbddy2gf9uwwzmiuuw.jpg" />
               <div class="wine-text-container">
                 <div className = "man">
                 <div><h5>MANAV DEWAN</h5></div>
			           <div><h6>HEAD OF OPERATIONS</h6></div>
                <div><p>23 year’s of experience in the field of Collections and Verifications. Has been working with Management Services since inception.</p></div>
                </div>
               </div>
			   </Zoom>
			   </div>
			   </div>
               
			  

			   </div>
			
	)
}

export default imgslider
