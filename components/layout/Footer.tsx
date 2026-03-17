export default function Footer() {
  return (
    <footer className="bg-brand-text text-white py-12">
      <div className="max-w-content mx-auto px-6 text-center">
        <p className="font-body text-sm text-gray-300">
          © 2025 SENATOR Versicherungsmakler GmbH
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="/impressum" className="text-sm text-gray-400 hover:text-white transition-colors">Impressum</a>
          <a href="/datenschutz" className="text-sm text-gray-400 hover:text-white transition-colors">Datenschutz</a>
        </div>
      </div>
    </footer>
  )
}
