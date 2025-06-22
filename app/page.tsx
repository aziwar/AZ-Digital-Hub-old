export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Ahmed Ziwar
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Commands Results
          </p>
          <p className="text-lg mb-12 text-gray-400">
            Kuwait&apos;s #1 Digital Marketing Strategist
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">OpenAI Integration</h3>
              <p className="text-gray-300">AI-powered content generation and automation</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Digital Strategy</h3>
              <p className="text-gray-300">Transform your business with proven strategies</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
              <p className="text-gray-300">300% ROI for 200+ Kuwait companies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}