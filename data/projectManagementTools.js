import categories from "./categories";
import labels from "./labels";

const projectManagementTools = [
    {
        title: "Trello",
        url: "https://trello.com",
        description:
            "A project management tools. Great for new projects. This is a great alternative for something like Jira. It's great for tracking your projects",
        price: 0,
        category: categories.PROJECT_MANAGEMENT,
        labels: [labels.project, labels.management, labels.productivity],
    },
    {
        title: "Miro",
        url: "https://miro.com/",
        description:
            "The online collaborative whiteboard platform. Plan projects, create boards and use various media types.",
        price: 0,
        category: categories.PROJECT_MANAGEMENT,
        labels: [labels.productivity, labels.engineering],
    },
];

export default projectManagementTools;
