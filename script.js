// Profile-driven content pulled from the CV.
const heroSummary = 'I design, build, and run complete products: carefully crafted interfaces, backend services and APIs, and the servers and infrastructure underneath. I am happiest when a project needs both technical depth and visual care.'

const profileSummary = 'A lot of my perspective comes from art, nature, and the way small details change how something feels. That carries into my work through discipline, patience, and a strong preference for products that feel considered rather than rushed.'

// Short labels and chips used in the hero/profile sections.
const expertise = [
    'Full-Stack Product Development',
    'Deployment & Infrastructure',
    'Data Visualization',
    'UI/UX Design',
    'Creative Technology',
    'Game Development',
    // 'WebGIS Products',
]

const introStats = [
    {
        label: 'Latest role',
        value: 'Full-Stack Developer',
        note: 'NHAZCA, building ISABHEL, an ESA-funded bridge monitoring platform.',
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
        value: 'Milan, Italy',
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
        period: 'Apr 2025 - Jun 2026',
        summary: 'Designed, built, and deployed the web platform for ISABHEL, an ESA-funded structural health monitoring project combining satellite InSAR data and ground-sensor measurements for bridges in Turin.',
        bullets: [
            'Built interactive map and time-series visualizations that let engineers analyse bridge deformation and structural behaviour over time and across sensors.',
            'Developed the geospatial tile-serving layer with TiTiler, TileServer GL, and MinIO, delivering raster and vector tiles to a Mapbox frontend.',
            'Designed and maintained the spatial database on PostgreSQL/PostGIS (Supabase) for satellite and sensor datasets.',
            'Set up and operated production infrastructure on Ubuntu servers using Docker, Coolify, and Dokploy, with Vercel for frontend hosting.',
            'Built backend services and APIs, including transactional email with Mailgun.',
        ],
        stack: ['Next.js', 'Python', 'Mapbox', 'PostGIS', 'TiTiler', 'Docker', 'Vercel'],
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
        summary: 'Built the front end for an AI-based medical image segmentation tool, used by clinicians and researchers to upload scans and review segmentation results.',
        bullets: [
            'Built the interfaces clinicians and researchers use to upload scans and review segmentation results.',
            'Developed a responsive, minimal, modern UI.',
            'Worked with Tailwind CSS, JavaScript, and Django templates.',
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
        period: 'Jun 2020 - Aug 2020',
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
        period: 'Feb 2021 - Sep 2021',
    },
    {
        role: 'Teaching Assistant, Compiler Design',
        place: 'K. N. Toosi University of Technology',
        period: 'Feb 2020 - Jul 2020',
    },
]

// Degree information and academic details.
const education = [
    {
        degree: 'Master of Computer Science and Engineering',
        school: 'Politecnico di Milano',
        period: 'Sep 2022 - Dec 2025',
        summary: 'Thesis: Modeling Value Detection in Dyadic Conversations for Human-Human and Human-Agent Well-being Coaching.',
        details: 'Selected coursework included video game development and design, advanced user interfaces, hypermedia applications, artificial neural networks and deep learning, mobile applications, and multidisciplinary projects.',
    },
    {
        degree: 'Bachelor of Computer Engineering',
        school: 'K. N. Toosi University of Technology',
        period: 'Sep 2017 - Jul 2022',
        summary: 'Thesis: Design and Development of an Interest-free Loan System with Software as a Service Approach.',
        details: 'Core coursework included software engineering, software testing, system analysis and design, artificial intelligence, speech and language processing, data structures, databases, and advanced programming.',
    },
]

// Grouped skills for the skills section.
const skillGroups = [
    {
        title: 'Frontend',
        note: 'Interface and product implementation',
        items: ['JavaScript', 'TypeScript', 'React', 'Vue', 'Next.js', 'Nuxt.js', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
        title: 'Backend',
        note: 'Services and APIs',
        items: ['Python', 'Express.js', 'Django'],
    },
    {
        title: 'Databases',
        note: 'Relational, spatial, and document data',
        items: ['PostgreSQL', 'PostGIS', 'Supabase', 'Firebase', 'MongoDB'],
    },
    {
        title: 'Tools & Platforms',
        note: 'Deployment, infrastructure, and workflow',
        items: ['Git', 'Ubuntu', 'SSH', 'Docker', 'Dokploy', 'Coolify', 'Vercel', 'Mapbox', 'TiTiler', 'TileServer GL', 'MinIO', 'QGIS', 'Mailgun'],
        // Spans two columns on wide screens.
        wide: true,
    },
    {
        title: 'Mobile & Game',
        note: 'Interactive app and gameplay work',
        items: ['Flutter', 'Unity (C#)'],
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
        period: '2023 - 2024',
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
        period: '2023 - 2024',
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
        href: 'https://www.linkedin.com/in/mahdi-valadan/',
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
        // Reuse the project cards' glow colours so all card sections share one look.
        cardGlow(index) {
            return projects[index % projects.length].glow
        },
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

// Generative flow-field art for the About section.
// Each seed picks a palette and field shape; particles follow the field and leave glowing trails.
const startAboutArt = () => {
    const canvas = document.getElementById('about-art')
    if (!canvas) {
        return
    }

    const ctx = canvas.getContext('2d')
    const seedLabel = document.getElementById('about-art-seed')
    const regenButton = document.getElementById('about-art-regen')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const TAU = Math.PI * 2

    const palettes = [
        ['#22d3ee', '#7dd3fc', '#bae6fd', '#0ea5e9'],
        ['#2dd4bf', '#22d3ee', '#a78bfa', '#e0f2fe'],
        ['#f472b6', '#a78bfa', '#7dd3fc', '#fde68a'],
        ['#38bdf8', '#818cf8', '#c084fc', '#f0abfc'],
        ['#34d399', '#2dd4bf', '#facc15', '#e2e8f0'],
        ['#fb7185', '#fdba74', '#7dd3fc', '#e0e7ff'],
    ]

    // Small seeded random generator so a seed always draws the same piece.
    const mulberry32 = (a) => () => {
        a |= 0
        a = (a + 0x6d2b79f5) | 0
        let t = Math.imul(a ^ (a >>> 15), 1 | a)
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }

    // Smooth 3D value noise built on a seeded lattice.
    const makeNoise = (rand) => {
        const size = 256
        const perm = new Uint8Array(size * 2)
        const values = new Float32Array(size)
        for (let i = 0; i < size; i++) {
            perm[i] = i
            values[i] = rand()
        }
        for (let i = size - 1; i > 0; i--) {
            const j = Math.floor(rand() * (i + 1))
            const tmp = perm[i]
            perm[i] = perm[j]
            perm[j] = tmp
        }
        for (let i = 0; i < size; i++) {
            perm[i + size] = perm[i]
        }

        const fade = (t) => t * t * (3 - 2 * t)
        const lerp = (a, b, t) => a + (b - a) * t
        const at = (x, y, z) => values[perm[perm[perm[x & 255] + (y & 255)] + (z & 255)]]

        return (x, y, z) => {
            const xi = Math.floor(x)
            const yi = Math.floor(y)
            const zi = Math.floor(z)
            const u = fade(x - xi)
            const v = fade(y - yi)
            const w = fade(z - zi)
            const x0 = lerp(lerp(at(xi, yi, zi), at(xi + 1, yi, zi), u), lerp(at(xi, yi + 1, zi), at(xi + 1, yi + 1, zi), u), v)
            const x1 = lerp(lerp(at(xi, yi, zi + 1), at(xi + 1, yi, zi + 1), u), lerp(at(xi, yi + 1, zi + 1), at(xi + 1, yi + 1, zi + 1), u), v)
            return lerp(x0, x1, w)
        }
    }

    let width = 0
    let height = 0
    let particles = []
    let settings = null
    let noise = null
    let rand = Math.random
    let frame = 0
    let rafId = 0
    let visible = true
    const pointer = { x: 0, y: 0, active: false, radius: 140 }

    const resize = () => {
        const rect = canvas.getBoundingClientRect()
        const dpr = Math.min(window.devicePixelRatio || 1, 2)
        width = Math.max(1, rect.width)
        height = Math.max(1, rect.height)
        canvas.width = Math.round(width * dpr)
        canvas.height = Math.round(height * dpr)
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const spawn = (p) => {
        p.x = rand() * width
        p.y = rand() * height
        p.px = p.x
        p.py = p.y
        p.life = 0
        p.maxLife = 80 + rand() * 220
        p.color = settings.palette[Math.floor(rand() * settings.palette.length)]
        p.speed = settings.speed * (0.6 + rand() * 0.8)
        return p
    }

    const generate = (seed) => {
        rand = mulberry32(seed)
        noise = makeNoise(rand)
        settings = {
            palette: palettes[Math.floor(rand() * palettes.length)],
            scale: 0.0018 + rand() * 0.004,
            swirl: 1 + rand() * 3,
            speed: 0.8 + rand() * 1.6,
            lineWidth: 0.6 + rand() * 1.4,
            drift: 0.0015 + rand() * 0.004,
            fade: 0.035 + rand() * 0.05,
            count: Math.round(Math.min(900, (width * height) / 380)),
        }
        particles = Array.from({ length: settings.count }, () => spawn({}))
        frame = 0

        ctx.clearRect(0, 0, width, height)

        if (seedLabel) {
            seedLabel.textContent = `Seed #${seed.toString(16).padStart(6, '0').slice(-6)}`
        }
    }

    const step = (fadeTrails) => {
        // Erase a little each frame so trails fade to transparent and the page shows through.
        if (fadeTrails) {
            ctx.globalCompositeOperation = 'destination-out'
            ctx.fillStyle = `rgba(0, 0, 0, ${settings.fade})`
            ctx.fillRect(0, 0, width, height)
        }

        ctx.globalCompositeOperation = 'lighter'
        ctx.lineWidth = settings.lineWidth
        ctx.lineCap = 'round'
        const z = frame * settings.drift

        for (const p of particles) {
            let angle = noise(p.x * settings.scale, p.y * settings.scale, z) * TAU * settings.swirl

            // Near the cursor, particles bend into a swirl around it.
            if (pointer.active) {
                const dx = p.x - pointer.x
                const dy = p.y - pointer.y
                const dist = Math.hypot(dx, dy)
                if (dist < pointer.radius) {
                    const pull = 1 - dist / pointer.radius
                    const orbit = Math.atan2(dy, dx) + Math.PI / 2
                    angle += Math.atan2(Math.sin(orbit - angle), Math.cos(orbit - angle)) * pull
                }
            }

            p.px = p.x
            p.py = p.y
            p.x += Math.cos(angle) * p.speed
            p.y += Math.sin(angle) * p.speed
            p.life++

            // Fade each trail in and out over its lifetime.
            const t = p.life / p.maxLife
            ctx.globalAlpha = Math.sin(Math.PI * Math.min(t, 1)) * 0.6
            ctx.strokeStyle = p.color
            ctx.beginPath()
            ctx.moveTo(p.px, p.py)
            ctx.lineTo(p.x, p.y)
            ctx.stroke()

            if (p.life > p.maxLife || p.x < -10 || p.x > width + 10 || p.y < -10 || p.y > height + 10) {
                spawn(p)
            }
        }

        ctx.globalAlpha = 1
        frame++
    }

    // The fade step never takes alpha all the way to zero (8-bit rounding), which leaves a faint
    // haze over the section background. Periodically wipe those near-invisible pixels.
    const clearGhosts = () => {
        const image = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const data = image.data
        for (let i = 3; i < data.length; i += 4) {
            if (data[i] < 24) {
                data[i] = 0
            }
        }
        ctx.putImageData(image, 0, 0)
    }

    const loop = () => {
        step(true)
        if (frame % 45 === 0) {
            clearGhosts()
        }
        rafId = visible ? requestAnimationFrame(loop) : 0
    }

    const render = (seed) => {
        cancelAnimationFrame(rafId)
        rafId = 0
        resize()
        generate(seed)

        if (reduceMotion) {
            // Draw a still image instead of animating.
            for (let i = 0; i < 260; i++) {
                step(false)
            }
            return
        }

        if (visible) {
            rafId = requestAnimationFrame(loop)
        }
    }

    let currentSeed = Math.floor(Math.random() * 0xffffff)
    const regenerate = () => {
        currentSeed = Math.floor(Math.random() * 0xffffff)
        render(currentSeed)
    }

    canvas.addEventListener('click', regenerate)
    canvas.addEventListener('pointermove', (event) => {
        const rect = canvas.getBoundingClientRect()
        pointer.x = event.clientX - rect.left
        pointer.y = event.clientY - rect.top
        pointer.active = true
    })
    canvas.addEventListener('pointerleave', () => {
        pointer.active = false
    })
    regenButton?.addEventListener('click', regenerate)

    // Only animate while the canvas is on screen.
    new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting
        if (visible && settings && !rafId && !reduceMotion) {
            rafId = requestAnimationFrame(loop)
        }
    }).observe(canvas)

    let resizeTimer = 0
    let lastSize = ''
    new ResizeObserver(([entry]) => {
        // Redraw when either dimension changes, since the canvas now follows the text column's height.
        const newSize = `${Math.round(entry.contentRect.width)}x${Math.round(entry.contentRect.height)}`
        if (newSize === lastSize) {
            return
        }
        lastSize = newSize
        window.clearTimeout(resizeTimer)
        resizeTimer = window.setTimeout(() => render(currentSeed), 150)
    }).observe(canvas)
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startAboutArt, { once: true })
} else {
    startAboutArt()
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
