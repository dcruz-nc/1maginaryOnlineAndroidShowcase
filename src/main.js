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
            A dynamic Android application integrated with 1maginary.fm for live radio streaming and real-time user engagement
          </p>
          <div class="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6 max-w-4xl mx-auto">
            <h2 class="text-2xl font-bold text-blue-300 mb-4">Project Status: Development Complete</h2>
            <p class="text-blue-200 text-lg">
              This Android application demonstrates my proficiency in full-stack mobile development, 
              real-time systems, and complex user engagement features. Ready for technical review and code walkthrough.
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
                1maginary Online is a sophisticated Android application that integrates with the 1maginary.fm 
                platform to provide live radio streaming, real-time chat functionality, and comprehensive user engagement features.
              </p>
              <p class="text-lg">
                This project showcases my ability to develop complex, real-time applications with background services, 
                Firebase integration, and advanced user authentication systems.
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
                <span class="text-gray-300">Live Radio Streaming Integration</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span class="text-gray-300">Real-time Chat with Firebase</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span class="text-gray-300">Background Audio Services</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span class="text-gray-300">Dual Authentication Systems</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span class="text-gray-300">User Engagement Features</span>
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
          Core Features & Technical Capabilities
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4 text-center">Live Radio Streaming</h3>
            <p class="text-gray-300 text-center">
              Integrated with 1maginary.fm platform for seamless live radio streaming. 
              Implements background audio playback using Android Services for uninterrupted user experience.
            </p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4 text-center">Real-time Chat System</h3>
            <p class="text-gray-300 text-center">
              Firebase Firestore-powered real-time chat with advanced features including pinned messages, 
              XP system, and session playback to drive user engagement and community interaction.
            </p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
            <div class="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4 text-center">Advanced Authentication</h3>
            <p class="text-gray-300 text-center">
              Flexible user authentication system using Firebase for registered users and SharedPreferences 
              for guest sessions, providing seamless access for all user types.
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
          These screenshots demonstrate the live radio streaming interface, real-time chat functionality, 
          and user engagement features that showcase the technical complexity of the application.
        </p>
        
        <!-- Screenshot Gallery -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Screenshot 1 -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105">
              <div class="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div class="text-center text-gray-400">
                  <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                  </svg>
                  <p class="text-lg font-medium">Radio Player</p>
                  <p class="text-sm">Tap to view full size</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                  View Full Size
                </button>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-white mt-4 text-center">Live Radio Interface</h3>
            <p class="text-gray-400 text-center text-sm">Main streaming player with background service integration</p>
          </div>

          <!-- Screenshot 2 -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105">
              <div class="w-full h-96 bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center">
                <div class="text-center text-blue-300">
                  <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                  <p class="text-lg font-medium">Live Chat</p>
                  <p class="text-sm">Tap to view full size</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                  View Full Size
                </button>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-white mt-4 text-center">Real-time Chat System</h3>
            <p class="text-gray-400 text-center text-sm">Firebase-powered chat with pinned messages and XP system</p>
          </div>

          <!-- Screenshot 3 -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105">
              <div class="w-full h-96 bg-gradient-to-br from-purple-800 to-purple-900 flex items-center justify-center">
                <div class="text-center text-purple-300">
                  <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <p class="text-lg font-medium">User Profile</p>
                  <p class="text-sm">Tap to view full size</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                  View Full Size
                </button>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-white mt-4 text-center">User Authentication</h3>
            <p class="text-gray-400 text-center text-sm">Firebase and SharedPreferences dual authentication system</p>
          </div>

          <!-- Screenshot 4 -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105">
              <div class="w-full h-96 bg-gradient-to-br from-green-800 to-green-900 flex items-center justify-center">
                <div class="text-center text-green-300">
                  <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                  <p class="text-lg font-medium">XP System</p>
                  <p class="text-sm">Tap to view full size</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                  View Full Size
                </button>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-white mt-4 text-center">Engagement Features</h3>
            <p class="text-gray-400 text-center text-sm">XP system, pinned messages, and session playback</p>
          </div>

          <!-- Screenshot 5 -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105">
              <div class="w-full h-96 bg-gradient-to-br from-orange-800 to-orange-900 flex items-center justify-center">
                <div class="text-center text-orange-300">
                  <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p class="text-lg font-medium">Settings</p>
                  <p class="text-sm">Tap to view full size</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                  View Full Size
                </button>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-white mt-4 text-center">App Configuration</h3>
            <p class="text-gray-400 text-center text-sm">Background service settings and user preferences</p>
          </div>

          <!-- Screenshot 6 -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105">
              <div class="w-full h-96 bg-gradient-to-br from-red-800 to-red-900 flex items-center justify-center">
                <div class="text-center text-red-300">
                  <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                  <p class="text-lg font-medium">Background Service</p>
                  <p class="text-sm">Tap to view full size</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                  View Full Size
                </button>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-white mt-4 text-center">Background Audio</h3>
            <p class="text-gray-400 text-center text-sm">Android Service implementation for continuous playback</p>
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
                <span class="text-blue-400 font-semibold">Java</span>
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
                <span class="text-gray-300">Background Services</span>
                <span class="text-purple-400 font-semibold">Android Service</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 class="text-2xl font-bold text-white mb-6">Backend & Integration</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span class="text-gray-300">Backend Platform</span>
                <span class="text-blue-400 font-semibold">Firebase</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span class="text-gray-300">Database</span>
                <span class="text-green-400 font-semibold">Firestore</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span class="text-gray-300">Authentication</span>
                <span class="text-purple-400 font-semibold">Firebase Auth</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span class="text-gray-300">Local Storage</span>
                <span class="text-orange-400 font-semibold">SharedPreferences</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-white mb-6 text-center">Advanced Technical Features</h3>
          <div class="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                </svg>
              </div>
              <h4 class="text-white font-semibold mb-2">Real-time Streaming</h4>
              <p class="text-gray-300 text-sm">Live radio integration with background audio services</p>
            </div>
            <div>
              <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
              <h4 class="text-white font-semibold mb-2">Live Chat System</h4>
              <p class="text-gray-300 text-sm">Firebase-powered real-time messaging with advanced features</p>
            </div>
            <div>
              <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h4 class="text-white font-semibold mb-2">Dual Authentication</h4>
              <p class="text-gray-300 text-sm">Firebase + SharedPreferences for flexible user access</p>
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
          © 2024 1maginary Online - Full Stack Android Development Portfolio
        </p>
        <p class="text-gray-500 text-sm mt-2">
          Demonstrating expertise in live streaming, real-time systems, and Firebase integration
        </p>
      </div>
    </footer>
  </div>
`
