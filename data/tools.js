import categories from "./categories";
import labels from "./labels";
import Cloudinary from "./toolsData/cloudinary.mdx";
import DrawIO from "./toolsData/draw.io.mdx";
import Ghost from "./toolsData/ghost.org.mdx";
import Txtfiddle from "./toolsData/txtfiddle.mdx";
import Codepen from "./toolsData/codepen.mdx";
import Codesandbox from "./toolsData/codesandbox.mdx";
import WeTransfer from "./toolsData/wetransfer.mdx";
import HackersPad from "./toolsData/hackerspad.mdx";
import Etherpad from "./toolsData/etherpad.mdx";
import readingTools from "./readingTools";
import designTools from "./designTools";

const tools = [
    ...readingTools,
    ...designTools,
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
        description: "The online collaborative whiteboard platform. Plan projects, create boards and use various media types.",
        price: 0,
        category: categories.DEVELOPER,
        labels: [labels.productivity, labels.engineering],
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
        title: "Draw.io",
        url: "https://app.diagrams.net/",
        description: <DrawIO />,
        price: 0,
        category: categories.WIREFRAME,
        labels: [labels.productivity, labels.wireframe, labels.prototype],
    },
    {
        title: "ghost.org",
        url: "https://ghost.org",
        description: <Ghost />,
        price: 0,
        category: categories.WRITING,
        labels: [labels.productivity, labels.writing],
    },
    {
        title: "txtfiddle.com",
        url: "https://txtfiddle.com/",
        description: <Txtfiddle />,
        price: 0,
        category: categories.WRITING,
        labels: [labels.productivity, labels.writing],
    },
    {
        title: "codepen",
        url: "https://codepen.io",
        description: <Codepen />,
        price: 0,
        category: categories.DEVELOPER,
        labels: [labels.productivity, labels.engineering],
    },
    {
        title: "codesandbox",
        url: "https://codesandbox.io/",
        description: <Codesandbox />,
        price: 0,
        category: categories.DEVELOPER,
        labels: [labels.productivity, labels.engineering],
    },
    {
        title: "weTransfer",
        url: "https://wetransfer.com/",
        description: <WeTransfer />,
        price: 0,
        category: categories.DATA_MANAGEMENT,
        labels: [labels.productivity, labels.email],
    },
    {
        title: "hackerspad",
        url: "https://hackerspad.net/",
        description: <HackersPad />,
        price: 0,
        category: categories.SOFTWARE,
        labels: [labels.productivity, labels.project],
    },
    {
        title: "etherpad",
        url: "https://etherpad.org/",
        description: <Etherpad />,
        price: 0,
        category: categories.WRITING,
        labels: [labels.productivity, labels.writing, labels.notes],
    },
];

export default tools;

/*  

Todo:

https://hackerspad.net/
https://hackerspad.net/? 

https://readme.com/documentation
Great design. Some inspiration for mytoori.
They also have good customers with nice designed websites. 
Those are tools that I might want to list as well. 
I also like how many of these sites then list other sites that are of interest. 

*/
