import moment from "moment";
import logo from "../../../assets/logo.png";

const PageHeader = () => {

  return (
    <div className="py-6 md:py-8 lg:py-10 text-center">
      <div className="w-64 md:w-[471px] mx-auto mb-3 md:mb-5">
        <img src={logo} alt="Page Logo" className="w-full"/>
      </div>
      <p>Journalism Without Fear or Favour</p>
      {/* Today */}

      <p className="md:text-lg mt-3">
        <span className="font-semibold">
          {moment().format("dddd, ")}  
        </span> 
          {moment().format("MMMM DD, YYYY")}
      </p>
    </div>
  );
};

export default PageHeader;