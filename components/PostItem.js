import Link from "next/link";
import ArticleHeader from "./Article/ArticleHeader";

const PostItem = ({
    post: {
        link,
        module: { meta },
    },
}) => (
    <article>
        <Link href={"/blog" + link}>
            <a>
                <ArticleHeader meta={meta} />
            </a>
        </Link>
    </article>
);

export default PostItem;
