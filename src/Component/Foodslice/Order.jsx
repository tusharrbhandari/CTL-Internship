import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";



export const Order=()=>{
    return(
        <div style={{border:'1px solid black',width:'400px',height:'800px',display:'flex',flexDirection:'column',overflow:'hidden'}}>
            <div style={{border:'1px solid black',flex:'1',borderRadius:'30px',margin:'10px',display:'flex'}}>
                <div style={{flex:'2',justifyContent:'space-between',textAlign:'center',fontFamily:'Arial ,sans-serif',fontSize:'small'}}><p>Find food or beverages  </p></div>
                <div style={{flex:'2',textAlign:'end',marginRight:'20px',marginTop:'12px'}}><IoSearch /> </div>
            </div>
            <div style={{border:'1px solid black',flex:'25',display:'flex',flexDirection:'column',margin:'10px' }}>
                <div style={{flex:'1',display:'flex',flexDirection:'column'}}>
                    <div style={{flex:1,display:'flex'}}>
                        <div style={{flex:'1',fontSize:'medium',fontWeight:'bold',fontFamily:'Arial ,sans serif'}}>
                            <a>Customer Information</a>
                        </div>
                        <div style={{flex:'1',textAlign:'end',marginRight:'15px'}}>
                            <MdErrorOutline />
                        </div>
                    </div>
                    <div style={{backgroundColor:'whitesmoke',flex:'1',borderRadius:'10px',margin:'10px'}}>
                    <a style={{fontSize:'small',fontFamily:'Arial ,sans serif',marginLeft:'10px'}}>Number person</a><br></br>
                    <a style={{fontSize:'medium',fontWeight:'bold',fontFamily:'Arial ,sans serif',marginLeft:'10px'}}>12 Person Table </a>
                    </div>
                    <div style={{backgroundColor:'whitesmoke',flex:'1',borderRadius:'10px',margin:'10px'}}>
                    <a style={{fontSize:'small',fontFamily:'Arial ,sans serif',marginLeft:'10px'}}>Number person</a><br></br>
                    <a style={{fontSize:'medium',fontWeight:'bold',fontFamily:'Arial ,sans serif',marginLeft:'10px'}}>2 Person Table</a>
                    </div>
                </div>


                <div style={{flex:'2',display:'flex',flexDirection:'column'}}>
                    <div style={{flex:'1',fontSize:'medium',fontWeight:'bold',fontFamily:'Arial ,sans serif'}}>
                        <p>Current Order</p>
                    </div>
                    <div style={{flex:'6',display:'flex',flexDirection:'column',overflow:'hidden'}}>
                        <div style={{border:'1px solid black',flex:'1',display:'flex',flexDirection:'row',overflow:'hidden'}}>
                            <div style={{flex:'1'}}></div>
                            <div style={{border:'1px solid black',flex:'3'}}>
                            <a style={{fontFamily:'sans-serif',fontWeight:'smoll',fontSize:'13px'}}>Japanese Chicken Gyoza</a><br></br>
                                <a>Rp 81.700,00</a><br></br>
                                <FaMinus />2<AiFillPlusCircle />
                            </div>
                        </div>
                        <div style={{border:'1px solid black',flex:'1',display:'flex',flexDirection:'row',overflow:'hidden'}}>
                            <div style={{flex:'1'}}></div>
                            <div style={{border:'1px solid black',flex:'3'}}>
                            <a style={{fontFamily:'sans-serif',fontWeight:'smoll',fontSize:'13px'}}>Japanese Chicken Gyoza</a><br></br>
                                <a>Rp 81.700,00</a><br></br>
                                <FaMinus />2<AiFillPlusCircle />
                            </div>
                        </div>
                        <div style={{border:'1px solid black',flex:'1',display:'flex',flexDirection:'row',overflow:'hidden'}}>
                            <div style={{flex:'1'}}></div>
                            <div style={{border:'1px solid black',flex:'3'}}>
                            <a style={{fontFamily:'sans-serif',fontWeight:'smoll',fontSize:'13px'}}>Japanese Chicken Gyoza</a><br></br>
                                <a>Rp 81.700,00</a><br></br>
                                <FaMinus />2<AiFillPlusCircle />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{border:'1px solid black',flex:'2',display:'flex',flexDirection:'column'}}>
                    <div style={{border:'1px solid black',flex:'1',display:'flex',flexDirection:'column'}}>
                        <div style={{flex:'2',fontSize:'medium',fontWeight:'bold',fontFamily:'Arial ,sans serif'}}>
                            <a>Payment Summary</a>
                        </div>
                        <div style={{border:'1px solid black',flex:'1',fontFamily:'Arial,sans serif',fontSize:'12px',display:'flex'}}>
                            <a>Subtotal</a><br/>
                            <a style={{textAlign:'end',marginLeft:'230px'}}>Rp 1,298,000.00</a>
                        </div>
                        <div style={{border:'1px solid black',flex:'1',fontFamily:'Arial,sans serif',fontSize:'12px',display:'flex'}}>
                            <a>Discount sales</a><br/>
                            <a style={{textAlign:'end',marginLeft:'205px'}}>-Rp 120,000.00</a>
                        </div>
                        <div style={{border:'1px solid black',flex:'1',fontFamily:'Arial,sans serif',fontSize:'12px',display:'flex'}}>
                            <a>Total tax</a><br/>
                            <a style={{textAlign:'end',marginLeft:'270px'}}>Rp 40,000</a>
                        </div>
                    </div>
                    <div style={{border:'1px solid black',flex:'1.4',display:'flex',flexDirection:'column'}}>
                        <div style={{border:'1px solid black',flex:'1'}}>
                            <p>Total  <a style={{color:'green',marginLeft:'200px'}}>Rp 1.218.000,00</a></p>
                        </div>
                        <div style={{borderRadius:'30px',flex:'1',backgroundColor:'black',margin:'10px'}}>
                            <p style={{color:'white',justifyContent:'center',alignItems:'center',textAlign:'center'}}> Order Now</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}