const Homepage = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div
        className="hero min-h-[50vh] bg-base-100"
        style={{
          backgroundImage:
            'url("https://lh5.googleusercontent.com/inodkYTsJ8phveWpw4OsNdrxj2uJqmDe5dzNO-YwRTEXNRmkP77tjdkf94XLavdbZBeTrNPYvhHbf8Cd-9mAxScMZiOOmoB-ImfVj9Ms-Djsr7ETm7PtykJwuBA9thEr_MYJXYfEypbnghI34DkclXhYYwtcDhou5-_BgiS0Vs6zhAIwtA1UZbX-tO_4mg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Apichet.J</h1>
            <p className="py-6">Full Stack Developer</p>
            <button className="btn btn-primary">Download CV</button>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <div className="badge badge-primary">React</div>
                <div className="badge badge-primary">Next.js</div>
                <div className="badge badge-primary">TailwindCSS</div>
                <div className="badge badge-primary">JavaScript</div>
                <div className="badge badge-primary">TypeScript</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <div className="badge badge-secondary">Node.js</div>
                <div className="badge badge-secondary">Express</div>
                <div className="badge badge-secondary">PostgreSQL</div>
                <div className="badge badge-secondary">MongoDB</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <div className="badge badge-accent">Git</div>
                <div className="badge badge-accent">CI/CD</div>
                <div className="badge badge-accent">Docker</div>
                <div className="badge badge-accent">VM</div>
                <div className="badge badge-accent">Vercel</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">IOT</h3>
              <div className="flex flex-wrap gap-2">
                <div className="badge badge-info">Arduino</div>
                <div className="badge badge-info">ESP32</div>
                <div className="badge badge-info">Raspberry Pi</div>
                <div className="badge badge-info">MQTT</div>
                <div className="badge badge-info">NODE-RED</div>
                <div className="badge badge-info">PLC</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300">
            <figure>
              <img
                src="https://images.yourstory.com/cs/2/96eabe90392211eb93f18319e8c07a74/Imageo6gj-1692521100634.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75"
                alt="Project 1"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Project One</h3>
              <p>A full-stack application built with Next.js and Node.js</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Project</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300">
            <figure>
              <img
                src="https://images.yourstory.com/cs/2/96eabe90392211eb93f18319e8c07a74/Imageo6gj-1692521100634.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75"
                alt="Project 2"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Project Two</h3>
              <p>An e-commerce platform with real-time updates</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto p-8">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center mb-4">Get In Touch</h2>
            <div className="flex justify-center gap-4">
              <button className="btn btn-circle btn-outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </button>
              <button className="btn btn-circle btn-outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </button>
              <button className="btn btn-circle btn-outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
