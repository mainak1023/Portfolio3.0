import { Heart } from "lucide-react"

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a
              href="#"
              className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Mainak Majumder
            </a>
          </div>

          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">© {currentYear} Mainak Majumder. All rights reserved.</p>
          </div>

          <div className="flex items-center">
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

