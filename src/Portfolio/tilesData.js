import React from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export const defaultImages = [
    '/portfolio/archive1/2.nlb.jpg',
    '/portfolio/archive1/3.dtdoggy.jpg',
    '/portfolio/archive1/1.ama.jpg',
];

export const getArrowBackgroundColor = (src) => {
    return tilesData.filter((obj) => obj.src === src)[0].arrowBackgroundColor;
}

export const getArrowColor = (src) => {
    return tilesData.filter((obj) => obj.src === src)[0].arrowColor;
}

export const getArrowBackground = (src) => {
    return tilesData.filter((obj) => obj.src === src)[0].arrowBackground;
}

export const getArrowStyle = (src) => {
    return tilesData.filter((obj) => obj.src === src)[0].arrowStyle;
}

export const tilesData = [
    {
        name: 'United Healthcare',
        src: "/portfolio/Grid/UHC.jpg",
        width: 622,
        height: 361,
        desc: 'Implemented Find and Price Care for United Healthcare after being transitioned through a corporate acquisition from Rally Health into Optum, the digital arm of United Healthcare.',
        images: [
            '/portfolio/UHC.png',
            '/portfolio/uhc1.png',
            '/portfolio/uhc2.png',
            '/portfolio/RallyHealth.png',
        ],
        arrowStyle: {
            backgroundColor: '#50d0ff',
        },
    },
    {
        name: 'Hyatt Hotels',
        src: "/portfolio/Grid/Hyatt.jpg",
        width: 503,
        height: 360,
        desc: 'Phase I - Rewrote the frontend of over 1,600 property based websites, one for each hotel, for Hyatt Hotels.  Phase II - Converted the AEM components into React components on a NextJS micro-architecture leveraging RestAPIs powered by Apollo GraphQL.',
        images: [
            '/portfolio/Hyatt/andaz.png',
            '/portfolio/Hyatt/thompson.png',
            '/portfolio/Hyatt/chiph.png',
            '/portfolio/Hyatt/grand-hyatt.png',
            '/portfolio/Hyatt/hyatt-regency.png',
            '/portfolio/Hyatt/hyatt.png',
            '/portfolio/Hyatt/keysh.png',
            '/portfolio/Hyatt/hyatt-place.png',
            '/portfolio/Hyatt/hyatt-house.png',
            '/portfolio/Hyatt/hyatt-studios.png',
            '/portfolio/Hyatt/urcove.png',
            '/portfolio/Hyatt/miraval.png',
            '/portfolio/Hyatt/alila.png',
        ],
        arrowStyle: {
            backgroundColor: 'rgb(37,48,105)',
            color: '#fff',
        }
    },
    // {src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg", width: 320, height: 212,},
    // {src: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg", width: 270, height: 180,},
    {
        name: 'Microsoft',
        src: "/portfolio/Grid/Microsoft.jpg",
        width: 502,
        height: 362,
        desc: `Implemented "Buy Box" AEM component (where the product information and buy button live), built the frontend for Xbox remote game installation from microsoft.com to your console, conducted Gatling load testing for microsoft.com and built a constellation app for the IE11 demo in San Francisco, highlighting the performance capacity of the <canvas /> tag (at that time, the Flash killer)`,
        images: [
            '/portfolio/Microsoft - Buy Box.png',
            '/portfolio/Microsoft - Remote Install.png',
            '/portfolio/archive2/5.microsoft.jpg',
        ],
        arrowStyle: {
            background: `linear-gradient(45deg, #F25022, #EF3A12) 0 0 / 50% 50%,
            linear-gradient(45deg, #7FBA00, #5EAA00) 100% 0 / 50% 50%,
            linear-gradient(45deg, #00A4EF, #0089D4) 0 100% / 50% 50%,
            linear-gradient(45deg, #FFB900, #FFA100) 100% 100% / 50% 50%`,
            backgroundRepeat: 'no-repeat',
            color: 'rgb(74,74,74)',
        }
    },
    {
        name: 'valtech_',
        src: "/portfolio/Grid/Valtech.jpg",
        width: 708,
        height: 358,
        desc: 'Created a marketing page for Rolex, built a site for Hyatt Meetings & Events and built an Adobe Experience Manager Digital Asset Manager tool for Lundbeck and Hyatt.',
        images: [
            '/portfolio/Rolex.png',
            '/portfolio/HyattEvents.png',
            '/portfolio/Lundbeck.png',
        ],
        arrowStyle: {
            backgroundColor: 'rgb(232,94,53)',
        }
    },
    {
        name: `AT&T`,
        src: "/portfolio/Grid/AT&T.jpg",
        width: 486,
        height: 361,
        desc: 'While at the Chief Security Office, fixed performance bugs in the Customer Policy Tuning application (to aid in IPv4 to IPv6 transitions), assisted with "Bring Your Own Device" to work initiative (multiple profiles on one device) and pen-tested Fortinet/Palo Alto networks for security vulnerabilities and corporate configuration management.',
        images: [
            '/portfolio/att.webp',
        ],
        arrowStyle: {
            background: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Q0JBRTE5OUQxMzIwNjgxMTgyMkFBNDMzMTdGMzc2RjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjA3QTk0QUY1MEUxMTFFNkJDRjJDNDBEOEM2MTJDMzMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjA3QTk0QUU1MEUxMTFFNkJDRjJDNDBEOEM2MTJDMzMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYzNDIwNkU1MkIyMDY4MTE4MjJBOEEwMDg1NDBD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')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            // color: 'grey',
        }
    },
    {
        name: 'Chicago Ventures',
        src: "/portfolio/Grid/ChicagoVentures.jpg",
        width: 335,
        height: 359,
        desc: 'Introduced to Blitsy, an Arts & Crafts repackaging company, after an acquisition attempt of Vapor4Life, where I managed a Magento e-commerce store (now called Adobe Commerce) for one of the first electronic cigarette companies introduced in America.',
        images: [
            '/portfolio/blitsy2.png',
            // '/portfolio/blitsy.jpg',
            '/portfolio/archive2/3.v4l.jpg',
            '/portfolio/archive2/1.wowvapor.jpg',
            '/portfolio/archive2/2.wowvapor.jpg',
        ]
    },

    // {src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg", width: 139, height: 180,},
    {
        name: 'Case/New Holland',
        src: "/portfolio/Grid/CNH.jpg",
        width: 638,
        height: 361,
        desc: 'Built a Quality Assurance dashboard for Burr Ridge satellite office of Case/New Holland to aid in the tracking of manufacturing line defects of industrial farming equipment for the purpose of dialing-in design process and warranty information.',
        images: [
            '/portfolio/cnh3.webp',
            '/portfolio/cnh1.jpg',
            '/portfolio/cnh2.jpg',
        ],
        arrowStyle: {
            backgroundColor: '#b60d29',
        },
    },
    {
        name: 'Firestone',
        src: "/portfolio/Grid/Firestone.jpg",
        width: 724,
        height: 362,
        desc: 'Contracted through Two x Four to build subsidiary branded websites for recent Firestone acquisitions of Wheel Works and Hibdon Tires.',
        images: [
            '/portfolio/archive2/6.wheelworks.jpg',
            '/portfolio/archive2/7.hibdon.jpg',
        ],
        arrowStyle: {
            color: 'rgb(252,3,45)',
            backgroundColor: 'rgb(1,2,21)'
        }
    },
    {
        name: 'Rolex',
        src: "/portfolio/Grid/Rolex.jpg",
        width: 479,
        height: 362,
        desc: 'Brought on-board to build a marketing website for Rolex, a luxury watch maker, through advertising agency Valtech_, located in West Town, Chicago. Leveraging the latest in design construction methodology for a beautiful website.',
        images: [
            '/portfolio/Rolex.png',
        ],
        arrowStyle: {
            color: 'rgb(162,116,24)',
            backgroundColor: 'rgba(1,95,54)',
        }
    },
    {
        name: "Domino's",
        src: "/portfolio/Grid/Dominos.jpg",
        width: 270,
        height: 180,
        desc: `Built over 300 LSM (local store marketing) micro-sites for Domino's Pizza franchise's throughout North America, helping to establish Domino's Pizzas brand dominance before online ordering for pizza was available (i.e. Pre - Domino's Pizza Tracker).`,
        images: [
            '/portfolio/dominos/1.unt.jpg',
            '/portfolio/dominos/2.uconn.jpg',
            '/portfolio/dominos/3.louisville.jpg',
            '/portfolio/dominos/4.midland.jpg',
            '/portfolio/dominos/5.charolette.jpg',
            '/portfolio/dominos/6.mexico.jpg',
            '/portfolio/dominos/7.winston-salem.jpg',
            '/portfolio/dominos/8.carolinas.jpg',
            '/portfolio/dominos/9.stlouis.jpg',
            '/portfolio/dominos/10.ordermydominos.jpg',
            '/portfolio/dominos/11.ucf.jpg',
            '/portfolio/dominos/12.islavista.jpg',
            '/portfolio/dominos/13.missouri.jpg',
            '/portfolio/dominos/14.uncc.jpg',
            '/portfolio/dominos/15.dallas.jpg',
            '/portfolio/dominos/16.milehigh.jpg',
            '/portfolio/dominos/17.chicago.jpg',
            '/portfolio/dominos/18.milwaukee.jpg',
            '/portfolio/archive2/8.halloween.jpg',
        ]
    },
    // {src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg", width: 195, height: 180,},
    {
        name: 'Discover',
        src: "/portfolio/Grid/Discover.jpg",
        width: 318,
        height: 180,
        desc: 'ETL developer charged with building the first ETL administration interface for loading terabytes of customer data from multiple data sources into one enterprise data warehouse using the fastest loading tools available.',
        images: [
            '/portfolio/Discover.png',
        ]
    },
    {
        name: 'Rehabilitation Institute of Chicago',
        src: "/portfolio/Grid/RIC.jpg",
        width: 318,
        height: 180,
        desc: 'Administered the journal submission site for IEEE Engineering in Medicine and Biology Society publications.',
        images: [
            '/portfolio/IEEE - EMBS.png',
        ]
    },
    {
        name: 'iCAIR',
        src: "/portfolio/Grid/iCAIR.jpg",
        width: 724,
        height: 359,
        desc: 'Studied and maintained Internet2 approaches for optimizing video data delivery during a time when the internet was geared towards text and image data delivery only.  Paving the way for optimized video compression algorithms for online video streaming.',
        images: [
            '/portfolio/iCAIR.png',
        ]
    },
    // {src: "https://picsum.photos/id/323/107/180", width: 107, height: 180},
    // { src: "/portfolio/Grid/MightyBytes.jpg", width: 492, height: 362,},
    {
        name: 'Material Research Center',
        src: "/portfolio/Grid/MRC-alt-2.jpg",
        width: 719,
        height: 358,
        desc: 'Helped build education oriented websites for teaching Material Science to high school students.',
        images: [
            '/portfolio/InternationalVirtualInstitute.png',
        ]
    },
    {
        name: 'Blitsy',
        src: "/portfolio/Grid/Blitsy.jpg",
        width: 335,
        height: 359,
        desc: 'Maintained and improved the efficiency of a Magento e-commerce for Blitsy, an Arts & Crafts startup company, at the time, the most well funded startup in Chicago.',
        images: [
            '/portfolio/blitsy3.jpg',
            '/portfolio/blitsy2.png',
        ],
    },
    {
        name: 'Wellpoint',
        src: "/portfolio/Grid/Wellpoint.jpg",
        width: 318,
        height: 180,
        desc: 'Redesigned the corporate website for American Imaging Management, a radiology tracking company that handled all claims authorizations for Wellpoint.',
        images: [
            '/portfolio/archive2/4.aim.jpg',
        ]
    },
    {
        name: 'lightbank',
        src: "/portfolio/Grid/Lightbank.png",
        width: 400,
        height: 166,
        desc: 'Small contract to build out an administration panel for Poggled, lead by Northwestern Kellogg graduates Joesph Matthews and Sean Strother, a Groupon style platform for entertainment venues.',
        images: [
            '/portfolio/poggled.png',
        ]
    },
    // {
    //     name: 'Porsche',
    //     src: "/portfolio/Grid/Porsche.jpg",
    //     width: 337,
    //     height: 361,
    //     desc: 'Coming soon, ',
    // },
    // {
    //     name: 'Ferrari',
    //     src: "/portfolio/Grid/Ferrari.jpg",
    //     width: 337,
    //     height: 361,
    //     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
// { src: "/portfolio/Grid/MRC.jpg", },
// { src: "/portfolio/Grid/MRC-alt.jpg", },
];