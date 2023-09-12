
const navBtn = document.querySelector('#navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse');
const btn = document.querySelector('.btn')

navBtn.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});

// stopping animation and transition during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});


// mail-to 
// window.open('mailto:taonga@gmail.com');
// //or with subject using below
// window.open('mailto:taonga@gmail.com?subject=subject&body=body');


// send mail
const name = document.querySelector('.your-name')
const email = document.querySelector('.you-email')
const subject = document.querySelector('.subject')

document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault()

    validateMail()
    
})

validateMail(() => {
    if (name && email && subject === '') {
        return false
        console.log('enter name')
    } else {
        return true
        console.log('proceed')
    }
})

