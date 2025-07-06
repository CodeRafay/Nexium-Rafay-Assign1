'use client'

import { useState, useEffect, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Sparkles, Zap } from 'lucide-react'

interface QuoteFormProps {
  onSearch: (topic: string) => void
  isLoading: boolean
}

export default function QuoteForm({ onSearch, isLoading }: QuoteFormProps) {
  const [topic, setTopic] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const placeholderTexts = useMemo(() => [
    "Enter a topic (e.g., success, motivation)",
    "What inspires you today?",
    "Search for wisdom...",
    "Find your daily motivation",
    "Discover life-changing quotes"
  ], [])
  
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholderTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [placeholderTexts.length])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (topic.trim()) {
      setIsAnimating(true)
      onSearch(topic.trim().toLowerCase())
      setTimeout(() => setIsAnimating(false), 1000)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative group">
          <div className={`absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg blur opacity-25 transition-opacity duration-300 ${isFocused ? 'opacity-75' : 'opacity-0'}`}></div>
          
          <div className="relative">
            <Input
              type="text"
              placeholder={placeholderTexts[currentPlaceholder]}
              value={topic}
              onChange={handleInputChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`h-14 pr-14 text-lg font-medium border-2 rounded-lg transition-all duration-300 bg-white/90 backdrop-blur-sm ${
                isFocused 
                  ? 'border-green-400 shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              disabled={isLoading}
              style={{ 
                color: '#0D1B2A',
                fontSize: '1.1rem'
              }}
            />
            
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              {topic && !isLoading && (
                <Sparkles className="h-5 w-5 text-green-500 animate-pulse" />
              )}
              <Search className={`h-5 w-5 transition-all duration-300 ${
                isFocused ? 'text-green-500 scale-110' : 'text-gray-400'
              }`} />
            </div>
          </div>
        </div>
        
        <Button 
          type="submit" 
          className={`w-full h-14 text-lg font-semibold rounded-lg transition-all duration-500 transform ${
            isAnimating ? 'scale-95' : 'hover:scale-105'
          } relative overflow-hidden group text-white`}
          disabled={isLoading || !topic.trim()}
          style={{ 
            background: isLoading 
              ? 'linear-gradient(135deg, #64748b 0%, #475569 100%)'
              : 'linear-gradient(135deg, #0D1B2A 0%, #1e293b 100%)',
            boxShadow: '0 10px 25px rgba(13, 27, 42, 0.3)',
            color: '#ffffff'
          }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          
          <div className="relative z-10 flex items-center justify-center space-x-3">
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
                <span>Searching...</span>
              </>
            ) : (
              <>
                <Zap className="h-6 w-6 group-hover:animate-pulse" />
                <span>Find Inspiring Quotes</span>
              </>
            )}
          </div>
        </Button>
      </form>
      
      {/* Animated hint text */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500 animate-pulse">
          ✨ Press Enter or click the button to search
        </p>
      </div>
    </div>
  )
}