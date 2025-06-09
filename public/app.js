let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                let currentLink = document.querySelector('nav ul li a[href*=' + id + ']');
                currentLink.parentElement.classList.remove('active');
                links.classList.remove('active');
                links.parentElement.classList.remove('active')
                currentLink.classList.add('active'); 
                currentLink.parentElement.classList.add('active');
            });
            
        }
    })
}