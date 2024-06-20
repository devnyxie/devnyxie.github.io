import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <div key={post.slug}>
            <p className="mt-4">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <Link href={`/blog/${post.slug}`}>
              <div>
                <p>{post.metadata.title}</p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}
