import React from 'react';

const AboutMe = () => {
    return (
        <div className="about-me">
            <h1>Angelo Gonzalez</h1>
            <p>Visit me @</p>
            <p>6723 N Ashland Ave, Chicago, IL 60626</p>
            <p>Call and/or Text Me @ <a href="tel:+13123076448">(312) 307-6448</a></p>
            <p>Email Me @ <a href="mailto:angelogonzalez6448@icloud.com">angelogonzalez6448@icloud.com</a></p>

            <h2>Awards</h2>
            <ul>
                <li>National Hispanic Scholar</li>
            </ul>

            <h2>Associations</h2>
            <ul>
                <li>ACM</li>
                <li>Alianza</li>
                <li>IEEE</li>
                <li>Sigma Phi Epsilon</li>
            </ul>

            <h2>Languages</h2>
            <ul>
                <li>English (natively fluent)</li>
                <li>Spanish (natively fluent)</li>
            </ul>

            <h2>LinkedIn</h2>
            <p><a href="https://www.linkedin.com/in/angelogonzalez1/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/angelogonzalez1/</a></p>

            <h2>Portfolio</h2>
            <p><a href="https://jello10298.github.io" target="_blank" rel="noopener noreferrer">https://jello10298.github.io</a></p>

            <h2>Profile</h2>
            <p>Enthusiastic and ambitious software developer with over two decades of expertise in project management, leadership, and technical skills. Exceptionally capable of designing and developing web-based solutions using React, NextJS, AEM, GraphQL, Apollo, ReactJS, and TypeScript. Possess a strong initiative in managing development lifecycles from scheduling to quality and risk management. Proactive and motivated in mentoring teams, leading strategy development, and facilitating change management for diverse clients.</p>

            <h2>Skills</h2>
            <ul>
                <li>Proficient in JavaScript, TypeScript (superset of JavaScript with type safety, decorators, generics, and interfaces), ReactJS (utilizing Hooks, React Router, and managing component lifecycle), and React Native.</li>
                <li>Experienced with NextJS (for server-side rendering, static site generation, and image optimization), and Jamstack.</li>
                <li>Strong knowledge in developing AEM Components, managing CMS, and proficient in Java.</li>
                <li>Adept at using GraphQL with Apollo client for state management and executing GraphQL queries. Experience with resolvers, mutation, query, and SDL.</li>
                <li>Specialized in Redux, essential for state management in a React application.</li>
                <li>Proficient in handling JSX/TSX in ReactJS and TypeScript.</li>
                <li>Skills in project management including budgeting, scheduling, risk management, scope management, and stakeholder management.</li>
                <li>Strong leadership skills including team building, decision-making, strategy development, and mentoring.</li>
                <li>An ambitious self-starter and driven professional.</li>
                <li>Specialized in Java, Python, PERL, PHP, Javascript, Typescript, Angular, React, React Native and Vue - with an emphasis on AI/ML applications</li>
                <li>Profound knowledge of SPA (Single Page Applications) utilizing frameworks such as Webpack, Bootstrap, CSS3, Angular, React and React Native</li>
                <li>Decade-long experience developing applications following the Micro-services Architecture pattern through REST APIs</li>
                <li>Extensive experience with cloud technologies such as AWS including EC2, ECS, Lambda, S3, and RDS</li>
                <li>Hands-on expertise with containerization using Kubernetes/Docker and messaging platforms like KAFKA, MQ, etc.</li>
                <li>Exceptional skills in Git, setting up AWS CI/CD pipelines, adhering to reliable CI-CD practices using pre/post build processes, code linting and unit testing</li>
                <li>Experience with NoSQL databases like CouchDB, MongoDB and Redis</li>
                <li>Astute capabilities in object-oriented design skills, scalable software designs using design patterns and standardized protocols.</li>
                <li>Able to work in different time zones, with a diversity of team members</li>
            </ul>

            <h2>Education</h2>
            <p>Master of Science — Computer and Information Science, Northwestern University (02/16 - 12/17)</p>
            <p>Bachelor of Science — Computer Science, Northwestern University (06/98 - 06/03)</p>

            <h2>Experience</h2>
            <ul>
                <li>
                    <strong>Hyatt Hotels Corporation, Chicago, Illinois</strong>
                    <span>Senior Full Stack Developer (08/20 - 05/24)</span>
                    <p>Led the development and deployment of numerous web applications, focusing on project management and stakeholder management. Leveraged React and NextJS for frontend development, utilizing my knowledge of Hooks and React Router. Heavily utilized TypeScript for these applications, taking advantage of its strongly-typed nature and ES6+ features. Implemented GraphQL for efficient data handling and Apollo Client for a robust state management solution. Emphasized budgeting and risk management throughout the development process.</p>
                </li>
                <li>
                    <strong>United Healthcare/Optum/Rally Health, Chicago, Illinois</strong>
                    <span>Senior Software Developer (05/20 - 05/24)</span>
                    <p>Storybook-driven rewrite of an AngularJS Jenkins-based build pipeline, transforming NPM packages into React/React Native components which are scaffolded into a custom single-context React SPA, Android app, and iOS app using a GitHub Actions pipeline. COVID-19 Illinois Economic Stability Initiative.</p>
                </li>
            </ul>
        </div>
    );
}

export default AboutMe;