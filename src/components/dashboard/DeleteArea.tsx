"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export const DeleteArea = () => {
  const [active, setActive] = useState(false);
  const stateClassName = active ? "border-red-800 bg-red-800/20 text-red-500" : "border-neutral-500 bh-neutral-500/20 text-neutral-500";

  return (
    <div className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${stateClassName}`}>
      <TrashIcon className="w-8 h-8" />
    </div>
  );
}
