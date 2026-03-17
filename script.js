document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeText = document.getElementById('theme-text');
    const iconSpan = themeToggleBtn.querySelector('.icon');

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateBtn(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateBtn(newTheme);
    });

    function updateBtn(theme) {
        if (theme === 'light') {
            themeText.textContent = 'Dark Mode';
            iconSpan.textContent = '🌙';
        } else {
            themeText.textContent = 'Light Mode';
            iconSpan.textContent = '☀️';
        }
    }
});
