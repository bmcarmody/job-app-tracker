import { login, signup } from './actions';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid';

export default function LoginPage() {
  return (
    <div className="w-full h-full flex items-center justify-center mb-12">
      <form className="bg-base-300 p-8 rounded-xl w-1/2 flex flex-col gap-4">
        <h2 className="text-2xl">Login or Sign up</h2>
        <label className="input input-bordered flex items-center gap-2">
          <EnvelopeIcon />
          <input name="email" type="email" placeholder="Email" className="grow" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <LockClosedIcon />
          <input name="password" type="password" placeholder="Password" className="grow" />
        </label>
        <div className="flex gap-2">
          <button className="grow btn btn-secondary btn-outline" formAction={signup}>Sign up</button>
          <button className="grow btn btn-primary" formAction={login}>Log in</button>
        </div>
      </form>
    </div>
  )
}
