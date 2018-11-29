//Global data
const quantityOfSections = 7;
let currentSection = 1;
let previousSection = 1;
let showPopUp = false;
// Scroll to top button
const scrollButton = document.getElementById('scrollToTopButton');
const scrolling = () => {
    if(window.pageYOffset < 1) {
        scrollButton.classList.remove('showButtonAnimation');
    } else {
        scrollButton.classList.add('showButtonAnimation');
    }
};

const clickScrollToTop = () => {
    scrollToPoint(currentSection-1);
};

//Scrolling to top on load/refresh
window.onbeforeunload = () => window.scrollTo(0, 0);

// Pagination effect
const mainContainer = document.getElementById('mainContainer');

const scrollToPoint = (scrollingDirection) => {
    if
        (currentSection > scrollingDirection &&
        currentSection - scrollingDirection < quantityOfSections+1) {
        currentSection = currentSection - scrollingDirection;
    }

    let currentPaginator =
        document.getElementById('paginator'+currentSection);

    let previousPaginator =
        document.getElementById('paginator'+(currentSection+scrollingDirection));

    currentPaginator.classList.add('activePaginator');
    previousPaginator.classList.remove('activePaginator');
    document.getElementById('section'+currentSection).scrollIntoView({behavior: 'smooth', block: 'center'});
}


const MouseWheelHandler = () => {
    const scrollingDirection = window.event.wheelDelta > 0 ? 1 : -1;
    scrollToPoint(scrollingDirection)

};
mainContainer.addEventListener("mousewheel", MouseWheelHandler, false);

//Arrow Down pressed
const arrowDownPressedHandler = () => {
    if(event.keyCode === 40) {
        scrollToPoint(-1)
    } else if(event.keyCode === 38) {
        scrollToPoint(1)
    }
}

//Paginations symbols on right side of the screen
let n=1;
while(n<=quantityOfSections) {
        let newLi = document.createElement('li');
        newLi.setAttribute('id', 'paginator'+n);
        newLi.setAttribute('onClick', `scrollToPoint(currentSection-${n})`);
        n===1 ? newLi.classList.add('activePaginator') : null;
        document.getElementById('paginationContainer').
            appendChild(
                newLi
            );

        n=n+1;
    }

//Toggle popup
const togglePopupHandler = () => {
    const cover = document.getElementById('cover');
    const popUp = document.getElementById('popup');
    cover.classList.toggle('showCover');
    popUp.classList.toggle('showPopup');
}
