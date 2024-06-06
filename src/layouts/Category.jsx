import CatPanel from "../features/categorization/components/CatPanel";

function Category() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 py-20 bg-slate-100 ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Explore All Category</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam.
        </span>
      </div>
      <div>
        <CatPanel />
      </div>
    </div>
  );
}

export default Category;
