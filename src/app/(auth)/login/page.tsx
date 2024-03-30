import { login } from './actions';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid';

export default function LoginPage() {
  return (
    <div className="mb-12 flex h-full w-full items-center justify-center">
      <form className="flex w-96 flex-col rounded-xl bg-base-300 p-8">
        <h2 className="mb-6 text-2xl font-bold">Login</h2>
        <div>
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <div className="input input-bordered flex items-center gap-2">
            <EnvelopeIcon className="size-4" />
            <input
              type="text"
              className="grow"
              placeholder="John.doe@example.com"
              name="email"
            />
          </div>
        </div>
        <div className="mt-2">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <div className="input input-bordered flex items-center gap-2">
            <LockClosedIcon className="size-4" />
            <input
              type="password"
              className="grow"
              placeholder="Password"
              name="password"
            />
          </div>
        </div>
        <button
          className="btn btn-primary mt-6 w-full"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          formAction={login}
        >
          Log in
        </button>
        <div className="mt-4 text-center">
          Don&apos;t have an account?{' '}
          <a
            href="/signup"
            className="underline-offset-3 underline hover:text-secondary"
          >
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
}
