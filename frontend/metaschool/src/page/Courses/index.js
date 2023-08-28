import { useState } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./index.css";

import { ActivityCalendar } from 'activity-calendar-react'


import Layout from "../../components/Layout";
const localizer = momentLocalizer(moment)
const events = [
    {
        title: 'Event 1',
        start: new Date(),
        end: new Date(new Date().setHours(new Date().getHours() + 1)),
    },
    {
        title: 'Event 2',
        start: new Date(new Date().setDate(new Date().getDate() + 1)),
        end: new Date(new Date().setHours(new Date().getHours() + 1)),
    }
];

const sampleData = [
    {
        day: "2023-01-01",
        activity: 5
    },
    {
        day: "2023-01-02",
        activity: 1
    }
]
const colorCustomization = {
    activity0: '#dadada',
    activity1: '#0e4429',
    activity2: '#006d32',
    activity3: '#26a641',
    activity4: '#39d353',
}
function Course(props) {
    var colors = [["#8629B6", "#2F0A73"], ["#9F3607", "#611A03"],
    ["#717083", "#272337"], ["#009933", "#004d1a"]]

    var random = Math.floor(Math.random() * 4)


    return (
        <div className='card'>
            <div className='cardImage' style={{ background: `radial-gradient(circle at bottom, rgba(2,0,36,1) 0%, ${colors[random][0]} 55%, ${colors[random][1]} 100%)` }}>
                {props.name.substr(0, 2)}
            </div>
            <div className='cardText'>
                {props.name}
            </div>
        </div>
    )
}

export default function Courses(props) {
    return (
        <Layout title="Courses">
            <div className="coursepage">
                <div style={{ width: "70%" }}>
                    <div className="courselist">
                        <Course name="CPP" />
                        <Course name="Mathematics" />
                        <Course name="Science" />
                        <Course name="SSt" />
                        <Course name="English" />
                        <Course name="Hindi" />
                        <Course name="Sanskrit" />
                    </div>
                    <h3 style={{ textAlign: "left" }}>Activity Tracker</h3>
                    <ActivityCalendar colorCustomization={colorCustomization} sampleData={sampleData} />
                </div>
                <div className="calendarplanning">
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 500, width: 450}}
                    />
                </div>
            </div>
        </Layout>
    )
}