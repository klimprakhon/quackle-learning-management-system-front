import AuthPanel from "../components/AuthPanel";
import Input from "../components/Input";

function LoginPage() {
  return (
    <div className="max-w-screen flex justify-center px-6 py-24">
      <div>
        <AuthPanel title="Register">
          <div className="flex flex-col gap-3 flex-grow">
            <div className="flex flex-grow">
              <Input title="Email" type="email" />
            </div>
            <div className="flex gap-3">
              <Input title="Password" type="password" />
            </div>
          </div>
        </AuthPanel>
      </div>
    </div>
  );
}

export default LoginPage;
