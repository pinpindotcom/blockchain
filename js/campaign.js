function showSidebar() {
    document.querySelector('.sidebar').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function hideSidebar() {
    document.querySelector('.sidebar').classList.remove('open');
    document.body.style.overflow = 'auto';
}