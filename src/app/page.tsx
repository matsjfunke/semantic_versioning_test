"use client";
import { useState } from "react";

export default function Home() {
  const [version, setVersion] = useState(0);

  return (
    <div>
      <h1>Semantic Versioning Test</h1>
      <p>This is a test of semantic versioning.</p>
      <button
        onClick={() => {
          setVersion(version + 1);
        }}
      >
        ✨ Increment Version ✨
      </button>
      <p>Version: {version}</p>
    </div>
  );
}
