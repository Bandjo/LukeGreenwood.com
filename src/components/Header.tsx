import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-neutral-cream dark:bg-gray-900 py-6 px-12 flex justify-between items-center">
      <Link href="/" className="text-3xl font-bold text-forest-green dark:text-neutral-cream">
        Luke Greenwood
      </Link>
      <nav>
        <ul className="flex space-x-12">
          <li><Link href="/work" className="text-xl text-earthy-brown dark:text-neutral-cream hover:text-accent-moss-green">Work</Link></li>
          <li><Link href="/music" className="text-xl text-earthy-brown dark:text-neutral-cream hover:text-accent-moss-green">Music</Link></li>
          <li><Link href="/book" className="text-xl text-earthy-brown dark:text-neutral-cream hover:text-accent-moss-green">Book</Link></li>
        </ul>
      </nav>
    </header>
  )
}