import {useLoaderData} from "react-router-dom";
import Navbar from "../../components/shared/navbar/Navbar";
import PageHeader from "../../components/shared/pageHeader/PageHeader";
import RightAside from "../../components/shared/rightAside/RightAside";
import BreakingNews from "./breakingNews/BreakingNews";
import LeftAside from "./leftAside/LeftAside";
import NewsCard from "./newsCard/NewsCard";

const Home = () => {
    const news = useLoaderData();
  
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-8 lg:px-10 xl:px-16">
      <header>
          <PageHeader></PageHeader>
          <BreakingNews></BreakingNews>
          <Navbar></Navbar>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-4 gap-6 my-10 md:my-14 lg:my-16">
        <aside>
          <LeftAside></LeftAside>
        </aside>
        
        <main className="md:col-span-2 min-h-[300px] flex flex-col gap-8">
            {
              news.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
            }
        </main>

        <aside>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Home;
