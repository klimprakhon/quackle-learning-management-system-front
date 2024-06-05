import Button from "./Button";

function AuthPanel(props) {
  const { children, title } = props;
  return (
    <div className="bg-green-50 max-w-[590px] min-w-[500px] p-10 flex flex-col justify-center items-center gap-8 rounded-lg shadow-lg shadow-green-600/25 ">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      {children}
      <div>
        <Button title="Get Start" />
      </div>
    </div>
  );
}

export default AuthPanel;
