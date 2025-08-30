import './style.css'

document.querySelector('#root').innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
    <!-- Navigation -->
    <nav class="bg-black/20 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-3"></div>
            <h1 class="text-xl font-bold text-white">1maginary Online</h1>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a href="#overview" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Overview</a>
              <a href="#features" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
              <a href="#screenshots" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Screenshots</a>
              <a href="#tech-stack" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Tech Stack</a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="overview" class="pt-20 pb-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <div class="mb-8">
          <div class="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl mx-auto mb-6 shadow-2xl"></div>
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
            1maginary Online
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A showcase of my Android development skills and technical expertise
          </p>
          <div class="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6 max-w-4xl mx-auto">
            <h2 class="text-2xl font-bold text-blue-300 mb-4">Project Status: Development Complete</h2>
            <p class="text-blue-200 text-lg">
              This Android application demonstrates my proficiency in mobile development, 
              UI/UX design, and software architecture. Ready for code review and technical discussion.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Overview Section -->
    <section class="py-16 px-4 bg-black/20">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Project Overview
        </h2>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl font-bold text-white mb-6">About the Application</h3>
            <div class="space-y-4 text-gray-300">
              <p class="text-lg">
                1maginary Online is an innovative Android application that showcases my ability to 
                design and implement complex mobile solutions. The app demonstrates advanced Android 
                development concepts and best practices.
              </p>
              <p class="text-lg">
                This project was developed as a portfolio piece to demonstrate my technical skills, 
                problem-solving abilities, and understanding of modern mobile development principles.
              </p>
            </div>
            <div class="mt-8 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
              <p class="text-green-300 font-medium">
                ✅ Ready for technical review and code walkthrough
              </p>
            </div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h4 class="text-xl font-semibold text-white mb-6 text-center">Development Highlights</h4>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span class="text-gray-300">Clean Architecture Implementation</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span class="text-gray-300">Modern Android UI/UX Design</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span class="text-gray-300">Performance Optimization</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span class="text-gray-300">Responsive Design Patterns</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span class="text-gray-300">Code Quality & Documentation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Technical Features & Capabilities
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4 text-center">Advanced Architecture</h3>
            <p class="text-gray-300 text-center">
              Implements MVVM pattern, Repository pattern, and clean separation of concerns. 
              Demonstrates understanding of Android development best practices.
            </p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4 text-center">Modern UI/UX</h3>
            <p class="text-gray-300 text-center">
              Material Design 3 implementation with custom animations, responsive layouts, 
              and accessibility features. Shows strong design sensibilities.
            </p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
            <div class="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4 text-center">Performance & Quality</h3>
            <p class="text-gray-300 text-center">
              Optimized for performance with efficient data handling, memory management, 
              and smooth user interactions. Includes comprehensive error handling.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Screenshots Section -->
    <section id="screenshots" class="py-16 px-4 bg-black/20">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Application Screenshots
        </h2>
        <p class="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          These screenshots demonstrate the user interface design, navigation flow, and overall user experience 
          of the application. Each screen showcases different aspects of the technical implementation.
        </p>
        
        <!-- Screenshot Gallery -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Screenshot 1 -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105">
              <div class="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div class="text-center text-gray-400">
                  <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z"></path>
                  </svg>
                  <p class="text-lg font-medium">Main Screen</p>
                  <p class="text-sm">Tap to view full size</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                  View Full Size
                </button>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-white mt-4 text-center">Main Interface</h3>
            <p class="text-gray-400 text-center text-sm">Primary navigation and core functionality</p>
          </div>

          <!-- Screenshot 2 -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105">
              <div class="w-full h-96 bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center">
                <div class="text-center text-blue-300">
                  <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 100 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4"></path>
                  </svg>
                  <p class="text-lg font-medium">Settings Panel</p>
                  <p class="text-sm">Tap to view full size</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                  View Full Size
                </button>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-white mt-4 text-center">Settings & Configuration</h3>
            <p class="text-gray-400 text-center text-sm">User preferences and app configuration</p>
          </div>

          <!-- Screenshot 3 -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105">
              <div class="w-full h-96 bg-gradient-to-br from-purple-800 to-purple-900 flex items-center justify-center">
                <div class="text-center text-purple-300">
                  <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                  <p class="text-lg font-medium">Content Library</p>
                  <p class="text-sm">Tap to view full size</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                  View Full Size
                </button>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-white mt-4 text-center">Content Management</h3>
            <p class="text-gray-400 text-center text-sm">Data handling and storage implementation</p>
          </div>

          <!-- Screenshot 4 -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105">
              <div class="w-full h-96 bg-gradient-to-br from-green-800 to-green-900 flex items-center justify-center">
                <div class="text-center text-green-300">
                  <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.122 2.122"></path>
                  </svg>
                  <p class="text-lg font-medium">Creation Tools</p>
                  <p class="text-sm">Tap to view full size</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                  View Full Size
                </button>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-white mt-4 text-center">Core Functionality</h3>
            <p class="text-gray-400 text-center text-sm">Main app features and user interactions</p>
          </div>

          <!-- Screenshot 5 -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105">
              <div class="w-full h-96 bg-gradient-to-br from-orange-800 to-orange-900 flex items-center justify-center">
                <div class="text-center text-orange-300">
                  <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                  <p class="text-lg font-medium">User Experience</p>
                  <p class="text-sm">Tap to view full size</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                  View Full Size
                </button>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-white mt-4 text-center">User Experience Flow</h3>
            <p class="text-gray-400 text-center text-sm">Navigation and user journey design</p>
          </div>

          <!-- Screenshot 6 -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105">
              <div class="w-full h-96 bg-gradient-to-br from-red-800 to-red-900 flex items-center justify-center">
                <div class="text-center text-red-300">
                  <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                  <p class="text-lg font-medium">Technical Details</p>
                  <p class="text-sm">Tap to view full size</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                  View Full Size
                </button>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-white mt-4 text-center">Technical Implementation</h3>
            <p class="text-gray-400 text-center text-sm">Advanced features and system integration</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section id="tech-stack" class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Technical Stack & Development Details
        </h2>
        <div class="grid md:grid-cols-2 gap-12">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 class="text-2xl font-bold text-white mb-6">Android Development</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span class="text-gray-300">Programming Language</span>
                <span class="text-blue-400 font-semibold">Kotlin</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span class="text-gray-300">Minimum SDK</span>
                <span class="text-green-400 font-semibold">API 24 (Android 7.0)</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span class="text-gray-300">Target SDK</span>
                <span class="text-green-400 font-semibold">API 34 (Android 14)</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span class="text-gray-300">Architecture Pattern</span>
                <span class="text-purple-400 font-semibold">MVVM</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 class="text-2xl font-bold text-white mb-6">Key Technologies</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span class="text-gray-300">UI Framework</span>
                <span class="text-blue-400 font-semibold">Jetpack Compose</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span class="text-gray-300">State Management</span>
                <span class="text-green-400 font-semibold">StateFlow</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span class="text-gray-300">Dependency Injection</span>
                <span class="text-purple-400 font-semibold">Hilt</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span class="text-gray-300">Database</span>
                <span class="text-orange-400 font-semibold">Room</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-white mb-6 text-center">Ready for Technical Review</h3>
          <div class="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h4 class="text-white font-semibold mb-2">Code Quality</h4>
              <p class="text-gray-300 text-sm">Clean, documented, and maintainable code</p>
            </div>
            <div>
              <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h4 class="text-white font-semibold mb-2">Architecture</h4>
              <p class="text-gray-300 text-sm">Modern Android development patterns</p>
            </div>
            <div>
              <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h4 class="text-white font-semibold mb-2">Performance</h4>
              <p class="text-gray-300 text-sm">Optimized for smooth user experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16 px-4 bg-black/20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">
          Interested in My Work?
        </h2>
        <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm available for technical discussions, code reviews, and opportunities to contribute 
          to Android development projects. Let's discuss how I can add value to your team.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <button class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl">
            <div class="flex items-center justify-center">
              <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              Schedule Technical Discussion
            </div>
          </button>
          <button class="border-2 border-white/30 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all">
            <div class="flex items-center justify-center">
              <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Request Code Review
            </div>
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-4 border-t border-white/10">
      <div class="max-w-7xl mx-auto text-center">
        <p class="text-gray-400">
          © 2024 1maginary Online - Android Development Portfolio
        </p>
        <p class="text-gray-500 text-sm mt-2">
          Demonstrating technical expertise in mobile application development
        </p>
      </div>
    </footer>
  </div>
`
