import categories from "./categories";
import labels from "./labels";
import Cloudinary from "./toolsData/cloudinary.mdx";
import Autodraw from "./toolsData/autodraw.mdx";

const tools = [
    {
        title: "Figma",
        url: "https://figma.com",
        description:
            "App great design tool. It's easy to use and especially get started. No installation required for example. Simply fireup your web browser and signup and get started.",
        category: categories.DESIGN,
        labels: [labels.design, labels.productivity],
    },
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
        title: "Google doc",
        url: "https://docs.google.com",
        description:
            "Document writing. Create documents. If you've used Microsoft Word, this is a capable online alternative from Google.",
        price: 0,
        category: categories.WRITING,
        labels: [labels.productivity, labels.writing],
    },
    {
        title: "HackMD",
        url: "https://hackmd.io/",
        description:
            "Write markdown documents and store them in your github account. Great online editor for writing notes in markdown",
        price: 0,
        category: categories.WRITING,
        labels: [labels.productivity, labels.writing, labels.markdown],
    },
    {
        title: "Pocket",
        url: "https://app.getpocket.com/",
        description:
            "Use pocket to save your articles and read them later. One of the best things is the feature for reading a given article.",
        price: 0,
        category: categories.READING,
        labels: [labels.reading, labels.productivity, labels.education],
    },
    {
        title: "Mibo",
        url: "https://getmibo.com/",
        description:
            "Social chatting app. Hangout on an island with a group of people and chat. Only works on Chrome browser for now though. ",
        price: 0,
        category: categories.SOCIAL,
        labels: [labels.social],
    },
    {
        title: "Firefox Developer",
        url: "https://www.mozilla.org/en-US/firefox/85.0a2/whatsnew/all/",
        description:
            "A version of the Firefox browser specifically for developers. Especially it's support for CSS Grid is awesome",
        price: 0,
        category: categories.DEVELOPER,
        labels: [labels.engineering],
    },
    {
        title: "Miro",
        url: "https://miro.com/",
        description: "The online collaborative whiteboard platform",
        price: 0,
        category: categories.DEVELOPER,
        labels: [labels.productivity, labels.engineering],
    },
    {
        title: "Dribbble",
        url: "https://dribbble.com/",
        description: `UI and UX social plaform. 
        It's great to browse through the designs from others. 
        It motivates and inspires `,
        price: 0,
        category: categories.DESIGN,
        labels: [labels.productivity, labels.design],
    },
    {
        title: "Behance",
        url: "https://www.behance.net/",
        description: `UI and UX plaform. 
        Teams can easily share their projects making it easy to see the contributions from everyone`,
        price: 0,
        category: categories.DESIGN,
        labels: [labels.productivity, labels.design],
    },
    {
        title: "Cloudinary",
        url: "https://cloudinary.com/",
        description: <Cloudinary />,
        price: 0,
        category: categories.DEVELOPER,
        labels: [labels.productivity, labels.image],
    },
    {
        title: "AutoDraw",
        url: "https://autodraw.com/",
        description: <Autodraw />,
        price: 0,
        category: categories.DESIGN,
        labels: [labels.productivity, labels.design],
    },
];

export default tools;

/*  

Todo:

*/
