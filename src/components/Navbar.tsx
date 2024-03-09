"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const Navbar = () => {

  return (
    <NavigationMenu.Root className="mb-8 flex list-none items-center justify-between text-slate-300">
      <NavigationMenu.Item className="font-display text-2xl font-medium">
        Job Flow
      </NavigationMenu.Item>
      <div>
        <NavigationMenu.NavigationMenuItem>
        </NavigationMenu.NavigationMenuItem>
      </div>
    </NavigationMenu.Root>
  );
};

export default Navbar;
