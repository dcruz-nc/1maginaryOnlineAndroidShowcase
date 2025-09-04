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
    <div class="fixed top-4 left-4 z-[100] border border-green-400 p-3 text-xs system-panel">
      <div class="text-green-400 font-bold mb-2 tracking-wider">[SYSTEM_STATUS]</div>
      <div class="space-y-1 text-green-300">
        <div class="flex justify-between">
          <span>STATUS:</span>
          <span class="text-green-400 font-mono system-value">DEVELOPMENT</span>
        </div>
        <div class="flex justify-between">
          <span>PROGRESS:</span>
          <span id="progress" class="text-green-400 font-mono system-value">00%</span>
        </div>
        <div class="flex justify-between">
          <span>ETA:</span>
          <span class="text-green-400 font-mono system-value">TBD</span>
        </div>
        <div class="flex justify-between">
          <span>UPTIME:</span>
          <span id="uptime" class="text-green-400 font-mono system-value">00:00:00</span>
        </div>
      </div>
    </div>

    <!-- Main Content Container -->
    <div class="flex items-center justify-center min-h-screen px-4">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Header -->
        <div class="mb-8">
          <div class="inline-block bg-green-400 text-black px-4 py-2 font-bold text-sm tracking-wider border-2 border-green-400 mb-6">
            [SYSTEM_MAINTENANCE]
          </div>
        </div>

        <!-- Main Coming Soon Message -->
        <div class="mb-12">
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-green-400 mb-6 tracking-wider" style="text-shadow: 0 0 20px #00FF00;">
            COMING SOON
          </h1>
          <div class="border-2 border-green-400 p-6 md:p-8 bg-black">
            <h2 class="text-xl md:text-2xl lg:text-3xl text-green-300 mb-4 tracking-wider">
              We're working on something amazing
            </h2>
            <p class="text-lg md:text-xl text-green-400 font-mono tracking-wider">
              [1MAGINARY.ONLINE_ANDROID_APP]
            </p>
          </div>
        </div>

        <!-- Status Information -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div class="border border-green-400 p-4 bg-black">
            <span class="text-green-400 font-bold text-sm tracking-wider">[STATUS]</span><br>
            <span class="text-green-300">IN_DEVELOPMENT</span>
          </div>
          <div class="border border-green-400 p-4 bg-black">
            <span class="text-green-400 font-bold text-sm tracking-wider">[TYPE]</span><br>
            <span class="text-green-300">ANDROID_APP</span>
          </div>
          <div class="border border-green-400 p-4 bg-black">
            <span class="text-green-400 font-bold text-sm tracking-wider">[READY]</span><br>
            <span class="text-green-300">COMING_SOON</span>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="mb-8">
          <div class="text-green-400 font-bold mb-4 tracking-wider text-lg">
            [DEVELOPMENT_PROGRESS]
          </div>
          <div class="w-full bg-black border-2 border-green-400 p-2">
            <div id="progress-bar" class="h-4 bg-green-400 transition-all duration-1000 ease-out" style="width: 0%"></div>
          </div>
          <div class="text-green-300 text-sm mt-2 tracking-wider">
            [SYSTEM_INITIALIZING...]
          </div>
        </div>

        <!-- Footer Info -->
        <div class="border-t border-green-400 pt-8">
          <div class="text-green-400 font-bold tracking-wider mb-2">
            © 2024 1MAGINARY.ONLINE
          </div>
          <div class="text-green-300 text-sm tracking-wider">
            ANDROID DEVELOPMENT IN PROGRESS
          </div>
        </div>
      </div>
    </div>

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

// Progress Bar Animation
function animateProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress');
  let progress = 0;
  
  const interval = setInterval(() => {
    progress += Math.random() * 3; // Random increment between 0-3%
    if (progress > 100) progress = 100;
    
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${Math.floor(progress).toString().padStart(2, '0')}%`;
    
    if (progress >= 100) {
      clearInterval(interval);
      // Reset progress after reaching 100%
      setTimeout(() => {
        progress = 0;
        progressBar.style.width = '0%';
        progressText.textContent = '00%';
        animateProgressBar(); // Restart animation
      }, 3000);
    }
  }, 200);
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

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  startFloatingSymbols();
  startUptimeCounter();
  startCRTGlitchEffects();
  animateProgressBar();
});
