import categories from "./categories";
import labels from "./labels";
import HackersPad from "./toolsData/hackerspad.mdx";
import ProductHunt from "./toolsData/productHunt.mdx";

const softwareTools = [
    {
        title: "ProductHunt",
        url: "https://www.producthunt.com/",
        description: <ProductHunt />,
        price: 0,
        category: categories.SOFTWARE,
        labels: [labels.productivity, labels.software],
    },
    {
        title: "Hackerspad",
        url: "https://hackerspad.net/",
        description: <HackersPad />,
        price: 0,
        category: categories.SOFTWARE,
        labels: [labels.productivity, labels.project],
    },
    {
        title: "Readme.com",
        url: "https://readme.com/",
        description: "Create and manage documentation. ",
        price: 0,
        category: categories.SOFTWARE,
        labels: [labels.productivity, labels.project],
    },
    {
        title: "webmonetization.org",
        url: "https://webmonetization.org/",
        description: "Monetize the web without dark patterns",
        price: 0,
        category: categories.SOFTWARE,
        labels: [labels.productivity, labels.project],
    },
    {
        title: "https://www.patreon.com",
        url: "https://www.patreon.com",
        description: "Monetization for creators",
        price: 0,
        category: categories.SOFTWARE,
        labels: [labels.productivity, labels.project],
    },
];

export default softwareTools;
