export type Experience = {
    company: string;
    role: string;
    period: string;
    description: string[];
};

export const experience: Experience[] = [
    {
        company: "Cisco Secure Access",
        role: "Intermiediate Software Developer",
        period: "september 2025-present",
        description: ["bullet 1", "bullet 2"],
    },
    {
        company: "Cisco Secure Endpoint",
        role: "Intermiediate Software Developer",
        period: "january 2020-september 2025",
        description: ["bullet 1", "bullet 2"],
    },
    {
        company: "CNOOC International",
        role: "Intern Software Developer",
        period: "may 2018-august 2019",
        description: ["bullet 1", "bullet 2"],
    },
];
