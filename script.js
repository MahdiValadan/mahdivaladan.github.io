// Profile-driven content pulled from the CV.
const heroSummary = 'I work across frontend, backend, and interactive systems, but the part I connect with most is creative technology. I like building products that feel clear, expressive, and genuinely enjoyable to use.'

const profileSummary = 'A lot of my perspective comes from art, nature, and the way small details change how something feels. That carries into my work through discipline, patience, and a strong preference for products that feel considered rather than rushed.'

// Short labels and chips used in the hero/profile sections.
const expertise = [
    'Full-Stack Development',
    'Data Visualization',
    'Interactive Applications',
    'Creative Technologies',
    'UX/UI Design',
    'Game Development',
    // 'WebGIS Products',
]

const introStats = [
    {
        label: 'Current role',
        value: 'Full-Stack Developer',
        note: 'NHAZCA, focused on a WebGIS data visualization platform.',
    },
    {
        label: 'Core stack',
        value: 'Next.js, Python, PostGIS',
        note: 'With Mapbox, tile services, Docker, and frontend delivery.',
    },
    {
        label: 'Education',
        value: 'M.Sc. Computer Science',
        note: 'Politecnico di Milano, completed in December 2025.',
    },
]

const quickFacts = [
    {
        label: 'Current location',
        value: 'Milan and Rome, Italy',
    },
    {
        label: 'Main interest',
        value: 'Creative, aesthetic, and high-quality digital products',
    },
    {
        label: 'Creative side',
        value: 'Game development, interactive systems, and motion-aware UI',
    },
    {
        label: 'Languages',
        value: 'English, Persian, and Italian',
    },
]

const focusAreas = [
    {
        title: 'Product engineering',
        copy: 'My recent work is not just UI assembly. It includes frontend implementation, backend services, deployment, and platform decisions around real products.',
    },
    {
        title: 'Complex product systems',
        copy: 'I am comfortable working inside data-heavy products and more technical system constraints, while still keeping attention on usability, clarity, and the overall product experience.',
    },
    {
        title: 'Frontend quality',
        copy: 'I care about frontend quality in a practical sense: clearer layouts, better visual hierarchy, cleaner interactions, and interfaces that feel dependable.',
    },
    {
        title: 'Interactive thinking',
        copy: 'Projects in Unity and Flutter push how I think about interaction, pacing, motion, and how people actually experience software, not just how it is coded.',
    },
]

