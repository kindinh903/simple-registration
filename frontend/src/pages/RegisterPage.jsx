import RegisterForm from "../components/RegisterForm.jsx";
import NavigationButtons from "../components/NavigationButtons.jsx";

export default function RegisterPage() {
  return (
    <div className="container mt-5" style={{ maxWidth: 480 }}>
      <h2 className="mb-4 text-center">User Registration</h2>
      <RegisterForm />
      <NavigationButtons excludePaths={["/register"]} />
    </div>
  );
}
