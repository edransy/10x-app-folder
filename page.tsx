import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hello World</h1>
        <button className="py-3 px-8 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-colors">Deploy</button>
      </div>
    </div>
  )
}
