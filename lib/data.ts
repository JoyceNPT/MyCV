export const PROFILE = {
    name: "NGO PHUOC THINH",
    title: ".NET Software Engineer",
    avatar: "https://ik.imagekit.io/bmncdkdwo/profile.jpg?updatedAt=1768889840061",
    location: "Can Tho City, Vietnam",
    social: {
        github: "https://github.com/JoyceNPT",
        linkedin: "https://www.linkedin.com/in/joycentpt/",
        email: "mailto:ngothinh.2003.work@gmail.com",
        phone: "+84 779 198 539",
    },
    about: "Software Engineering student and .NET Software Engineer with practical experience in enterprise outsourcing projects. I work with customer specifications, implement business logic in .NET and Java, create unit tests, execute test cases, and report progress clearly to project stakeholders. My current focus is backend development, ASP.NET MVC, test quality, and building production-minded full-stack systems with cloud and DevOps practices.",
    skills: {
        backend: [
            "C#", ".NET Framework", ".NET Core", "ASP.NET MVC", "ASP.NET Core Web API",
            "Entity Framework", "Java", "Spring Boot", "Java Web"
        ],
        testing: ["MSTest", "JUnit", "Unit Testing", "Integration Testing", "Test Execution", "Bug Reporting"],
        database: ["SQL Server", "Azure SQL Database", "PostgreSQL", "Entity Modeling"],
        cloudDevops: ["AWS EC2", "AWS S3", "AWS SES", "Docker", "Cloudflare", "Redis"],
        frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "WPF", "Windows Forms"],
        tools: ["Git", "SVN Version Control", "Visual Studio", "IntelliJ IDEA", "Postman"],
        process: ["Specification Analysis", "Daily Reporting", "Issue Escalation", "Code Review", "Agile Collaboration"],
        soft: ["Problem-solving", "Critical thinking", "Communication", "Teamwork", "Time management", "Attention to detail"],
        languages: ["English (Technical Documentation)", "Japanese (Basic Technical Terms)"],
    },
    experience: [
        {
            id: 1,
            role: ".NET Software Engineer",
            company: "FPT Software",
            project: "GBOOK",
            period: "September 2025 - Present",
            summary: "GBOOK is an in-vehicle information service for Toyota, Lexus, Subaru and other brands. It supports safety and security, smart driving, entertainment, payment-related services, traffic updates, city information, news, weather, email, hands-free calling, emergency support, vehicle status monitoring, and vehicle location tracking.",
            responsibilities: [
                "Perform design, coding, unit testing, integration testing, and test execution based on customer specification documents.",
                "Implement .NET ASP.NET MVC and Java features while ensuring business logic and project standards are followed.",
                "Create unit tests with MSTest and JUnit, write and execute test code, then report test results and defects.",
                "Maintain product quality through bug fixing, performance optimization, and careful requirement confirmation.",
                "Raise issues to the TL/PM when requirements are unclear or blockers appear.",
                "Submit progress reports twice daily: before 4:30 PM and at end of day."
            ],
            technologies: [".NET Framework", "ASP.NET MVC", "Java", "AWS", "MSTest", "JUnit", "SVN"]
        }
    ],
    education: [
        {
            id: 1,
            school: "FPT University Can Tho Campus",
            degree: "Software Engineer",
            year: "August 2021 - Present",
            description: "GPA: 8.0/10 (3.2/4.0)"
        }
    ],
    awards: [
        {
            id: 1,
            title: "Honorable Student Of Fall 2024",
            issuer: "FPT University",
            date: "January 2025",
            description: "Academic Excellence Award"
        },
        {
            id: 2,
            title: "Honorable Student Of Spring 2025",
            issuer: "FPT University",
            date: "May 2025",
            description: "Academic Excellence Award"
        },
        {
            id: 3,
            title: "Honorable Student Of Summer 2025",
            issuer: "FPT University",
            date: "September 2025",
            description: "Academic Excellence Award"
        }
    ],
    activities: [
        {
            id: 1,
            role: "Volunteer",
            organization: "The Youth Volunteer Team of Nguyen Cong Tru High School",
            period: "October 2019 - Present",
            description: "Giving gifts to help the circumstances in the area. Organizing fun summer prize programs for children. Participating in environmental protection programs. Creating a playground for members."
        }
    ]
};