// Professional roles shown in the experience section.
const career = [
    {
        company: 'NHAZCA',
        role: 'Full-Stack Developer',
        type: 'Contract',
        location: 'Rome, Italy',
        period: 'Apr 2025 - Present',
        summary: 'Developing and deploying a WebGIS data visualization platform with responsibility across frontend, backend, spatial services, deployment, and product infrastructure.',
        bullets: [
            'Building the platform with Next.js and Python for data-rich, map-centric user workflows.',
            'Creating geospatial tile services with Mapbox, TileServer GL, TiTiler, and MinIO.',
            'Managing spatial data with Supabase, PostgreSQL, and PostGIS.',
            'Deploying services with Docker, Coolify, Dokploy, and Vercel, while maintaining Ubuntu server workflows over SSH and Git.',
            'Integrating platform services such as Mailgun and AI development tooling including Codex and Claude.',
        ],
        stack: ['Next.js', 'Python', 'Mapbox', 'PostGIS', 'Docker', 'Vercel'],
    },
    {
        company: 'NHAZCA',
        role: 'Full-Stack Developer Intern',
        type: 'Internship',
        location: 'Rome, Italy',
        period: 'Dec 2024 - Mar 2025',
        summary: 'Worked on the earlier phase of the same data visualization platform, focused on integrating WebGIS capabilities and improving how geospatial and time-series data are handled in the product.',
        bullets: [
            'Contributed to the platform architecture for geospatial and analytical datasets.',
            'Implemented web application features that improved the usability of complex data views.',
            'Supported the integration of WebGIS capabilities into the broader product workflow.',
        ],
        stack: ['Next.js', 'WebGIS', 'Geospatial Data', 'Time-Series Data'],
    },
    {
        company: 'Hooshman Institute',
        role: 'Front-End Developer',
        type: 'Part-time',
        location: 'Tehran, Iran',
        period: 'Oct 2022 - Mar 2023',
        summary: 'Worked on an AI-based medical image segmentation project, building frontend components and improving the user experience around technically complex workflows.',
        bullets: [
            'Implemented user-facing interfaces for an AI-assisted medical product.',
            'Focused on frontend polish, usability, and clearer interaction flow.',
            'Collaborated within an applied AI environment using Tailwind CSS, JavaScript, and Django templates.',
        ],
        stack: ['Tailwind CSS', 'JavaScript', 'Django Templates'],
    },
    {
        company: 'Iran National Library',
        role: 'Full-Stack Developer Intern',
        type: 'Internship',
        location: 'Tehran, Iran',
        period: 'Jul 2021 - Sep 2021',
        summary: 'Built a website for showcasing the Iran National Library and enabling book downloads, covering both frontend and backend development responsibilities.',
        bullets: [
            'Developed the platform end to end using Django and JavaScript.',
            'Built interfaces and data flows for browsing and downloading content.',
            'Delivered a complete working site rather than isolated UI pieces.',
        ],
        stack: ['Django', 'JavaScript', 'HTML', 'CSS'],
    },
    {
        company: 'K. N. Toosi University of Technology',
        role: 'Python Developer',
        type: 'Summer Job',
        location: 'Tehran, Iran',
        period: 'Aug 2020 - Sep 2020',
        summary: 'Contributed to a research-oriented software project focused on automatic updates of spatial databases using satellite imagery.',
        bullets: [
            'Worked on a geospatial workflow grounded in spatial data automation.',
            'Used Python together with Qt and QGIS library tooling.',
            'Gained early experience in spatial software work that later connected naturally to WebGIS products.',
        ],
        stack: ['Python', 'Qt', 'QGIS'],
    },
]

// Teaching roles kept separate from the main job timeline.
const academicExperience = [
    {
        role: 'Teaching Assistant, Internet Engineering',
        place: 'K. N. Toosi University of Technology',
        period: '2021 - 2022',
    },
    {
        role: 'Teaching Assistant, Compiler Design',
        place: 'K. N. Toosi University of Technology',
        period: '2020',
    },
]

// Degree information and academic details.
const education = [
    {
        degree: 'Master of Computer Science and Engineering',
        school: 'Politecnico di Milano',
        period: 'Sep 2022 - Dec 2025',
        summary: 'Thesis: Modeling Value Detection in Dyadic Conversations for Human-Human and Human-Agent Well-being Coaching.',
        gpa: 'GPA: 88/110',
        details: 'Selected coursework included video game development and design, advanced user interfaces, hypermedia applications, artificial neural networks and deep learning, mobile applications, and multidisciplinary projects.',
    },
    {
        degree: 'Bachelor of Computer Engineering',
        school: 'K. N. Toosi University of Technology',
        period: 'Sep 2017 - Jul 2022',
        summary: 'Thesis: Design and Development of an Interest-free Loan System with Software as a Service Approach.',
        gpa: 'GPA: 16.6/20',
        details: 'Core coursework included software engineering, software testing, system analysis and design, artificial intelligence, speech and language processing, data structures, databases, and advanced programming.',
    },
]

