import React from 'react'

function VideoThumbnail(props) {
  return (
    <div className='videoThumbnail'>
        <img className='videoImage' src='https://signaturely.com/wp-content/uploads/2020/06/construction_contract_agreement_template1.jpg'></img>
        <div className='videoTitle'>
            <div className='videoName'><p>
              {props.name}</p></div>
            <div className='duration'>{props.duration}</div>
        </div>
    </div>
  )
}

export default VideoThumbnail