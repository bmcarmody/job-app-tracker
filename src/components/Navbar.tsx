import Link from 'next/link';
import { isAuthed, logout } from '~/app/(auth)/login/actions';
import { AddJobModal } from './dashboard/AddJobModal';
import {
  ArrowLeftStartOnRectangleIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

const Navbar = async () => {
  const isLoggedIn = await isAuthed();

  return (
    <div className="navbar flex justify-between">
      <div className="link-hover link text-2xl">Job Flow</div>
      {isLoggedIn ? (
        <div>
          <AddJobModal />
          <div className="dropdown dropdown-end">
            <div className="avatar placeholder" role="button" tabIndex={0}>
              <div className="w-12 cursor-pointer rounded-full bg-neutral text-neutral-content hover:opacity-90">
                <span>BC</span>
              </div>
            </div>
            <ul
              className="menu dropdown-content z-[1] mt-2 w-52 rounded-box bg-base-200 p-2 shadow"
              tabIndex={0}
            >
              <li>
                <a>
                  <UserIcon className="size-4" /> My profile
                </a>
              </li>
              <li>
                <form>
                  <button
                    className="flex items-center gap-2"
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    formAction={logout}
                  >
                    <ArrowLeftStartOnRectangleIcon className="size-4" />
                    Logout
                  </button>
                </form>
              </li>
            </ul>
          </div>
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
