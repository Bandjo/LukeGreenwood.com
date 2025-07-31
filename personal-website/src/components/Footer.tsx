export default function Footer() {
  return (
    <footer className="bg-forest-green py-4 px-8 text-center text-neutral-cream">
      <p>&copy; 2025 Luke Greenwood</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="mailto:luke.greenwood@example.com" className="hover:text-accent-moss-green">Email</a>
        <a href="https://www.linkedin.com/in/lukegreenwood/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-moss-green">LinkedIn</a>
        <a href="https://github.com/lukegreenwood" target="_blank" rel="noopener noreferrer" className="hover:text-accent-moss-green">GitHub</a>
      </div>
    </footer>
  )
}