import './Portfolio.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import {withNavigationHandlers} from "react-awesome-slider/dist/navigation";
import {Gallery} from "react-grid-gallery";
import {tilesData} from "./tilesData";
import {Tile} from "./Tile";

const Slider = withNavigationHandlers(AwesomeSlider);
const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
    <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}
        animation={'cubeAnimation'}
        className="awesome-slider"
        fillParent={false}
    >
        <div data-src="/portfolio/Hyatt/chiph.png"/>
        <div data-src="/portfolio/Hyatt/grand-hyatt.png"/>
        <div data-src="/portfolio/Hyatt/hyatt-regency.png"/>
    </AutoplaySlider>
);

function Portfolio() {
    return (
        <>
            <hr className={'portfolio-hr'}/>
            <div className={'portfolio-container'}>
                <h1 className={'portfolio-heading'}>Portfolio</h1>

                <Gallery images={tilesData}
                         enableImageSelection={false}
                         onClick={(index) => {
                             // alert(index);
                         }}
                />

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                {/*{slider}*/}
                <br/>
                <br/>
                <br/>

                {/*<div>*/}
                {/*    <h2>Links</h2>*/}
                {/*    <ul style={{position: 'static'}}>*/}
                {/*        <li>*/}
                {/*            <a href={'/'} target={'_blank'}>*/}
                {/*                04/17-04/24 Hyatt*/}
                {/*            </a><br/>*/}
                {/*            <p>*/}
                {/*                As a Full Stack AEM Consultant at Hyatt, I oversaw the development of a comprehensive*/}
                {/*                system*/}
                {/*                from scratch, reimagining and implementing over 1,600 websites across 20 brands and 10*/}
                {/*                languages. This involved designing templates, migrating data from a legacy AEM system,*/}
                {/*                and*/}
                {/*                orchestrating frontend and backend development which lead to Atlas, a GraphQL API*/}
                {/*                integrated*/}
                {/*                into over 20 teams, streamlining data access for property-specific information. I*/}
                {/*                spearheaded*/}
                {/*                the migration of the frontend to React/NextJS, enhancing user experience and*/}
                {/*                significantly*/}
                {/*                contributing to Hyatt's digital presence and operational efficiency.*/}
                {/*            </p>*/}
                {/*            <Tile name={"Hyatt Brands"} image={'/portfolio/hyatt-brands.png'}/>*/}

                {/*            <h3>Timeless Collection</h3>*/}
                {/*            <Tile name={"Park Hyatt"} image={'/portfolio/Hyatt/chiph.png'}/>*/}
                {/*            <Tile name={"Grand Hyatt"} image={'/portfolio/Hyatt/grand-hyatt.png'}/>*/}
                {/*            <Tile name={"Hyatt Regency"} image={'/portfolio/Hyatt/hyatt-regency.png'}/>*/}
                {/*            <Tile name={"Hyatt"} image={'/portfolio/Hyatt/hyatt.png'}/>*/}
                {/*            <Tile name={"Hyatt Vacation Club"} image={'/portfolio/Hyatt/keysh.png'}/>*/}
                {/*            <Tile name={"Hyatt Place"} image={'/portfolio/Hyatt/hyatt-place.png'}/>*/}
                {/*            <Tile name={"Hyatt House"} image={'/portfolio/Hyatt/hyatt-house.png'}/>*/}
                {/*            <Tile name={"Hyatt Studios"} image={'/portfolio/Hyatt/hyatt-studios.png'}/>*/}
                {/*            <Tile name={"UrCove"} image={'/portfolio/Hyatt/urcove.png'}/>*/}

                {/*            <h3>Boundless Collection</h3>*/}
                {/*            <Tile name={"Miraval"} image={'/portfolio/Hyatt/miraval.png'}/>*/}
                {/*            <Tile name={"Alila"} image={'/portfolio/Hyatt/alila.png'}/>*/}
                {/*            <Tile name={"Andaz"} image={'/portfolio/Hyatt/andaz.png'}/>*/}
                {/*            <Tile name={"Thompson"} image={'/portfolio/Hyatt/thompson.png'}/>*/}

                {/*            <p>and many many more for the brands:</p>*/}
                {/*            /!*<Tile name={"Dream"} image={'/portfolio/Hyatt/Logos/Hyatt.png'}/>*!/*/}
                {/*            /!*<Tile name={"Hyatt Centric"} image={'/portfolio/Hyatt/Logos/Hyatt.png'}/>*!/*/}
                {/*            /!*<Tile name={"Caption by Hyatt"} image={'/portfolio/Hyatt/Logos/Hyatt.png'}/>*!/*/}

                {/*            <h3>Independent Collection</h3>*/}
                {/*            <p>Unbound</p>*/}
                {/*            <p>Destination by Hyatt</p>*/}
                {/*            <p>JDV</p>*/}
                {/*            /!*<Tile name={"Unbound"} image={'/portfolio/Hyatt/Logos/Hyatt.png'}/>*!/*/}
                {/*            /!*<Tile name={"Destination by Hyatt"} image={'/portfolio/Hyatt/Logos/Hyatt.png'}/>*!/*/}
                {/*            /!*<Tile name={"JDV"} image={'/portfolio/Hyatt/Logos/Hyatt.png'}/>*!/*/}

                {/*            <h3>Inclusive Collection</h3>*/}
                {/*            <p>Impression</p>*/}
                {/*            <p>Ziva</p>*/}
                {/*            <p>Zilara</p>*/}
                {/*            <p>Zoetry</p>*/}
                {/*            <p>Secrets</p>*/}
                {/*            <p>Breathless</p>*/}
                {/*            <p>Dreams</p>*/}
                {/*            <p>Hyatt Vivid</p>*/}
                {/*            <p>Alua</p>*/}
                {/*            <p>Sunscape</p>*/}

                {/*            /!*<Tile name={"Impression"} image={'/portfolio/Hyatt/Logos/Hyatt.png'}/>*!/*/}
                {/*            /!*<Tile name={"Ziva"} image={'/portfolio/Hyatt/Logos/Hyatt.png'}/>*!/*/}
                {/*            /!*<Tile name={"Zilara"} image={'/portfolio/Hyatt/Logos/Hyatt.png'}/>*!/*/}
                {/*            /!*<Tile name={"Zoetry"} image={'/portfolio/Hyatt/Logos/Hyatt.png'}/>*!/*/}
                {/*            /!*<Tile name={"Secrets"} image={'/portfolio/Hyatt/Logos/Hyatt.png'}/>*!/*/}
                {/*            /!*<Tile name={"Breathless"} image={'/portfolio/Hyatt/Logos/Hyatt.png'}/>*!/*/}
                {/*            /!*<Tile name={"Dreams"} image={'/portfolio/Hyatt/Logos/Hyatt.png'}/>*!/*/}
                {/*            /!*<Tile name={"Hyatt Vivid"} image={'/portfolio/Hyatt/Logos/Hyatt.png'}/>*!/*/}
                {/*            /!*<Tile name={"Alua"} image={'/portfolio/Hyatt/Logos/Hyatt.png'}/>*!/*/}
                {/*            /!*<Tile name={"Sunscape"} image={'/portfolio/Hyatt/Logos/Hyatt.png'}/>*!/*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href={'/'} target={'_blank'}>*/}
                {/*                06/20-06/24 UHG / Optum / Rally*/}
                {/*            </a><br/>*/}
                {/*            <p>*/}
                {/*                • Managed, maintained and performance optimized legacy healthcare related software*/}
                {/*                during*/}
                {/*                business transition phases from Rally (Chicago) to Optum (Minneapolis).<br/>*/}
                {/*                • Rewrote national pricing tool in React using Abyss, a storybook component based modern*/}
                {/*                framework.<br/>*/}
                {/*                • Maintained and updated Selenium end-to-end automated tests with 100% code*/}
                {/*                coverage.<br/>*/}
                {/*                • Participated in the rollout of Github Actions to replace Jenkins pipelines for*/}
                {/*                continuous*/}
                {/*                integration pipeline.<br/>*/}
                {/*            </p>*/}
                {/*            <Tile name={"United Health Care"} image={'/portfolio/UHC.png'}/>*/}
                {/*            <Tile name={"Rally Health"} image={'/portfolio/RallyHealth.png'}/>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href={'/'} target={'_blank'}>*/}
                {/*                03/20-08/21 Microsoft*/}
                {/*            </a><br/>*/}
                {/*            <p>*/}
                {/*                • Implemented API for remote xbox game installation from product pages on*/}
                {/*                microsoft.com<br/>*/}
                {/*                • Combined AEM SSI (server-side includes) with React SSR (server-side rendering) for*/}
                {/*                efficient Publisher caching and page loading optimization strategies.<br/>*/}
                {/*                • Implemented Buy Box for wishlist, SKU selector and color picker functionality for*/}
                {/*                Microsoft Store physical and virtual goods.<br/>*/}
                {/*                • Instructed new members on efficient AEM, React and frontend development*/}
                {/*                practices.<br/>*/}
                {/*            </p>*/}
                {/*            <Tile name={"Buy Box"} image={'/portfolio/Microsoft - Buy Box.png'}/>*/}
                {/*            <Tile name={"Remote Install"} image={'/portfolio/Microsoft - Remote Install.png'}/>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href={'/'} target={'_blank'}>*/}
                {/*                12/16-04/17 Valtech*/}
                {/*            </a><br/>*/}
                {/*            <p>*/}
                {/*                • Frontend Developer Consultant brought onboard to help close several projects for*/}
                {/*                Valtech’s*/}
                {/*                Chicago office.<br/>*/}
                {/*                • Lead frontend developer for Adobe Experience Manager (AEM) based meetings and events*/}
                {/*                site*/}
                {/*                for Hyatt (http://meetings.hyatt.com).<br/>*/}
                {/*                • Lead frontend developer for Groovy based service quote submission site for Rolex.<br/>*/}
                {/*                • Lead front end developer for AEM based Digital Assets Management (DAM) repository file*/}
                {/*                upload tool created for Lundbeck.<br/>*/}
                {/*            </p>*/}
                {/*            <Tile name={"Hyatt Meetings & Events"} image={'/portfolio/HyattEvents.png'}/>*/}
                {/*            <Tile name={"Lundbeck"} image={'/portfolio/Lundbeck.png'}/>*/}
                {/*            <Tile name={"Rolex"} image={'/portfolio/Rolex.png'}/>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href={'/'} target={'_blank'}>*/}
                {/*                07/10-07/11 American Imaging Management, Inc. – WellPoint, Inc*/}
                {/*            </a><br/>*/}
                {/*            <Tile name={"AIM"} image={'/portfolio/archive2/4.aim.jpg'}/>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href={'/'} target={'_blank'}>09/12-10/14 Vapor4Life</a><br/>*/}
                {/*            <Tile name={"V4L"}*/}
                {/*                  image={'/portfolio/archive2/3.v4l.jpg'}/>*/}
                {/*            <Tile name={"Wow Vapor"} image={'/portfolio/archive2/1.wowvapor.jpg'}/>*/}
                {/*            <Tile name={"Wow Vapor"} image={'/portfolio/archive2/2.wowvapor.jpg'}/>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href={''} target={'_blank'}>05/10-07/10 Tanagram Partners</a><br/>*/}
                {/*            <h3>Microsoft</h3>*/}
                {/*            <Tile name={"Sky Beautiful"}*/}
                {/*                  image={'/portfolio/archive2/5.microsoft.jpg'}/>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href={'https://www.twoxfour.com/'} target={'_blank'}>09/09-05/10 Two x Four Inc.</a><br/>*/}
                {/*            <h3>Firestone</h3>*/}
                {/*            <Tile name={"Wheel Works / Firestone"}*/}
                {/*                  image={'/portfolio/archive2/6.wheelworks.jpg'}/>*/}
                {/*            <Tile name={"Hibdon Tires"} image={'/portfolio/archive2/7.hibdon.jpg'}/>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href={'https://agorawebsolutions.com/'} target={'_blank'}>04/05-07/10 Agora Web*/}
                {/*                Solutions,*/}
                {/*                Inc.</a><br/>*/}
                {/*            <p>*/}
                {/*                Created over 300 websites and delivered over 100 open source web solutions to over 80*/}
                {/*                clients.*/}
                {/*                <br/>*/}
                {/*                1 employee ever - Paul Monson<br/>*/}
                {/*                <a href={'https://www.linkedin.com/in/paul-monson-16aa451a/'} target={'_blank'}>Original*/}
                {/*                    LinkedIn*/}
                {/*                    Page</a><br/>*/}
                {/*                <a href={'https://advisor.investorsgroup.com/en/paul_monson'}>Current Profile Page</a>*/}
                {/*            </p>*/}

                {/*            <h3>Domino's Pizza</h3>*/}
                {/*            <Tile name={"University of North Texas - Domino's"} image={'/portfolio/dominos/1.unt.jpg'}/>*/}
                {/*            <Tile name={"University of Connecticut - Domino's"}*/}
                {/*                  image={'/portfolio/dominos/2.uconn.jpg'}/>*/}
                {/*            <Tile name={"Louisville Domino's"} image={'/portfolio/dominos/3.louisville.jpg'}/>*/}
                {/*            <Tile name={"Midland Domino's"} image={'/portfolio/dominos/4.midland.jpg'}/>*/}
                {/*            <Tile name={"Charolette Domino's"} image={'/portfolio/dominos/5.charolette.jpg'}/>*/}
                {/*            <Tile name={"Mexico Domino's"} image={'/portfolio/dominos/6.mexico.jpg'}/>*/}
                {/*            <Tile name={"Winston-Salem Domino's"} image={'/portfolio/dominos/7.winston-salem.jpg'}/>*/}
                {/*            <Tile name={"Carolina's Domino's"} image={'/portfolio/dominos/8.carolinas.jpg'}/>*/}
                {/*            <Tile name={"St. Louis Domino's"} image={'/portfolio/dominos/9.stlouis.jpg'}/>*/}
                {/*            <Tile name={"Order my Domino's"} image={'/portfolio/dominos/10.ordermydominos.jpg'}/>*/}
                {/*            <Tile name={"UCF Domino's"} image={'/portfolio/dominos/11.ucf.jpg'}/>*/}
                {/*            <Tile name={"Isla Vista Domino's"} image={'/portfolio/dominos/12.islavista.jpg'}/>*/}
                {/*            <Tile name={"Missouri Domino's"} image={'/portfolio/dominos/13.missouri.jpg'}/>*/}
                {/*            <Tile name={"UNCC Domino's"} image={'/portfolio/dominos/14.uncc.jpg'}/>*/}
                {/*            <Tile name={"Dallas Domino's"} image={'/portfolio/dominos/15.dallas.jpg'}/>*/}
                {/*            <Tile name={"Mile High Domino's"} image={'/portfolio/dominos/16.milehigh.jpg'}/>*/}
                {/*            <Tile name={"Chicago Domino's"} image={'/portfolio/dominos/17.chicago.jpg'}/>*/}
                {/*            <Tile name={"Milwaukee Domino's"} image={'/portfolio/dominos/18.milwaukee.jpg'}/>*/}
                {/*            <Tile name={"Halloween Newsletter"} image={'/portfolio/archive2/8.halloween.jpg'}/>*/}

                {/*            <h3>National Lien and Bond</h3>*/}
                {/*            <Tile name={"NLB"} image={'/portfolio/archive1/2.nlb.jpg'}/>*/}

                {/*            <h3>Downtown Doggy</h3>*/}
                {/*            <Tile name={"Tony Schreck"} image={'/portfolio/archive1/3.dtdoggy.jpg'}/>*/}

                {/*            <h3>American Medical Association</h3>*/}
                {/*            <Tile name={"AMA"} image={'/portfolio/archive1/1.ama.jpg'}/>*/}

                {/*            /!*<h3>Casa USA</h3>*!/*/}
                {/*            /!*<Tile name={"Heather Bastounes"}*!/*/}
                {/*            /!*      waybackLink={'https://web.archive.org/web/20081102022815/http://www.casausa.us/en'}/>*!/*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href={'https://www.discover.com/'} target={'_blank'}>06/01-04/05 Morgan Stanley –*/}
                {/*                Discover*/}
                {/*                Financial Services</a>*/}
                {/*            <Tile name={"ETL - Extract, Transform & Load"} image={'/portfolio/Discover.png'}/>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href={'https://www.embs.org/'} target={'_blank'}>11/00-03/01 Rehabilitation Institute of*/}
                {/*                Chicago</a>*/}
                {/*            <Tile name={"IEEE Engineering in Medical and Biological Society"}*/}
                {/*                  image={'/portfolio/IEEE - EMBS.png'}/>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href={'https://www.icair.org/'} target={'_blank'}>06/00-08/01 iCAIR – International*/}
                {/*                Center*/}
                {/*                for Advanced Internet Research</a>*/}
                {/*            <Tile name={"iCAIR"} image={'/portfolio/iCAIR.png'}/>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href={'/Chang-Northwestern-USr.pdf#page=9'} target={'_blank'}>06/00-08/01 Northwestern*/}
                {/*                University – Material Research Center</a>*/}
                {/*            <Tile name={"IVI"} image={'/portfolio/InternationalVirtualInstitute.png'}/>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*    <br/>*/}
                {/*    <br/>*/}
                {/*    <br/>*/}
                {/*    <br/>*/}
                {/*    <br/>*/}
                {/*</div>*/}
            </div>
        </>
    );
}

export default Portfolio;