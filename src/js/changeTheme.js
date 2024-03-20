function changeTheme() {
    const theme = document.querySelectorAll('.theme')
    const checkbox = document.querySelector('input')
    const mode = document.querySelector('.mode')

    theme.forEach(e => {
        e.classList.toggle('dark')
        e.classList.toggle('light')
    });

    if (checkbox.checked) {
        mode.innerHTML = 'Light Mode'
    } else {
        mode.innerHTML = 'Dark Mode'
    }
}

export default changeTheme