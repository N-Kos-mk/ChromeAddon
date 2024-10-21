function main() {
    let isAdOpen = document.querySelector('div.fc-message-root');    
    if (isAdOpen) {
        document.body.style.overflow = 'auto';
        isAdOpen.remove();
    }
}

window.onload = function() {
    p = setInterval(main, 500);
}