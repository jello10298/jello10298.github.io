import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {routeData} from "../App/routeData";

const ChangeTitleOnRouteChange = () => {
    const location = useLocation();

    const name = 'Angelo Gonzalez';

    useEffect(() => {
        const path = location.pathname;
        document.title = name;
        for (let i = 0; routeData.length; i++) {
            if (routeData[i].path === path) {
                document.title = `${name} - ${routeData[i].title}`;
                break;
            }
        }
    }, [location]);

    return null;
};

export default ChangeTitleOnRouteChange;