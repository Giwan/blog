import categories from "./categories";
import labels from "./labels";
import Autodraw from "./toolsData/autodraw.mdx";
import Framer from "./toolsData/framer.com.mdx";

const designTools = [
    {
        title: "Figma",
        url: "https://figma.com",
        description:
            "App great design tool. It's easy to use and especially get started. No installation required for example. Simply fireup your web browser and signup and get started.",
        category: categories.DESIGN,
        labels: [labels.design, labels.productivity],
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
        title: "AutoDraw",
        url: "https://autodraw.com/",
        description: <Autodraw />,
        price: 0,
        category: categories.DESIGN,
        labels: [labels.productivity, labels.design],
    },
    {
        title: "Framer",
        url: "https://www.framer.com",
        description: <Framer />,
        price: 0,
        category: categories.DESIGN,
        labels: [labels.productivity, labels.design, labels.prototype],
    },
];

export default designTools;
