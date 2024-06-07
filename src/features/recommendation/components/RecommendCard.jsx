import Button from "../../../components/Button";
import HeroImage from "../../../assets/hero-image.jpeg";

function RecommendCard() {
  return (
    <div className="grid grid-cols-2 gap-4 bg-white border border-slate-300 rounded-lg h-[200px] w-[540px] overflow-hidden">
      <div>
        <img
          src={HeroImage}
          className="object-cover object-center rounded-sm w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 justify-around w-full h-full">
        <div className="flex flex-col gap-2 pl-6 pt-2">
          <h2 className="text-lg font-bold">Course Title</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipiscing elit.</span>
          <h3 className="font-semibold">990 THB</h3>
        </div>
        <div className="flex pb-1">
          <Button title="Learn More" level="plain" width="40" icon />
        </div>
      </div>
    </div>
  );
}

export default RecommendCard;
