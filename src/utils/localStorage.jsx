const employee = [
    {
        id: 1,
        firstName: "Aarav",
        email: "employee1@example.com",
        pass: "123",
        tasks: [
            {
                taskNumber: 1,
                active: true,
                newTask: true,
                completed: false,
                title: "Complete Report",
                description: "Finish the quarterly financial report.",
                date: "2024-11-20",
                category: "Finance"
            },
            {
                taskNumber: 2,
                active: false,
                newTask: false,
                completed: true,
                title: "Team Meeting",
                description: "Attend the project status update meeting.",
                date: "2024-11-15",
                category: "Meetings"
            },
            {
                taskNumber: 3,
                active: true,
                newTask: false,
                completed: false,
                title: "Code Review",
                description: "Review code for the new feature implementation.",
                date: "2024-11-18",
                category: "Development"
            }
        ],
        taskCount: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 0
        }
    },
    {
        id: 2,
        firstName: "Ishaan",
        email: "employee2@example.com",
        pass: "123",
        tasks: [
            {
                taskNumber: 1,
                active: false,
                newTask: true,
                completed: false,
                title: "Design Mockups",
                description: "Create mockups for the new application UI.",
                date: "2024-11-21",
                category: "Design"
            },
            {
                taskNumber: 2,
                active: true,
                newTask: false,
                completed: false,
                title: "Bug Fixing",
                description: "Resolve critical bugs reported by QA.",
                date: "2024-11-19",
                category: "Testing"
            },
            {
                taskNumber: 3,
                active: false,
                newTask: false,
                completed: true,
                title: "Documentation",
                description: "Update the technical documentation for the system.",
                date: "2024-11-10",
                category: "Documentation"
            }
        ],
        taskCount: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 0
        }
    },
    {
        id: 3,
        firstName: "Kavya",
        email: "employee3@example.com",
        pass: "123",
        tasks: [
            {
                taskNumber: 1,
                active: true,
                newTask: false,
                completed: false,
                title: "Client Presentation",
                description: "Prepare slides for the client presentation.",
                date: "2024-11-22",
                category: "Client Interaction"
            },
            {
                taskNumber: 2,
                active: false,
                newTask: true,
                completed: false,
                title: "Database Migration",
                description: "Migrate the database to the new server.",
                date: "2024-11-25",
                category: "IT Support"
            },
            {
                taskNumber: 3,
                active: false,
                newTask: false,
                completed: true,
                title: "Team Lunch",
                description: "Attend the scheduled team lunch.",
                date: "2024-11-12",
                category: "Team Building"
            }
        ],
        taskCount: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 0
        }
    },
    {
        id: 4,
        firstName: "Arjun",
        email: "employee4@example.com",
        pass: "123",
        tasks: [
            {
                taskNumber: 1,
                active: false,
                newTask: false,
                completed: true,
                title: "Market Research",
                description: "Complete research on industry trends.",
                date: "2024-11-14",
                category: "Research"
            },
            {
                taskNumber: 2,
                active: true,
                newTask: true,
                completed: false,
                title: "Sales Analysis",
                description: "Analyze the sales data for the last quarter.",
                date: "2024-11-19",
                category: "Sales"
            },
            {
                taskNumber: 3,
                active: true,
                newTask: false,
                completed: false,
                title: "System Upgrade",
                description: "Upgrade the internal systems to the latest version.",
                date: "2024-11-20",
                category: "Operations"
            }
        ],
        taskCount: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 0
        }
    },
    {
        id: 5,
        firstName: "Diya",
        email: "employee5@example.com",
        pass: "123",
        tasks: [
            {
                taskNumber: 1,
                active: true,
                newTask: false,
                completed: false,
                title: "Policy Update",
                description: "Update company policies for the new fiscal year.",
                date: "2024-11-23",
                category: "HR"
            },
            {
                taskNumber: 2,
                active: false,
                newTask: true,
                completed: false,
                title: "Inventory Check",
                description: "Perform a complete inventory check.",
                date: "2024-11-24",
                category: "Logistics"
            },
            {
                taskNumber: 3,
                active: false,
                newTask: false,
                completed: true,
                title: "Training Session",
                description: "Attend the scheduled training session.",
                date: "2024-11-13",
                category: "Learning"
            }
        ],
        taskCount: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 0
        }
    }
];


const Admin = [
    {
        "id": 1,
        "firstName": "Rohan",
        "email": "admin@example.com",
        "pass": "123"
    }
];


export const setLocalStorage = () => {
    localStorage.setItem('employee', JSON.stringify(employee));
    localStorage.setItem('admin', JSON.stringify(Admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employee'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return { employees, admin }
}