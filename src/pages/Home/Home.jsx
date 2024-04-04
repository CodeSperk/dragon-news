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
          <BreakingNews></BreakingNews>
          <Navbar></Navbar>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-4 gap-6 my-10 md:my-14 lg:my-16">
        <aside className="border-2 border-green-500 min-h-[150px]">
          <LeftAside></LeftAside>
        </aside>
        <main className="border-2 border-blue-500 md:col-span-2 min-h-[300px]">
            Main section .....
        </main>

        <aside>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Home;
