import Link from "next/link";
import { isAuthed, logout } from "~/app/(auth)/login/actions";

const Navbar = async () => {
  const isLoggedIn = await isAuthed();

  return (
    <div className="navbar flex justify-between">
      <div className="link link-hover text-2xl">Job Flow</div>
      {isLoggedIn ? (
        <form>
          <button className="btn btn-secondary btn-outline" formAction={logout}>Logout</button>
        </form>
      ) : (
        <Link className="btn btn-primary" href="login">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
