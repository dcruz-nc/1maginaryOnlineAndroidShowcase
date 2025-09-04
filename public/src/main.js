import './style.css'

// Redirect to coming soon page
window.location.replace('comingsoon.html');

document.querySelector('#root').innerHTML = `
  <div class="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
    <!-- Static Noise Overlay -->
    <div class="fixed inset-0 pointer-events-none z-50 static-noise"></div>
    
    <!-- CRT Scan Lines Effect -->
    <div class="fixed inset-0 pointer-events-none z-40 scan-line"></div>
    
    <!-- Matrix Rain Effect -->
    <div class="fixed inset-0 pointer-events-none z-90 matrix-rain"></div>

    <!-- Floating ASCII Symbols Container -->
    <div id="floating-symbols" class="fixed inset-0 pointer-events-none z-45"></div>

    <!-- System Info Panels -->
    <!-- Top Left Panel -->
    <div class="fixed top-4 left-4 z-[100] border border-green-400 p-3 text-xs system-panel">
      <div class="text-green-400 font-bold mb-2 tracking-wider">[SYSTEM_MONITOR]</div>
      <div class="space-y-1 text-green-300">
        <div class="flex justify-between">
          <span>CPU:</span>
          <span id="cpu-usage" class="text-green-400 font-mono system-value">00%</span>
        </div>
        <div class="flex justify-between">
          <span>RAM:</span>
          <span id="ram-usage" class="text-green-400 font-mono system-value">000MB</span>
        </div>
        <div class="flex justify-between">
          <span>TEMP:</span>
          <span id="temperature" class="text-green-400 font-mono system-value">00°C</span>
        </div>
        <div class="flex justify-between">
          <span>UPTIME:</span>
          <span id="uptime" class="text-green-400 font-mono system-value">00:00:00</span>
        </div>
      </div>
    </div>



    <!-- Retro Header -->
    <div class="border-b-2 border-green-400 p-6 relative">
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
    <nav class="border-b border-green-400 sticky top-0">
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
            © 2024 1MAGINARY.ONLINE - PORTFOLIO
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

// Floating ASCII Symbols System
const symbols = ['*', '@', '#', '|', '>', '+', '=', '~', '^', 'v', '<', ':', ';', '.', ',', '!', '?', '%', '$', '&'];
const symbolColors = ['text-green-400', 'text-green-300', 'text-green-500', 'text-green-600'];

function createFloatingSymbol() {
  const symbolContainer = document.getElementById('floating-symbols');
  const symbol = document.createElement('div');
  
  // Random symbol selection
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  const randomColor = symbolColors[Math.floor(Math.random() * symbolColors.length)];
  
  // Random starting position (edges of screen)
  const startSide = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
  let startX, startY, endX, endY;
  
  switch(startSide) {
    case 0: // top
      startX = Math.random() * window.innerWidth;
      startY = -20;
      endX = startX + (Math.random() - 0.5) * window.innerWidth;
      endY = window.innerHeight + 20;
      break;
    case 1: // right
      startX = window.innerWidth + 20;
      startY = Math.random() * window.innerHeight;
      endX = -20;
      endY = startY + (Math.random() - 0.5) * window.innerHeight;
      break;
    case 2: // bottom
      startX = Math.random() * window.innerWidth;
      startY = window.innerHeight + 20;
      endX = startX + (Math.random() - 0.5) * window.innerWidth;
      endY = -20;
      break;
    case 3: // left
      startX = -20;
      startY = Math.random() * window.innerHeight;
      endX = window.innerWidth + 20;
      endY = startY + (Math.random() - 0.5) * window.innerHeight;
      break;
  }
  
  // Random size and opacity
  const size = Math.random() * 12 + 8; // 8px to 20px
  const duration = Math.random() * 15000 + 10000; // 10-25 seconds
  
  symbol.className = `floating-symbol absolute ${randomColor} font-mono pointer-events-none`;
  symbol.style.left = `${startX}px`;
  symbol.style.top = `${startY}px`;
  symbol.style.fontSize = `${size}px`;
  symbol.style.opacity = '0';
  symbol.style.transition = `all ${duration}ms linear`;
  symbol.textContent = randomSymbol;
  
  symbolContainer.appendChild(symbol);
  
  // Start animation after a brief delay
  setTimeout(() => {
    symbol.style.opacity = '0.6';
    symbol.style.left = `${endX}px`;
    symbol.style.top = `${endY}px`;
  }, 100);
  
  // Remove symbol after animation completes
  setTimeout(() => {
    if (symbol.parentNode) {
      symbol.parentNode.removeChild(symbol);
    }
  }, duration + 1000);
}

// Start the floating symbols system
function startFloatingSymbols() {
  // Create initial symbols after a delay
  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      setTimeout(createFloatingSymbol, i * 2000);
    }
  }, 3000);
  
  // Create symbols at regular intervals
  setInterval(() => {
    // Random number of symbols (1-3)
    const symbolCount = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < symbolCount; i++) {
      setTimeout(createFloatingSymbol, i * 1000);
    }
  }, 8000);
}

// System Info Panels Update System
function updateSystemInfo() {
  // CPU Usage (0-100%)
  const cpuUsage = Math.floor(Math.random() * 101);
  document.getElementById('cpu-usage').textContent = `${cpuUsage.toString().padStart(2, '0')}%`;
  
  // RAM Usage (100-8000MB)
  const ramUsage = Math.floor(Math.random() * 7901) + 100;
  document.getElementById('ram-usage').textContent = `${ramUsage.toString().padStart(4, '0')}MB`;
  
  // Temperature (25-85°C)
  const temperature = Math.floor(Math.random() * 61) + 25;
  document.getElementById('temperature').textContent = `${temperature.toString().padStart(2, '0')}°C`;
  
  // Uptime (random hours, minutes, seconds)
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  const seconds = Math.floor(Math.random() * 60);
  document.getElementById('uptime').textContent = 
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Start the system info update system
function startSystemInfoUpdates() {
  // Update immediately
  updateSystemInfo();
  
  // Update every 2-4 seconds randomly
  setInterval(() => {
    const delay = Math.random() * 2000 + 2000; // 2-4 seconds
    setTimeout(updateSystemInfo, delay);
  }, 1000);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  startFloatingSymbols();
  startSystemInfoUpdates();
  startTextRandomizerGlitchEffects();
  startCRTGlitchEffects();
});

// Text Randomizer Glitch Effect System for Navigation Links
function startTextRandomizerGlitchEffects() {
  // Add glitch effect to navigation links only
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    // Store original text and prevent multiple glitch effects
    link.dataset.originalText = link.textContent;
    link.dataset.isGlitching = 'false';
    
    link.addEventListener('mouseenter', () => {
      if (link.dataset.isGlitching === 'false') {
        createGlitchEffect(link, 1500);
      }
    });
  });
}

function createGlitchEffect(element, duration) {
  // Prevent multiple glitch effects
  if (element.dataset.isGlitching === 'true') {
    return;
  }
  
  element.dataset.isGlitching = 'true';
  const originalText = element.dataset.originalText || element.textContent;
  const glitchChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '[', ']', '{', '}', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/', '~', '`'];
  const glitchColors = ['text-green-300', 'text-green-400', 'text-green-500', 'text-green-600'];
  
  let glitchInterval;
  let glitchCount = 0;
  const maxGlitches = Math.floor(duration / 50); // Glitch every 50ms
  
  const startGlitch = () => {
    glitchInterval = setInterval(() => {
      if (glitchCount >= maxGlitches) {
        clearInterval(glitchInterval);
        element.textContent = originalText;
        element.className = element.className.replace(/text-green-[3-6]00/g, '');
        element.dataset.isGlitching = 'false';
        return;
      }
      
      // Random glitch effect
      const effect = Math.floor(Math.random() * 3);
      
      switch(effect) {
        case 0: // Character scramble
          const scrambled = originalText.split('').map(char => 
            Math.random() < 0.3 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
          ).join('');
          element.textContent = scrambled;
          break;
          
        case 1: // Color shift
          const randomColor = glitchColors[Math.floor(Math.random() * glitchColors.length)];
          element.className = element.className.replace(/text-green-[3-6]00/g, '') + ' ' + randomColor;
          break;
          
        case 2: // Brief flicker
          element.style.opacity = '0.3';
          setTimeout(() => {
            element.style.opacity = '1';
          }, 30);
          break;
      }
      
      glitchCount++;
    }, 50);
  };
  
  startGlitch();
}

