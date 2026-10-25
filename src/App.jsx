function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header Section */}
        <header className="text-center space-y-3">
          <p className="text-amber-500 font-semibold tracking-widest uppercase text-xs sm:text-sm">
            In Honor Of
          </p>
         <h1 className="text-2xl sm:text-5xl font-extrabold text-white tracking-tight">
  <span className="whitespace-nowrap">Mr. Yusuf</span> <span className="whitespace-nowrap">Olufowobi</span>
</h1>
          <p className="text-gray-400 text-sm sm:text-base font-medium">
            Generosity • Quiet Wisdom • Relentless Hard Work
          </p>
          <blockquote className="italic text-gray-400 text-xs sm:text-sm pt-2">
            "A digital tribute built with gratitude and respect."
          </blockquote>
        </header>

        {/* Core Values Section */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-amber-500">
            Core Values & Character
          </h2>
          
          {/* Responsive Grid: Stacks on mobile (1 col), side-by-side on desktop (3 cols) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-bold text-white mb-2">Generosity</h3>
              <p className="text-gray-400 text-sm">
                Always giving selflessly to support others and investing in their growth and success.
              </p>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-bold text-white mb-2">Quiet Wisdom</h3>
              <p className="text-gray-400 text-sm">
                Offering thoughtful advice and leading by calm, measured example.
              </p>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-bold text-white mb-2">Relentless Hard Work</h3>
              <p className="text-gray-400 text-sm">
                Demonstrating dedication and perseverance in every commitment.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default App