export const PROJECT_GROUPS = [
    {
        id: "real",
        title: "Real Projects",
        description: "Commercial and production-oriented work with real requirements, delivery process, or deployment scope.",
    },
    {
        id: "ai",
        title: "AI Projects",
        description: "Projects built with AI-driven development, prompt orchestration, and architecture supervision.",
    },
    {
        id: "personal",
        title: "Personal Projects",
        description: "Academic and self-built projects used to practice architecture, UI, and product thinking.",
    },
] as const;

export const PROJECTS = [
    {
        id: 1,
        category: "real",
        title: "GBOOK34 - In-Vehicle Information Service",
        subtitle: ".NET Software Engineer at FPT Software",
        period: "September 2025 - Present",
        description: "GBOOK is an in-vehicle information service provided for Toyota, Lexus, Subaru and other brands. The system delivers connected vehicle services across safety, security, smart driving, entertainment, payment, traffic information, city information, news, weather, email communication, hands-free calling, emergency support, vehicle status monitoring, and vehicle location tracking.",
        responsibilities: [
            "Develop software features according to customer specification documents.",
            "Perform design, coding, unit testing, integration testing, test execution, and reporting.",
            "Create unit tests and test code with MSTest and JUnit to maintain reliability.",
            "Raise unclear requirements and technical blockers to TL/PM in a timely manner.",
            "Support bug fixing and performance improvements for better user experience."
        ],
        tags: [".NET Framework", "ASP.NET MVC", "Java", "AWS", "MSTest", "JUnit", "SVN"],
        link: "#",
        repo: "#"
    },
    {
        id: 2,
        category: "ai",
        title: "TouchLove",
        subtitle: "AI-driven full-stack NFC memory hub",
        period: "2026",
        description: "TouchLove bridges NFC keychains with a digital memory hub for couples. I acted as Architect and Tech Lead while using an AI coding agent as a pair-programming co-worker from initial implementation through deployment.",
        responsibilities: [
            "Designed the system architecture, core business flow, and Clean Architecture boundaries.",
            "Guided AI implementation through prompts, reviewed generated code, and supervised quality.",
            "Built a full-stack system with ASP.NET Core Web API, EF Core, PostgreSQL, React, TypeScript, and Tailwind CSS.",
            "Integrated JWT authentication, Redis caching, rate limiting, AWS S3, AWS SES, PayOS, Google reCAPTCHA, Docker, AWS EC2, and Cloudflare.",
            "Focused on system thinking: clear problem definition, architecture control, and production-ready review."
        ],
        tags: ["ASP.NET Core", "React", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS", "AI-driven Dev"],
        link: "https://touchlove.id.vn",
        repo: "#",
        image: "https://ik.imagekit.io/thinhxdev/Projects/TouchLove/project.jpg?updatedAt=1786299317881"
    },
    {
        id: 5,
        category: "real",
        title: "PMP Platform",
        subtitle: "Project Management Platform",
        period: "2026",
        description: "A comprehensive project management platform that streamlines project execution, resource allocation, and team collaboration. Features include task tracking, milestone management, and real-time progress reporting.",
        responsibilities: [
            "Architected and developed the backend services using .NET Core Clean Architecture.",
            "Implemented RESTful APIs, database schema design, and integration with external services.",
            "Ensured high performance and security across the platform."
        ],
        tags: ["C#", ".NET Core", "SQL Server", "EF Core", "Clean Architecture", "React", "Flutter"],
        link: "#",
        repo: "#",
        image: "https://ik.imagekit.io/thinhxdev/Projects/PMPPlatform/project.jpg"
    },
    {
        id: 3,
        category: "personal",
        title: "Online Course Platform (FSkills)",
        subtitle: "Learning management web platform",
        period: "May 2025 - July 2025",
        description: "A comprehensive platform for online learning where users can register for courses, watch lectures, receive notifications, and track learning progress.",
        responsibilities: [
            "Led a 5-member team and designed the MVC-based application flow.",
            "Implemented authentication, notifications, course management, and secure session handling.",
            "Supported team members through code review and deployment coordination."
        ],
        tags: ["Java", "JSP/Servlet", "SQL Server", "Tomcat", "Maven", "MVC"],
        link: "#",
        repo: "https://github.com/JoyceNPT/SWP391-FSkills"
    },
    {
        id: 4,
        category: "personal",
        title: "Comic Reader Application",
        subtitle: "Desktop reader application",
        period: "August 2025 - September 2025",
        description: "A desktop application for reading comics with a focus on user experience, content loading performance, and maintainable MVVM structure.",
        responsibilities: [
            "Designed and implemented core features with MVVM architecture.",
            "Managed team tasks, database operations, testing, and deployment coordination.",
            "Optimized database queries to improve content loading speed."
        ],
        tags: ["C#", ".NET Core 8.0", "WPF", "SQL Server", "MVVM"],
        link: "#",
        repo: "#"
    }
];

export const CERTIFICATION_GROUPS = [
    {
        id: "professional",
        title: "Professional Certifications",
        description: "Software development, programming, database, version control, and product-building certificates.",
    },
    {
        id: "ai",
        title: "AI Certifications",
        description: "AI productivity, education, and applied AI learning credentials.",
    },
    {
        id: "soft",
        title: "Soft Skill Certifications",
        description: "UX, communication, teamwork, and human-centered development credentials.",
    },
] as const;

export const CERTIFICATIONS = [
    {
        id: 1,
        category: "ai",
        name: "Gemini Certified Educator",
        issuer: "Google",
        date: "02/2026",
        link: "https://edu.google.accredible.com/bae5c465-21da-44b0-bf46-21de1c8a62cb#acc.zgc3lu0Z",
    },
    {
        id: 2,
        category: "ai",
        name: "AI Fluency: Framework & Foundations",
        issuer: "Anthropic",
        date: "07/2026",
        link: "https://verify.skilljar.com/c/fghc3h4c4xqk",
    },
    {
        id: 3,
        category: "ai",
        name: "Gemini Certification for Students (K12)",
        issuer: "Google",
        date: "07/2026",
        link: "https://edu.exceedlms.com/student/award/8t45Mq1EJ4ChYzwWWLBRN4Hv",
    },
    {
        id: 4,
        category: "professional",
        name: "Web Design for Everybody: Basics of Web Development & Coding",
        issuer: "Coursera",
        date: "09/2024",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/SROU16DZ06R9",
    },
    {
        id: 5,
        category: "professional",
        name: "Software Development Lifecycle",
        issuer: "Coursera",
        date: "01/2025",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/CXA5RG0TA8PG",
    },
    {
        id: 6,
        category: "professional",
        name: "Practice SQL from A to Z to become a Data Analyst",
        issuer: "Udemy",
        date: "06/2025",
        link: "https://www.udemy.com/certificate/UC-98f9c882-d1e9-4be7-a479-66c819e99c18/",
    },
    {
        id: 7,
        category: "professional",
        name: "Git Zero - Learn Git Super Fast with GitHub & GitLab",
        issuer: "Udemy",
        date: "06/2025",
        link: "https://www.udemy.com/certificate/UC-d6e7c062-2036-4a5d-982f-5f18f5765b4e/",
    },
    {
        id: 8,
        category: "soft",
        name: "User Experience Research and Design",
        issuer: "Coursera",
        date: "06/2025",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/S0S5NKAWIXV2",
    },
    {
        id: 9,
        category: "professional",
        name: "Foundational C# with Microsoft",
        issuer: "freeCodeCamp",
        date: "10/2025",
        link: "https://www.freecodecamp.org/certification/thinhxdev/foundational-c-sharp-with-microsoft",
    },
    {
        id: 10,
        category: "professional",
        name: "Building a Personal Project to International Standards",
        issuer: "Rikkei Education",
        date: "12/2025",
        link: "https://drive.google.com/file/d/1WdBQ4VtV-0wlAzfa7K7TAjjbGHZ2xwRa/view?usp=sharing",
    }
];
