import React from "react";
import "./Foodislic.css"
import star from "./Icon/star.png"
import b_been_burger from "./Imag/b-been-burger.png"
import b_veg_burger from "./Imag/b-veg-burger.png"
import b_wild_burger from "./Imag/b-wild-burger.png"
import burger from "./Imag/burger.png"
import chicken from "./Imag/chicken.png"
import donats from "./Imag/donats.png"
import fuchka from "./Imag/fuchka.png"
import hot_dog from "./Imag/hot-dog.png"
import ice from "./Imag/ice.png"
import pizza from "./Imag/pizza.png"
import potato from "./Imag/potato.png"
import r_chese_burger from "./Imag/r-chese-burger.png"
import r_meat_burger from "./Imag/r-meat-burger.png"
import r_veg_burger from "./Imag/r-veg-burger.png"


const Foodislic=()=>{
return(
    <div className="container">
        
            <div className="right-container">
                <div className="heading-contant">Explore Categories</div>
                <div className="main-right-container">
                    <div className="bottom-left-conatiner">
                    <div className="explore-cat-options">
                        <div className="exp-cat-boxes">
                            <div className="exp-cat-boxe"><span className="f-img"><img src={donats} alt="" /></span>Donuts</div>
                            <div className="exp-cat-boxe"><span className="f-img"><img src={burger} alt="" /></span>Burger</div>
                            <div className="exp-cat-boxe"><span className="f-img"><img src={ice} alt="" /></span>Ice</div>
                            <div className="exp-cat-boxe"><span className="f-img"><img src={potato} alt="" /></span>Potato</div>
                            <div className="exp-cat-boxe"><span className="f-img"><img src={potato} alt="" /></span>Potato</div>
                        </div>
                        <div className="exp-cat-boxes">
                            <div className="exp-cat-boxe"><span className="f-img"><img src={fuchka} alt="" /></span>Fuchka</div>
                            <div className="exp-cat-boxe"><span className="f-img"><img src={pizza} alt="" /></span>Pizza</div>
                            <div className="exp-cat-boxe"><span className="f-img"><img src={hot_dog} alt="" /></span>Hot Dog</div>
                            <div className="exp-cat-boxe"><span className="f-img"><img src={chicken} alt="" /></span>Chicken</div>
                            <div className="exp-cat-boxe"><span className="f-img"><img src={chicken} alt="" /></span>Chicken</div>
                        </div>
                    </div>
                    <div className="sub-heading">
                        <div className="s-heading">Popular</div>
                        <div className="s-heading">Recen</div>
                    </div>
                    <div className="main-contant-boxs-1">
                        <div className="main-box1">
                            <img src={r_veg_burger} alt="" />
                            <div className="sub-heading">Vegetable Burger</div>
                            <div className="food-amount">
                                <div className="price-heading"><a href="">$31</a><span className="line-through">$28.30</span></div><div className="review"><img src={star} alt="" />2.5k</div>
                                
                            </div><div className="food-buttons">
                                    <button className="whishlist-button">Whishlist</button>
                                    <button className="order-now">Order Now</button>
                                </div>
                        </div>
                        <div className="main-box1">
                            <img src={r_meat_burger} alt="" />
                            <div className="sub-heading">Meat Burger</div>
                            <div className="food-amount">
                                <div className="price-heading"><a href="">$28</a><span className="line-through">$28.30</span></div><div className="review"><img src={star} alt="" />2.5k</div>
                                
                            </div><div className="food-buttons">
                                    <button className="whishlist-button">Whishlist</button>
                                    <button className="order-now">Order Now</button>
                                </div>
                        </div>
                        <div className="main-box1">
                            <img src={r_chese_burger} alt="" />
                            <div className="sub-heading">Cheese Burger</div>
                            <div className="food-amount">
                                <div className="price-heading"><a href="">$32</a><span className="line-through">$28.30</span></div><div className="review"><img src={star} alt="" />2.5k</div>
                               
                            </div> <div className="food-buttons">
                                    <button className="whishlist-button">Whishlist</button>
                                    <button className="order-now">Order Now</button>
                                </div>
                        </div>
                    </div>
                    <div className="main-contant-boxs-2">
                        <div className="main-box2">
                            <img src={b_veg_burger} alt="" />
                            <div className="sub-heading">Vegetable Burger</div>
                            <div className="food-amount">
                                <div className="price-heading"><a href="">$30</a><span className="line-through">$28.30</span></div><div className="review"><img src={star} alt="" />2.5k</div>
                                
                            </div><div className="food-buttons">
                                    <button className="whishlist-button">Whishlist</button>
                                    <button className="order-now">Order Now</button>
                                </div>
                        </div>
                        <div className="main-box2">
                            <img src={b_been_burger} alt="" />
                            <div className="sub-heading">Been Burger</div>
                            <div className="food-amount">
                                <div className="price-heading"><a href="">$15</a><span className="line-through">$28.30</span></div><div className="review"><img src={star} alt="" />2.5k</div>
                                
                            </div><div className="food-buttons">
                                    <button className="whishlist-button">Whishlist</button>
                                    <button className="order-now">Order Now</button>
                                </div>
                        </div>
                        <div className="main-box2">
                            <img src={b_wild_burger} alt="" />
                            <div className="sub-heading">Wild Salmon Burger</div>
                            <div className="food-amount">
                                <div className="price-heading"><a href="">$40</a><span className="line-through">$28.30</span></div><div className="review"><img src={star} alt="" />2.5k</div>
                                
                            </div><div className="food-buttons">
                                    <button className="whishlist-button">Whishlist</button>
                                    <button className="order-now">Order Now</button>
                                </div>
                            
                        </div>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>
)
}
export default Foodislic;