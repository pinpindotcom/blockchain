function showSidebar() {
    document.querySelector('.sidebar').classList.add('open');
    document.body.classList.add('no-scroll');
}

function hideSidebar() {
    document.querySelector('.sidebar').classList.remove('open');
    document.body.classList.remove('no-scroll');
}