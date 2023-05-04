import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <div className="mb-24 flex flex-1 items-center justify-center">
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      redirectUrl="/dashboard"
    />
  </div>
);

export default SignUpPage;
