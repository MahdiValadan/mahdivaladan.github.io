let programmingLangs = ['HTML5', 'CSS', 'JavaScript', 'Python', 'PHP', 'Java', 'C/C++', 'x86 Assembly', 'MATLAB']
let frameworks = ['jQuery', 'React', 'Vue', 'Nuxt', 'Express', 'MongoDB', 'MySQL', 'Tailwind']

let width = '350px'
// Check whether user device is vertical or horizontal 
if (window.innerHeight > window.innerWidth) {
    width = '100%'
}
document.addEventListener('alpine:init', () => {
    Alpine.data('menu', () => ({
        open: false,
        icon: 'menu',
        menuWidth: '0%',
        toggle() {
            this.open = !this.open
            if (this.open) {
                this.icon = 'close'
                this.menuWidth = width
            } else {
                this.icon = 'menu'
                this.menuWidth = '0%'
            }
            const icon = document.getElementById("nav-button-icon");
            icon.classList.add('animation-swing')
            icon.addEventListener("animationend", () => {
                icon.classList.remove("animation-swing")
            })
        },
    }))
})