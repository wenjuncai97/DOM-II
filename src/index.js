import './less/index.less'

// Your code goes here!

//1. logo heading mouseover
const funBusHead = document.querySelector('.logo-heading');
funBusHead.addEventListener("mouseover", event => {
    event.target.style.color = "pink";

    setTimeout(function() {
        event.target.style.color = "";
    }, 1000);
});


//2. home button click
const homeNav = document.querySelector('nav a:nth-of-type(1)')
homeNav.addEventListener("click", event => {
    homeNav.textContent = `Click on Contact!`;

    setTimeout(function() {
        event.target.textContent = 'Home'
    }, 2000)
});

const dontClick = document.querySelector('nav a:nth-of-type(4)')
dontClick.addEventListener('click', event => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
});


//3. about us button focus
const aboutUs = document.querySelector('nav a:nth-of-type(2)');
aboutUs.addEventListener('focus', event => {
  event.target.style.background = 'pink';

//   setTimeout(function() {
//       event.target.style.background = ""
//   }, 1000);
});


//4. about us button blur
aboutUs.addEventListener('blur', (event) => {
  event.target.style.background = "";
});


//5. third destination background-color using auxclick
let button = document.querySelector('.destination:nth-of-type(3)');

function random(number) {
  return Math.floor(Math.random() * number);
};
function randomColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
};
button.onclick = function() {
  button.style.backgroundColor = randomColor();
};
button.onauxclick = function(e) {
  e.preventDefault();
  button.style.color = randomColor();
};
button.oncontextmenu = function(e) {
  e.preventDefault();
};


//6. toggle class of large first img
// const letsGo = document.querySelector('img');
// letsGo.addEventListener('dblclick', function (e) {
//     letsGo.classList.toggle('large');
// });
document.body.addEventListener('dblclick', event => {
    event.target.classList.toggle('large');
});


//7. copy copied words into console
document.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text => {
        console.log(text)
    });
});


//8. console log the keys we type 
window.addEventListener('keydown', event => {
    if (event.key === 'g') {
        console.log("NO G'S ALLOWED");
    };
});


//9,10 mouseenter, mouseleave
const destinations = document.querySelectorAll('.destination');
for (let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold'
    });
    destination.addEventListener('mouseleave', () => {
        setTimeout(() => {
            destination.style.fontWeight = 'initial'
        }, 500);
    });
};




// function logSelection(event) {
//     const copyright = document.querySelector('.destination h4');
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     copyright.textContent = `You selected: ${selection}`;
// }

// const input = document.querySelector('input');
// input.addEventListener('select', logSelection);


// const introHead = document.querySelector('.intro p')
// introHead.addEventListener("dblclick", event => {
//     console.log("Sorry cant expand the text rip");
// });