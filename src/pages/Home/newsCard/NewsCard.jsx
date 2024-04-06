import PropTypes from "prop-types";
import { BsBookmark, BsShare } from 'react-icons/bs';
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  const {_id, author, image_url, title, details} = singleNews;

  return (
    <div className="border rounded-none ">
      {/* news card header */}
      <div className="flex justify-between p-5 items-center bg-gray-200">
        <div className="flex gap-3">
        <img className="rounded-full w-10 h-10" src={author.img} alt="" />
        <div className="block">
          <h3 className="font-semibold">{author.name}</h3>
          <p className="text-{#706F6F} text-sm">{author.published_date}</p>
        </div>
        </div>
        <div className="flex gap-2">
          <BsBookmark/>
          <BsShare/>
        </div>
      </div>

{/* news card title, banner & details */}
      <div className="p-4">
        <h2 className="card-title mb-5">{title}</h2>
        <img
        className="w-full max-h-80 mb-8 mx-auto"
          src={image_url}
          alt="Shoes"
        />
        <p className="mb-5 text-justify">
        {
          details.length > 200 ? <p>{details.slice(0, 200)} <Link 
          to={`/news/${_id}`}
          className="text-blue-600">Read More...</Link> </p> : <p>{details}</p>
        }
        </p>
      </div>
      

    </div>
  );
};

NewsCard.propTypes = {
  singleNews: PropTypes.object,
};

export default NewsCard;