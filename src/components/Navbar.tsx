"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const { isLoaded, signOut } = useAuth();

  const getAuthLink = () => {
    if (!isLoaded) return null;

    if (isSignedIn) {
      return (
        <button
          className="rounded-md bg-rose-600 px-4 py-2 font-medium"
          onClick={() => void signOut()}
        >
          Sign Out
        </button>
      );
    }

    return (
      <Link href="/sign-in" className="text-slate-100">
        <button
          className="rounded-md bg-rose-600 px-4 py-2 font-medium"
          onClick={() => void signOut()}
        >
          Sign In
        </button>
      </Link>
    );
  };

  return (
    <NavigationMenu.Root className="mb-8 flex list-none items-center justify-between text-slate-300">
      <NavigationMenu.Item className="font-display text-2xl font-medium">
        Job Flow
      </NavigationMenu.Item>
      <div>
        <NavigationMenu.NavigationMenuItem>
          {getAuthLink()}
        </NavigationMenu.NavigationMenuItem>
      </div>
    </NavigationMenu.Root>
  );
};

export default Navbar;
