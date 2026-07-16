import { SectionNavItem } from "@/types";
import { Signature } from "lucide-react";

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
        line1Start: "Designing ",
        highlight1: "experiences",
        line1Mid: " that solve real ",
        highlight2: "problems.",
    },
    subtext:
        "Turning complex problems into simple, human experiences across healthcare, fintech, and SaaS.",
    body: {
        heading1: "Most design problems aren't really design problems.",
        p1: "they're clarity problems. Someone didn't think hard enough about what the user actually needs to do next. That's the gap I've always been drawn to filling.",
        heading2: "I work across healthcare, fintech, and SaaS,",
        p2: "bringing technical understanding and genuine empathy to every project. I don't just make things look good — I make them work in the real world, for real users, under real constraints.",
        heading3: "I'm a bit obsessive about the details most people skip,",
        p3: "but I think that's what separates good design from great design. Clients tend to notice that kind of care — and it's usually what keeps them coming back.",
    },
    portrait: "/assets/images/portrait-yasir-abed-rabbu.png",
    signature: {
        image: "/assets/images/signature.png",
    },
    // ... stats, socialLinks same thakbe
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

export const socialLinks = [
    { name: "Dribbble", href: "https://dribbble.com/yasirabedrabbu", icon: "/assets/icons/icon-dribbble.svg" },
    { name: "LinkedIn", href: "https://linkedin.com/in/yasirabedrabbu", icon: "/assets/icons/icon-linkedin.svg" },
    { name: "Behance", href: "https://behance.net/yasirabedrabbu", icon: "/assets/icons/icon-behance.svg" },
    { name: "Pinterest", href: "https://pinterest.com/yasirabedrabbu", icon: "/assets/icons/icon-pinterest.svg" },
    { name: "   X", href: "https://x.com/Ya_Rabbu", icon: "/assets/icons/icon-x.svg" },
];

// Add these exports into your existing /data/content.ts file

export const craftedByMeContent = {
    badge: {
        icon: "/assets/icons/icon-level-badge.svg",
        label: "Crafted By Me",
    },
    heading: {
        part1: "Helping You ",
        highlight1: "Turn",
        part2: " ",
        highlight2: "Ideas",
        part3: " Into Growth",
    },
    subtext:
        "I design, build, and optimize digital systems that help businesses attract customers and scale consistently.",
    items: [
        {
            icon: "/assets/icons/icon-ui-design.svg",
            title: "UI Design That Feels Effortless",
            description:
                "I design clean, modern interfaces that reduce friction, improve clarity, and make every interaction feel natural.",
        },
        {
            icon: "/assets/icons/icon-ux-solutions.svg",
            title: "UX Solutions For Real Problems",
            description:
                "I turn complex requirements into practical user flows that help people complete tasks with less confusion.",
        },
        {
            icon: "/assets/icons/icon-responsive-design.svg",
            title: "Responsive Design Across Every Screen",
            description:
                "From desktop to mobile, I create flexible experiences that stay smooth, usable, and visually consistent everywhere.",
        },
        {
            icon: "/assets/icons/icon-design-systems.svg",
            title: "Design Systems That Scale Cleanly",
            description:
                "I build structured components and style guides that keep products consistent, efficient, and easy to grow.",
        },
        {
            icon: "/assets/icons/icon-developer-handoff.svg",
            title: "Developer Handoff Without The Drama",
            description:
                "I prepare organized, pixel-perfect design files so developers can build faster without guessing every detail.",
        },
        {
            icon: "/assets/icons/icon-product-thinking.svg",
            title: "Product Thinking Backed By Logic",
            description:
                "I balance user needs, business goals, and technical feasibility to design solutions that actually make sense.",
        },
    ],
};

export const ctaContent = {
    badge: {
        icon: "/assets/icons/icon-level-badge.svg",
        label: "Let's Build Something Great",
    },
    heading: {
        part1: "Got an idea? Let's ",
        highlight1: "turn it ",
        part2: "into reality ",
        highlight2: "together!",
    },
    subtext:
        "Good products don't start with big budgets they start with clarity, structure, and the right thinking. If you're serious about building something meaningful, let's shape it together.",
    ctaPrimary: "Start A Conversation",
    ctaSecondary: "Contact Me",
};