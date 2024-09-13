import React, {useState} from "react";
import {experience, education} from "./data";
import './Timeline.css';

const TimelineTile = ({data, type, children}) => {
    return (<div className={`timeline-tile ${type}`}>
        {children}
    </div>);
};

const ExperienceTile = ({data, children}) => {
    return (<TimelineTile data={data} type={'experience'}>
        <div>{data.employerName}</div>
        <div>{data.jobTitle}</div>
    </TimelineTile>)
}

const EducationTile = ({data, children}) => {
    return (<TimelineTile data={data} type={'education'}>
        <div>{data.degree}</div>
        <div>{data.major}</div>
        <div>{data.school}</div>
    </TimelineTile>);
}

const Timeline = () => {
    const [years, setYears] = useState(() => {
        const currentYear = new Date().getFullYear();
        const startYear = 1996;
        const years = [];

        for (let year = startYear; year <= currentYear; year++) {
            years.push(year);
        }

        return years;
    });
    return (
        <div className={'timeline'}>
            <div className={'experience'}>
                { experience.map((job) => (<ExperienceTile data={job} />)) }
            </div>
            <div className={'years'}>
                {
                    years.reverse().map((year) => {
                        return (<div>{year}</div>);
                    })
                }
            </div>
            <div className={'education'}>
                { education.map((school) => (<EducationTile data={school} />)) }
            </div>
        </div>
    )
}

export default Timeline;