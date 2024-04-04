import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="bg-[var(--bg-primary)] py-6 flex px-4 font-semibold md:text-lg rounded-md">
      <button className="h-full bg-[var(--clr-accent)] hover:bg-red-700 py-2 md-py-3 px-4 md:px-6 text-white rounded-md">
        Latest
      </button>
      <Marquee
        pauseOnHover={true}
        speed={100}
        className="text-[var(--clr-heading)] px-10 gap-80"
      >
        <div className="flex gap-20">
          <Link to="/">
            Match Highlights: Germany vs Spain — as it happened ! .....
          </Link>
          <Link to="/">Global Leaders Announce Historic Climate Agreement</Link>
          <Link to="/">
            Emergency Summit Called Amid Escalating International Tensions
          </Link>
          <Link to="/"> Investigation Uncovers Massive Corporate Scandal</Link>
          <Link to="/">
            Earthquake Strikes Region, Emergency Response Underway
          </Link>
        </div>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
