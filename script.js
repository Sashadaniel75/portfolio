const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () =>{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    document.body.classList.toggle('remove-scrolling')
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const links = document.querySelector('.burger-link');

links.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    document.body.classList.toggle('remove-scrolling')
})