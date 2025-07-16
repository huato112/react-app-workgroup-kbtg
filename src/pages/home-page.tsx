import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Zap, Shield, Palette } from 'lucide-react'

export function HomePage() {
  const features = [
    {
      icon: Users,
      title: 'User Management',
      description: 'Complete CRUD operations for user management with real-time updates.',
      href: '/users',
    },
    {
      icon: Zap,
      title: 'Fast & Modern',
      description: 'Built with Vite, React 18, and TypeScript for optimal performance.',
    },
    {
      icon: Shield,
      title: 'Type Safe',
      description: 'Fully typed with TypeScript and strict ESLint configuration.',
    },
    {
      icon: Palette,
      title: 'Dark Mode',
      description: 'Beautiful UI with TailwindCSS and shadcn/ui components.',
    },
  ]

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight text-neutral-900">
          Welcome to React Workshop
        </h1>
        <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
          A modern React application built with Vite, TypeScript, TailwindCSS, and shadcn/ui.
          Featuring user management, dark mode, and extensible architecture.
        </p>
        <div className="flex gap-4 justify-center pt-6">
          <Button asChild size="lg" className="bg-web-green-500 hover:bg-web-green-600 text-white px-8 py-4 rounded-md">
            <Link to="/users">
              <Users className="h-4 w-4 mr-2" />
              View Users
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-neutral-200 text-neutral-700 hover:bg-neutral-50 px-8 py-4 rounded-md">
            <a 
              href="https://github.com/your-username/react-workshop" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon
          const content = (
            <Card className="h-full hover:shadow-md transition-shadow bg-white border-neutral-200 rounded-lg p-6">
              <CardHeader className="p-0 pb-4">
                <Icon className="h-8 w-8 text-web-green-500 mb-3" />
                <CardTitle className="text-xl text-neutral-900 mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-neutral-500">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          )

          return feature.href ? (
            <Link key={feature.title} to={feature.href}>
              {content}
            </Link>
          ) : (
            <div key={feature.title}>{content}</div>
          )
        })}
      </div>

      {/* Tech Stack */}
      <Card className="bg-white border-neutral-200 rounded-lg">
        <CardHeader className="p-8 pb-6">
          <CardTitle className="text-2xl text-neutral-900">Tech Stack</CardTitle>
          <CardDescription className="text-neutral-500">
            This application is built with modern technologies and best practices
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 pt-0">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="font-semibold mb-3 text-neutral-900">Frontend</h4>
              <ul className="text-sm text-neutral-500 space-y-2">
                <li>• React 18 with TypeScript</li>
                <li>• Vite for build tooling</li>
                <li>• React Router for routing</li>
                <li>• TailwindCSS for styling</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-neutral-900">UI Components</h4>
              <ul className="text-sm text-neutral-500 space-y-2">
                <li>• shadcn/ui components</li>
                <li>• Radix UI primitives</li>
                <li>• Lucide React icons</li>
                <li>• Sonner for toasts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-neutral-900">State & Tools</h4>
              <ul className="text-sm text-neutral-500 space-y-2">
                <li>• Zustand for state management</li>
                <li>• ESLint + Prettier</li>
                <li>• Vitest for testing</li>
                <li>• TypeScript strict mode</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
