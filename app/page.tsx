"use client";

import { useState } from "react";
import Chat from "./components/chat";
import { upload } from "./upload";
import Image from "next/image";

export default function Home() {
  const [active, setActive] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const file = files ? files[0] : null;
    setActive((file && file.size > 0) ?? false);
    if (file && file.size === 0) {
      setActive(true);
    }
  };

  return (
    <div>
      <header className="form-container sticky top-0 bg-white z-50">
        <form action={upload}>
          <input type="file" name="file" onChange={handleChange}/>
          <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!active}
          >
            Upload
          </button>
        </form>
      </header>
      <div className="text-center text-4xl font-bold mt-8">Hire Power</div>
      <div className="flex justify-center mt-4">
        <Image
          src="/images/HirePower.jpg"
          alt="Hire Power"
          width={200}
          height={200}
        />
      </div>

      <Chat />
    </div>
  );
}
