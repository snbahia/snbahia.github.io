interface ExperienceRole {
    title: string;
    company: string;
    period: string;
    technologies: string;
    missions: string[];
}

export interface Experience extends ExperienceRole {
    detailIsDisplayed: boolean;
    roles?: ExperienceRole[];
    summary?: string;
}

export const experiencesEn: Experience[] = [
    {
        title: "Software Engineer III — Trade Lifecycle Renovation",
        summary: "Trade validation, recovery, and platform migration.",
        company: 'Morgan Stanley',
        period: "2026 – Present",
        technologies: 'Scala, SQL',
        missions: [
            "Designed and owned a tool that validates 10,000+ trades daily across a dozen derivatives trade types, uncovering several API defects through detailed checks and independent calculations.",
            "Built a trade recovery tool in Scala to restore trades to their pre-realization state after processing errors, providing a controlled recovery mechanism for failed trade processing.",
            "Developed reconciliation tools in Scala to compare data across legacy and new trading platforms, using complex SQL queries to identify mismatches during system migration."
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Software Engineer I → II — Commodities Risk Technology",
        summary: "Risk tooling, valuation metrics, and reporting automation.",
        company: 'Morgan Stanley',
        period: "2023 – 2026",
        technologies: 'Java, Spring Boot, Angular, Python, Pandas, MongoDB, SQL, Linux, Kafka, Jira',
        missions: [
            "Partnered with quantitative analysts and business stakeholders to implement new valuation attribution metrics in Java, reducing unexplained valuation changes by 40% across commodities products.",
            "Led development of a dynamic SQL query builder with Spring Boot and Angular, simplifying query creation and testing workflows for QA teams.",
            "Implemented a caching service for the commodities risk system, reducing execution time by 10%.",
            "Automated daily P&L reporting for commodities traders using Python and Pandas, streamlining financial data processing and reducing manual reporting work.",
            "Introduced Python validation checks downstream of trade booking to detect data integrity issues, reducing support incidents by 10%.",
            "Served as primary on-call engineer for commodities risk applications, coordinating with business users and reliability teams to resolve production incidents and maintain critical risk workflows.",
            "Modernized a large project by migrating from Apache Ivy/Ant to Gradle and updating dependencies.",
            "Wrote JUnit tests for a Spring Boot project using test-driven development.",
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Software Engineer Intern — Web Engineering",
        summary: "Web application performance and API development.",
        company: 'Morgan Stanley',
        period: "2022 (8 months)",
        technologies: 'Java, Angular, Linux OS, PostgreSQL, Git, Jira',
        missions: [
            "Improved web app query performance by 30% by optimizing Angular components and state management to eliminate bottlenecks.",
            "Designed and implemented the front-end of a custom web application using Angular.",
            "Built Java REST API endpoints to read and write database records.",
            "Queried, migrated data, and managed database schemas using PostgreSQL.",
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Software Intern",
        summary: "Automation, reporting, and database tools across three student placements.",
        company: 'Government of Canada',
        period: "2018 – 2021 · Student placements",
        technologies: 'SharePoint, Power BI, PowerShell, HTML, SQL Developer, MS Access, Visual Basic, Excel, PowerPoint',
        missions: [
            "Built automation, reporting, and database tools across three student placements with the federal government."
        ],
        roles: [
            {
                title: "IT Student",
                company: 'Department of National Defence',
                period: "2020 - 2021 (8 months)",
                technologies: 'SharePoint, PowerBI, PowerShell, HTML',
                missions: [
                    "Designed a robotic process automation bot (virtual agent) used for answering internal clients’ questions.",
                    "Created scripts using Windows PowerShell to automate image processing tasks.",
                    "Used Power BI to compare datasets from different sources and to create useful data visualizations.",
                ],
            },
            {
                title: "Student Programmer",
                company: 'Department of National Defence',
                period: "2019 (4 months)",
                technologies: 'MS Access, SQL Developer, Visual Basic, Excel',
                missions: [
                    "Used SQL Developer to query and maintain an Oracle database.",
                    "Analyzed data using Microsoft Excel, Visual Basic programming, and Microsoft Access.",
                ],
            },
            {
                title: "Student Analyst",
                company: 'Canada Revenue Agency',
                period: "2018 (6 months)",
                technologies: 'Excel, Visual Basic, PowerPoint',
                missions: [
                    "Performed data analysis using Microsoft Excel and Visual Basic programming.",
                ],
            },
        ],
        detailIsDisplayed: false,
    },
];
