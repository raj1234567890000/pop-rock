import React from 'react'
import '../App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
    const data=[
        {
            name:"Crystal agate phone grip",
            img:"https://img.freepik.com/free-photo/vivid-colored-transparent-autumn-leaf_23-2148239739.jpg",
            Price:"18.99$"
        }, {
            name:"Crystal agate phone grip",
            img:"https://img.freepik.com/free-photo/vivid-colored-transparent-autumn-leaf_23-2148239739.jpg",
             Price:"20.99$"
        }, {
            name:"Crystal agate phone grip",
            img:"https://img.freepik.com/free-photo/vivid-colored-transparent-autumn-leaf_23-2148239739.jpg",
             Price:"22.99$"
        }, {
            name:"Crystal agate phone grip",
            img:"https://img.freepik.com/free-photo/vivid-colored-transparent-autumn-leaf_23-2148239739.jpg",
             Price:"24.99$"
        }, {
            name:"Crystal agate phone grip",
            img:"https://img.freepik.com/free-photo/vivid-colored-transparent-autumn-leaf_23-2148239739.jpg",
             Price:"26.99$"
        }, {
            name:"Crystal agate phone grip",
            img:"https://img.freepik.com/free-photo/vivid-colored-transparent-autumn-leaf_23-2148239739.jpg",
             Price:"28.99$"
        }, {
            name:"Crystal agate phone grip",
            img:"https://img.freepik.com/free-photo/vivid-colored-transparent-autumn-leaf_23-2148239739.jpg",
             Price:"30.99$"
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
   
<div className='head-container'>
    <div className='head-data'>
        <h1 className='head'>Welcome to <br/>pop  rock crystal shop! </h1>
        <p className='para'>Here you will find unique phone accessories crystals,<br/>jwelery and more. free shipping inside the U.S And<br/>our phone grips come with a limited warranty.Enjoy!</p>
       <div className='buttons'>
       <button className='button-shop'>shop now</button>
       <button className="button-about">About us</button>
       </div>
    </div>
<div className='w-1/4 card-data'>
    <Slider {...settings}>
        {
            
              
            data.map((item)=>{
                return(
                    <>
                    <div className='card-body'>
                    <div className='logo'>
                        <h6>New item </h6>
                    </div>
                        <div>
                        
                        <img src={item.img} alt="logo" className='card-image'/>
                        </div>
                       
                   
                    <div className='slider-text'>
                    <p className='slider-name'>{item.name}</p>
                    <p className='slider-price'>-{item.Price}</p>
                    </div>
                    </div>
                    </>
                )
            })
        }
        </Slider>  
    </div>



</div>

  
    </>
  )
}

export default Slide









     