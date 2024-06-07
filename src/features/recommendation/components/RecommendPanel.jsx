import RecommendCard from "./RecommendCard";

function RecommendPanel() {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="flex flex-col gap-4">
        <RecommendCard />
        <RecommendCard />
      </div>
      <div className="flex flex-col gap-4">
        <RecommendCard />
        <RecommendCard />
      </div>
    </div>
  );
}

export default RecommendPanel;
