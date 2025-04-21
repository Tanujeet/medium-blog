import { Appbar } from "../Components/Appbar";
import { BlogCard } from "../Components/BlogCard";

const Blogs = () => {
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
