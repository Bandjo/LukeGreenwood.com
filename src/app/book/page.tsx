import Image from 'next/image'

export default function Book() {
  return (
    <div className="bg-neutral-cream dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-12 py-16">
        <h1 className="text-6xl font-bold text-forest-green dark:text-neutral-cream mb-12">Comfort and Chaos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image src="/images/book-cover.jpg" alt="Comfort and Chaos book cover" width={300} height={450} className="rounded-lg shadow-xl" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-forest-green dark:text-neutral-cream mb-6">About the Book</h2>
            <p className="text-lg text-earthy-brown dark:text-neutral-cream mb-8">
              This is a placeholder for the book blurb. It will describe the book in an engaging way, highlighting its themes and what readers can expect.
            </p>
            <div className="flex flex-col space-y-4">
              <a href="#" className="bg-earthy-brown text-neutral-cream font-bold py-3 px-6 rounded-lg hover:bg-accent-moss-green transition text-center">
                Buy on Amazon
              </a>
              <a href="#" className="bg-earthy-brown text-neutral-cream font-bold py-3 px-6 rounded-lg hover:bg-accent-moss-green transition text-center">
                Buy on Barnes & Noble
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}