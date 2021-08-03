import categories from "./categories";
import labels from "./labels";
import Cloudinary from "./toolsData/cloudinary.mdx";
import Codepen from "./toolsData/codepen.mdx";
import Codesandbox from "./toolsData/codesandbox.mdx";
import Glitch from "./toolsData/glitch.mdx";
import Replit from "./toolsData/replit.mdx";


const developerTools = [
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
        title: "Cloudinary",
        url: "https://cloudinary.com/",
        description: <Cloudinary />,
        price: 0,
        category: categories.DEVELOPER,
        labels: [labels.productivity, labels.image],
    },
    {
        title: "Codepen",
        url: "https://codepen.io",
        description: <Codepen />,
        price: 0,
        category: categories.DEVELOPER,
        labels: [labels.productivity, labels.engineering],
    },
    {
        title: "Codesandbox",
        url: "https://codesandbox.io/",
        description: <Codesandbox />,
        price: 0,
        category: categories.DEVELOPER,
        labels: [labels.productivity, labels.engineering],
    },
    {
        title: "Glitch",
        url: "https://glitch.com/",
        description: <Glitch />,
        price: 0,
        category: categories.DEVELOPER,
        labels: [labels.productivity, labels.engineering],
    },
    {
        title: "Replit",
        url: "https://replit.com/",
        description: <Replit />,
        price: 0,
        category: categories.DEVELOPER,
        labels: [labels.productivity, labels.engineering],
    },

];

export default developerTools;