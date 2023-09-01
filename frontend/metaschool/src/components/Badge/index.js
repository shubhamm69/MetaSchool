import React, {useRef, useState} from 'react'
import Lottie from "lottie-react";
import { useLottie, useLottieInteractivity } from 'lottie-react';
import { useReducer } from 'react';


function Badge(props) {

    // const options = {
    //     animationData: props.animation,
    //   };
    //   const style={
    //     width: 60
    // }
    //   const PlaySegmentsOnHover = () => {
    //     const lottieObj = useLottie(options, style);
    //     const duration = lottieObj.getDuration();
    //     console.log(duration)
    //     const Animation = useLottieInteractivity({
    //       lottieObj,
    //       mode: "cursor",
    //       actions: [
    //         {
    //           position: { x: [0, 1], y: [0, 1] },
    //           type: "loop",
    //           frames: [0, duration*30],
    //         },
    //         {
    //           position: { x: -1, y: -1 },
    //           type: "stop",
    //           frames: [duration*30],
    //         },
    //       ],
    //     });
      
    //     return Animation;
    //   };

    //   const lottieObj = useLottie(options, style);

    const [play,setPlay]=useState(false)

    

  return (
    <div className='badge' 
    onMouseEnter={()=>{setPlay(true)}} 
    onMouseLeave={()=>{setPlay(false)}}
    >
        <Lottie animationData={props.animation} loop={play} style={{width: 60}} autoplay={play}/>
        {/* <PlaySegmentsOnHover /> */}
        <div className='badgeText'>
            <h5 style={{marginBottom: 0}}>{props.name}</h5>
            <p style={{fontSize: 12, textOverflow: 'ellipsis'}}>{props.desc}</p>
        </div>
    </div>
  )
}

export default Badge