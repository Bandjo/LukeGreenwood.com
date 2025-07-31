
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'

const workDir = path.join(process.cwd(), 'content/work')

function getWorkData() {
  const fileNames = fs.readdirSync(workDir).filter(f => f.endsWith('.mdx'));
  const allWorkData = fileNames.map(fileName => {
    const id = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(workDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      id,
      ...(matterResult.data as { title: string; company: string; tags: string[]; image: string })
    }
  })
  return allWorkData
}

export default function Work() {
  const allWorkData = getWorkData()

  if (!allWorkData) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-forest-green min-h-screen">
      <div className="container mx-auto px-12 py-16">
        <h1 className="text-6xl font-bold text-neutral-cream mb-12">Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {allWorkData.map(({ id, title, company, image }) => (
            <div key={id} className="bg-neutral-cream rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
              <div className="flex items-center mb-4">
                <Image src={image} alt={company} width={40} height={40} className="mr-4" />
                <h2 className="text-3xl font-bold text-forest-green">{company}</h2>
              </div>
              <h3 className="text-2xl font-semibold text-earthy-brown mb-4">{title}</h3>
              <Link href={`/work/${id}`} className="text-accent-moss-green font-bold hover:underline">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
