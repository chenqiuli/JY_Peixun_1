import React from "react";

export default function Special({ children }: { children: React.ReactNode }) {
  return (
    <div>
      Special
      {children}
      {children}
    </div>
  );
}
