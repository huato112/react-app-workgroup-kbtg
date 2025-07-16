import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ThemeProvider } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders correctly', () => {
    render(
      <ThemeProvider>
        <Button>Click me</Button>
      </ThemeProvider>
    )
    
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('applies variant classes correctly', () => {
    render(
      <ThemeProvider>
        <Button variant="destructive">Delete</Button>
      </ThemeProvider>
    )
    
    const button = screen.getByRole('button', { name: /delete/i })
    expect(button).toHaveClass('bg-destructive')
  })
})
