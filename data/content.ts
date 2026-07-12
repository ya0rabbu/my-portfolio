import { SectionNavItem } from "@/types";

// ============================================
// HERO SECTION
// ============================================
export const heroContent = {
    badge: {
        icon: "/assets/icons/icon-level-badge.svg",
        label: "Creating User-Friendly Products Amid Complexity.",
    },
    heading: {
        line1Start: "Designing ",
        highlight1: "Products",
        line1End: " That Feel Simple, Even When They're ",
        highlight2: "Complex.",
    },
    subtext:
        "I help startups and businesses transform complex requirements into intuitive digital experiences. Currently designing healthcare, fintech, and SaaS products at Softvance, focusing on usability, clarity, and measurable user outcomes.",
    ctaPrimary: "View Selected Work",
    ctaSecondary: "Download Resume",
};

// ============================================
// ABOUT / DESIGNER SECTION
// ============================================
export const aboutContent = {
    badge: {
        icon: "/assets/icons/icon-level-badge.svg",
        label: "The Designer Behind the Work",
    },
    heading: {
        line1Start: "I Think in ",
        highlight1: "Systems.",
        line1Mid: " I ",
        highlight2: "Design",
        line1End: " for People.",
    },
    body: {
        p1Start: "Most design problems aren't really ",
        bold1: "Design Problems",
        p1End: " — they're clarity problems. Someone didn't think hard enough about what the user actually needs to do next.",
        p2: "That's where I come in.",
        p3Start: "With a background in ",
        bold2: "Computer Science",
        p3End: " and hands-on experience across healthcare, fintech, and SaaS at Softvance, I bring both technical understanding and human empathy to every project. I don't just make things look good — I make them work in the real world, for real users, under real constraints.",
        p4Start: "When I'm not designing, I'm studying systems — how products grow, how teams collaborate, and how great design becomes a ",
        bold3: "business advantage",
        p4End: ".",
    },
    portrait: "/assets/images/portrait-yasir-abed-rabbu.png",
    stats: [
        {
            value: "2+",
            label: "Years of Product Design Experience",
            icon: "/assets/icons/icon-stat-years.svg",
        },
        {
            value: "3",
            label: "Industries - Healthcare, Fintech, SaaS",
            icon: "/assets/icons/icon-stat-industries.svg",
        },
        {
            value: "100%",
            label: "Focus on Usability + Outcomes",
            icon: "/assets/icons/icon-stat-focus.svg",
        },
    ],
};

// ============================================
// SERVICES / "WHAT I BRING" SECTION
// ============================================
export const servicesContent = {
    badge: {
        icon: "/assets/icons/icon-level-badge.svg",
        label: "What I Bring",
    },
    heading: {
        part1: "The Full Stack of ",
        highlight1: "Design",
        part2: " - ",
        highlight2: "Without",
        part3: " the Gaps.",
    },
    subtext:
        "I manage the entire process from initial research through to final handoff, ensuring smooth project completion every time.",
    services: [
        {
            title: "UX Research & Strategy",
            description:
                "Pixel-perfect, system-consistent interfaces ready for developer handoff. Auto Layout, Variables, Components.",
            image: "/assets/images/card-ux-research-strategy.png",
            imagePosition: "bottom" as const,
        },
        {
            title: "High-Fidelity UI Design",
            description:
                "Pixel-perfect, system-consistent interfaces ready for developer handoff. Auto Layout, Variables, Components.",
            image: "/assets/images/card-high-fidelity-ui.png",
            imagePosition: "top" as const,
        },
        {
            title: "Design Systems",
            description:
                "Scalable, tokenized component libraries that keep teams consistent across every platform and product.",
            image: "/assets/images/card-design-systems.png",
            imagePosition: "bottom" as const,
        },
        {
            title: "Technical Feasibility",
            description:
                "I speak developer. Every design decision accounts for real implementation constraints, no \"we can't build that.\"",
            image: "/assets/images/card-technical-feasibility.png",
            imagePosition: "bottom" as const,
        },
        {
            title: "No-Code Deployment",
            description:
                "Framer, Webflow, I can take a design from Figma to live without waiting on engineering.",
            image: "/assets/images/card-no-code-deployment.png",
            imagePosition: "top" as const,
        },
        {
            title: "Stakeholder communication",
            description:
                "Requirements analysis, client negotiation, presentation I close the gap between business needs and design reality.",
            image: "/assets/images/card-stakeholder-communication.png",
            imagePosition: "bottom" as const,
        },
    ],
};

