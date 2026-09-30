import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Container } from '../components/common/Container'
import { Button } from '../components/common/Button'

export function NotFoundPage() {
  return (
    <div className="py-24 sm:py-32 text-center">
      <Container>
        <span className="text-xs uppercase font-semibold text-ghaat-terracotta tracking-wider">
          404 Error
        </span>
        <h1 className="mt-3 text-4xl sm:text-5xl font-serif text-ghaat-charcoal">
          Page Not Found
        </h1>
        <p className="mt-4 text-base text-ghaat-stone max-w-md mx-auto">
          The page or project you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Button to="/" variant="primary" iconLeft={ArrowLeft}>
            Return to Homepage
          </Button>
        </div>
      </Container>
    </div>
  )
}
