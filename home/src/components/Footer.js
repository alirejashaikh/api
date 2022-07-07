import React from 'react';
import  {Link} from 'react-router-dom';

const Footer = () => {
    return (

 <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
               <div class="column subscribe">
                   <input type="email" placeholder="Enter your email" />&nbsp;&nbsp;
                   <button type='submit' class="btn btn-danger">Subscribe</button>
               </div>
           
  	 		<div class="footer-col">
  	 			<h4>Company</h4>
                <ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">Contact Us</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
                 
  	 		</div>
  	 		<div class="footer-col">
               <div>
                <h4>
                User Feedback &nbsp;&nbsp;
                <Link className='navlink' to="rating-us">Click Here</Link></h4>
               </div>
               <br/>
  	 			<h4>Get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
                    <li><a href="#">payment options</a></li>
  	 			</ul>
           </div>
               
  	 	</div>
   </div>
   <div>
</div>
  </footer>
 


    )
}

export default Footer;