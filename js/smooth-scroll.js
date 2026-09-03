
function smoothScroll (target, duration) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}


document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        smoothScroll(targetElement, 500);
        
    });
});


/* ----------------- LINKS --------------- */


const enlaces = {
    "linkedin": "https://www.linkedin.com/in/marc-van-de-bovenkamp-font-3b3b99239/",
    "instagram": "https://www.instagram.com/marcbkf_98",
    "mail": "marc@bovenkamp.es",
    "phone": "tel:+346634506"
};

function fadeIn(element, duration) {
    element.style.display = 'block';
    element.style.transition = 'opacity ' + duration + 'ms';
    element.style.opacity = 1;
}

function fadeOut(element, duration) {
    element.style.transition = 'opacity ' + duration + 'ms';
    element.style.opacity = 0;
    setTimeout(function() {
        element.style.display = 'none';
    }, duration);
}

function showModal(ref) {
    // Copy
    var temp = document.createElement('input');
    document.body.appendChild(temp);
    temp.value = ref;
    temp.select();

    document.execCommand('copy');
    document.body.removeChild(temp);

    // Show modal
    var modal = document.querySelector('.modal');

    fadeIn(modal, 100);

    setTimeout(function() {
        fadeOut(modal, 100);
    }, 800);
}

document.querySelectorAll('.enlace').forEach(link => {
    let hold = false;
    link.addEventListener('click', function (e) {
        e.preventDefault();
        
        const ref = enlaces[link.id];
        
        if (link.id === "linkedin" || link.id === "instagram") {
            if (!hold) {
                window.open(ref, "_blank");
            }
        } else if (link.id === "phone") {
            if (!hold) {
                window.location.href = ref;
            }
        } else {
            showModal(ref);            
        }
        
    });
    
    
    let holdTimer;
    
    link.addEventListener('mousedown', function (e) {
        e.preventDefault();

        holdTimer = setTimeout(() => {
            hold = true;
            showModal(enlaces[link.id]);
        }, 1000);
    });

    link.addEventListener('mouseup', function (e) {
        e.preventDefault();

        clearTimeout(holdTimer);
    });

    link.addEventListener('mouseleave', function (e) {
        e.preventDefault();

        hold = false;
        clearTimeout(holdTimer);
    });

    
    
});



