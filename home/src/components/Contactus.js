import React from 'react'
//*import 'bootstrap/dist/css/bootstrap.css';*/

/*import 'react-toastify/dist/ReactToastify.css';*/


export default function  Contactus ({myFunction}) {
    

    function myFunction() {
        alert("I am an alert box!");
      }

    return (
        
       
    <div class="container1">
        <h1>
            CONTACT US
        </h1>
        <br/>
        <h2>
        <marquee width="100%" direction="left" height="50px" ></marquee>
        </h2>
        <br/>
        <form className='form-group' autoComplete="off">
        <label>Full Name</label>
        <input type="text" className='form-control' required></input>
        <br/>
        <label>ADDRESS</label>
         <input type="text" className='form-control' required></input>
       
        <br/>
        <label>Email</label>
         <input type="text" className='form-control' required></input>
         <br/>
         <label>Register Phone Number</label>
         <input type="text" className='form-control' required></input>
        <br/>
         <label>Type Your Message Here</label>
         <input type="text" className='form-control' required></input>
        <br/>
        <br/>
        <div className='btn-box'>
        <button type="submit" className='btn btn-success btn-md' onClick="myFunction()">Send</button>
        </div>
       </form>
        <script>
            function myFunction() {
            alert("Thanks for reaching us please fill all necessary details")
}
</script>
            
        
           
     </div>
    
        
    )
        
}