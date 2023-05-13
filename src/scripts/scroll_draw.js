import { useEffect } from 'react';

useEffect(() => {
    var svgElement = document.getElementById("scroll-svg");
    var length = path.getTotalLength(); 

    lastKnownScrollPosition = window.scrollY;
    svgElement.style.strokeDasharray= length;
    svgElement.style.strokeDashoffset = length;

    function svgDraw() {
        var scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) 
            / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        
        var draw = length * scrollPercent;
        svgElement.style.strokeDashoffset = length - draw;
    }; 

    window.addEventListener("scroll", svgDraw()) ;
}, [])