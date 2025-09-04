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

    <!-- System Info Panel -->
    <div class="fixed top-2 left-2 sm:top-4 sm:left-4 z-[100] border border-green-400 p-2 sm:p-3 text-xs system-panel max-w-[calc(100vw-1rem)] sm:max-w-none">
      <div class="text-green-400 font-bold mb-1 sm:mb-2 tracking-wider text-xs sm:text-sm">[SHOWCASE_STATUS]</div>
      <div class="space-y-1 text-green-300">
        <div class="flex justify-between text-xs sm:text-sm">
          <span>STATUS:</span>
          <span class="text-green-400 font-mono system-value">BUILDING</span>
        </div>
        <div class="flex justify-between text-xs sm:text-sm">
          <span>APP:</span>
          <span class="text-green-400 font-mono system-value">READY</span>
        </div>
        <div class="flex justify-between text-xs sm:text-sm">
          <span>UPTIME:</span>
          <span id="uptime" class="text-green-400 font-mono system-value">00:00:00</span>
        </div>
      </div>
    </div>

    <!-- Main Content Container -->
    <div class="flex items-center justify-center min-h-screen px-2 sm:px-4">
      <div class="text-center max-w-4xl mx-auto w-full">

        <!-- Main Coming Soon Message -->
        <div class="mb-8 sm:mb-12">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-green-400 mb-4 sm:mb-6 tracking-wider px-2" style="text-shadow: 0 0 20px #00FF00;">
            COMING SOON...
          </h1>
          <div class="border-2 border-green-400 p-4 sm:p-6 md:p-8 bg-black mx-2 sm:mx-0">
            <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-300 mb-3 sm:mb-4 tracking-wider">
              Showcase website in development
            </h2>
            <p class="text-sm sm:text-base md:text-lg lg:text-xl text-green-400 font-mono tracking-wider break-all sm:break-normal">
              [1MAGINARY.ONLINE_ANDROID_APP]
            </p>
          </div>
        </div>

        <!-- Status Information -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12 px-2 sm:px-0">
          <div class="border border-green-400 p-3 sm:p-4 bg-black">
            <span class="text-green-400 font-bold text-xs sm:text-sm tracking-wider">[STATUS]</span><br>
            <span class="text-green-300 text-sm sm:text-base">SHOWCASE_DEV</span>
          </div>
          <div class="border border-green-400 p-3 sm:p-4 bg-black">
            <span class="text-green-400 font-bold text-xs sm:text-sm tracking-wider">[TYPE]</span><br>
            <span class="text-green-300 text-sm sm:text-base">PORTFOLIO_SITE</span>
          </div>
          <div class="border border-green-400 p-3 sm:p-4 bg-black sm:col-span-2 md:col-span-1">
            <span class="text-green-400 font-bold text-xs sm:text-sm tracking-wider">[APP]</span><br>
            <span class="text-green-300 text-sm sm:text-base">COMPLETE</span>
          </div>
        </div>


        <!-- Footer Info -->
        <div class="border-t border-green-400 pt-6 sm:pt-8 px-2 sm:px-0">
          <div class="text-green-400 font-bold tracking-wider mb-2 text-sm sm:text-base">
            © 2025 1MAGINARY.ONLINE
          </div>
          <div class="text-green-300 text-xs sm:text-sm tracking-wider">
            PORTFOLIO SHOWCASE IN DEVELOPMENT
          </div>
        </div>
      </div>
    </div>

    <!-- Retro Terminal Cursor -->
    <div class="fixed bottom-4 right-4 text-green-400 text-2xl animate-pulse">
      █
    </div>

    <!-- Music Player -->
    <div class="fixed bottom-4 left-4 z-[200] border border-green-400 p-3 system-panel">
      <div class="flex items-center space-x-3">
        <!-- Play/Pause Button -->
        <button id="play-pause-btn" class="bg-green-400 text-black px-4 py-1 text-xs font-bold tracking-wider hover:bg-green-300 transition-colors w-12 h-6 flex items-center justify-center">
          <span id="play-icon">PLAY</span>
          <span id="pause-icon" class="hidden">MUTE</span>
        </button>
        
        <!-- Volume Control -->
        <div class="flex items-center space-x-2">
          <span class="text-green-400 text-xs">VOL:</span>
          <input 
            type="range" 
            id="volume-slider" 
            min="0" 
            max="100" 
            value="0" 
            class="w-16 h-1 bg-green-400 appearance-none cursor-pointer slider"
          />
          <span id="volume-display" class="text-green-400 text-xs font-mono w-8">00%</span>
        </div>
      </div>
      
      <!-- Audio Element -->
      <audio id="background-music" loop preload="auto">
        <source src="/music/ambientmusic.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
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


