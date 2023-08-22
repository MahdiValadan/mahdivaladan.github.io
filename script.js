let aboutMe = 'My name is Mahdi Valadan. I recently obtain my Bachelor of computer engineering. I am passionate about web developing and game design. In my free time I like to travel, hanging out with my friends and family, enjoying nature, and playing video games.'

let programmingLangs = [
    'HTML5', 'CSS', 'JavaScript', 'Python', 'PHP', 'Java', 'C/C++', 'x86 Assembly', 'MATLAB'
]
let frameworks = [
    'jQuery', 'React', 'Vue', 'Nuxt', 'Express', 'MongoDB', 'MySQL', 'Tailwind'
]
let experiences = [
    'Teaching Assistant in Internet Engineering, Faculty of Computer Engineering, K.N. Toosi University (winter 2022)',
    'Summer internship in National Library of Iran (Summer 2021)',
    'Getting Web Developing Certificates from FreeCodeCamp (Link is available in contact session) (Winter 2021)',
    'Teaching Assistant in Compiler Design, Faculty of Computer Engineering, K.N. Toosi University (Fall 2020)',
    'Contribution as a Python programmer in a project entitled: Automatic updating of spatial databases using satellite images, Iran\'s National Elites Foundation, Tehran, Iran. (Summer2020)'
]

let showcase = [{name: 'RIKI VC', url: 'https://riki-vc.vercel.app/'},]

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