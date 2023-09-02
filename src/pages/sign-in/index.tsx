import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <div className="mb-24 flex flex-1 items-center justify-center">
    <SignIn
      path="/sign-in"
      routing="path"
      signUpUrl="/sign-up"
      redirectUrl="/"
    />
  </div>
);

export default SignInPage;
