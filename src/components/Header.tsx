import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <Link href="/">PetPal</Link>

      <nav>
        <Link href="/games">games</Link>
        <Link href="/messages">messages</Link>
        <Link href="/profile">profile</Link>
      </nav>
    </header>
  );
}

export default Header;
