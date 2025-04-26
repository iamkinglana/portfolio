export default function About() {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 bg-white">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            I'm Enock Ngetich, a passionate front-end developer with a strong interest in building accessible,
            responsive, and user-friendly web applications. I love turning ideas into reality using clean code and modern tools like React, TailwindCSS, and Firebase.
          </p>
          <div className="mt-6 text-left">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Skills</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>React.js, JavaScript, HTML5, CSS3</li>
              <li>TailwindCSS, Bootstrap</li>
              <li>Firebase, REST APIs</li>
              <li>Git, GitHub, VSCode</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  