import React from 'react'
import Layout from '../../components/Layout'

function Profile(props) {
  return (
    <Layout title='Profile'>
        <div className='profileMain'>
        <div>
            <div className='profile'>
                <div>
                    <img className='avatar' src='https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=740&t=st=1693221335~exp=1693221935~hmac=e6c2d5e46ac75b9190d2e0a2c35d0a94d9f8c45adbc3b288dc2bc84d669728d7'></img>
                </div>
                <div className='proDetails'>
                    <h2>{props.name}</h2>
                    <h5>{props.email}</h5>
                    <div className='changePassButton'>Change Password</div>
                </div>
            </div>
            <div>
                <h2>Classes Enrolled</h2>
                <div className='classes'>
                    <div className='class'>Class 1</div>
                    <div className='class'>Class 1</div>
                    <div className='class'>Class 1</div>
                    <div className='class'>Class 1</div>
                    <div className='class'>Class 1</div>
                </div>
            </div>
        </div>
        <div className='stats'>

        </div>
        </div>
    </Layout>
  )
}

export default Profile