// CRT Glitch/Corruption Effect System
function startCRTGlitchEffects() {
  // Create glitch effects at random intervals
  setInterval(() => {
    // Random chance to create a glitch (20% probability)
    if (Math.random() < 0.2) {
      createCRTGlitch();
    }
  }, 2000); // Check every 2 seconds
}

function createCRTGlitch() {
  const glitchContainer = document.createElement('div');
  glitchContainer.className = 'glitch-overlay';
  
  // Random position, size, and duration
  const x = Math.random() * (window.innerWidth - 200);
  const y = Math.random() * (window.innerHeight - 100);
  const width = Math.random() * 150 + 50; // 50-200px
  const height = Math.random() * 100 + 30; // 30-130px
  const duration = Math.random() * 400 + 100; // 100-500ms
  
  // Random glitch type
  const glitchType = Math.floor(Math.random() * 3);
  
  glitchContainer.style.left = `${x}px`;
  glitchContainer.style.top = `${y}px`;
  glitchContainer.style.width = `${width}px`;
  glitchContainer.style.height = `${height}px`;
  
  // Add random shift effects
  if (Math.random() < 0.5) {
    glitchContainer.classList.add('glitch-shift-horizontal');
  }
  if (Math.random() < 0.5) {
    glitchContainer.classList.add('glitch-shift-vertical');
  }
  
  // Create glitch content based on type
  switch(glitchType) {
    case 0: // Noise pattern
      glitchContainer.classList.add('glitch-noise');
      break;
      
    case 1: // ASCII corruption
      glitchContainer.classList.add('glitch-ascii');
      glitchContainer.textContent = generateRandomASCII(width, height);
      break;
      
    case 2: // Mixed effect
      glitchContainer.classList.add('glitch-noise', 'glitch-flicker');
      const asciiOverlay = document.createElement('div');
      asciiOverlay.className = 'glitch-ascii absolute inset-0';
      asciiOverlay.textContent = generateRandomASCII(width, height);
      glitchContainer.appendChild(asciiOverlay);
      break;
  }
  
  // Add to page
  document.body.appendChild(glitchContainer);
  
  // Remove after duration
  setTimeout(() => {
    if (glitchContainer.parentNode) {
      glitchContainer.parentNode.removeChild(glitchContainer);
    }
  }, duration);
}

function generateRandomASCII(width, height) {
  const asciiChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '[', ']', '{', '}', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/', '~', '`', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const cols = Math.floor(width / 8); // 8px per character
  const rows = Math.floor(height / 8);
  
  let ascii = '';
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Random chance to show character or space
      if (Math.random() < 0.7) {
        ascii += asciiChars[Math.floor(Math.random() * asciiChars.length)];
      } else {
        ascii += ' ';
      }
    }
    ascii += '\n';
  }
  
  return ascii;
}


