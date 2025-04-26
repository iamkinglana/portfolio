export default function Footer() {
    return (
      <footer className="bg-gray-100 text-center py-6 border-t mt-10">
        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Enock Ngetich. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2 text-blue-600">
          <a href="https://github.com/enockngetich" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/enockngetich" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    );
  }
  