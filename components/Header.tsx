import { ModeToggle } from '@/utils/toggleMode'
import Logo from './Logo'

const Header = () => {
  return (
    <header className="h-15 shadow-sm dark:border-gray-700">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <Logo />

        <ModeToggle />
      </div>
    </header>
  )
}

export default Header
