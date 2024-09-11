import React, {useState} from "react";
import "./ProfileLayout.css";
import {Link} from "react-router-dom";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import {AppBar, Tabs, Tab, Box, Typography, styled} from "@mui/material";

const CustomAppBar = styled(AppBar)(({theme}) => ({
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'transparent',
}));

const CustomTab = styled(Tab)(({}) => ({
    color: 'white',
    '&.Mui-selected': {
        color: 'var(--menu-color)',
    }
}));

const CustomTabs = styled(Tabs)(({}) => ({
    '& .MuiTabs-indicator': {
        backgroundColor: 'var(--menu-color)',
    },
}));

const TabPanel = (props) => {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && <Box p={0} pr={1}><Typography>{children}</Typography></Box>}
        </div>
    );
};

const ProfileLayout = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleResumeClick = () => {
        gtag !== undefined && gtag('event', 'download_resume', {
            event_category: 'engagement',
            event_label: 'Download Resume',
            value: 1
        });
    };

    return (
        <div className="profile-container">
            <div className="left-panel">
                <h1>About Me</h1>
                <CustomAppBar position="static">
                    <CustomTabs value={value} onChange={handleChange} aria-label="profile tabs">
                        <CustomTab label="Professional" id="tab-0"/>
                        <CustomTab label="Personal" id="tab-1"/>
                    </CustomTabs>
                </CustomAppBar>
                <TabPanel value={value} index={0}>
                    <h2>Professional</h2>
                    <p>
                        Angelo Gonzalez is an enthusiastic and ambitious software developer with over two decades of
                        expertise in project management, leadership, and technical skills. I excel in designing and
                        developing web-based solutions using technologies such as React, NextJS, AEM, GraphQL, Apollo,
                        ReactJS, and TypeScript.
                        <br/>
                        <br/>
                        My career is marked by a strong initiative in managing development
                        lifecycles, from scheduling to quality and risk management.
                        <br/>
                        <br/>
                        I am proactive and motivated in
                        mentoring teams, leading strategy development, and facilitating change management for diverse
                        clients. Fluent in both English and Spanish, I am able to work seamlessly with team members
                        across
                        different time zones. My accolades include being named a National Hispanic Scholar, and I
                        maintain
                        active memberships in ACM, Alianza, IEEE, and Sigma Phi Epsilon.
                        <br/>
                        <br/>
                        I hold a M.S. in Computer and Information Systems from Northwestern University with a
                        specialization
                        in Project Management.
                        <br/>
                        <br/>
                        I also hold a B.S. in Computer Science from Northwestern University and was lucky enough to
                        study
                        under Ian Horsewill, Chris Riesbeck, Kristen Hammond and Larry Brinbaum, all while being
                        mentored by
                        Ken
                        Forbus.
                        <br/>
                        <br/>
                        I owe my work ethic and passion in technology to these great individuals.
                        <br/>
                        <br/>
                        You can view my portfolio at <Link
                        to={'/portfolio'}>https://jello10298.github.io/#/portfolio</Link>
                        <br/>
                        <br/>
                        You can connect with me on LinkedIn at <a
                        href="https://www.linkedin.com/in/angelogonzalez1/">https://www.linkedin.com/in/angelogonzalez1/</a>
                    </p>
                    <br/>
                    <br/>
                    <p>Email: <a href={'mailto: angelogonzalez@outlook.com'}>angelogonzalez at[😉] outlook.com</a></p>
                    <p>Role: Software Developer / Change Agent</p>
                    <p>Phone: <a href={'tel:+13123076448'}>+1 (312) 307-6448</a></p>
                    <a
                        href='/resume/Angelo Gonzalez - One Page.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                        className="button download-button resume-button"
                        onClick={handleResumeClick}>
                        Download Resume &nbsp;
                        <PictureAsPdfIcon/>
                    </a>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <h2>Personal</h2>
                    <p>
                        Angelo Gonzalez is a father of two children and a devoted husband. His family embraces the
                        American spirit in that we are multi-cultural and multi-religious.
                        <br/>
                        <br/>
                        Dad is a former altar boy from St. Helen's Parish in Ukrainian Village, a wandering Christian
                        spirit with a sprinkling of Methodism, Buddhism, and admiration for the Baháʼí Faith. His
                        hobbies include maintaining a 100-year-old farmhouse in Rogers Park, listening to music, and
                        having fun while being as productive as possible. His mantra is "Work Hard and Play Hard, OMD
                        (One More Day), OMG (Oh my God), and BHAG (Big Hairy Audacious Goals)."
                        <br/>
                        <br/>
                        Mom is a former beauty queen, chemist and medical student with a strong faith derived from the
                        beautiful countryside of Albania, learning to live her best life in America. Her mantra is,
                        "Keep
                        Dad as busy and as happy as possible". Her favorite hobby is finding out where the children are
                        hiding.
                        <br/>
                        <br/>
                        Our sons are athletes, musicians, scholars, scientists, fantasy lovers, and history buffs. Their
                        mantra is "Under construction, close the door on your way out and bring us snacks, books, and
                        video
                        games. Specifically chicken nuggets, french fries, Minecraft, and Roblox. Or else, we'll burn
                        down
                        the house."
                        <br/>
                        <br/>
                        You can try and connect with Dad, but, come on ... he's bald and he's busy.
                        <br/>
                        <br/>
                        In lieu of making him more busy, consider making a donation, in memory of his father, to <a
                        href={'https://www.aidschicago.org/ways-to-give/'} target={'_blank'}>AIDS FOUNDATION CHICAGO</a>.
                    </p>
                    <br/>
                    <br/>
                    <p>Email: <a href={'mailto: jello10298@gmail.com'}>jello10298 at[😉] gmail.com</a></p>
                    <p>Role: Father / Husband</p>
                    <p>Phone: <a href={'tel:+13123076448'}>+1 (312) 307-6448</a></p>
                    <a
                        href='/resume/Angelo Gonzalez - One Page.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                        className="button download-button resume-button"
                        onClick={handleResumeClick}>
                        Download Resume &nbsp;
                        <PictureAsPdfIcon/>
                    </a>
                </TabPanel>
            </div>
            <div className="right-panel">
                <h2 className={'alex-brush-regular'} style={{ margin: 0, fontSize: '2.3em'}}>The Magician</h2>
                <img
                    src='/Firefly-Dali-inspired-image-of-the-magician-tarot-card-that-contains-a-transparent-Augusta-window-in.png'
                    alt="Profile"/>
                <p>We all have natural talents, discover yours.</p>
                <Link to={'/tarot'} className="button download-button play-button" style={{textDecoration: 'none'}}>
                    Play Dali Tarot Now&nbsp;
                    <RocketLaunchIcon/>
                </Link>
            </div>
        </div>
    );
};

export default ProfileLayout;