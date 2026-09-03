
window.onload = () => {

    const linesContainer = document.querySelector('.lines-container');
    let lastScrollY = 0;
    


/*  ------------------------- LINES START -------------------------- */
    const rowTop = document.createElement("div");
    const rowBottom = document.createElement("div");
    const topPositionLines = 500;
    

    rowTop.classList.add('row');
    rowBottom.classList.add('row');

//        rowTop.style.top = "-70px";
    rowTop.style.top = topPositionLines + "px";
    rowTop.style.height = "1500px";
//    rowTop.style.transform = "rotate(45deg)"

//        rowBottom.style.top = "-70px";
    rowBottom.style.top = topPositionLines + "px";
//        rowBottom.style.left = "-50px";
    rowBottom.style.height = "1500px";
//    rowBottom.style.transform = "rotate(45deg)"    

//    linesContainer.appendChild(rowTop);
//    linesContainer.appendChild(rowBottom);


    for(let i = 0; i < 200; i++) { // 200
        const lineTop = document.createElement('div');
        const lineBottom = document.createElement('div');

        lineTop.classList.add('line');
        const xTop = (i * 500) - 5000;
        lineTop.style.left = xTop + "px";
        lineTop.style.height = 1500 + "px";
//            lineTop.style.top = "-70px";
        lineTop.style.top = topPositionLines + "px";
        lineTop.style.transform = "rotate(30deg)";
        lineTop.style.opacity = 0;

        lineBottom.classList.add('line');
        const xBottom = (i * 500) - 5000;
        lineBottom.style.left = xBottom + "px";
        lineBottom.style.height = 1500 + "px";
        lineBottom.style.color = "red";
//            lineBottom.style.top = "-70px";
        lineBottom.style.top = topPositionLines + "px";
        lineBottom.style.transform = "rotate(-30deg)";
        lineBottom.style.opacity = 0;


        rowTop.appendChild(lineTop);
        rowBottom.appendChild(lineBottom);

    }
    
    
    
/*  ------------------------- MATRIX LETTERS START -------------------------- */
    const getRandomLetter = () => {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        return chars[Math.floor(Math.random() * chars.length)];
    }
    
    const createLetter = () => {
        const letter = document.createElement('div');
        letter.classList.add('letter');
        letter.textContent = getRandomLetter();
        
        const startX = Math.random() * window.innerWidth;
        letter.style.left = startX + "px";
        letter.style.top = window.scrollY + "px";
        
        const duration = 2 + Math.random() * 3;
        const delay = Math.random() * 1;
        letter.style.animationDuration = duration + "s";
        
        linesContainer.appendChild(letter);
        
        setTimeout(() => {
            letter.remove();
        }, (duration) * 1000);
    };
    

/*  ------------------------- CHART -------------------------- */
    const baseStyle = {
        position: 'absolute',
        width: '1px',
        display: 'block',
        transformOrigin: 'top',
    };
    const getLineStyle = (startX, startHeight, finishHeight, side) => {
        const cut1 = {
            top: '0',
            left: startX + 'px',
            height: startHeight + 'px',
            background: 'rgba(30, 237, 248, 0.5)',
        }; 
        const cut2 = {
            top: startHeight + 'px',
            left: startX + 'px',
            height: '5px',
            transform: side === 0 ? 'rotate(45deg)' : 'rotate(-45deg)',
            background: 'rgba(30, 237, 248, 0.5)',
        };
        const cut3 = {
            top: startHeight + 4 + 'px',
            left: (side === 0 ? startX - 3 : startX + 3) + 'px',
            height: finishHeight + 'px',
            background: 'linear-gradient(to top, transparent 40%, rgba(30, 237, 248, 0.5))',
        };
        
        return {
            cut1: cut1,
            cut2: cut2,
            cut3: cut3,
        };
    };
    
    
    let airbus;
    
    let airbusStartY; 
    let topY;
    setTimeout(() => {
        airbus = document.querySelector(".documentos#airbus");
        airbusStartY = airbus.getBoundingClientRect().top + window.scrollY;
        topY = airbusStartY + 500;
    }, 400);
    
    
    const createBox = () => {
        let extraPixels = 0;
        let widthBoxes = 0;
        let xbox = 30;
        let topBoxBefore = airbusStartY + 500;
        
        widthBoxes = window.innerWidth - (xbox * 2);
        
        
        while((xbox + 20) < widthBoxes) {
            const box = document.createElement('div');
            const plusTopRandom = Math.floor(Math.random() * (60 - (-40) + 1)) + (-40);
            box.classList.add('box');
            box.style.top = topBoxBefore + 'px';
            box.style.left = xbox + 'px';
            box.style.zIndex = '1';
            const optionsBoxHeight = [ 180, 230, 280, 360];
            const randomIBoxHeight = Math.floor(Math.random() * optionsBoxHeight.length);
            let boxHeight = optionsBoxHeight[randomIBoxHeight];
            box.style.height = boxHeight + 'px';

            /* Lines in box */
            for(let i = 0; i < 2; i++) {
                const goToSideRandom = Math.round(Math.random());
                const optionsStart = [[9, 10, 11], [19, 20, 21]];
                const optionsHeight = [55, 70, 85, 95];
                const randomIStart = Math.floor(Math.random() * optionsStart[0].length);
                const randomIHeight = Math.floor(Math.random() * optionsHeight.length);
                const startX = optionsStart[i][randomIStart];
                const startHeight = optionsHeight[randomIHeight];
                const finishHeight = optionsHeight[optionsHeight.length - 1 - randomIHeight];
                

                const lineStyle = getLineStyle(startX, startHeight, finishHeight, goToSideRandom);

                const cut1 = document.createElement('span');
                Object.assign(cut1.style, baseStyle, lineStyle.cut1);
                const cut2 = document.createElement('span');
                Object.assign(cut2.style, baseStyle, lineStyle.cut2);
                const cut3 = document.createElement('span');
                Object.assign(cut3.style, baseStyle, lineStyle.cut3);
                box.appendChild(cut1);
                box.appendChild(cut2);
                box.appendChild(cut3);
            }
            

            linesContainer.appendChild(box);
            xbox += 45;
            topBoxBefore -= plusTopRandom;
            topY = topBoxBefore < topY ? topBoxBefore : topY;
            
        }
        
    };
    
    const createGraphicLine = () => {
        let topGraphicLineBefore = topY;
        
        let xLine = -5;
        let yLine = topGraphicLineBefore;
        let i = 0;
        let actualTop = topGraphicLineBefore;
        
        const size = [1/3, 1/5, 1/4, 1/10, 1/4, 1/3]
        
        while (i < size.length) {
            const graphicLine = document.createElement('div');
            
            const sizeLine = window.innerWidth * size[i]
            graphicLine.classList.add('graphic-line');
            graphicLine.style.height = sizeLine + 'px';
            graphicLine.style.top = yLine + 'px';
            graphicLine.style.left = xLine + 'px';
            graphicLine.style.transform = i % 2 === 0 ? 'rotate(' + (-90 + 50) + 'deg)' : 'rotate(' + (-90 - 50) + 'deg)';
            
            
            const c1 = sizeLine * Math.cos(50 * (Math.PI / 180))
            const c2 = sizeLine * Math.sin(50 * (Math.PI / 180))
            xLine += c1;
            yLine = i % 2 === 0 ? yLine + c2 : yLine - c2;
            i++;
            linesContainer.appendChild(graphicLine);
        }
        
        // HACER FLECHA
        const arrow1 = document.createElement('div');
        arrow1.classList.add('graphic-line');
        arrow1.style.top = yLine + 'px';
        arrow1.style.left = xLine + 'px';
        arrow1.style.transform = 'rotate(10deg)';
        
        const arrow2 = document.createElement('div');
        arrow2.classList.add('graphic-line');
        arrow2.style.top = yLine + 'px';
        arrow2.style.left = xLine + 'px';
        arrow2.style.transform = 'rotate(70deg)';
        
        linesContainer.appendChild(arrow1)
        linesContainer.appendChild(arrow2)
        
    }
    
    setTimeout(() => {
        createBox();

        createGraphicLine();
    }, 1000);
    
    
    /* --------- BACKGROUND COLOR FUNCTION ------------ */
    const getColorStatus = (scrollY, minScroll, maxScroll) => {
        return scrollY > minScroll ? Math.min((scrollY - minScroll) / (maxScroll - minScroll), 1) : 0;
    };
    
    getColorStatus(window.scrollY, )
    
    
    
    
    
/*  ------------------------- SCROLL -------------------------- */

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        
        /* ------------------------- LINES ------------------------ */
        
        const fromScrollLines = 1000;
        const halfScrollLines = 1250;
        const toScrollLines = 2000;
        const topLines = rowTop.querySelectorAll('.line');

        // from 0 - 0.5, from 1000 to 1200 to 1500 back 0
        const progressH = scrollY > fromScrollLines ? Math.min((scrollY - fromScrollLines) / (halfScrollLines - fromScrollLines), 1) : 0;
        const progressT = scrollY > halfScrollLines ? Math.min((scrollY - halfScrollLines) / (toScrollLines - halfScrollLines), 1) : 0;

        const opacity = progressT > 0 ? 0.5 - Math.round(progressT * 0.5 * 10) / 10 : Math.round(progressH * 0.5 * 10) / 10;

        topLines.forEach((line) => {
        line.style.opacity = opacity;

        });

        const bottomLines = rowBottom.querySelectorAll('.line');
        bottomLines.forEach((line) => {
            line.style.opacity = opacity;
        });

        
        /* ------------------------- MATRIX LETTERS ------------------------ */
        
//        if (scrollY > lastScrollY & scrollY > 50 & scrollY < 600) {
//            for (let i = 0; i < 30; i++) { // letras por cada scroll
//                createLetter();
//            }
//        }
//        
//        lastScrollY = scrollY;
        
        
        /* ------------------------- BACKGROUND COLOR ------------------------ */
        
        document.body.style.backgroundColor = 'rgb(30, 77, 125)';
        
        
//        
//        /* GRAY */
//        const minScrollGray = 800;
//        const maxScrollGray = 1200;
//        
//        const progressGray = getColorStatus(scrollY, minScrollGray, maxScrollGray);
//        
//        const grayValue = Math.floor(progressGray * 128);
//        document.body.style.backgroundColor = 'rgb(' + grayValue + ',' + grayValue + ', ' + grayValue + ')';
//        
//        /* DARK BLUE */
//        const minScrollDarkBlue = 1800;
//        const maxScrollDarkBlue = 2200;
//        
//        const progressDarkBlue = getColorStatus(scrollY, minScrollDarkBlue, maxScrollDarkBlue);
//        const darkBlueValueR = Math.floor(grayValue + (30 - grayValue) * progressDarkBlue);
//        const darkBlueValueG = Math.floor(grayValue + (77 - grayValue) * progressDarkBlue);
//        const darkBlueValueB = Math.floor(grayValue + (125 - grayValue) * progressDarkBlue);
//        
//        document.body.style.backgroundColor = 'rgb(' + darkBlueValueR + ',' + darkBlueValueG + ',' + darkBlueValueB +')';
        
    });   
};
