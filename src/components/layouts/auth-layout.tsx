import type { ReactNode } from "react"
import { Outlet } from "react-router-dom"

interface AuthLayoutProps {
  readonly children?: ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">Sign in to your account</p>
        </div>
        {children || <Outlet />}
      </div>
    </div>
  )
}
