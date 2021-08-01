import categories from "./categories";
import labels from "./labels";

const readingTools = [
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
        title: "Instapaper",
        url: "https://instapaper.com/",
        description: "Instapaper saves web content for later and possibly offline reading",
        price: 0,
        category: categories.READING,
        labels: [labels.reading, labels.productivity, labels.education],
    },
    {
        title: "Medium",
        url: "https://medium.com/",
        description: "Medium has lots of good content. Unfortunately I'm not always happy with the direction that it's taking as a platform",
        price: 0,
        category: categories.READING,
        labels: [labels.reading, labels.productivity, labels.education],
    },
];

export default readingTools;
