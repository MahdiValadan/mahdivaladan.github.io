let aboutMe = 'My name is Mahdi Valadan. I recently obtain my Bachelor of computer engineering. I am passionate about web developing and game design. In my free time I like to travel, hanging out with my friends and family, enjoying nature, and playing video games.'

let programmingLangs = [
    'HTML5', 'CSS', 'JavaScript', 'Python', 'PHP', 'Java', 'C/C++', 'C#', 'x86 Assembly', 'MATLAB'
]
let frameworks = [
    'React', 'Next.JS', 'Vue', 'Nuxt', 'Alpine.js', 'Express', 'MongoDB', 'MySQL', 'Tailwind', 'jQuery', 'Unity'
]
let experiences = [
    'Work as Front - End developer on an AI - based medical image segmentation project at Hooshman, Tehran, Iran. (Fall 2022)',
    'Teaching Assistant in Internet Engineering, Faculty of Computer Engineering, K.N. Toosi University (Winter 2022)',
    'Summer internship in National Library of Iran (Summer 2021)',
    'Getting Web Developing Certificates from FreeCodeCamp (Link is available in contact session) (Winter 2021)',
    'Teaching Assistant in Compiler Design, Faculty of Computer Engineering, K.N. Toosi University (Fall 2020)',
    'Contribution as a Python programmer in a project entitled: Automatic updating of spatial databases using satellite images, Iran\'s National Elites Foundation, Tehran, Iran. (Summer 2020)'
]

let projects = [
    { name: 'The Doomed Dog', url: 'https://polimi-game-collective.itch.io/the-doomed-dog', icon: './icon/unity.png' },
    { name: 'Flutter Journal', url: 'https://www.youtube.com/watch?v=uge37Am3DRA', icon: './icon/flutter-2.png' },
    { name: 'Nico', url: 'https://www.youtube.com/watch?v=QvWR9_speOI', icon: './icon/unity.png' },
    { name: 'RIKI VC', url: 'https://riki-vc.vercel.app/', icon: './icon/nuxt.png' },
    { name: 'Github', url: 'https://github.com/MahdiValadan', icon: './icon/github.png' },
    { name: 'Codepen', url: 'https://codepen.io/MV_77/pens/showcase', icon: './icon/codepen.png' },
    { name: 'Repilt', url: 'https://replit.com/@MahdiValadan', icon: './icon/replit.png' },
]

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