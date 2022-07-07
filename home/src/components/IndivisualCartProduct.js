import React from 'react';
import  { useState } from "react";



const IndividualCartProduct= () =>{

    const[count, setCount] = useState(0);
    const[val1, setCount1] = useState(0);
    const Increment  = () => {
        let val = count;
        let val1 = 72;
        if(val === 0 ) {
            document.getElementById('Error').style.opacity ="0";
            setCount(count + 1);
            setCount (count + 1 * val1);
        }
        else
        {
           setCount(count + 1);
        }
    }
    //decrement
    const Decrement = () => {
        let val = count;
        if(val === 0 ) {
            document.getElementById('Error').style.opacity ="1";
        }
        else
        {
           setCount(count - 1);
        }

    }
    return(
        <>
   
<div className='container-fluid mt-5'> 
<h2 className='mb-5 text-center'> SMART SHOPPING</h2>
<h2 className='mb-5 text-center'>ADD YOUR CART NOW</h2>
<div className='row justify-contect-center'>
    <div class="col-md-8">
        <div className='table-responsive'>
            <table id="mytable" className='table'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>ID</th>
                        <th>QTY</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th className='text-right'>
                            <span id="amount" className='amount'>
                                Amount
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className='product-img'>
                                <div className='img-prodct1'>
                                       
                                </div>
                            </div>
                        </td>
                        <td>
                        <p>
                            2022001
                        </p>
                        </td>
                        <td>
                            
                            <div className='button-container'>
                               
                            <h2 className='button-container'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;{count}</h2>
                                <button className='btn btn-danger' onClick={() => setCount(count + 1)}>+</button>
                                &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
                                &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
                                <button className='btn btn-danger' onClick={() => setCount(count - 1)} >-</button>
                            </div>
                        </td>

                        <td> 
                            <input type="text" className='price from-control' disabled></input>
                        
                        </td>
                        
                        <td align='right'>RS
                        <span id="amount" className='amount' onClick={() => setCount1(count * val1 ) }>0</span>
                        </td>
                       
                    </tr>
                    <tr>
                        <td>
                            <div className='product-img'>
                                <div className='img-prodct2'>
                                      
                                </div>
                            </div>
                        </td>
                        <td>
                        <p>
                           2022100
                        </p>
                        </td>
                        <td>
                            <div className='button-container'>
                            <h2 className='button-container'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;{count}</h2>
                                <button className='btn btn-danger' onClick={() => setCount(count + 1)}>+</button>
                                &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
                                &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
                                <button className='btn btn-danger' onClick={() => setCount(count - 1)} >-</button>
                            </div>
                        </td>
                        <td>
                            <input type="text" value="72" className='price from-control'  disabled></input>
                        </td>
                        <td align='right'>RS
                        <span id="amount" className='amount'>0</span>
                        </td>
                    </tr><tr>
                        <td>
                            <div className='product-img'>
                                <div className='img-prodct3'>
                                       
                                </div>
                            </div>
                        </td>
                        <td>
                        <p>
                            2022101
                        </p>
                        </td>
                        <td>
                            <div className='button-container'>
                            <h2 className='button-container'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;{count}</h2>
                                <button className='btn btn-danger' onClick={() => setCount(count + 1)}>+</button>
                                &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
                                &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
                                <button className='btn btn-danger' onClick={() => setCount(count - 1)} >-</button>
                            </div>
                        </td>
                        <td>
                            <input type="text" value="72" className='price from-control' disabled></input>
                        </td>
                        <td align='right'>RS
                        <span id="amount" className='amount'>0</span>
                        </td>
                    </tr><tr>
                        <td>
                            <div className='product-img'>
                                <div className='img-prodct4'>
                                       
                                </div>
                            </div>
                        </td>
                        <td>
                        <p>
                            2022103
                        </p>
                        </td>
                        <td>
                            <div className='button-container'>
                            <h2 className='button-container'>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;{count}</h2>
                                <button className='btn btn-danger' onClick={() => setCount(count + 1)}>+</button>
                                &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
                                &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
                                <button className='btn btn-danger' onClick={() => setCount(count - 1)} >-</button>
                            </div>
                        </td>
                        <td>
                            <input type="text" value="72" className='price from-control' disabled></input>
                        </td>
                        <td align='right'>RS
                        <span id="amount" className='amount'>0</span>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4} ></td>
                        <td align="right">
                            <strong>TOTAL= rs. <span id="total">0</span></strong>

                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</div>
</div> 
<div>
 
</div>

</>
    )
}

export default IndividualCartProduct;