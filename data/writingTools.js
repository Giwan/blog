import categories from "./categories";
import labels from "./labels";
import Ghost from "./toolsData/ghost.org.mdx";
import Txtfiddle from "./toolsData/txtfiddle.mdx";
import Etherpad from "./toolsData/etherpad.mdx";

const writingTools = [
    
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
        title: "Ghost",
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
        title: "Hemingway Editor",
        url: "https://hemingwayapp.com/",
        description: "An online editor that helps you write higher quality content. It will make suggestions for improvements and help you get to a higher quality article.",
        price: 0,
        category: categories.WRITING,
        labels: [labels.productivity, labels.writing],
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

export default writingTools;
