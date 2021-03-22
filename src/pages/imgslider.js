import React from 'react'
import './imgslider.css'
import Zoom from 'react-reveal/Zoom';

function imgslider() {
	return (
	
		<div className = "sum">
			<Zoom left>
			
				<h2>Why Us</h2>
				</Zoom>
				
		      <div class="wine-row">
			  <Zoom left cascade>
                <img className="whyimg" src="http://www.managementser.com/wp-content/uploads/experienced-staff-332x332.jpg" />
               <div class="wine-text-container">
                <div><h3>CERTIFIED and HIGHLY EXPERIENCED STAFF</h3></div>
                <div><p>We hire and retain the most skilled staff in the industry. The average work experience of our senior staff is more than 20 years. All field executives working for collections are DRA certified.</p></div>
               </div>
          </Zoom>
			   </div>
			 <div>
			 <div class="wine-row">
			 <Zoom left cascade>
				 
                <img className="whyimg" src="http://www.managementser.com/wp-content/uploads/knowledge-pool-332x332.jpg" />
               <div class="wine-text-container">
			   <div><h3>KNOWLEDGE POOL</h3></div>
                <div><p>With its rich experience, Management Services over time has developed an enormous repository of resourceful information that is leveraged to provide best analysis with regard to verification and collections.</p></div>
               </div>
			   </Zoom>
			   </div>
			   </div>

			   <div>
			 <div class="wine-row">
			 <Zoom left cascade>
			   <img className="whyimg" src="http://www.managementser.com/wp-content/uploads/security-332x332.jpg" />
               <div class="wine-text-container">
			   <div><h3>SELF-CHECK MECHANISM</h3></div>
                <div><p>We have a dedicated team to conduct internal audits to keep a stringent check on field work and ensure data security at the backend. We also have a Fraud Control Unit with a retired inspector and an advocate on our panel.</p></div>
               </div>
			   </Zoom>
			   </div>
			   </div>
               
			   <div>
			 <div class="wine-row">
             <Zoom left cascade>
			   <img className="whyimg" src="http://www.managementser.com/wp-content/uploads/process-332x332.jpg" />
               <div class="wine-text-container">
			   <div><h3>FOCUS ON PROCESS AND TECHNOLOGY</h3></div>
                <div><p>Management Services has always excelled in audits conducted by its clients for abiding by processes and policies.</p></div>
				<div><p>We have strong internal checks and processes for hiring, training, delegation, exit amongst others. Management Services is a highly process-oriented organization with continuous focus on building robust systems. Over the years, the organization has invested heavily in building and upgrading systems and processes that are best in the industry.</p></div>
               </div>
			   </Zoom>
               </div>
			   
			   </div>
			   <div>
			 <div class="wine-row">
			 <Zoom left cascade>
			   <img className="whyimg" src="http://www.managementser.com/wp-content/uploads/training-and-development-332x332.jpg" />
               <div class="wine-text-container">
			   <div><h3>TRAINING AND DEVELOPMENT</h3></div>
                <div><p>We have a dedicated training and development department to conduct internal training’s on personality development and build job competencies. The training team takes sessions from clients and trains the internal staff.</p></div>
               </div>
			   </Zoom>
               </div>
			   
			   </div>
            

			   </div>
			
	)
}

export default imgslider
