/* import React, {useState,setState} from 'react';
// import './stye.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
    
 
    const [UserName, setUserName] = useState(null);

    
    const [password,setPassword] = useState(null);
   
    

    const handleInputChange = (e) => {
        const {id , value} = e.target;
       
        
        if(id === "password"){
            setPassword(value);
        }
       
        
        if(id === "UserName"){
            setUserName(value);
        }


    }
    const navigate = useNavigate();
    const handleSubmit  = () => {
        console.log(password,UserName);
        let userInfo={
            username:UserName,
            password:password
         
          };
        const article = {username:'sagar',password:'Pass@123'};
        console.log(JSON.stringify(userInfo));
       fetch('http://localhost:33762/api/Authenticate/login',{
            method: 'POST',
            mode:'no-cors',
            headers:{'Content-type':'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(article)
          }) 
        
        //axios.post('http://localhost:33762/api/Authenticate/login', article)
          .then(r=>r.json()).then(res=>{
            console.log(res)
            if(res){
             console.log("Success");
             navigate("/product")
            }
            else{
                console.log("error")
            }
          }
          )

    }

    return(
        <div className="body">
            <h4 className='login'>
                LOGIN
            </h4>
        <div className="form">



            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="UserName">USER NAME </label>
                    <input className="form__input" type="text" value={UserName} onChange = {(e) => handleInputChange(e)} id="UserName" placeholder="User Name"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">PASSWORD </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="bttn">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={()=>handleSubmit()} class="btn btn-primary" type="submit">LOGIN</button>
            </div>
        </div>
        </div>
        </div>
       
    )       
}

export default Login; */


import React, {useState,setState} from 'react';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          message: ''
        };
       
      }
      
      onCreateCustomer=()=>{
        let customerInfo={
              Username:this.refs.username.value,
              Password:this.refs.password.value

            };
            fetch('http://localhost:35472/WeatherForecast/login',{
                method: 'POST',
                mode:'no-cors',
                headers:{'Content-type':'application/json; charset=UTF8','accept': 'application/json'},
                  body: JSON.stringify(customerInfo)
              }).then(r=>r.json()).then(res=>{
                if(res){
                  this.setState({message:'New Customer is Created Successfully'});
                }
              }
              )}
      render(){
        return(
            <div className="body">
            <h4 className='login'>
                LOGIN
            </h4>
        <div className="form">



            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="UserName">USER NAME </label>
                    <input className="form__input" type="text" ref="username" id="UserName" placeholder="User Name"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">PASSWORD </label>
                    <input className="form__input" type="password"  id="password" ref="password" placeholder="Password"/>
                </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="bttn">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick= {this.onCreateCustomer} class="btn btn-primary" type="submit">LOGIN</button>
            </div>
        </div>
        </div>
        </div>
        )
      }


} 
export default Login;