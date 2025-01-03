export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0E4936] text-white">
      <div className="max-w-md mx-auto text-center">
        <div className="relative w-80 h-64 mx-auto mb-8">
          <img src="/404Robot.png" alt="" />          
        </div>

        <h1 className="text-[120px] font-bold leading-none mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Something&apos;s missing</h2>
        <p className="text-gray-200 mb-8">
          This page is missing or you assembled the link incorrectly.
        </p>
        <a 
          href="/"
          className="inline-flex items-center text-white hover:text-gray-200 transition-colors"
        >
          <svg 
            className="w-4 h-4 mr-2" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Go back to Home
        </a>
      </div>
    </div>
  )
}

