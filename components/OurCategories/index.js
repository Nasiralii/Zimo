import React, { Component } from "react";
import Slider from "react-slick";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
const data=[
  {
    image:"./Images/REAL ESTATE 1.jpg",
    title:"real estate"
  },{
    image:"./Images/CARS.png",
    title:"Car"
  },
  
  {
    image:"./Images/YACHTS.png",
    title:"Yachats"
  },
  {
    image:"./Images/WATCHES.png",
    title:"watches"
  },
{
  image:"./Images/DIAMONDS.jpg",
  title:"diamonds"
},
{
  image:"./Images/JETS.jpg",
  title:"Jets"
},
]
    return (
      <div className="py-8">
       <div className="flex justify-between items-center p-4">
       <p className="md:text-3xl text-xl lato-light tracking-widest uppercase">OUr CATEGORIES</p>
        <div className="py-8 flex justify-end gap-4">
          <button className="button" onClick={this.previous}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
          </button>
          <button className="button" onClick={this.next}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
          </button>
        </div>
       </div>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
       
       <div className="w-full pr-8 overflow-hidden">
       <Slider ref={c => (this.slider = c)} {...settings}>
        {data.map((val,key)=>{
          return(
            <div className=" px-4 ">
            <div key={key+1}>
            <div className="rounded-3xl ">
            <img className="w-full mx-4 rounded-3xl h-72 bg-red-500 object-cover " src={val.image}/>
            <h5 className="relative text-center text-white -top-12 uppercase">{val.title}</h5>
            </div>
            </div>
            </div>
          )
        })}
         
        </Slider>
       </div>
        
      </div>
    );
  }
}