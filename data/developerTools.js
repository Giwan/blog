import categories from "./categories";
import labels from "./labels";
import Cloudinary from "./toolsData/cloudinary.mdx";
import Codepen from "./toolsData/codepen.mdx";
import Codesandbox from "./toolsData/codesandbox.mdx";
import Glitch from "./toolsData/glitch.mdx";
import Replit from "./toolsData/replit.mdx";
import Jsfiddle from "./toolsData/jsfiddle.mdx";
import StackBlitz from "./toolsData/stackblitz.mdx";
import ShadowsBrumm from "./toolsData/shadowsBrumm.mdx";
import CubicBezier from "./toolsData/cubicBezier.mdx";
import CSSWaves from "./toolsData/SVGWater.mdx";


const developerTools = [
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
    {
        title: "JSFiddle",
        url: "https://jsfiddle.net/",
        description: <Jsfiddle />,
        price: 0,
        category: categories.DEVELOPER,
        labels: [labels.productivity, labels.engineering],
    },
    {
        title: "StackBlitz",
        url: "https://stackblitz.com/",
        description: <StackBlitz />,
        price: 0,
        category: categories.DEVELOPER,
        labels: [labels.productivity, labels.engineering],
    },
    {
        title: "CSS Shadows",
        url: "https://shadows.brumm.af/",
        description: <ShadowsBrumm />,
        price: 0,
        category: categories.DEVELOPER,
        labels: [labels.productivity, labels.engineering],
    },
    {
        title: "Cubic bezier tool",
        url: "https://cubic-bezier.com/",
        description: <CubicBezier />,
        price: 0,
        category: categories.DEVELOPER,
        labels: [labels.productivity, labels.engineering],
    },
    {
        title: "CSS waves",
        url: "https://svgwave.in/",
        description: <CSSWaves />,
        price: 0,
        category: categories.DEVELOPER,
        labels: [labels.productivity, labels.engineering],
    },

];

export default developerTools;
