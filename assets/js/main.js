const toggleButton =document.getElementsByClassName('toggle-button')[0];
const navBarlist = document.getElementsByClassName('navbar-list')[0];

toggleButton.addEventListener('click',()=>{
    navBarlist.classList.toggle('active');
    
    
})