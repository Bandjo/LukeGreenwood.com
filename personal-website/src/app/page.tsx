export default function Home() {
  return (
    <div className="bg-forest-green flex flex-col items-center justify-center min-h-screen py-2">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-neutral-cream">
          Luke Greenwood
        </h1>
        <p className="text-2xl text-neutral-cream mt-4">
          Engineer, musician, writer, and tinkerer
        </p>
        <button className="bg-earthy-brown text-neutral-cream font-bold py-4 px-8 rounded-lg mt-8 hover:bg-accent-moss-green transition">
          Get in Touch
        </button>
      </div>
    </div>
  );
}