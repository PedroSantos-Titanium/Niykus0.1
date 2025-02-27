function goToHome() {
    window.location.href = 'index.html';
}

function openManhwa(manhwaPage) {
    window.location.href = manhwaPage;
}

document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo img');
    
    logo.addEventListener('mouseover', () => {
        logo.style.transform = 'rotate(10deg) scale(1.1)';
    });
    
    logo.addEventListener('mouseout', () => {
        logo.style.transform = 'rotate(0deg) scale(1)';
    });

    const manhwaItems = document.querySelectorAll('.manhwa-item');
    
    manhwaItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.2)';
            item.style.boxShadow = '0px 8px 12px rgba(0, 0, 0, 0.5)';
        });
        
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.3)';
        });
    });
});