// Grouped skills for the skills section.
const skillGroups = [
    {
        title: 'Frontend',
        note: 'Interface and product implementation',
        items: ['JavaScript', 'TypeScript', 'Vue', 'Nuxt.js', 'React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
        title: 'Backend',
        note: 'Services, APIs, and data handling',
        items: ['Python', 'Express.js', 'Supabase', 'SQL / NoSQL databases'],
    },
    {
        title: 'Mobile & Game',
        note: 'Interactive app and gameplay work',
        items: ['Flutter', 'Unity (C#)'],
    },
    {
        title: 'Tools & Platforms',
        note: 'Deployment, infrastructure, and workflow',
        items: ['Git', 'Ubuntu', 'SSH', 'Docker', 'Dokploy', 'Coolify', 'Vercel', 'Mapbox', 'TiTiler', 'TileServer GL', 'MinIO', 'QGIS', 'Mailgun'],
    },
    {
        title: 'AI Tools',
        note: 'AI-assisted research and development',
        items: ['Codex', 'Claude', 'Gemini'],
    },
    {
        title: 'Languages',
        note: 'Working and native communication',
        items: ['English (Fluent)', 'Persian (Native)', 'Italian (Basic)'],
    },
]

// Certificates called out as standalone badges.
const certificates = [
    {
        title: 'Responsive Web Design',
        url: 'https://www.freecodecamp.org/certification/mahdi_valadan/responsive-web-design',
    },
    {
        title: 'JavaScript Algorithms and Data Structures',
        url: 'https://www.freecodecamp.org/certification/mahdi_valadan/javascript-algorithms-and-data-structures',
    },
    {
        title: 'Front End Development',
        url: 'https://www.freecodecamp.org/certification/mahdi_valadan/front-end-development-libraries',
    },
    {
        title: 'Back End Development and APIs',
        url: 'https://www.freecodecamp.org/certification/mahdi_valadan/back-end-development-and-apis',
    },
]

// Projects used by the interactive carousel.
const projects = [
    {
        name: 'The Doomed Dog',
        category: 'Game Development',
        period: '2024',
        summary: 'A 3D action and adventure PC game developed at Politecnico di Milano.',
        detail: 'I contributed to gameplay and interface work in Unity, helping shape the experience of a university game project that balanced mechanics, clarity, and player feel.',
        stack: ['Unity', 'C#', 'Game Mechanics', 'UI'],
        demoUrl: 'https://polimi-game-collective.itch.io/the-doomed-dog',
        demoLabel: 'itch.io',
        codeUrl: 'https://youtu.be/QZ8lKNbsxss',
        codeLabel: 'Gameplay Trailer',
        icon: 'devicon-unity-plain',
        glow: 'radial-gradient(circle at top left, rgba(34, 211, 238, 0.35), transparent 42%), radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.28), transparent 45%)',
    },
    {
        name: 'Flutter Journal',
        category: 'Mobile App',
        period: '2024',
        summary: 'A social media journaling app built around expressive daily logging.',
        detail: 'This project focused on designing and implementing a mobile product with Flutter, Dart, and Firebase APIs, combining product thinking with a smooth interaction model.',
        stack: ['Flutter', 'Dart', 'Firebase'],
        demoUrl: 'https://www.youtube.com/watch?v=uge37Am3DRA',
        demoLabel: 'Demo',
        codeUrl: 'https://github.com/MahdiValadan/flutter_journal',
        codeLabel: 'GitHub',
        icon: 'devicon-flutter-plain',
        glow: 'radial-gradient(circle at top right, rgba(96, 165, 250, 0.34), transparent 40%), radial-gradient(circle at bottom left, rgba(34, 211, 238, 0.22), transparent 42%)',
    },
    {
        name: 'Nico',
        category: 'Interactive Learning',
        period: '2024',
        summary: 'A social learning game for children with autism and related social challenges.',
        detail: 'I worked as team leader and developer on an interactive Unity project that explored how playful systems and GPT-assisted interaction can support educational and social learning contexts.',
        stack: ['Unity', 'OpenAI GPT', 'Game Design'],
        demoUrl: 'https://www.youtube.com/watch?v=QvWR9_speOI',
        demoLabel: 'Demo',
        codeUrl: 'https://github.com/MahdiValadan/nico',
        codeLabel: 'GitHub',
        icon: 'devicon-unity-plain',
        glow: 'radial-gradient(circle at 20% 20%, rgba(250, 204, 21, 0.28), transparent 30%), radial-gradient(circle at 80% 75%, rgba(14, 165, 233, 0.30), transparent 42%)',
    },
    {
        name: 'RIKI VC',
        category: 'Web Experience',
        period: '2023',
        summary: 'A clean web experience with a product-first presentation style.',
        detail: 'RIKI VC reflects the kind of frontend and brand-sensitive implementation work I enjoy: responsive, structured, and tuned toward clarity rather than noise.',
        stack: ['Nuxt.js', 'Frontend Architecture', 'Responsive UI'],
        demoUrl: 'https://riki-vc.vercel.app/',
        demoLabel: 'Demo',
        codeUrl: 'https://github.com/MahdiValadan/riki-vc',
        codeLabel: 'GitHub',
        icon: 'devicon-nuxtjs-plain',
        glow: 'radial-gradient(circle at top, rgba(16, 185, 129, 0.28), transparent 38%), radial-gradient(circle at bottom right, rgba(34, 197, 94, 0.20), transparent 35%)',
    },
    {
        name: 'Bank Loan Platform',
        category: 'Full-Stack Product',
        period: '2022',
        summary: 'A platform concept tied to the design of an interest-free loan system. ',
        detail: 'This project connects directly to my bachelor thesis direction and shows an early product mindset around service design, application structure, and frontend implementation.',
        stack: ['Vue', 'Product Design', 'Platform Thinking'],
        demoUrl: 'https://youtu.be/osHO0NsvZzs',
        demoLabel: 'Demo',
        codeUrl: 'https://github.com/MahdiValadan/bank-loan',
        codeLabel: 'GitHub',
        icon: 'devicon-vuejs-plain',
        glow: 'radial-gradient(circle at top left, rgba(45, 212, 191, 0.30), transparent 35%), radial-gradient(circle at bottom right, rgba(96, 165, 250, 0.24), transparent 45%)',
    },
    {
        name: 'Vulkan Christmas Scene',
        category: 'Graphics Programming',
        period: '2024',
        summary: 'A real-time 3D Christmas scene built with Vulkan and low-level rendering workflows.',
        detail: 'This project reflects an interest in graphics programming and scene building, with a focus on rendering pipelines, atmosphere, and technical control at a lower level than typical web work.',
        stack: ['Vulkan', 'C++', '3D Rendering', 'Graphics Programming'],
        demoUrl: 'https://www.youtube.com/watch?v=YKvlxN0FKc4',
        demoLabel: 'Demo',
        codeUrl: 'https://github.com/MahdiValadan/vulkan-christmas-scene',
        codeLabel: 'GitHub',
        icon: 'devicon-cplusplus-plain',
        glow: 'radial-gradient(circle at 18% 18%, rgba(34, 211, 238, 0.26), transparent 30%), radial-gradient(circle at 78% 75%, rgba(248, 113, 113, 0.24), transparent 40%)',
    },
    {
        name: 'TeachMe',
        category: 'Learning Product',
        period: '2024',
        summary: 'A collaborative learning-focused project developed at Politecnico di Milano.',
        detail: 'TeachMe represents product and development work around education and knowledge sharing, combining implementation with a stronger focus on usability, structure, and interaction quality.',
        stack: ['Web Development', 'Product Design', 'Collaboration'],
        demoUrl: 'https://github.com/itsPeetah-polimi/teachme',
        demoLabel: 'Repository',
        codeUrl: 'https://github.com/itsPeetah-polimi/teachme',
        codeLabel: 'GitHub',
        icon: 'devicon-react-original',
        glow: 'radial-gradient(circle at top left, rgba(96, 165, 250, 0.30), transparent 35%), radial-gradient(circle at bottom right, rgba(34, 197, 94, 0.20), transparent 42%)',
    },
]

// Contact cards rendered in the contact section.
const contacts = [
    {
        label: 'Email',
        value: 'mahdivaladan@gmail.com',
        note: 'Best for direct opportunities, collaboration, and project discussions.',
        href: 'mailto:mahdivaladan@gmail.com',
        icon: './icon/email.png',
        external: false,
    },
    {
        label: 'LinkedIn',
        value: 'Mahdi Valadan',
        note: 'Professional background, current roles, and network context.',
        href: 'https://www.linkedin.com/in/mahdi-valadan-4a5762182/',
        icon: './icon/linkedin.png',
        external: true,
    },
    {
        label: 'GitHub',
        value: 'MahdiValadan',
        note: 'Repositories, project history, and technical work in public.',
        href: 'https://github.com/MahdiValadan',
        icon: './icon/github.png',
        external: true,
    },
]

let aosInitialized = false
let aosRefreshTimer = 0
let pageReady = false

const initializeAOS = () => {
    if (aosInitialized || !window.AOS) {
        return
    }

    window.AOS.init({
        duration: 900,
        easing: 'ease-out-cubic',
        once: false,
        mirror: true,
        offset: 80,
    })

    aosInitialized = true
}

const revealPage = () => {
    if (pageReady) {
        return
    }

    pageReady = true

    document.body.classList.remove('is-loading')

    const loader = document.getElementById('page-loader')
    if (loader) {
        loader.classList.add('is-hidden')
        window.setTimeout(() => {
            loader.remove()
        }, 500)
    }

    initializeAOS()
}

const finishInitialLoad = () => {
    const reveal = () => {
        window.setTimeout(revealPage, 120)
    }

    if (document.fonts?.ready) {
        document.fonts.ready.then(reveal).catch(reveal)
        return
    }

    reveal()
}

// Small UI animation for the mobile menu icon.
const animateMenuIcon = () => {
    const icon = document.getElementById('nav-button-icon')
    if (!icon) {
        return
    }

    icon.classList.add('animate-swing')
    icon.addEventListener('animationend', () => {
        icon.classList.remove('animate-swing')
    }, { once: true })
}

// Refresh AOS after anchor navigation so section animations can replay.
const refreshScrollAnimations = () => {
    if (!aosInitialized) {
        return
    }

    window.clearTimeout(aosRefreshTimer)
    aosRefreshTimer = window.setTimeout(() => {
        window.AOS?.refreshHard?.()
    }, 180)
}

// Alpine component registration for navigation, page data, and the project carousel.
const registerAlpineComponents = () => {
    // Header menu state for mobile navigation.
    Alpine.data('menu', () => ({
        open: false,
        icon: 'menu',
        init() {
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 1024) {
                    this.open = false
                    this.icon = 'menu'
                }
            })
        },
        toggle() {
            if (window.innerWidth >= 1024) {
                return
            }

            this.open = !this.open
            this.icon = this.open ? 'close' : 'menu'
            animateMenuIcon()
        },
        close() {
            if (window.innerWidth < 1024) {
                this.open = false
                this.icon = 'menu'
            }

            refreshScrollAnimations()
        },
    }))

    // Page-level content exposed to the HTML templates.
    Alpine.data('portfolioContent', () => ({
        heroSummary,
        profileSummary,
        expertise,
        introStats,
        quickFacts,
        focusAreas,
        career,
        academicExperience,
        education,
        skillGroups,
        certificates,
        contacts,
    }))

    // Mouse-driven project carousel with button navigation.
    Alpine.data('projectCarousel', () => ({
        cards: projects,
        active: 0,
        tiltX: 0,
        tiltY: 0,
        dragStartX: null,
        dragDelta: 0,
        // Returns the project currently centered in the carousel.
        get activeProject() {
            return this.cards[this.active]
        },
        // Maps each card to its relative position around the active card.
        relativeIndex(index) {
            const total = this.cards.length
            let diff = index - this.active

            if (diff > total / 2) {
                diff -= total
            }
            if (diff < -total / 2) {
                diff += total
            }

            return diff
        },
        // Builds the transform, depth, and opacity for each card.
        cardStyle(index) {
            const diff = this.relativeIndex(index)
            const abs = Math.abs(diff)
            const dragInfluence = this.dragStartX === null
                ? 0
                : Math.max(-16, Math.min(16, this.dragDelta / 10))
            const translateX = diff * 56 + (abs <= 1 ? dragInfluence : dragInfluence * 0.45)
            const translateZ = abs === 0 ? 120 : abs === 1 ? 20 : -100
            const rotateY = diff * -28 + (diff === 0 ? this.tiltY : 0)
            const rotateX = diff === 0 ? this.tiltX : 0
            const scale = abs === 0 ? 1 : abs === 1 ? 0.86 : 0.68
            const opacity = abs === 0 ? 1 : abs === 1 ? 0.62 : 0.18
            const zIndex = 40 - abs

            return `transform: translate3d(calc(-50% + ${translateX}%), -50%, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale}); opacity: ${opacity}; z-index: ${zIndex};`
        },
        // Move to the next project card.
        next() {
            this.active = (this.active + 1) % this.cards.length
            this.resetTilt()
        },
        // Move to the previous project card.
        prev() {
            this.active = (this.active - 1 + this.cards.length) % this.cards.length
            this.resetTilt()
        },
        // Jump directly to a clicked card or dot.
        setActive(index) {
            this.active = index
            this.resetTilt()
        },
        // Add a subtle tilt effect while the pointer moves across the stage.
        handleMouseMove(event) {
            if (this.dragStartX !== null) {
                return
            }

            const rect = this.$refs.stage.getBoundingClientRect()
            const x = (event.clientX - rect.left) / rect.width
            const y = (event.clientY - rect.top) / rect.height

            this.tiltY = (x - 0.5) * 14
            this.tiltX = (0.5 - y) * 10
        },
        // Clear any temporary tilt applied during hover.
        resetTilt() {
            this.tiltX = 0
            this.tiltY = 0
        },
        // Start drag tracking when the pointer is pressed.
        startDrag(event) {
            this.dragStartX = event.clientX
            this.dragDelta = 0
            event.currentTarget.setPointerCapture?.(event.pointerId)
        },
        // Track horizontal drag distance.
        drag(event) {
            if (this.dragStartX === null) {
                return
            }

            this.dragDelta = event.clientX - this.dragStartX
        },
        // Convert a completed drag gesture into next/previous navigation.
        endDrag(event) {
            if (this.dragStartX === null) {
                return
            }

            const delta = event.clientX - this.dragStartX

            if (delta > 70) {
                this.prev()
            } else if (delta < -70) {
                this.next()
            }

            this.dragStartX = null
            this.dragDelta = 0
            this.resetTilt()
            event.currentTarget.releasePointerCapture?.(event.pointerId)
        },
        // Reset temporary drag and tilt state when leaving the stage.
        leaveStage() {
            this.dragStartX = null
            this.dragDelta = 0
            this.resetTilt()
        },
    }))

}

// Register Alpine components whether Alpine is already available or still loading.
if (window.Alpine) {
    registerAlpineComponents()
} else {
    document.addEventListener('alpine:init', registerAlpineComponents)
}

if (document.readyState === 'complete') {
    finishInitialLoad()
} else {
    window.addEventListener('load', finishInitialLoad, { once: true })
}

// Re-trigger section animations after hash navigation.
window.addEventListener('hashchange', refreshScrollAnimations)

document.addEventListener('click', (event) => {
    const anchorLink = event.target.closest('a[href^="#"]')
    if (!anchorLink) {
        return
    }

    refreshScrollAnimations()
})
