import PageHeader from "../../components/shared/pageHeader/PageHeader";
import RightAside from "../../components/shared/rightAside/RightAside";

const NewsDetails = () => {


  return (
    <div className="max-w-7xl mx-auto px-2 md:px-8 lg:px-10 xl:px-16">
      <header>
        <PageHeader></PageHeader>
      </header>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      <main className="md:col-span-2 lg:col-span-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo sint quam voluptas enim eaque magni libero corporis repellendus minus.
        </main>

        <aside className="">
          <RightAside></RightAside>
        </aside>
        
      </div>
      
    </div>
  );
};

export default NewsDetails;