const navBar = () => {
    let nav = document.querySelector('#navLink');
    let burger = document.querySelector('#burger');

    burger.addEventListener('click', () => {
        nav.classList.toggle('hidden');
    })
}
navBar();