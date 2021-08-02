import categories from "./categories";
import labels from "./labels";
import HackersPad from "./toolsData/hackerspad.mdx";
import ProductHunt from "./toolsData/producthunt.mdx";

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
];

export default softwareTools;
