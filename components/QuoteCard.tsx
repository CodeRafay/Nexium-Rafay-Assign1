'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Copy, Heart, Share2, Sparkles } from 'lucide-react'
import { toast } from 'sonner'

interface QuoteCardProps {
  quote: string
  index: number
}

export default function QuoteCard({ quote, index }: QuoteCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 200)
    return () => clearTimeout(timer)
  }, [index])

  const handleCopy = () => {
    navigator.clipboard.writeText(quote)
    toast.success('Quote copied to clipboard!', {
      icon: '📋',
      duration: 2000,
    })
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    toast.success(isLiked ? 'Removed from favorites' : 'Added to favorites!', {
      icon: isLiked ? '💔' : '❤️',
      duration: 2000,
    })
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Inspiring Quote',
        text: quote,
      })
    } else {
      handleCopy()
    }
  }

  return (
    <div 
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className={`relative overflow-hidden border-2 transition-all duration-300 ${
        isHovered ? 'border-green-300 shadow-2xl md:scale-105' : 'border-gray-200 shadow-lg'
      }`}>
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 opacity-50 transition-opacity duration-300 ${
          isHovered ? 'opacity-80' : 'opacity-30'
        }`}></div>
        
        {/* Floating sparkles - responsive positioning */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
          <Sparkles className={`h-5 w-5 sm:h-6 sm:w-6 text-green-500 transition-all duration-300 ${
            isHovered ? 'animate-spin scale-110' : 'animate-pulse'
          }`} />
        </div>

        <CardContent className="relative z-10 p-4 sm:p-6 md:p-8">
          {/* Quote text - responsive sizing */}
          <div className="mb-4 sm:mb-6">
            <blockquote className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 leading-relaxed italic relative">
              <span className="text-2xl sm:text-3xl md:text-4xl text-green-500 absolute -top-1 sm:-top-2 -left-1 sm:-left-2 font-serif">&ldquo;</span>
              <span className="pl-4 sm:pl-6 block break-words">{quote}</span>
              <span className="text-2xl sm:text-3xl md:text-4xl text-green-500 absolute -bottom-2 sm:-bottom-4 -right-1 sm:-right-2 font-serif">&rdquo;</span>
            </blockquote>
          </div>

          {/* Actions - responsive layout */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-3 sm:pt-4 border-t border-gray-200 gap-3 sm:gap-0">
            <div className="flex items-center space-x-2 sm:space-x-3 flex-wrap">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className={`transition-all duration-300 hover:scale-110 text-xs sm:text-sm ${
                  isLiked ? 'text-red-500' : 'text-gray-500'
                }`}
              >
                <Heart className={`h-4 w-4 sm:h-5 sm:w-5 ${isLiked ? 'fill-current' : ''}`} />
                <span className="ml-1">{isLiked ? 'Liked' : 'Like'}</span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="text-gray-500 hover:text-green-600 transition-all duration-300 hover:scale-110 text-xs sm:text-sm"
              >
                <Copy className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="ml-1">Copy</span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="text-gray-500 hover:text-blue-600 transition-all duration-300 hover:scale-110 text-xs sm:text-sm"
              >
                <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="ml-1">Share</span>
              </Button>
            </div>
            
            <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
              isHovered ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
            }`}>
              Quote #{index + 1}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}