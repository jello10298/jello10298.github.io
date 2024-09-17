import React, {useEffect, useRef, useState} from "react";
import {experience, education} from "./data";
import './Timeline.css';
import AnimatedText from "../AnimatedText/AnimatedText";

const colors = [
    '#9E4770',
    '#496DDB',
    '#b1903e',
    '#9DC7C8',
];
let colorIndex = 0;

const TimelineTile = ({data, type, yearRefs, style, children}) => {
    const currentYear = new Date().getFullYear();
    const endDateYear = data.endDateYear || currentYear;
    const endDateMonth = data.endDateMonth || (new Date().getMonth() + 1);
    if (yearRefs.current[data.startDateYear]?.current) {
        console.log('Start Date: offsetTop' + yearRefs.current[data.startDateYear]?.current?.offsetTop);
        console.log('End Date: offsetTop' + yearRefs.current[endDateYear]?.current?.offsetTop);
    }

    // calculate top + offset
    if (type ==='experience') {
        // debugger;
    }
    const _top = yearRefs.current[endDateYear]?.current?.offsetTop;

    // calculate height + offset
    const _height = (yearRefs.current[data.startDateYear]?.current?.offsetTop -
            yearRefs.current[endDateYear]?.current?.offsetTop);

    // const randomColor = colors[Math.floor(Math.random() * (colors.length - 1))];
    colorIndex = colorIndex + 1;
    if (colorIndex > (colors.length - 1)) {
        colorIndex = 0;
    }
    const randomColor = colors[colorIndex];

    if (data.offsetShift) {
        style['right'] = '0px';
        style['left'] = `${data.offsetShift * 30}px`;
        style['width'] = 'auto';
    }
    return (<div className={`timeline-tile ${type}`} style={{
        height: `${_height}px`,
        top: `${_top + 100}px`,
        backgroundColor: `${randomColor}`,
        ...style,
        ...data.style,
    }}>
        {children}
    </div>);
};

const ExperienceTile = ({data, index, yearRefs}) => {
    return (<TimelineTile data={data} type={'experience'} yearRefs={yearRefs} style={{zIndex: index}}>
        <div>{data.employerName}</div>
        <div>{data.jobTitle}</div>
    </TimelineTile>)
}

const EducationTile = ({data, index, yearRefs}) => {
    return (<TimelineTile data={data} type={'education'} yearRefs={yearRefs} style={{zIndex: index}}>
        <div>{data.degree}</div>
        <div>{data.major}</div>
        <div>{data.school}</div>
    </TimelineTile>);
}

const Timeline = () => {
    const [refsInitialized, setRefsInitialized] = useState(false);

    const currentYear = new Date().getFullYear() + 1;
    const startYear = 1996;
    const _years = [];

    for (let year = startYear; year <= currentYear; year++) {
        _years.push(year);
    }

    const yearRefs = useRef({});

    useEffect(() => {
        yearRefs.current = Array.from({length: currentYear - startYear + 1}, (_, i) => i + startYear).reduce(
            (acc, year) => ({...acc, [year]: React.createRef()}),
            {}
        );
        setRefsInitialized(true);
    }, [currentYear, startYear]);

    useEffect(() => {
        if (yearRefs.current[startYear].current) {
            setRefsInitialized(!refsInitialized);
        }
    }, [startYear, yearRefs.current[startYear]?.current])

    const [years, setYears] = useState(_years);
    return (
        <div className={'pageContainer'}>
            <AnimatedText text={'Timeline'}/>
            <div className={'timeline'}>
                {
                    yearRefs.current[startYear] &&
                    yearRefs.current[startYear].current &&
                    <div className={'experience'}>
                        <h1>Experience</h1>
                        {experience.map((job, i) => (
                            <ExperienceTile key={i} data={job} index={i} yearRefs={yearRefs}/>))}
                    </div>
                }
                <div className={'years'}>
                    {
                        years.reverse().map((year, i) => {
                            return (<div className={'year'} ref={yearRefs.current[year]} key={i}>{year}</div>);
                        })
                    }
                </div>
                {
                    refsInitialized &&
                    <div className={'education'}>
                        <h1>Education</h1>
                        {education.map((school, i) => (
                            <EducationTile key={i} data={school} index={i} yearRefs={yearRefs}/>))}
                    </div>
                }
            </div>
        </div>
    );
}

export default Timeline;