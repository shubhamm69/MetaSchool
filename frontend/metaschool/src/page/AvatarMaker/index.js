import React from 'react'

function AvatarMaker() {
  return (
    <div style={{height: '100vh', width: '100vw'}}>
    <iframe
        width="100%"
        height="100%"
        src="https://schoolmeta.avaturn.dev"
        frameborder="0"
        allow="camera *; clipboard-write"
        allowfullscreen
        >
    </iframe>
    </div>
  )
}

export default AvatarMaker