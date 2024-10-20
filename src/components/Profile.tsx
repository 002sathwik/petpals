import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

function Profile() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-28 h-28 rounded-full overflow-hidden border-2 border-secondary-500"
    //   onMouseEnter={() => setHovered(true)}
    //   onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={hovered ? "/doge.gif" : "/pet2.png"} // Replace with a profile image
        alt="Profile picture"
        width={112}
        height={112}
        className="object-contain"
      />
    </div>
  );
}

export default Profile;
