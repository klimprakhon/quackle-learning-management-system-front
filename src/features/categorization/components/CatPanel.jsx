import CatCard from "./CatCard";

function CatPanel() {
  return (
    <div className="flex items-center justify-center gap-6">
      <CatCard title="Data" icon="data" />
      <CatCard title="Business" icon="business" />
      <CatCard title="Marketing" icon="marketing" />
      <CatCard title="Software" icon="software" />
    </div>
  );
}

export default CatPanel;
