/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)



/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*=========== CONTACT-FORM =======*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbyB-1is_vCJLzIjKYnRGN1Wh8AkZS6eX4va1ulM4CLe7CPcTkFCPufrv97EhLJBkk9-xw/exec'
            const form = document.forms['submit-to-google-sheet']
            const msg = document.getElementById("msg");
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msg.innerHTML = "Message Sent Successfully"
                    setTimeout(function(){
                        msg.innerHTML = ""
                    },5000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
            })

/*=========== DARK-MODE =======*/
var icon = document.getElementById("icon")

icon.onclick = function(){
    console.log('Icon clicked'); // Check if this logs when you click
    document.body.classList.toggle("dark-theme");
    console.log(document.body.classList.contains("dark-theme")); // Should log true when dark mode is active
    if(document.body.classList.contains("dark-theme")){
        icon.src = "assets/img/sun.png"
        document.body.style.backgroundColor = "#333333"; 
        // document.body.style.Color = "#F0F0F0"; 


    }else{
        icon.src = "assets/img/moon.png"
        document.body.style.backgroundColor = "#F0F0F0"; 
        // document.body.style.Color = "#333333"; 


    }
}
