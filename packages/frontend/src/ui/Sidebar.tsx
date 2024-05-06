import Link from "next/link";

export default function Sidebar() {
    return    <ul>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/item">Items page</Link>
    </li>
  </ul>;
  }