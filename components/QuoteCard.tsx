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
        isHovered ? 'border-green-300 shadow-2xl scale-105' : 'border-gray-200 shadow-lg'
      }`}>
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 opacity-50 transition-opacity duration-300 ${
          isHovered ? 'opacity-80' : 'opacity-30'
        }`}></div>
        
        {/* Floating sparkles */}
        <div className="absolute top-4 right-4">
          <Sparkles className={`h-6 w-6 text-green-500 transition-all duration-300 ${
            isHovered ? 'animate-spin scale-110' : 'animate-pulse'
          }`} />
        </div>

        <CardContent className="relative z-10 p-8">
          <div className="mb-6">
            <blockquote className="text-xl md:text-2xl font-semibold text-slate-800 leading-relaxed italic relative">
              <span className="text-4xl text-green-500 absolute -top-2 -left-2 font-serif">&ldquo;</span>
              <span className="pl-6">{quote}</span>
              <span className="text-4xl text-green-500 absolute -bottom-4 -right-2 font-serif">&rdquo;</span>
            </blockquote>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className={`transition-all duration-300 hover:scale-110 ${
                  isLiked ? 'text-red-500' : 'text-gray-500'
                }`}
              >
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                <span className="ml-1 text-sm">{isLiked ? 'Liked' : 'Like'}</span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="text-gray-500 hover:text-green-600 transition-all duration-300 hover:scale-110"
              >
                <Copy className="h-5 w-5" />
                <span className="ml-1 text-sm">Copy</span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="text-gray-500 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Share2 className="h-5 w-5" />
                <span className="ml-1 text-sm">Share</span>
              </Button>
            </div>
            
            <div className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
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