// ============================================
// TESTIMONIALS SECTION
// ============================================
export const testimonialsContent = {
    badge: {
        icon: "/assets/icons/icon-level-badge.svg",
        label: "Experience from client",
    },
    heading: {
        part1: "What It's ",
        highlight1: "Like",
        part2: " ",
        highlight2: "Working",
        part3: " With Me",
    },
    subtext:
        "Real feedback from people I've worked with across product, design, and collaborative problem-solving. Because good design should not only look right — it should feel right to work through.",
    testimonials: [
        {
            quote: {
                text: "   Working with Yasir felt structured from day one. ",
                highlight: "He thinks deeply",
                rest: ", communicates clearly, and designs with both users and business goals in mind.",
            },
            author: "-Nafis Rahman",
            avatars: [
                { image: "/assets/images/avatar-testimonial-active.jpg", active: true },
                { image: "/assets/images/avatar-testimonial-2.jpg", active: false },
                { image: "/assets/images/avatar-testimonial-3.jpg", active: false },
            ],
        },
        {
            quote: {
                text: "What stood out most was his clarity. Yasir does not ",
                highlight: "just make things look better",
                rest: " — he makes products feel smarter, smoother, and more thoughtful.",
            },
            author: "-Sarah Ahmed",
            avatars: [
                { image: "/assets/images/avatar-testimonial-2.jpg", active: true },
                { image: "/assets/images/avatar-testimonial-active.jpg", active: false },
                { image: "/assets/images/avatar-testimonial-3.jpg", active: false },
            ],
        },
        {
            quote: {
                text: "Yasir has a rare ability to turn complex ",
                highlight: "product ideas into experiences ",
                rest: "that feel simple, clear, and incredibly easy to use.",
            },
            author: "- Michael Tanvir",
            avatars: [
                { image: "/assets/images/avatar-testimonial-3.jpg", active: true },
                { image: "/assets/images/avatar-testimonial-active.jpg", active: false },
                { image: "/assets/images/avatar-testimonial-2.jpg", active: false },
            ],
        },
    ],
    background: {
        image: "/assets/images/testimonials-grass-strip.png",
    },
};

export const sectionNavItems: SectionNavItem[] = [
    { id: "hero", label: "Home" },
    { id: "about", label: "Who I Am" },
    { id: "services", label: "What I Do" },
    { id: "testimonials", label: "What I Bring" },
];

export const projectsContent = {
    badge: {
        icon: "/assets/icons/icon-level-badge.svg", // your Badge component's icon key
        label: "Proof, Not Promises",
    },
    heading: {
        part1: "Designs That ",
        highlight1: "Solved",
        part2: " Real ",
        highlight2: "Problems",
    },
    subtext:
        "Behind every screen is a challenge that needed solving. These projects show how thoughtful design turns complexity into clarity.",
    projects: [
        {
            title: "Agile Atlas",
            tag: "Project Management Dashboard",
            description:
                "Managing projects should feel organized, but most tools feel like controlled chaos. Teams were wasting time navigating clutter instead of actually getting work done. I redesigned the experience with a clear structure, better hierarchy, and focused workflows. Every element was built to reduce friction and make task management feel effortless. Because if users have to \"figure it out,\" the design has already failed.",
            quote:
                "\"Messy tools waste time, clear tools save it. When work feels simple, teams move faster.\"",
            image: "/assets/images/project-agile-atlas.png",
            imagePosition: "left",
        },
        {
            title: "E-commerce",
            tag: "IT Admin Dashboard",
            description:
                "Managing an e-commerce backend should feel controlled, but most dashboards feel overwhelming. Admins were dealing with scattered data, unclear metrics, and too many decisions at once. I redesigned the dashboard with structured layouts, clear data hierarchy, and focused insights. Every section was built to make information easy to scan, understand, and act on quickly. Because when data is confusing, decisions become slow and risky.",
            quote:
                "\"Too much data overwhelms, clear data guides decisions. When everything makes sense, better choices happen faster.\"",
            image: "/assets/images/project-ecommerce.png",
            imagePosition: "right",
        },
    ],
};