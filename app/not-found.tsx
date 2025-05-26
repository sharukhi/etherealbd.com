import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-et-bg flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-et-brown mb-4">404</h1>
        <h2 className="text-2xl font-medium text-et-brown mb-6">Page Not Found</h2>
        <p className="text-et-brown/70 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-et-brown text-white rounded-md hover:bg-et-brown/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
