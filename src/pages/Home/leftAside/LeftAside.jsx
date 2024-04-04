import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftAside = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    fetch('/categories.json')
    .then(res=>res.json())
    .then(data=>setCategories(data))
  },[]);

  return (
    <div>
       <h2 className="text-xl font-semibold text-[var(--clr-heading)]">All Category: {categories.length}</h2>

       <div className="my-5">
        {
          categories.map(category => <div key={category.id} className="pl-4 lg:text-xl hover:bg-[var(--bg-primary)] hover:text-[var(--clr-heading)] hover:font-medium transition duration-700 py-4 rounded-md">
              <NavLink 
                to={`/category/${category.id}`}
                className={({isActive, isPending}) => isPending? "pending" : isActive ? "active bg-[var(--bg-primary)] text-[var(--clr-heading)] font-medium" : ""}
                >{category.name}
              </NavLink>
            </div>)
        }
       </div>
    </div>
  );
};

export default LeftAside;