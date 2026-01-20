
export const PROFILE = {
    name: "NGO PHUOC THINH",
    title: "Associate Software Engineer at FPT Software",
    avatar: "https://ik.imagekit.io/bmncdkdwo/profile.jpg?updatedAt=1768889840061",
    location: "Can Tho City, Vietnam",
    social: {
        github: "https://github.com/JoyceNPT",
        linkedin: "https://www.linkedin.com/in/joycentpt/",
        email: "mailto:ngothinh.2003.work@gmail.com",
        phone: "+84 779 198 539",
    },
    about: "Final-year Software Engineering student with a strong foundation and practical experience in C#, Java, and Spring Boot. Proficient in full-stack development, including web applications (Java Web, ASP.NET Core) and desktop solutions (WPF). Demonstrated expertise in database management (SQL Server, Azure SQL) and cloud services (AWS). Capable of researching and utilizing technical documentation in both English and Japanese. Committed to applying technical proficiency and a problem-solving mindset to deliver high-quality software solutions in a professional environment.",
    skills: {
        technical: [
            "C#", "Java", "C",
            "ASP.NET Core (MVC, Razor Pages)", "Spring Boot", "Java Web (JSP, Servlet)",
            "WPF", "Windows Forms (.NET)",
            "SQL Server", "Azure SQL Database",
            "AWS (EC2, S3, RDS...)",
            "Git", "Visual Studio", "IntelliJ IDEA"
        ],
        soft: [
            "Problem-solving", "Critical thinking",
            "Communication", "Presentation",
            "Leadership", "Teamwork",
            "Time management", "Adaptablity",
            "Attention to detail"
        ],
        languages: ["English (Technical Documentation)", "Japanese (Basic Technical Terms)"]
    },
    experience: [
        {
            id: 1,
            role: "Software Development Intern",
            company: "FPT Software",
            period: "September 2025 - Present",
            description: "Analyzed technical specifications provided by Japanese clients to identify logic implementation points and ensure precise feature development.\nDeveloped and maintained backend modules using .NET and Java, following strict coding standards and project requirements.\nEnsured high code quality by performing comprehensive Unit Testing and implementing automated test scripts using MSTest.\nCollaborated on source code optimization, bridging the gap between technical documentation and functional implementation."
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

export const PROJECTS = [
    {
        id: 1,
        title: "GBOOK - FPT Software",
        description: "Role: Member | Team size: 30 members\nPeriod: September 2025 - Present\n\nOverview: This is an outsourced project for a Japanese client. They required us to write code and perform testing according to the specification document.\n\nTech Stack: .NET Framework, ASP.NET, Java, Spring Boot, Azure Storage.\n\nResponsibilities:\n- Participated in outsource projects using .NET and Java based on client requirements.\n- Developed software features according to specification documents, ensuring compliance with business logic.\n- Created and executed Unit Tests to maintain code quality and reliability.\n- Assisted in bug fixing and optimized application performance.\n\nHighlights:\n- Gained hands-on experience with enterprise-level development processes.\n- Worked collaboratively in a professional environment, improving teamwork and communication skills.",
        tags: [".NET", "Java", "Spring Boot", "Azure"],
        link: "#",
        repo: "#"
    },
    {
        id: 2,
        title: "Online Course Platform (FSkills)",
        description: "Role: Leader | Team size: 5 members\nPeriod: May 2025 - July 2025\n\nOverview: A comprehensive platform for online learning where users can register for courses, watch lectures and track their progress.\n\nTech Stack: Java Web (JSP/Servlet), SQL Server, Git, Tomcat 10, Maven.\nArchitecture: MVC (Model-View-Controller)\n\nResponsibilities:\n- Designed user interface and implemented core features (auth, notifications, course management).\n- Integrated third-party APIs to enhance functionality.\n- Supported team members via code reviews.\n- Deployed application on server environment.\n- Implemented secure session handling.\n\nHighlights:\n- Applied MVC architecture for maintainable code structure.\n- Implemented secure session handling and input validation.\n- Managed version control and collaboration using GitHub.",
        tags: ["Java", "JSP/Servlet", "SQL Server", "Tomcat", "Maven"],
        link: "#",
        repo: "https://github.com/JoyceNPT/SWP391-FSkills"
    },
    {
        id: 3,
        title: "Comic Reader Application",
        description: "Role: Leader | Team size: 5 members\nPeriod: August 2025 - September 2025\n\nOverview: A desktop application for reading comics with a focus on user experience and performance.\n\nTech Stack: C#, .NET Core 8.0, SQL Server, Git.\nArchitecture: MVVM (Model-View-ViewModel)\n\nResponsibilities:\n- Designed and implemented core features following MVVM architecture.\n- Managed team tasks and ensured code quality.\n- Integrated database operations and optimized performance.\n- Deployed application and coordinated testing.\n\nHighlights:\n- Successfully applied MVVM architecture for separation of concerns.\n- Optimized database queries for faster content loading.",
        tags: ["C#", ".NET Core 8.0", "WPF", "SQL Server", "MVVM"],
        link: "#",
        repo: "#"
    }
];

export const CERTIFICATIONS = [
    {
        id: 1,
        name: "Web Design for Everybody: Basics of Web Development & Coding",
        issuer: "Coursera",
        date: "09/2024",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/SROU16DZ06R9",
    },
    {
        id: 2,
        name: "Software Development Lifecycle",
        issuer: "Coursera",
        date: "01/2025",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/CXA5RG0TA8PG",
    },
    {
        id: 3,
        name: "Practice SQL from A to Z to become a Data Analyst",
        issuer: "Udemy",
        date: "06/2025",
        link: "https://www.udemy.com/certificate/UC-98f9c882-d1e9-4be7-a479-66c819e99c18/",
    },
    {
        id: 4,
        name: "Git Zero - Learn Git Super Fast with GitHub & GitLab",
        issuer: "Udemy",
        date: "06/2025",
        link: "https://www.udemy.com/certificate/UC-d6e7c062-2036-4a5d-982f-5f18f5765b4e/",
    },
    {
        id: 5,
        name: "User Experience Research and Design",
        issuer: "Coursera",
        date: "06/2025",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/S0S5NKAWIXV2",
    },
    {
        id: 6,
        name: "Foundational C# with Microsoft",
        issuer: "freeCodeCamp",
        date: "10/2025",
        link: "https://www.freecodecamp.org/certification/thinhxdev/foundational-c-sharp-with-microsoft",
    },
    {
        id: 7,
        name: "Building a Personal Project to International Standards",
        issuer: "Rikkei Education",
        date: "12/2025",
        link: "https://drive.google.com/file/d/1WdBQ4VtV-0wlAzfa7K7TAjjbGHZ2xwRa/view?usp=sharing",
    }
];