// Uptime Counter
function startUptimeCounter() {
  let seconds = 0;
  
  setInterval(() => {
    seconds++;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    document.getElementById('uptime').textContent = 
      `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, 1000);
}

// CRT Glitch/Corruption Effect System
function startCRTGlitchEffects() {
  // Create glitch effects at random intervals
  setInterval(() => {
    // Random chance to create a glitch (15% probability)
    if (Math.random() < 0.15) {
      createCRTGlitch();
    }
  }, 3000); // Check every 3 seconds
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

// Music Player System
function initializeMusicPlayer() {
  const audio = document.getElementById('background-music');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const volumeSlider = document.getElementById('volume-slider');
  const volumeDisplay = document.getElementById('volume-display');
  
  let isPlaying = false;
  let isMuted = false; // Start unmuted at 15% volume
  
  // Set initial volume to 15%
  audio.volume = 0.15;
  volumeSlider.value = 15;
  volumeDisplay.textContent = '15%';
  
  // Play/Pause functionality
  playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      playIcon.classList.remove('hidden');
      pauseIcon.classList.add('hidden');
      isPlaying = false;
    } else {
      // Try to play audio
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          playIcon.classList.add('hidden');
          pauseIcon.classList.remove('hidden');
          isPlaying = true;
        }).catch(() => {
          // Autoplay was prevented, show play button
          playIcon.classList.remove('hidden');
          pauseIcon.classList.add('hidden');
          isPlaying = false;
        });
      }
    }
  });
  
  // Volume control
  volumeSlider.addEventListener('input', (e) => {
    const volume = parseInt(e.target.value) / 100;
    audio.volume = volume;
    volumeDisplay.textContent = e.target.value.padStart(2, '0') + '%';
    
    // Unmute when volume is increased
    if (volume > 0 && isMuted) {
      isMuted = false;
    }
  });
  
  // Handle audio events
  audio.addEventListener('loadeddata', () => {
    console.log('Audio loaded successfully');
  });
  
  audio.addEventListener('canplay', () => {
    console.log('Audio can start playing');
  });
  
  audio.addEventListener('ended', () => {
    // This shouldn't happen due to loop, but just in case
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
    isPlaying = false;
  });
  
  audio.addEventListener('error', (e) => {
    console.error('Audio error:', e);
    console.error('Audio src:', audio.src);
    console.error('Audio networkState:', audio.networkState);
    console.error('Audio readyState:', audio.readyState);
    
    // Show error message instead of hiding player
    const musicPlayer = document.querySelector('.fixed.bottom-4.left-4');
    if (musicPlayer) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'text-red-400 text-xs mt-2';
      errorDiv.textContent = 'Audio load failed - check console';
      musicPlayer.appendChild(errorDiv);
    }
  });
  
  // Try to start playing automatically at 20% volume
  setTimeout(() => {
    audio.play().then(() => {
      playIcon.classList.add('hidden');
      pauseIcon.classList.remove('hidden');
      isPlaying = true;
      console.log('Background music started at 15% volume');
    }).catch(() => {
      // Autoplay prevented - show play button
      playIcon.classList.remove('hidden');
      pauseIcon.classList.add('hidden');
      isPlaying = false;
      console.log('Autoplay prevented by browser - user interaction required');
    });
  }, 1000);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  startFloatingSymbols();
  startUptimeCounter();
  startCRTGlitchEffects();
  initializeMusicPlayer();
});
