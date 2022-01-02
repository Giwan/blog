import categories from "./categories";
import labels from "./labels";
import WeTransfer from "./toolsData/wetransfer.mdx";

const dataTools = [
    {
        title: "weTransfer",
        url: "https://wetransfer.com/",
        description: <WeTransfer />,
        price: 0,
        category: categories.DATA_MANAGEMENT,
        labels: [labels.productivity, labels.email],
    }
]; 

export default dataTools; 