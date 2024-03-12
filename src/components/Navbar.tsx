import { PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { isAuthed, logout } from "~/app/(auth)/login/actions";

const Navbar = async () => {
  const isLoggedIn = await isAuthed();

  return (
    <div className="navbar flex justify-between">
      <div className="link link-hover text-2xl">Job Flow</div>
      {isLoggedIn ? (
        <div>
          <button className="btn btn-primary mr-4">
            <PlusIcon className="w-4 h-4" />
            New Job
          </button>
          <form>
            <button className="btn btn-secondary btn-outline" formAction={logout}>Logout</button>
          </form>
        </div>
      ) : (
        <Link className="btn btn-primary" href="login">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
