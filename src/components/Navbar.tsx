import Link from 'next/link';
import { isAuthed, logout } from '~/app/(auth)/login/actions';
import { AddJobModal } from './dashboard/AddJobModal';

const Navbar = async () => {
  const isLoggedIn = await isAuthed();

  return (
    <div className="navbar flex justify-between">
      <div className="link-hover link text-2xl">Job Flow</div>
      {isLoggedIn ? (
        <div>
          <AddJobModal />
          <form>
            <button
              className="btn btn-outline btn-secondary"
              formAction={logout}
            >
              Logout
            </button>
          </form>
        </div>
      ) : (
        <Link className="btn btn-primary" href="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
