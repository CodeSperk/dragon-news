import Navbar from "../../components/shared/navbar/Navbar";
import PageHeader from "../../components/shared/pageHeader/PageHeader";
import RightAside from "../../components/shared/rightAside/RightAside";
import BreakingNews from "./breakingNews/BreakingNews";
import LeftAside from "./leftAside/LeftAside";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-8 lg:px-10 xl:px-16">
      <header>
        
          <PageHeader></PageHeader>
      
        <div className="border-2 border-blue-500 min-h-6">
          <BreakingNews></BreakingNews>
        </div>
        <nav className="border-2 border-green-500 min-h-8">
          <Navbar></Navbar>
        </nav>
      </header>

      <div className="border-2 grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="border-2 border-green-500 min-h-[150px]">
          <LeftAside></LeftAside>
        </aside>
        <main className="border-2 border-blue-500 md:col-span-2 min-h-[300px]">
            Main section .....
        </main>
        <aside className="border-2 border-green-500 min-h-[150px]">
          <RightAside></RightAside>
        </aside>
      </div>
    </div>
  );
};

export default Home;
