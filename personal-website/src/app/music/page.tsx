
import Image from 'next/image'

export default function Music() {
  return (
    <div className="bg-forest-green min-h-screen">
      <div className="container mx-auto px-12 py-16">
        <h1 className="text-6xl font-bold text-neutral-cream mb-12">Music</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-neutral-cream rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-forest-green mb-4">Instrument Gallery</h2>
            <div className="grid grid-cols-3 gap-4">
              <Image src="/images/guitar.png" alt="Guitar" width={200} height={200} />
              <Image src="/images/bass.png" alt="Bass" width={200} height={200} />
              {/* Add more instrument images here */}
            </div>
          </div>
          <div className="bg-neutral-cream rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-forest-green mb-4">Performances</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=PL..."
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
