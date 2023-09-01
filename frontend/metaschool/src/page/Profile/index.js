import React from 'react'
import Layout from '../../components/Layout'
import Badge from '../../components/Badge'
import Fire from '../../lottie/fire.json'
import Todos from '../../lottie/todos.json'
import Treasure from '../../lottie/treasure.json'
import MagGlass from '../../lottie/magGlass.json'
import Juggling from '../../lottie/juggling2.json'
import BullsEye from '../../lottie/bullseye.json'
import Navbar from '../../components/navbar'

function Profile(props) {
    return (
        <>
         <div style={{width: '10vw', marginRight: '9vw'}}>
             <Navbar/>
        </div>
        <Layout title='Profile'>
            <div className='profileMain'>
                <div>
                    <div className='profile'>
                        <div>
                            <img className='avatar' src='https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=740&t=st=1693221335~exp=1693221935~hmac=e6c2d5e46ac75b9190d2e0a2c35d0a94d9f8c45adbc3b288dc2bc84d669728d7'></img>
                        </div>
                        <div className='proDetails'>
                            <h2>{
                                props.name
                            }</h2>
                            <h5>{
                                props.email
                            }</h5>
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
                <div className='badgesMain'>
                    <h3>Badges</h3>
                    <div className='badges'>
                        <Badge animation = {Fire} name='Firey Passion' desc='Login 3 days in a row'/>
                        <Badge animation = {Todos} name='Diligent Achiever' desc='Complete Assignments before time 3 days in a row'/>
                        <Badge animation = {Treasure} name='Resource Raider' desc='Unlocked 15 additional resources in courses.'/>
                        <Badge animation = {MagGlass} name='Curious Contributor' desc='Asked 5 insightful questions that sparked discussions'/>
                        <Badge animation = {Juggling} name='Versatility Virtuoso' desc='Excelled in 7 different subjects.'/>
                        <Badge animation = {BullsEye} name='Quick Quizzer' desc='Answered 10 quiz questions correctly in a row'/>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default Profile
