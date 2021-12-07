import categories from "./categories";
import labels from "./labels";

import WeTransfer from "./toolsData/wetransfer.mdx";
import readingTools from "./readingTools";
import designTools from "./designTools";
import developerTools from "./developerTools";
import softwareTools from "./softwareTools";
import writingTools from "./writingTools";
import projectManagementTools from "./projectManagementTools";

const tools = [
    ...readingTools,
    ...designTools,
    ...developerTools,
    ...softwareTools,
    ...writingTools,
    ...projectManagementTools,
    {
        title: "Mibo",
        url: "https://getmibo.com/",
        description:
            "Social chatting app. Hangout on an island with a group of people and chat. Only works on Chrome browser for now though.",
        price: 0,
        category: categories.SOCIAL,
        labels: [labels.social],
    },
    
    {
        title: "weTransfer",
        url: "https://wetransfer.com/",
        description: <WeTransfer />,
        price: 0,
        category: categories.DATA_MANAGEMENT,
        labels: [labels.productivity, labels.email],
    },
];

export default tools;

/*  

Todo:

https://readme.com/documentation
Great design. Some inspiration for mytoori.
They also have good customers with nice designed websites. 
Those are tools that I might want to list as well. 
I also like how many of these sites then list other sites that are of interest. 

Hosting category: 
fly.io

Javascript frameworks: 
https://remix.run/

*/
