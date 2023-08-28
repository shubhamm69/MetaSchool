import { AiFillVideoCamera, AiFillFolderAdd, AiTwotoneCopy, AiOutlineQuestion } from 'react-icons/ai'
import { useState } from 'react';
import Layout from "../../components/Layout";
import StudentCard from "../../components/StudentCard";
import ButtonCard from "../../components/ButtonCard";
import Modal from '../../components/Modal';

export default function TeacherView(props) {
    const [addMaterial, setAddMaterial] = useState(false);
    return (
        <Layout title="Course Name" headers={
            <div style={{ display: "flex" }}>
                <ButtonCard icon={<AiFillVideoCamera fontSize={20} color='white' />} title="Start Class" />
                <ButtonCard icon={<AiFillFolderAdd fontSize={20} color='white' />} title="Add Material" />
                <ButtonCard icon={<AiTwotoneCopy fontSize={20} color='white' />} title="Add Assignment" />
                <ButtonCard icon={<AiOutlineQuestion fontSize={20} color='white' />} title="Add Quiz" />
            </div>
        }>
            <div style={{ display: 'flex' }}>
                <div style={{overflowY:"scroll", maxHeight: "80vh", width: 1200}}>
                    <div className="teacherviewheader" >
                        <div>
                            <h3>Students</h3>
                        </div>
                    </div>
                    <div>
                        <StudentCard />
                        <StudentCard />
                        <StudentCard />
                        <StudentCard />
                        <StudentCard />
                        <StudentCard />
                        <StudentCard />
                        <StudentCard />
                        <StudentCard />
                        <StudentCard />
                        <StudentCard />
                        <StudentCard />
                        <StudentCard />
                        <StudentCard />
                        <StudentCard />
                        <StudentCard />
                        <StudentCard />
                        <StudentCard />
                        <StudentCard />
                    </div>
                </div>
                <div style={{ marginLeft: 32, width: "95%", marginRight: 20, maxHeight: "80vh", overflowY:"scroll" }}>
                    <h3>Stats</h3>
                    <div className='modulestats'>
                        <p className='avgmod1'>Average Module 1: 59%</p>
                        <p className='avgmod2'>Average Module 2: 69%</p>
                        <p className='avgmod3'>Average Module 3: 78%</p>
                        <p className='avgmod4'>Average Module 4: 72%</p>
                        <p className='avgmod5'>Average Module 5: 81%</p>
                    </div>
                    <h3>Attendance</h3>
                    <div className='modulestats'>
                        <p className='attendance'>Overall Attendance: 87%</p>
                        <p>5 out of 70 have less than 75% attendance</p>
                        <p>67 out of 70 attended last class</p>
                    </div>
                    <h3>Upcoming</h3>
                    <div className='modulestats'>
                        <p>Class on: 2nd September</p>
                        <p>Quiz: 5pm 2nd September</p>
                        <p>Deadline for Assignment 5</p>
                    </div>
                </div>
            </div>
            {addMaterial && <Modal title="Add Material">
                    <div className='materialmodalitem'>
                        <AiFillFolderAdd color='white' fontSize={32} />
                        <p style={{marginLeft: 100}}>Module 1</p>
                    </div>
                    <div className='materialmodalitem'>
                        <AiFillFolderAdd color='white' fontSize={32} />
                        <p style={{marginLeft: 100}}>Module 2</p>
                    </div>
                    <div className='materialmodalitem'>
                        <AiFillFolderAdd color='white' fontSize={32} />
                        <p style={{marginLeft: 100}}>Module 3</p>
                    </div>
                    <div className='materialmodalitem'>
                        <AiFillFolderAdd color='white' fontSize={32} />
                        <p style={{marginLeft: 100}}>Module 4</p>
                    </div>
                    <div className='materialmodalitem'>
                        <AiFillFolderAdd color='white' fontSize={32} />
                        <p style={{marginLeft: 100}}>Module 5</p>
                    </div>
                </Modal>}
        </Layout>
    )
}