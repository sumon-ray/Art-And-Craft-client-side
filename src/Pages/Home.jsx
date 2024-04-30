import Banner from "../Components/Banner";
import CraftCards from "../Components/CraftCards";
import SubCategory from "../Components/SubCategory";

const Home = () => {

  return (
    <div className="container mx-auto px-4 lg:px-24 my-6">
      <Banner />
      <CraftCards />
      <SubCategory />
      {/* <ArtAndCraftCategories /> */}
      {/* <CraftItems /> */}
      {/* <div className="">
                {
                    subCategory.map(category=>{
                        return <div className="" key={category._id}>
                       <h1>{category.name}</h1>
                        </div>
                    })
                }
            </div> */}
    </div>
  );
};

export default Home;
