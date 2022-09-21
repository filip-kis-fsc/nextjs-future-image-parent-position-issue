import Image from "next/future/image";
import { useEffect, useState } from "react";
import testImage from "/public/test-image.jpg";

export default function Home() {
  const [displayImage, setDisplayImage] = useState(true);

  useEffect(() => {
    setDisplayImage(false);
  }, []);

  return (
    displayImage && (
      <div style={{ position: "relative", width: 10, height: 10 }}>
        <Image priority fill src={testImage} alt="" sizes="10px" />
      </div>
    )
  );
}
