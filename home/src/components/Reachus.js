import React, {useState,setState} from 'react';
// import './stye.css';
export default function Reachus () {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [mobilenumber,setmobilenumber] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
       
        }
        if(id === "mobilenumber"){
            setmobilenumber(value);
        }

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,mobilenumber);
    }

    return(
        
<div className="body">
    <div className="body2">
          <h3 className='h2'>
           Hi!!!!!   REACH WITH US FILL YOUR DETAILS
          </h3>
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                
                <div className="mobilenumber">
                    <label className="form__label" for="mobilenumber">Mobile Number </label>
                    <input className="form__input" type="number" id="mobilenumber" value={mobilenumber} onChange = {(e) => handleInputChange(e)} placeholder="mobile number"/>
                </div>
                <div className="mobilenumber">
                    <label className="form__label" for="mobilenumber">Type Message Here</label>
                    <input className="form__input" type="text" id="messege" width="50%" hight="50%" value={mobilenumber} onChange = {(e) => handleInputChange(e)} placeholder="types your problem here"/>
                </div>
               
            </div>

            <div class="bttn">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={()=>handleSubmit()} class="btn btn-danger" type="submit">Send</button>
            </div>
        </div>
        </div>
    </div>
            )       
          }
          
