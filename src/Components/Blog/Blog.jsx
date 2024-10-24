import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { title, cover, reading_time, posted_date, author, author_img, hashtags } = blog;
  return (
    <div className="mb-10">
      <img src={cover} alt={`cover photo of the title ${title}`} />
     
      <div className="flex justify-between items-center mt-7 mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl font-bold">{author}</h3>
            <p className="text-[#11111199] text-base font-semibold">{posted_date}</p>
          </div>
        </div>
        <div>
            <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-black mb-4 ">{title}</h2>

      <p  className="gap-4 flex text-[#11111199] text-xl font-medium">
        {
            hashtags.map((hash, idx) => <span  key={idx}>
                <a href="#">
                    #{hash}
                </a>
                </span>)
        }
      </p>

    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
