import React from 'react'

function pdfButton(props) {
  return (
    <div className='pdfButtonMain'>
            <img src='https://signaturely.com/wp-content/uploads/2020/06/construction_contract_agreement_template1.jpg' width={75} height={75} className='pdfImg'></img>
            <div>{props.name}</div>
    </div>
  )
}

export default pdfButton