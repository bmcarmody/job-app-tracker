import { useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";

export const DeleteArea = () => {
  const [active, setActive] = useState(false);
  const stateClassName = active ? "border-red-800 bg-red-800/20 text-red-500" : "border-neutral-500 bh-neutral-500/20 text-neutral-500";

  return (
    <div className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${stateClassName}`}>
      <RiDeleteBinFill />
    </div>
  );
}
