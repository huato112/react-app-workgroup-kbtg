import { ThemeProvider } from '@/components/theme-provider'
import { ErrorBoundary } from '@/components/error-boundary'
import { Toaster } from '@/components/ui/sonner'
import { AppRouter } from '@/router/app-router'

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <AppRouter />
        <Toaster />
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
