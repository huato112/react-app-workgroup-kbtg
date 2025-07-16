import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { AuthLayout } from '@/layouts/AuthLayout'
import '@/i18n'

// Lazy load pages for better performance
const HomePage = lazy(() => import('@/pages/HomePage').then(module => ({ default: module.HomePage })))
const UserListPage = lazy(() => import('@/pages/UserListPage').then(module => ({ default: module.UserListPage })))

// Loading component
function PageLoading() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
        <p className="mt-2 text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="system" storageKey="kbtg-ui-theme">
        <Router>
          <div className="min-h-screen bg-background font-sans antialiased">
            <Suspense fallback={<PageLoading />}>
              <Routes>
                {/* Default Layout Routes */}
                <Route path="/" element={<DefaultLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="users" element={<UserListPage />} />
                </Route>

                {/* Auth Layout Routes (for future auth pages) */}
                <Route path="/auth" element={<AuthLayout />}>
                  {/* Auth routes can be added here */}
                </Route>

                {/* 404 Page */}
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center bg-background">
                    <div className="text-center">
                      <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
                      <p className="text-xl text-muted-foreground mt-2">Page not found</p>
                      <a 
                        href="/" 
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4"
                      >
                        Go Home
                      </a>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>

            {/* Toast notifications */}
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: 'hsl(var(--background))',
                  color: 'hsl(var(--foreground))',
                  border: '1px solid hsl(var(--border))',
                },
              }}
            />
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App