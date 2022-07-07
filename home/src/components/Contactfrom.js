import React, {useState,setState} from 'react';
// import './stye.css';
export default function Contactfrom () {
    
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
          <h2 className='h2'>
            FEEDBACK FROM FOR USER
          </h2>
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
                          <label for="cars">Choose your Feedback:</label>
                          &nbsp; &nbsp; &nbsp; &nbsp;
                          &nbsp; &nbsp; &nbsp; &nbsp;

                        <select name="feedback" id="feedback">
                          <option value="good">Good</option>
                          <option value="verygood">verygood</option>
                          <option value="outstanding">Outstanding</option>
                          <option value="bad">Bad</option>
                        </select>
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
            )       
          }
          
