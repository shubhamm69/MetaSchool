import React from 'react'
import Layout from '../../components/Layout'
import PDFButton from '../../components/pdfButton'
import AssessButton from '../../components/assessButton'
import VideoThumbnail from '../../components/videoThumbnail'


function LMS(props) {
  return (
    <Layout title='Module 5'>
        
        <div className='lmsMain'>
            <div className='moduleMain'>   
                <h3>Reference Materials</h3>
                <div className='pdfs'>
                    <PDFButton name='Math.pdf'/>
                    <PDFButton name='Science'/>
                    <PDFButton name='Chem'/>
                    <PDFButton name='Physics'/>
                    <PDFButton name='Physics'/>
                    <PDFButton name='Physics'/>
                    <PDFButton name='Physics'/>
                    <PDFButton name='Physics'/>
                    <PDFButton name='Physics'/>
                    <PDFButton name='Physics'/>
                </div>
                <h3>Practice Assessments</h3>
                <div className='pracAssessments'>
                    <div className='easy diffButton'>
                        Easy
                    </div>
                    <div className='med diffButton'>
                        Medium
                    </div>
                    <div className='hard diffButton'>
                        Hard
                    </div>
                </div>
                
                <h3>Assessments</h3>
                <div className='assessNmarks'>
                    <AssessButton name='Assessment 1'/>
                    Marks 18/20
                </div>
                <div className='assessNmarks'>
                    <AssessButton name='Assessment 1'/>
                    Marks 18/20
                </div>
                <div className='assessNmarks'>
                    <AssessButton name='Assessment 1'/>
                    Marks 18/20
                </div>
                <div>

                </div>
            </div>
            <div className='videos'>
                <h3>Videos</h3>
                <VideoThumbnail name='Lecture 1 In one two three four five six sdgsdgdgnsdvisduogsdn oidgfnsdgfdsnogis' duration='4:26'/>
            </div>
        </div>
    </Layout>
  )
}

export default LMS