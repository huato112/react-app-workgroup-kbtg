import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Users, Zap, Shield, Palette } from 'lucide-react'

export function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to KBTG React App
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A modern React TypeScript application built with Vite, Tailwind CSS, 
          and shadcn/ui components. Ready for production with all the features you need.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button asChild size="lg">
            <Link to="/users">
              <Users className="mr-2 h-4 w-4" />
              Explore Users
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a 
              href="https://github.com/huato112/react-app-workgroup-kbtg" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Source
            </a>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <Zap className="h-10 w-10 text-primary" />
            <CardTitle className="text-lg">Fast Development</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Built with Vite for lightning-fast development experience with HMR and instant builds.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Shield className="h-10 w-10 text-primary" />
            <CardTitle className="text-lg">Type Safe</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Full TypeScript support with strict mode enabled for robust and maintainable code.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Palette className="h-10 w-10 text-primary" />
            <CardTitle className="text-lg">Modern UI</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Beautiful components built with Tailwind CSS and shadcn/ui with dark mode support.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Users className="h-10 w-10 text-primary" />
            <CardTitle className="text-lg">User Management</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Complete user management system with CRUD operations and search functionality.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Technology Stack */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Technology Stack</h2>
          <p className="text-muted-foreground mt-2">
            Built with modern tools and best practices
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Frontend Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• React 18 with TypeScript</li>
                <li>• Vite for build tooling</li>
                <li>• React Router for routing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">UI & Styling</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Tailwind CSS for styling</li>
                <li>• shadcn/ui components</li>
                <li>• Lucide React icons</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">State & Utils</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Zustand for state management</li>
                <li>• React i18next for internationalization</li>
                <li>• Sonner for toast notifications</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Development Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• ESLint & Prettier</li>
                <li>• Vitest for testing</li>
                <li>• TypeScript strict mode</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Feature-based structure</li>
                <li>• Error boundaries</li>
                <li>• Extensible layouts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Dark/Light theme</li>
                <li>• Responsive design</li>
                <li>• Lazy loading ready</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}