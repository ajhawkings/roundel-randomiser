"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export default function Home({ files }: { files: string[] }) {
  const [randomImages, setRandomImages] = useState<string[]>([]);
  const refresh = useCallback(() => {
    return setRandomImages(files.sort(() => Math.random() - 0.5).slice(0, 2))
  },[files]);

  // update on page load
  useEffect(() => refresh(), [refresh]);

  return (
    <>
      {randomImages.length > 0 && <>
        <Image src={randomImages[0]} alt="Random Roundel 1" />
        <Image src={randomImages[1]} alt="Random Roundel 2" />
      </>}
      <button onClick={refresh}>New round</button>
      <a href="/about">About this page</a>
    </>
  );
}
