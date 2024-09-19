const UnitedStates = 'United States';
const countries = [
    {
        UnitedStates: UnitedStates,
    }
];
const Illinois = 'IL';
const Florida = 'FL';
const states = [
    {
        Illinois: Illinois,
        Florida: Florida,
    }
]

const BurrRidge = 'Burr Ridge';
const Chicago = 'Chicago';
const Evanston = 'Evanston'
const Northbrook = 'Northbrook';
const Riverwoods = 'Riverwoods';
const Skokie = 'Skokie';
const Valrico = 'Valrico';
const Brandon = 'Brandon';
const cities = [
    {
        BurrRidge: BurrRidge,
        Chicago: Chicago,
        Evanston: Evanston,
        Northbrook: Northbrook,
        Riverwoods: Riverwoods,
        Skokie: Skokie,
        Valrico: Valrico,
        Brandon: Brandon,
    }
];

export const experience = [

    {
        employerName: 'Agora Web Solutions, Inc.',
        jobTitle: 'President',
        startDateMonth: 5,
        startDateYear: 2005,
        endDateMonth: null,
        endDateYear: null,
        isCurrentJob: true,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.Chicago,
        achievements: `Self-Employment information is available upon request. Client list includes the following companies:
• American Imaging Management
• AT&T
• Case/New Holland
• Domino’s Pizza
• Firestone with advertising agency Two x Four
• Lightbank
• And many more`,
        style: {
            backgroundColor: '#bd3d4c',
        }
    },
    {
        employerName: 'Hyatt Hotels Corporation',
        jobTitle: 'Senior Fullstack Developer',
        startDateMonth: 8,
        startDateYear: 2020,
        endDateMonth: 5,
        endDateYear: 2024,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.Chicago,
        achievements: `Led the development and deployment of numerous web applications, focusing on project management and stakeholder management. Leveraged React and NextJS for frontend development, utilizing my knowledge of Hooks and React Router. Heavily utilized TypeScript for these applications, taking advantage of its strongly-typed nature and ES6+ features. Implemented GraphQL for efficient data handling and Apollo Client for a robust state management solution. Emphasized budgeting and risk management throughout the development process.`,
        offsetShift: 1,
        style: {
            backgroundColor: '#427360',
            left: '30px',
            right: '50%',
            width: 'auto',
        }
    },
    {
        employerName: 'United/Optum/Rally',
        jobTitle: 'Senior Fullstack Developer',
        startDateMonth: 5,
        startDateYear: 2020,
        endDateMonth: 5,
        endDateYear: 2024,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.Chicago,
        achievements: `Storybook-driven rewrite of an AngularJS Jenkins-based build pipeline, transforming NPM packages into React/React Native components which are scaﬀolded into a custom single-context React SPA, Android app, and iOS app using a GitHub Actions pipeline. COVID-19 Illinois Economic Stability Initiative.`,
        offsetShift: 2,
        style: {
            backgroundColor: '#24739c',
            width: 'auto',
            left: '50%',
            right: '0',
        }
    },
    {
        employerName: 'Microsoft',
        jobTitle: 'Senior Software Developer',
        startDateMonth: 3,
        startDateYear: 2020,
        endDateMonth: 8,
        endDateYear: 2021,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.Chicago,
        achievements: `For microsoft.com Adobe Experience Manager store, led several key projects. Configured AEM Sling Dynamic Includes, developed React components such as " Buy Box”, Product Detail Page, Product Category Pages and conducted load testing with Gatling. COVID-19 Illinois Economic Stability Initiative.`,
        offsetShift: 3,
        style: {
            backgroundColor: '#bd3e66',
        }
    },
    {
        employerName: 'Hyatt Hotels Corporation',
        jobTitle: 'Senior Frontend Developer',
        startDateMonth: 3,
        startDateYear: 2017,
        endDateMonth: 3,
        // endDateYear: 2020,
        endDateYear: 2019,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.Chicago,
        achievements: `Built over 1, 600 AngularJS sites initially utilizing Adobe Experience Manager and a SpringBoot API layer, which was later transitioned into React and React Native components, constructed on NextJS using GraphQL. Responsible for overseeing in-progress builds conforming to approved designs.`,
        offsetShift: 1,
        style: {
            backgroundColor: '#427360',
        }
    },
    {
        employerName: 'Vyaire',
        jobTitle: 'Senior Software Developer',
        startDateMonth: 5,
        // startDateYear: 2020,
        startDateYear: 2019,
        endDateMonth: 8,
        endDateYear: 2020,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.Chicago,
        achievements: `Developed and maintained a React Native web-based application as a proof of concept for a Fortune 500 Respirator company's executive dashboard, demonstrating capabilities in designing high-level dashboards. Played a key role in consolidating data streams from various ERP systems from five diﬀerent recent acquisitions into one streamlined reporting system, demonstrating proficiency in handling and managing large scale data. Built a Single Page Application(SPA) using ReactNative to handle report management, user access and delivery, showcasing strong experience in building SPAs. Implemented features to search all customers, open orders and material status, demonstrating strong experience with integrating data search capabilities. Developed a data entry portal for plant level manufacturing analytics input, demonstrating skills in creating efficient data entry interfaces. Created dynamic SharePoint reporting panels for live company-wide access, showing expertise in using cloud services for real-time reporting. Implemented AWS CI/CD pipelines for efficient software delivery, highlighting proficiency in DevOps practices. Collaborated eﬀectively with a diverse team spread across diﬀerent time zones, demonstrating solid team collaboration and communication skills. In addition, experience in working with onshore/oﬀshore staffing model.`,
        offsetShift: 3,
        style: {
            backgroundColor: '#8955a8',
        }
    },
    {
        employerName: 'Valtech',
        jobTitle: 'Senior Software Developer',
        startDateMonth: 11,
        startDateYear: 2016,
        endDateMonth: 5,
        endDateYear: 2017,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.Chicago,
        achievements: `Led as forefront developer for various Adobe Experience Manager(AEM)-based projects for clients including Hyatt, Rolex and Lundbeck. Blitsy(Chicago Ventures), Chicago, Illinois`,
        offsetShift: 1,
        style: {
            backgroundColor: '#8955a8',
        }
    },
    {
        employerName: 'Blitsy',
        jobTitle: 'Senior Fullstack Developer',
        startDateMonth: 1,
        startDateYear: 2015,
        endDateMonth: 8,
        endDateYear: 2016,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.Chicago,
        achievements: `- Lead a midsize level (6-10) team of virtuoso developers utilizing a 2 week Agile software development deployment lifecycle while integrating coaching, computer science challenges, code examples, constant learning, documentation, deployments, maintenance and performance reviews.
- Lead team towards dynamically deployed scalable AWS containers from a Jenkins based continuous integration environment integrated from well managed code repositories while maintaining exceedingly high levels of code quality, code review, engagement and productivity.
- Overhauled of LAMP based Magento middleware for the purpose of allowing a team of junior developers to easily make modifications at the component level.
- Integrated machine learning based prioritization into search results.
- Created and deployed objective-c iOS e-commerce shopping app with native custom checkout which included extending and optimizing Magento rest api for the purpose of one click checkout. `,
        offsetShift: 1,
        style: {
            backgroundColor: '#24739c',
        }
    },
    {
        employerName: 'V4L',
        jobTitle: 'Senior Fullstack Developer',
        startDateMonth: 9,
        startDateYear: 2012,
        endDateMonth: 10,
        endDateYear: 2014,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.Chicago,
        achievements: `- Lead team of 3-5 developers and 2-3 artists leveraging 2 week Agile software development deployment lifecycle.
- Leveraged Atlassian’s Jira for swim lane based task management aligned towards quarterly business objectives, annual roadmap and corporate culture initiatives.
- Semantic view overhaul which propelled sales by over 20% through first page Google search result placement for target keywords in a highly competitive market.
- Customized checkout flow for Magento e-commerce system.
- Continuous testing of third-party advertising pixels and APIs.
- Creation of 5 marketing based micro sites leveraging Magento multiple site architecture for the purpose of product branding and increased national distribution through Fortune 500 retail outlets.
- Management and maintenance of all technological vendor relationships for the purpose of 24 hour continuous online/offline software/hardware availability for servers, offices and retail locations.`,
        offsetShift: 1,
        style: {
            backgroundColor: '#645dd4',
        }
    },
    {
        employerName: 'AT&T',
        jobTitle: 'Senior Fullstack Consultant',
        startDateMonth: 7,
        startDateYear: 2011,
        endDateMonth: 9,
        endDateYear: 2012,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.Chicago,
        achievements: `Overhauled AT&T’s Security Self-Service administration portal used by network administrators to manage Network-Based Firewall, Mobile Security and content-based Web Security Service products leveraging third-party external vendor API’s from Fortinet and Palo Alto Networks.`,
        offsetShift: 1,
        style: {
            backgroundColor: '#24739c',
        }
    },
    {
        employerName: 'Wellpoint - AIM',
        jobTitle: 'Senior Frontend Consultant',
        startDateMonth: 7,
        startDateYear: 2010,
        endDateMonth: 7,
        endDateYear: 2011,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.Chicago,
        achievements: `- Redesigned internal call center application for medical imaging authorizations.
- Created three user interface prototypes for executive level radiological authorization management.
- Created, deployed and maintained external company marketing application stack. `,
        offsetShift: 1,
        style: {
            backgroundColor: '#645dd4',
        }
    },
    {
        employerName: 'Microsoft',
        jobTitle: 'Frontend Consultant',
        startDateMonth: 5,
        // startDateYear: 2010,
        startDateYear: 2009,
        endDateMonth: 6,
        endDateYear: 2010,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.Chicago,
        achievements: `Created a dynamically drawn HTML5 canvas demonstration for the release of IE9.  Sky Beautiful is an application designed to map real constellations and star field data to highlight the release of high performance browsers. This application was showcased during the IE9 release party in San Francisco, CA.`,
        offsetShift: 2,
        style: {
            backgroundColor: '#a73234',
            left: '50%',
            right: '0',
            width: 'auto',
        }
    },
    {
        employerName: 'Firestone',
        jobTitle: 'Software Vendor',
        startDateMonth: 9,
        startDateYear: 2009,
        endDateMonth: 5,
        endDateYear: 2010,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.Chicago,
        achievements: `Created customer facing tire search tool, marketing website and appointment scheduler for Bridgestone Retail Operations subsidiary Wheel Works, located in San Francisco from 80 PSD templates.  Subsequent templates were created and replicated to other locations like Hibdon Tires.`,
        offsetShift: 1,
        style: {
            backgroundColor: '#235455',
            left: '30px',
            width: 'auto',
            right: '50%',
        }
    },

    {
        employerName: 'Case / New Holland',
        jobTitle: 'Software Vendor',
        startDateMonth: 4,
        startDateYear: 2007,
        endDateMonth: 5,
        endDateYear: 2009,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.BurrRidge,
        achievements: `- Acquired, managed and produced the creation of a QA reporting dashboard utilized by CNH production plants worldwide for the purpose of warranty costs estimation forecasting.
- Standalone system which automatically generates and distributes warranty data reporting to CNH executives.
- .NET middleware implementation with rest apis integrated with an ExtJS administration interface and PDF generation.
- This system is still known to be in use with no maintenance required.`,
        offsetShift: 1,
        style: {
            backgroundColor: '#4f1452',
            alignItems: 'flex-start',
            paddingLeft: '20px',
            paddingRight: '200px',
        }
    },
    {
        employerName: `Domino's Pizza`,
        jobTitle: 'Microsite Developer',
        startDateMonth: 5,
        startDateYear: 2005,
        endDateMonth: 4,
        endDateYear: 2007,
        offsetShift: 1,
        style: {
            backgroundColor: '#8955a8',
        }
    },
    {
        employerName: 'Mighty Bytes',
        jobTitle: 'Consultant',
        startDateMonth: 5,
        startDateYear: 2008,
        endDateMonth: 9,
        endDateYear: 2009,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.Chicago,
        achievements: `Assisted a team of developers with a Drupal website to allow the pairing of corporate client requirements with registered music makers. `,
        offsetShift: 2,
        style: {
            backgroundColor: '#2d3251',
            left: '50%',
            width: 'auto',
            right: '0',
        }
    },
    {
        employerName: 'Discover Card',
        jobTitle: 'Datawarehouse Engineer',
        startDateMonth: 6,
        startDateYear: 2001,
        endDateMonth: 3,
        endDateYear: 2005,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.Riverwoods,
        achievements: `Lead data warehouse extract, transform and load developer. Using Ab Initio and optimized C++ transformations to extract corporate data from Oracle, MS-SQL, MySQL and DB/2 data sources to be loaded into a Teradata reporting data warehouse.  `,
        style: {
            backgroundColor: '#932b2d',
        }
    },
    {
        employerName: 'iCAIR',
        jobTitle: 'Software Developer',
        startDateMonth: 6,
        startDateYear: 2000,
        endDateMonth: 8,
        endDateYear: 2001,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.Evanston,
        achievements: `Optimized algorithms and configurations for Video Portal, a multimedia portal focusing on streaming global video applications across Internet2 specifications.`,
        style: {
            left: '30%',
            right: '50%',
            width: 'auto',
            backgroundColor: '#496d46',
        }
    },
    {
        employerName: 'Material Research Center (NU)',
        jobTitle: 'Web Developer',
        startDateMonth: 6,
        startDateYear: 2000,
        endDateMonth: 8,
        endDateYear: 2001,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.Evanston,
        achievements: `Designed and created International Virtual Institute (IVI), a portal for Material Science professionals and students to learn more about the field of Material Science and it's applications in today's society.`,
        style: {
            backgroundColor: '#843abe',
            left: '50%',
            width: 'auto',
            right: '0',
        }
    },
    {
        employerName: 'RIC',
        jobTitle: 'Webmaster',
        startDateMonth: 11,
        startDateYear: 2000,
        endDateMonth: 3,
        endDateYear: 2001,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.Chicago,
        achievements: `Maintained IEEE Engineering in Medical and Biological Society journal submission site.`,
        style: {
            backgroundColor: '#1e569b',
            left: '0',
            width: 'auto',
            right: '70%',
        }
    },
    {
        employerName: 'Abercrombie & Fitch',
        jobTitle: 'Sales Associate',
        startDateMonth: 1,
        startDateYear: 1999,
        endDateMonth: 6,
        endDateYear: 2000,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.Skokie,
        achievements: `Cash Register, stocked Inventory and provided customer service to shoppers looking for clothing and accessories.`,
        style: {
            backgroundColor: '#1e569b',
        }
    },
    {
        employerName: 'NU McCormick Registrar Office',
        jobTitle: 'Clerical Assistant',
        startDateMonth: 5,
        startDateYear: 1998,
        endDateMonth: 1,
        endDateYear: 1999,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Illinois,
        employerCity: cities.Evanston,
        achievements: `Assisted the Assistant Dean of the University with maintaining paper and electronic documents through a MS Access Database application.`,
        style: {
            backgroundColor: '#2b785f',
        }
    },
    {
        employerName: 'AMC Theaters',
        jobTitle: 'Concession Stand Manager',
        startDateMonth: 6,
        startDateYear: 1997,
        endDateMonth: 5,
        endDateYear: 1998,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Florida,
        employerCity: cities.Brandon,
        achievements: `Operated Cash Register, assisted with making popcorn, creating shift schedules and cleaned the concession stand.`,
        style: {
            backgroundColor: '#843abe',
        }
    },
    {
        employerName: `Hardee's`,
        jobTitle: 'Store Attendant',
        startDateMonth: 10,
        startDateYear: 1996,
        endDateMonth: 6,
        endDateYear: 1997,
        isCurrentJob: false,
        employerCountry: countries.UnitedStates,
        employerState: states.Florida,
        employerCity: cities.Valrico,
        achievements: `Created shift schedules, operated cash register, ordering marketing material, balanced nightly cash outs, assisted with cooking hamburgers and peach cobbler and assisted cleaned the store nightly.`,
        style: {
            backgroundColor: '#bd3d4c',
        }
    },
];

export const education = [
    {
        degree: 'Master of Science',
        major: 'Computer Information Systems',
        school: 'Northwestern University (NU)',
        startDateMonth: 2,
        startDateYear: 2016,
        endDateMonth: 12,
        endDateYear: 2017,
        country: countries.UnitedStates,
        state: states.Illinois,
        city: cities.Chicago,
        graduated: true,
        style: {
            backgroundColor: '#8955a8',
        }
    },
    {
        degree: 'Bachelor of Science',
        major: 'Computer Science',
        school: 'Northwestern University (NU)',
        startDateMonth: 6,
        startDateYear: 1998,
        endDateMonth: 6,
        endDateYear: 2003,
        country: countries.UnitedStates,
        state: states.Illinois,
        city: cities.Evanston,
        graduated: true,
        style: {
            backgroundColor: '#4f1452',
        }
    }
];