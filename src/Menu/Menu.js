import React, {useEffect, useRef} from 'react';
import $ from 'jquery';
import './Menu.css';
import {Link, HashRouter as Router} from "react-router-dom";

function Menu() {
    const blobRef = useRef(null);
    const blobPathRef = useRef(null);
    const hamburgerRef = useRef(null);
    let menuExpanded = false;

    useEffect(() => {
        const height = window.innerHeight;
        let x = 0,
            y = height / 2,
            curveX = 10,
            curveY = 0,
            targetX = 0,
            xitteration = 0,
            yitteration = 0;
        const blob = $(blobRef.current),
            blobPath = $(blobPathRef.current),
            hamburger = $(hamburgerRef.current);

        $(window).on('mousemove', (e) => {
            x = e.pageX;
            y = e.pageY;
        });

        $('.hamburger, .menu-inner').on('mouseenter', function () {
            $(this).parent().addClass('expanded');
            menuExpanded = true;
        });

        $('.menu-inner').on('mouseleave', function () {
            menuExpanded = false;
            $(this).parent().removeClass('expanded');
        });

        function easeOutExpo(currentIteration, startValue, changeInValue, totalIterations) {
            return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue;
        }

        const hoverZone = 150;
        const expandAmount = 20;

        function svgCurve() {
            if ((curveX > x - 1) && (curveX < x + 1)) {
                xitteration = 0;
            } else {
                if (menuExpanded) {
                    targetX = 0;
                } else {
                    xitteration = 0;
                    if (x > hoverZone) {
                        targetX = 0;
                    } else {
                        targetX = -(((60 + expandAmount) / 100) * (x - hoverZone));
                    }
                }
                xitteration++;
            }

            if ((curveY > y - 1) && (curveY < y + 1)) {
                yitteration = 0;
            } else {
                yitteration = 0;
                yitteration++;
            }

            curveX = easeOutExpo(xitteration, curveX, targetX - curveX, 100);
            curveY = easeOutExpo(yitteration, curveY, y - curveY, 100);

            var anchorDistance = 400;
            var curviness = anchorDistance - 40;

            var newCurve2 = "M60," + height + "H0V0h60v" + (curveY - anchorDistance) + "c0," + curviness + "," + curveX + "," + curviness + "," + curveX + "," + anchorDistance + "S60," + (curveY) + ",60," + (curveY + (anchorDistance * 2)) + "V" + height + "z";

            blobPath.attr('d', newCurve2);
            blob.width(curveX + 60);
            hamburger.css('transform', 'translate(' + curveX + 'px, ' + curveY + 'px)');
            // $('h2').css('transform', 'translateY('+curveY+'px)');

            window.requestAnimationFrame(svgCurve);
        }

        window.requestAnimationFrame(svgCurve);
    }, []);

    return (
        <div id="menu">
            <div className="hamburger" ref={hamburgerRef}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <div className="menu-inner">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    {/*<li><a href={'/tarot'}>Tarot Game</a></li>*/}
                    <li><a href={'/resume/Angelo Gonzalez - One Page.pdf'} target={'_blank'}
                           rel={'noreferrer'}>Resume</a></li>
                    <li><a href={'/resume/Angelo Gonzalez - Curriculum Vitae.pdf'} target={'_blank'}
                           rel={'noreferrer'}>Cirum
                        Vitae</a></li>
                    <li><Link to={'/portfolio'}>Portfolio</Link></li>
                    <li><Link to={'/about'}>About</Link></li>

                    {/*<li><a href={'http://www.google.com/search?q=Angelo+Gonzalez+Northwestern+Portfolio'}>Portfolio</a></li>*/}
                    {/*<li><a href={'http://www.google.com/search?q=Angelo+Gonzalez+NES+Emulator'}>NES Emulator</a></li>*/}
                    {/*<li><a href={'http://www.google.com/search?q=Angelo+Gonzalez+Flight+Simulator+'}>Flight Simulator</a></li>*/}
                    {/*<li>Gambling is bad ...</li>*/}
                    {/*<li>Witches are bad ...</li>*/}
                    {/*<li>Saints are good ...</li>*/}
                    {/*<li>Puppies are good ...</li>*/}
                    {/*<li>ya know, just in case<br/>YA FORGOT</li>*/}
                </ul>
                <a href={'https://www.linkedin.com/in/angelogonzalez1/'} target={'_blank'}
                   className={'linkedInLogo'}>
                    <img src={'LinkedIn_Logo.svg'}/> <br/>
                    {/*<blockquote>*/}
                    {/*“Imitation is the sincerest form of flattery that mediocrity can pay to greatness”*/}
                    {/*</blockquote>*/}
                </a>
            </div>

            <svg version="1.1" id="blob" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink"
                 ref={blobRef}>
                <path id="blob-path" d="M60,500H0V0h60c0,0,20,172,20,250S60,900,60,500z" ref={blobPathRef}/>
            </svg>
        </div>
    );
}

export default Menu;