import './style.css'

document.querySelector('#root').innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
    <!-- Navigation -->
    <nav class="bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-bold text-white">1maginary Online</h1>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
              <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div class="text-center text-white max-w-4xl mx-auto px-4">
        <h1 class="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          1maginary Online
        </h1>
        <h2 class="text-3xl md:text-4xl font-semibold mb-8 text-gray-200">
          Android Showcase
        </h2>
        <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Welcome to your Vite + Tailwind CSS project! This beautiful, modern setup is ready for development with hot reloading and optimized builds.
        </p>
        
        <!-- Feature Cards -->
        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Lightning Fast</h3>
            <p class="text-gray-300">Vite provides instant hot module replacement for rapid development.</p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Utility First</h3>
            <p class="text-gray-300">Tailwind CSS makes styling fast and consistent with utility classes.</p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div class="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Mobile Ready</h3>
            <p class="text-gray-300">Responsive design that works perfectly on all devices.</p>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="btn-primary px-8 py-4 text-lg">
            Get Started
          </button>
          <button class="btn-secondary px-8 py-4 text-lg">
            Learn More
          </button>
        </div>
        
        <!-- Status Indicator -->
        <div class="mt-12 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
          <p class="text-green-400 font-medium">
            ✅ Vite + Tailwind CSS setup complete! Ready for development.
          </p>
        </div>
      </div>
    </div>
  </div>
`
