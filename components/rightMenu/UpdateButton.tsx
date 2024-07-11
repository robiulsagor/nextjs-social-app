"use client";

import { useFormStatus } from "react-dom";

function UpdateButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-blue-600 text-white text-xs border-none rounded-lg p-2 hover:opacity-75 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? "Updating..." : "Update"}
    </button>
  );
}

export default UpdateButton;
