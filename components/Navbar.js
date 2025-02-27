import React from 'react';
import Link from "next/link";

const Links = [
    { href: '/todo-list', text: '' },
    { href: '/prisma', text: '' },
]

const Navbar = () => {
  return (
    <nav className="bg-base-500">
      <div className="navbar max-w-6xl mx-auto flex sm:flex-row items-center">
          <Link href="/" className="btn btn-secondary">Home</Link>
          <ul className="menu md:ml-8 flex sm:flex-row space-x-4">
            {Links.map((link) => (
                <li key={link.href}>
                    <Link href={link.href} className="capitalize text-cyan-50">
                        {link.text}
                    </Link>
                </li>
            ))}
          </ul>
      </div>
    </nav>
  )
};

export default Navbar;