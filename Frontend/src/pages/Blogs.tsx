import { Appbar } from "../Components/Appbar";
import { BlogCard } from "../Components/BlogCard";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>loading ...</div>;
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-xl">
          <BlogCard
            authorName={"Harsh"}
            title={
              "How an ugly single page website makes $5000 a month without affiliate marketing"
            }
            content={
              "How an ugly single page website makes $5000 a month without affiliate marketing"
            }
            publishedDate={"21 April 2025"}
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
