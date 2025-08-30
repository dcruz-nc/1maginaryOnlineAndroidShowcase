import './style.css'

document.querySelector('#root').innerHTML = `
  <div class="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
    <!-- CRT Scan Lines Effect -->
    <div class="fixed inset-0 pointer-events-none z-50">
      <div class="w-full h-full bg-gradient-to-b from-transparent via-green-400/5 to-transparent animate-pulse"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/3 to-transparent animate-pulse" style="animation-duration: 3s;"></div>
    </div>

    <!-- Retro Header -->
    <div class="bg-black border-b-2 border-green-400 p-6 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center">
          <div class="mb-4">
            <div class="inline-block bg-green-400 text-black px-4 py-2 font-bold text-sm tracking-wider border-2 border-green-400">
              [SYSTEM_BOOT_COMPLETE]
            </div>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold text-green-400 mb-4 tracking-wider" style="text-shadow: 0 0 10px #00FF00;">
            1MAGINARY.ONLINE
          </h1>
          <div class="flex justify-center space-x-4 text-sm">
            <span class="text-green-400">[VERSION] 1.0.0</span>
            <span class="text-green-400">[STATUS] ONLINE</span>
            <span class="text-green-400">[READY] FOR_REVIEW</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="bg-black border-b border-green-400 sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <span class="text-green-400 text-xl font-bold mr-4 tracking-wider">[1MAGINARY.ONLINE]</span>
          </div>
          <div class="hidden md:block">
            <div class="flex items-baseline space-x-6">
              <a href="#overview" class="text-green-400 hover:text-green-300 px-3 py-2 border border-green-400 hover:bg-green-400 hover:text-black transition-all tracking-wider">[OVERVIEW]</a>
              <a href="#features" class="text-green-400 hover:text-green-300 px-3 py-2 border border-green-400 hover:bg-green-400 hover:text-black transition-all tracking-wider">[FEATURES]</a>
              <a href="#screenshots" class="text-green-400 hover:text-green-300 px-3 py-2 border border-green-400 hover:bg-green-400 hover:text-black transition-all tracking-wider">[SCREENSHOTS]</a>
              <a href="#tech-stack" class="text-green-400 hover:text-green-300 px-3 py-2 border border-green-400 hover:bg-green-400 hover:text-black transition-all tracking-wider">[TECH_STACK]</a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="overview" class="pt-16 pb-16 px-4 relative">
      <div class="max-w-7xl mx-auto text-center">
        <div class="mb-12">
          <div class="mb-8">
            <div class="bg-black border-2 border-green-400 p-6 max-w-4xl mx-auto">
              <div class="mb-4">
                <div class="inline-block bg-green-400 text-black px-3 py-1 font-bold text-xs tracking-wider">
                  [SYSTEM_INFO]
                </div>
              </div>
              <h2 class="text-2xl font-bold text-green-400 mb-4 tracking-wider">[PROJECT_SPECIFICATIONS]</h2>
              <p class="text-green-300 text-lg mb-6 leading-relaxed">
                A dynamic Android application integrated with 1maginary.fm for live radio streaming 
                and real-time user engagement. Demonstrates full-stack mobile development capabilities.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div class="border border-green-400 p-3 bg-black">
                  <span class="text-green-400 font-bold">[STATUS]</span><br>
                  <span class="text-green-300">OPERATIONAL</span>
                </div>
                <div class="border border-green-400 p-3 bg-black">
                  <span class="text-green-400 font-bold">[TYPE]</span><br>
                  <span class="text-green-300">ANDROID_APP</span>
                </div>
                <div class="border border-green-400 p-3 bg-black">
                  <span class="text-green-400 font-bold">[READY]</span><br>
                  <span class="text-green-300">TECH_REVIEW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Overview Section -->
    <section class="py-16 px-4 border-t border-green-400 relative">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-green-400 text-center mb-16 border-b-2 border-green-400 pb-4 tracking-wider">
          [PROJECT_SPECIFICATIONS]
        </h2>
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 class="text-2xl font-bold text-green-400 mb-6 tracking-wider">[APPLICATION_DETAILS]</h3>
            <div class="space-y-4 text-green-300 leading-relaxed">
              <p class="text-lg">
                1maginary Online integrates with the 1maginary.fm platform to provide live radio 
                streaming, real-time chat functionality, and comprehensive user engagement features.
              </p>
              <p class="text-lg">
                This project showcases complex, real-time applications with background services, 
                Firebase integration, and advanced user authentication systems.
              </p>
            </div>
            <div class="mt-8 p-4 bg-green-400/10 border border-green-400">
              <p class="text-green-400 font-bold tracking-wider">
                ✓ SYSTEM READY FOR TECHNICAL REVIEW AND CODE WALKTHROUGH
              </p>
            </div>
          </div>
          <div class="bg-black border-2 border-green-400 p-8">
            <h4 class="text-xl font-bold text-green-400 mb-6 text-center tracking-wider">[DEVELOPMENT_HIGHLIGHTS]</h4>
            <div class="space-y-3">
              <div class="flex items-center">
                <span class="text-green-400 mr-3 font-bold">[✓]</span>
                <span class="text-green-300">Live Radio Streaming Integration</span>
              </div>
              <div class="flex items-center">
                <span class="text-green-400 mr-3 font-bold">[✓]</span>
                <span class="text-green-300">Real-time Chat with Firebase</span>
              </div>
              <div class="flex items-center">
                <span class="text-green-400 mr-3 font-bold">[✓]</span>
                <span class="text-green-300">Background Audio Services</span>
              </div>
              <div class="flex items-center">
                <span class="text-green-400 mr-3 font-bold">[✓]</span>
                <span class="text-green-300">Dual Authentication Systems</span>
              </div>
              <div class="flex items-center">
                <span class="text-green-400 mr-3 font-bold">[✓]</span>
                <span class="text-green-300">User Engagement Features</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-16 px-4 border-t border-green-400 relative">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-green-400 text-center mb-16 border-b-2 border-green-400 pb-4 tracking-wider">
          [CORE_FEATURES_&_CAPABILITIES]
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-black border-2 border-green-400 p-8 hover:bg-green-400 hover:text-black transition-all group">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-green-400 text-black flex items-center justify-center mx-auto mb-4 font-bold text-lg tracking-wider group-hover:bg-black group-hover:text-green-400 transition-all">
                RADIO
              </div>
            </div>
            <h3 class="text-xl font-bold text-green-400 mb-4 text-center tracking-wider group-hover:text-black">[LIVE_STREAMING]</h3>
            <p class="text-green-300 text-center leading-relaxed group-hover:text-black">
              Integrated with 1maginary.fm platform for seamless live radio streaming. 
              Implements background audio playback using Android Services.
            </p>
          </div>
          
          <div class="bg-black border-2 border-green-400 p-8 hover:bg-green-400 hover:text-black transition-all group">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-green-400 text-black flex items-center justify-center mx-auto mb-4 font-bold text-lg tracking-wider group-hover:bg-black group-hover:text-green-400 transition-all">
                CHAT
              </div>
            </div>
            <h3 class="text-xl font-bold text-green-400 mb-4 text-center tracking-wider group-hover:text-black">[REAL_TIME_CHAT]</h3>
            <p class="text-green-300 text-center leading-relaxed group-hover:text-black">
              Firebase Firestore-powered real-time chat with advanced features including 
              pinned messages, XP system, and session playback.
            </p>
          </div>
          
          <div class="bg-black border-2 border-green-400 p-8 hover:bg-green-400 hover:text-black transition-all group">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-green-400 text-black flex items-center justify-center mx-auto mb-4 font-bold text-lg tracking-wider group-hover:bg-black group-hover:text-green-400 transition-all">
                AUTH
              </div>
            </div>
            <h3 class="text-xl font-bold text-green-400 mb-4 text-center tracking-wider group-hover:text-black">[AUTHENTICATION]</h3>
            <p class="text-green-300 text-center leading-relaxed group-hover:text-black">
              Flexible user authentication system using Firebase for registered users 
              and SharedPreferences for guest sessions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Screenshots Section -->
    <section id="screenshots" class="py-16 px-4 border-t border-green-400 relative">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-green-400 text-center mb-16 border-b-2 border-green-400 pb-4 tracking-wider">
          [APPLICATION_SCREENSHOTS]
        </h2>
        <p class="text-xl text-green-300 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          These screenshots demonstrate the live radio streaming interface, real-time chat functionality, 
          and user engagement features that showcase the technical complexity of the application.
        </p>
        
        <!-- Screenshot Gallery -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Screenshot 1 -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden border-2 border-green-400 transform transition-all duration-300 group-hover:scale-105">
              <div class="w-full h-96 bg-black flex items-center justify-center">
                <div class="text-center text-green-400">
                  <div class="text-2xl mb-4 font-mono">[RADIO]</div>
                  <p class="text-lg font-medium tracking-wider">[RADIO_PLAYER]</p>
                  <p class="text-sm">[TAP_TO_VIEW]</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-green-400 text-black px-6 py-3 border-2 border-green-400 hover:bg-black hover:text-green-400 transition-all font-bold tracking-wider">
                  [VIEW_FULL_SIZE]
                </button>
              </div>
            </div>
            <h3 class="text-lg font-bold text-green-400 mt-4 text-center tracking-wider">[LIVE_RADIO_INTERFACE]</h3>
            <p class="text-green-300 text-center text-sm">Main streaming player with background service integration</p>
          </div>

          <!-- Screenshot 2 -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden border-2 border-green-400 transform transition-all duration-300 group-hover:scale-105">
              <div class="w-full h-96 bg-black flex items-center justify-center">
                <div class="text-center text-green-400">
                  <div class="text-2xl mb-4 font-mono">[CHAT]</div>
                  <p class="text-lg font-medium tracking-wider">[LIVE_CHAT]</p>
                  <p class="text-sm">[TAP_TO_VIEW]</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-green-400 text-black px-6 py-3 border-2 border-green-400 hover:bg-black hover:text-green-400 transition-all font-bold tracking-wider">
                  [VIEW_FULL_SIZE]
                </button>
              </div>
            </div>
            <h3 class="text-lg font-bold text-green-400 mt-4 text-center tracking-wider">[REAL_TIME_CHAT_SYSTEM]</h3>
            <p class="text-green-300 text-center text-sm">Firebase-powered chat with pinned messages and XP system</p>
          </div>

          <!-- Screenshot 3 -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden border-2 border-green-400 transform transition-all duration-300 group-hover:scale-105">
              <div class="w-full h-96 bg-black flex items-center justify-center">
                <div class="text-center text-green-400">
                  <div class="text-2xl mb-4 font-mono">[USER]</div>
                  <p class="text-lg font-medium tracking-wider">[USER_PROFILE]</p>
                  <p class="text-sm">[TAP_TO_VIEW]</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-green-400 text-black px-6 py-3 border-2 border-green-400 hover:bg-black hover:text-green-400 transition-all font-bold tracking-wider">
                  [VIEW_FULL_SIZE]
                </button>
              </div>
            </div>
            <h3 class="text-lg font-bold text-green-400 mt-4 text-center tracking-wider">[USER_AUTHENTICATION]</h3>
            <p class="text-green-300 text-center text-sm">Firebase and SharedPreferences dual authentication system</p>
          </div>

          <!-- Screenshot 4 -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden border-2 border-green-400 transform transition-all duration-300 group-hover:scale-105">
              <div class="w-full h-96 bg-black flex items-center justify-center">
                <div class="text-center text-green-400">
                  <div class="text-2xl mb-4 font-mono">[XP]</div>
                  <p class="text-lg font-medium tracking-wider">[XP_SYSTEM]</p>
                  <p class="text-sm">[TAP_TO_VIEW]</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-green-400 text-black px-6 py-3 border-2 border-green-400 hover:bg-black hover:text-green-400 transition-all font-bold tracking-wider">
                  [VIEW_FULL_SIZE]
                </button>
              </div>
            </div>
            <h3 class="text-lg font-bold text-green-400 mt-4 text-center tracking-wider">[ENGAGEMENT_FEATURES]</h3>
            <p class="text-green-300 text-center text-sm">XP system, pinned messages, and session playback</p>
          </div>

          <!-- Screenshot 5 -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden border-2 border-green-400 transform transition-all duration-300 group-hover:scale-105">
              <div class="w-full h-96 bg-black flex items-center justify-center">
                <div class="text-center text-green-400">
                  <div class="text-2xl mb-4 font-mono">[CFG]</div>
                  <p class="text-lg font-medium tracking-wider">[SETTINGS]</p>
                  <p class="text-sm">[TAP_TO_VIEW]</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-green-400 text-black px-6 py-3 border-2 border-green-400 hover:bg-black hover:text-green-400 transition-all font-bold tracking-wider">
                  [VIEW_FULL_SIZE]
                </button>
              </div>
            </div>
            <h3 class="text-lg font-bold text-green-400 mt-4 text-center tracking-wider">[APP_CONFIGURATION]</h3>
            <p class="text-green-300 text-center text-sm">Background service settings and user preferences</p>
          </div>

          <!-- Screenshot 6 -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden border-2 border-green-400 transform transition-all duration-300 group-hover:scale-105">
              <div class="w-full h-96 bg-black flex items-center justify-center">
                <div class="text-center text-green-400">
                  <div class="text-2xl mb-4 font-mono">[SVC]</div>
                  <p class="text-lg font-medium tracking-wider">[BACKGROUND]</p>
                  <p class="text-sm">[TAP_TO_VIEW]</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="bg-green-400 text-black px-6 py-3 border-2 border-green-400 hover:bg-black hover:text-green-400 transition-all font-bold tracking-wider">
                  [VIEW_FULL_SIZE]
                </button>
              </div>
            </div>
            <h3 class="text-lg font-bold text-green-400 mt-4 text-center tracking-wider">[BACKGROUND_AUDIO]</h3>
            <p class="text-green-300 text-center text-sm">Android Service implementation for continuous playback</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section id="tech-stack" class="py-16 px-4 border-t border-green-400 relative">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-green-400 text-center mb-16 border-b-2 border-green-400 pb-4 tracking-wider">
          [TECHNICAL_STACK_&_DEVELOPMENT_DETAILS]
        </h2>
        <div class="grid md:grid-cols-2 gap-12">
          <div class="bg-black border-2 border-green-400 p-8">
            <h3 class="text-2xl font-bold text-green-400 mb-6 tracking-wider">[ANDROID_DEVELOPMENT]</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between p-3 border border-green-400">
                <span class="text-green-300">Programming Language</span>
                <span class="text-green-400 font-bold tracking-wider">[JAVA]</span>
              </div>
              <div class="flex items-center justify-between p-3 border border-green-400">
                <span class="text-green-300">Minimum SDK</span>
                <span class="text-green-400 font-bold tracking-wider">[API_24]</span>
              </div>
              <div class="flex items-center justify-between p-3 border border-green-400">
                <span class="text-green-300">Target SDK</span>
                <span class="text-green-400 font-bold tracking-wider">[API_34]</span>
              </div>
              <div class="flex items-center justify-between p-3 border border-green-400">
                <span class="text-green-300">Background Services</span>
                <span class="text-green-400 font-bold tracking-wider">[ANDROID_SERVICE]</span>
              </div>
            </div>
          </div>
          
          <div class="bg-black border-2 border-green-400 p-8">
            <h3 class="text-2xl font-bold text-green-400 mb-6 tracking-wider">[BACKEND_&_INTEGRATION]</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between p-3 border border-green-400">
                <span class="text-green-300">Backend Platform</span>
                <span class="text-green-400 font-bold tracking-wider">[FIREBASE]</span>
              </div>
              <div class="flex items-center justify-between p-3 border border-green-400">
                <span class="text-green-300">Database</span>
                <span class="text-green-400 font-bold tracking-wider">[FIRESTORE]</span>
              </div>
              <div class="flex items-center justify-between p-3 border border-green-400">
                <span class="text-green-300">Authentication</span>
                <span class="text-green-400 font-bold tracking-wider">[FIREBASE_AUTH]</span>
              </div>
              <div class="flex items-center justify-between p-3 border border-green-400">
                <span class="text-green-300">Local Storage</span>
                <span class="text-green-400 font-bold tracking-wider">[SHAREDPREFERENCES]</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-12 border-2 border-green-400 p-8">
          <h3 class="text-2xl font-bold text-green-400 mb-6 text-center tracking-wider">[ADVANCED_TECHNICAL_FEATURES]</h3>
          <div class="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div class="text-green-400 text-2xl mb-3 font-mono">[STREAM]</div>
              <h4 class="text-green-400 font-bold mb-2 tracking-wider">[REAL_TIME_STREAMING]</h4>
              <p class="text-green-300 text-sm">Live radio integration with background audio services</p>
            </div>
            <div>
              <div class="text-green-400 text-2xl mb-3 font-mono">[CHAT]</div>
              <h4 class="text-green-400 font-bold mb-2 tracking-wider">[LIVE_CHAT_SYSTEM]</h4>
              <p class="text-green-300 text-sm">Firebase-powered real-time messaging with advanced features</p>
            </div>
            <div>
              <div class="text-green-400 text-2xl mb-3 font-mono">[AUTH]</div>
              <h4 class="text-green-400 font-bold mb-2 tracking-wider">[DUAL_AUTHENTICATION]</h4>
              <p class="text-green-300 text-sm">Firebase + SharedPreferences for flexible user access</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16 px-4 border-t border-green-400 relative">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-green-400 mb-8 tracking-wider">
          [INTERESTED_IN_MY_WORK?]
        </h2>
        <p class="text-xl text-green-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm available for technical discussions, code reviews, and opportunities to contribute 
          to Android development projects. Let's discuss how I can add value to your team.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <button class="bg-green-400 text-black px-10 py-5 border-2 border-green-400 hover:bg-black hover:text-green-400 transition-all font-bold text-xl tracking-wider">
            <div class="flex items-center justify-center">
              <span class="mr-3">[TALK]</span>
              [SCHEDULE_TECHNICAL_DISCUSSION]
            </div>
          </button>
          <button class="border-2 border-green-400 text-green-400 px-10 py-5 hover:bg-green-400 hover:text-black transition-all font-bold text-xl tracking-wider">
            <div class="flex items-center justify-center">
              <span class="mr-3">[MAIL]</span>
              [REQUEST_CODE_REVIEW]
            </div>
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-4 border-t border-green-400 relative">
      <div class="max-w-7xl mx-auto text-center">
        <div class="border-2 border-green-400 p-6">
          <p class="text-green-400 font-bold tracking-wider mb-2">
            © 2024 1MAGINARY ONLINE - PORTFOLIO
          </p>
          <p class="text-green-300 text-sm tracking-wider">
            FULL STACK ANDROID DEVELOPMENT EXPERTISE
          </p>
          <p class="text-green-300 text-sm tracking-wider">
            LIVE STREAMING • REAL-TIME SYSTEMS • FIREBASE
          </p>
        </div>
      </div>
    </footer>

    <!-- Retro Terminal Cursor -->
    <div class="fixed bottom-4 right-4 text-green-400 text-2xl animate-pulse">
      █
    </div>
  </div>
`
