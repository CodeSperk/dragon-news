import logo from "../../../assets/logo.png";

const PageHeader = () => {
  const fullDate = new Date();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const dayName = dayNames[fullDate.getDay()];
  const monthName = monthNames[fullDate.getMonth()];
  const date = fullDate.getDate();
  const year = fullDate.getFullYear();
  
  const formattedDate = `${monthName} ${date}, ${year}`;


  return (
    <div className="py-6 md:py-8 lg:py-10 text-center">
      <div className="w-64 md:w-[471px] mx-auto mb-3 md:mb-5">
        <img src={logo} alt="Page Logo" className="w-full"/>
      </div>
      <p>Journalism Without Fear or Favour</p>
      {/* Today */}
      <p className="md:text-lg mt-3"><span className="font-semibold">{dayName}, </span> {formattedDate}</p>
    </div>
  );
};

export default PageHeader;