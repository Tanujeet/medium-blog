import { Appbar } from "../Components/Appbar";
import { BlogCard } from "../Components/BlogCard";
import { BlogSkeleton } from "../Components/BlogSkeleton";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-xl">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || ""}
              title={blog.title}
              content={blog.content}
              publishedDate={"21 April 2025"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
