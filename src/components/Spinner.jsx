import LoaderIcon from "../icons/LoaderIcon";

function Spinner() {
  return (
    <div>
      <div className="fixed inset-0 bg-white z-40 opacity-70"></div>
      <div className="fixed inset-0 flex justify-center items-center z-50 animate-spin">
        <LoaderIcon className="fill-green-500" />
      </div>
    </div>
  );
}

export default Spinner;
