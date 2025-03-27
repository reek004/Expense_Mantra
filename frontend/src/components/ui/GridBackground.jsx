import { cn } from '../../utils/cn';
import React from "react";

export function GridBackground({ children }) {
  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-black">
      {/* Grid background */}
      <div
        className={cn(
          "absolute inset-0 ", // Ensure the grid is behind the content
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"
      ></div>
      {/* Render children above the grid */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
