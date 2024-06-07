import BrowseCourse from "../layouts/BrowseCourse";
import Category from "../layouts/Category";
import Hero from "../layouts/Hero";
import TopPick from "../layouts/TopPick";

function HomePage() {
  return (
    <div>
      <div>
        <Hero />
        <Category />
        <TopPick />
        <BrowseCourse />
      </div>
    </div>
  );
}

export default HomePage;
