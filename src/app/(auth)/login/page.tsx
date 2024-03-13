import { login, signup } from './actions';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid';

export default function LoginPage() {
  return (
    <div className="mb-12 flex h-full w-full items-center justify-center">
      <form className="flex w-1/2 flex-col gap-4 rounded-xl bg-base-300 p-8">
        <h2 className="text-2xl">Login or Sign up</h2>
        <label className="input input-bordered flex items-center gap-2">
          <EnvelopeIcon className="h-4 w-4" />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="grow"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <LockClosedIcon className="h-4 w-4" />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="grow"
          />
        </label>
        <div className="flex gap-2">
          <button
            className="btn btn-outline btn-secondary grow"
            formAction={signup}
          >
            Sign up
          </button>
          <button className="btn btn-primary grow" formAction={login}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
