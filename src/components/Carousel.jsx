import React from 'react';
import Slider from 'infinite-react-carousel';
import { IconButton } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/NavigateBefore';
import ArrowForwardIosIcon from '@material-ui/icons/NavigateNext';

export default function Carousel(props){
  const settings =  {
    arrowsBlock: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    duration: 250,
    centerPadding: 0,
    prevArrow: <div ><IconButton disableRipple style={{color: 'white', }}><ArrowBackIosIcon/></IconButton></div>,
    nextArrow: <div ><IconButton disableRipple style={{color: 'white'}}><ArrowForwardIosIcon/></IconButton></div>,
    overScan: 1,
    adaptiveHeight: true,
    pauseOnHover: true,
    swipe: true
  }
  return (
    <Slider className={'carousel'} {...settings}>
      { props.media.map((item) => {
        return (
          <div className={'img-container'} style={{position: 'relative', width: '100%', height: '100%'}}>
            <div className={'overlay'} style={{position: "absolute", width: '100%', height: '100%', background: 'linear-gradient(180deg, rgba(22, 26, 55, 0) 54.17%, rgba(22, 26, 55, 1) 100%)'}}></div>
            <img style={{objectPosition: 'center', objectFit: 'cover', width: '100%', height: '100%'}}src={item.url}/>
          </div>
        )
      })}
    </Slider>
  )
}