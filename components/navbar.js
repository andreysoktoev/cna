import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link href='/'><a>home</a></Link>
      </div>
      <div>
        <Link href='/sheet'><a>sheet</a></Link>
      </div>
      <button>➕</button>
    </nav>
  )
}
