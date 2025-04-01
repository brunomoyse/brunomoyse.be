import type { Component } from "solid-js";

const GitHubIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 mr-2"
        fill="currentColor"
        viewBox="0 0 24 24"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);


const App: Component = () => {
  return (
      <div class="min-h-screen flex flex-col bg-white">
        {/* Header - Simplified */}
        <header class="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-100">
          <nav class="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
            <div class="font-semibold text-gray-900 tracking-tight text-lg">Bruno<span class="hidden sm:inline"> Moyse</span></div>
            <div class="flex items-center gap-8">
              <ul class="flex space-x-6">
                {['Experience', 'Projects', 'Contact'].map((item) => (
                    <li>
                      <a
                          href={`#${item.toLowerCase()}`}
                          class="text-gray-600 hover:text-gray-900 text-sm transition-all duration-300 hover:underline underline-offset-4"
                      >
                        {item}
                      </a>
                    </li>
                ))}
              </ul>
              <a
                  href="https://github.com/brunomoyse"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Visit Bruno Moyse on GitHub"
              >
                <GitHubIcon/>
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Banner with Overlayed Text */}
        <section class="relative w-full h-[500px] sm:h-[600px] md:h-[700px] bg-gray-900">
          <img
              src="/images/bruno-coding.jpg"
              alt="Banner illustration of Bruno coding on the beach"
              class="absolute inset-0 w-full h-full object-cover object-center opacity-80"
          />
          <div class="absolute inset-0 bg-black/10"></div>
          <div class="relative z-9 h-full flex flex-col items-center justify-center text-center px-4">
            <h1 class="text-4xl sm:text-6xl font-bold mb-6  bg-clip-text text-white">
              Web Developer
            </h1>
            <p class="text-lg text-white mb-8 drop-shadow-lg font-bold">
              Building scalable foundations for digital experiences <br class="hidden sm:block"/>
              with Go, Rust, and modern web technologies.
            </p>
            <a
                href="#contact"
                class="inline-block px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors duration-300 text-sm"
            >
              Let's connect
            </a>
          </div>
        </section>

        {/* About - Cleaner Presentation */}
        <section id="about" class="py-20 bg-gray-50">
          <div class="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h2 class="text-gray-500 text-sm font-medium mb-4">About</h2>
            <p class="text-3xl font-semibold text-gray-900 mb-6">
              Brussels-based developer passionate about efficient systems and clean architecture.
            </p>
            <p class="text-gray-600 leading-relaxed">
              Over 5 years crafting robust backend solutions. Transitioning from PHP/Laravel to
              performance-focused languages like Go and Rust. Focused on creating maintainable,
              scalable systems that stand the test of time.
            </p>
          </div>
        </section>

        {/* Experience - Timeline Layout */}
        <section id="experience" class="py-20 bg-white">
          <div class="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h2 class="text-gray-500 text-sm font-medium mb-8">Experience</h2>

            <div
                class="space-y-12 relative before:absolute before:left-7 before:h-full before:w-px before:bg-gray-100">
              {/* D2D3 */}
              <div class="relative pl-24">
                <div
                    class="absolute left-0 top-1 w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center">
                  <img src="/images/d2d3.png" alt="D2D3 Logo" class="w-10 h-10"/>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">D2D3.com</h3>
                <p class="text-sm text-gray-500 mb-4">Full Stack Developer</p>
                <ul class="space-y-3 text-gray-600">
                  <li class="flex">
                    <span class="text-gray-400 mr-2">→</span>
                    Built geospatial APIs with PostGIS & OpenLayers
                  </li>
                  <li class="flex">
                    <span class="text-gray-400 mr-2">→</span>
                    Designed urban planning and management tools (in Vue)
                  </li>
                </ul>
              </div>

              {/* Crisis Center */}
              <div class="relative pl-24">
                <div
                    class="absolute left-0 top-1 w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center">
                  <img src="/images/nccn.png" alt="NCCN Logo" class="w-10 h-10"/>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">National Crisis Center (NCCN)</h3>
                <p class="text-sm text-gray-500 mb-4">Backend Systems Developer</p>
                <ul class="space-y-3 text-gray-600">
                  <li class="flex">
                    <span class="text-gray-400 mr-2">→</span>
                    Engineered crisis management database serving 10K+ users
                  </li>
                  <li class="flex">
                    <span class="text-gray-400 mr-2">→</span>
                    Migrating legacy systems to Golang modules
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects - Grid with Hover Effects */}
        <section id="projects" class="py-20 bg-gray-50">
          <div class="container mx-auto px-4 sm:px-6 max-w-4xl">
            <h2 class="text-gray-500 text-sm font-medium mb-8">Personal projects</h2>

            <div class="grid gap-8 sm:grid-cols-2">
              {/* Restaurant web shop Card */}
              <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 relative">
                {/* Icon Logo */}
                <div class="absolute -top-5 left-5 w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center">
                  <img
                      src="/images/tokyo-sushi.png"
                      alt="Restaurant Icon"
                      class="w-8 h-8"
                  />
                </div>
                {/* Add top margin to push the content down so it doesn't overlap the icon */}
                <div class="mt-8">
                  <h3 class="text-lg font-semibold mb-4">Restaurant web shop</h3>
                  <p class="text-gray-600 text-sm mb-6">
                    Full-stack solution (with dashboard for product management) with Nuxt 3
                    frontend and Go backend
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs">PostgreSQL</span>
                    <span class="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs">Mollie</span>
                    <span class="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs">Go</span>
                    <span class="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs">Rust</span>
                    <span class="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs">Nuxt</span>
                  </div>
                </div>
              </div>

              {/* DataChallenge 2024 Card */}
              <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 relative">
                {/* Icon Logo */}
                <div class="absolute -top-5 left-5 w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center">
                  <img
                      src="/images/digital-wallonia.png"
                      alt="DataChallenge Icon"
                      class="w-8 h-8"
                  />
                </div>
                {/* Content offset */}
                <div class="mt-8">
                  <h3 class="text-lg font-semibold mb-4">DataChallenge 2024</h3>
                  <p class="text-gray-600 text-sm mb-6">
                    Award-winning economic analysis platform for Walloon Region
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs">Python</span>
                    <span class="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs">Data Analysis</span>
                    <span class="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs">Vue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact - Centered with Social Proof */}
        <section id="contact" class="py-20 bg-white">
          <div class="container mx-auto px-4 sm:px-6 text-center max-w-2xl">
            <h2 class="text-gray-500 text-sm font-medium mb-4">Contact</h2>
            <p class="text-3xl font-semibold text-gray-900 mb-8">
              Let's build something remarkable
            </p>
            <a
                href="mailto:contact@brunomoyse.be"
                class="inline-block px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors duration-300 text-sm"
            >
              contact@brunomoyse.be
            </a>
            <div class="mt-6">
              <a
                  href="https://github.com/brunomoyse"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <GitHubIcon/>
                Explore code on GitHub
              </a>
            </div>
            <p class="text-gray-500 text-sm mt-8">
              Currently open for select consulting projects
            </p>
          </div>
        </section>

        {/* Footer - Minimal */}
        <footer class="mt-auto border-t border-gray-100">
          <div class="container mx-auto px-4 sm:px-6 py-8 text-center">
            <p class="text-sm text-gray-500">
              © 2025 Bruno Moyse
            </p>
          </div>
        </footer>
      </div>
  );
};

export default App;
