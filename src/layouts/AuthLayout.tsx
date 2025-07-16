import { Outlet } from 'react-router-dom'
import { useTheme } from '@/components/ThemeProvider'
import { Button } from '@/components/ui/Button'
import { Moon, Sun } from 'lucide-react'

export function AuthLayout() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      {/* Theme Toggle in top right */}
      <div className="absolute top-4 right-4">
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      {/* Auth Content */}
      <div className="w-full max-w-md p-6">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              KBTG React App
            </h1>
            <p className="text-sm text-muted-foreground">
              Welcome to our application
            </p>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}