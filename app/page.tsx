'use client'

import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import QuoteForm from '@/components/QuoteForm'
import QuoteCard from '@/components/QuoteCard'
import { AlertCircle, Sparkles, TrendingUp } from 'lucide-react'
import { toast } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

// Import your quotes data
import quotesData from '@/data/quotes.json'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [quotes, setQuotes] = useState<string[]>([])
  const [searchTopic, setSearchTopic] = useState('')
  const [noResults, setNoResults] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSearch = async (topic: string) => {
    setIsLoading(true)
    setNoResults(false)
    setSearchTopic(topic)
    setHasSearched(true)
    
    // Simulate loading delay with smooth transition
    setTimeout(() => {
      const topicQuotes = quotesData[topic as keyof typeof quotesData]
      
      if (topicQuotes && topicQuotes.length > 0) {
        // Get 3 random quotes from the topic
        const shuffled = [...topicQuotes].sort(() => 0.5 - Math.random())
        setQuotes(shuffled.slice(0, 3))
        setNoResults(false)
        toast.success(`Found ${shuffled.slice(0, 3).length} quotes about ${topic}!`, {
          icon: '✨',
          duration: 3000,
        })
      } else {
        setQuotes([])
        setNoResults(true)
        toast.error(`No quotes found for "${topic}"`, {
          icon: '🔍',
          duration: 3000,
        })
      }
      
      setIsLoading(false)
    }, 1200)
  }

  const availableTopics = Object.keys(quotesData)
  
  // Filter out specific topics from the popular topics display
  // Add the topics you want to exclude in this array
  const topicsToExclude = ['sex', 'romance'] // Change these to the topics you want to hide
  const popularTopics = availableTopics.filter(topic => !topicsToExclude.includes(topic))

  return (
    <main 
      className={`min-h-screen p-4 sm:p-6 md:p-8 ${inter.className} relative overflow-hidden`} 
      style={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        animation: isVisible ? 'fadeIn 0.8s ease-out' : ''
      }}
    >
      {/* Floating background elements - responsive sizes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-blue-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-purple-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header - responsive text sizes */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 mr-2 sm:mr-3 text-green-500 animate-spin" style={{ animationDuration: '3s' }} />
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent"
              style={{ animation: 'slideInFromTop 0.8s ease-out' }}
            >
              Quote Generator
            </h1>
            <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 ml-2 sm:ml-3 text-green-500 animate-spin" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
          </div>
          <p 
            className="text-gray-600 text-base sm:text-lg md:text-xl font-medium px-4 sm:px-0"
            style={{ animation: 'slideInFromTop 0.8s ease-out 0.2s both' }}
          >
            Discover inspiring quotes that spark your imagination
          </p>
        </div>
        
        {/* Search Form - responsive padding */}
        <div 
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-white/20"
          style={{ 
            animation: 'slideInFromBottom 0.8s ease-out 0.4s both',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
        >
          <QuoteForm onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {/* Loading State - responsive sizes */}
        {isLoading && (
          <div className="text-center py-8 sm:py-12 md:py-16 mb-6 sm:mb-8">
            <div className="relative">
              <div className="animate-spin rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 border-4 border-green-200 border-t-green-500 mx-auto mb-4 sm:mb-6"></div>
              <div className="absolute inset-0 animate-ping rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 border-4 border-green-300 opacity-20 mx-auto"></div>
            </div>
            <p className="text-gray-600 text-base sm:text-lg font-medium animate-pulse px-4 sm:px-0">
              Finding the perfect quotes for you...
            </p>
            <div className="mt-4 flex justify-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        )}

        {/* Quotes Display - responsive spacing */}
        {quotes.length > 0 && !isLoading && (
          <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
            <div 
              className="text-center px-4 sm:px-0"
              style={{ animation: 'fadeIn 0.6s ease-out' }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-slate-800">
                Quotes about <span className="text-green-600 capitalize break-words">&ldquo;{searchTopic}&rdquo;</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">Here are some inspiring quotes for you ✨</p>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              {quotes.map((quote, index) => (
                <QuoteCard key={index} quote={quote} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* No Results - responsive padding */}
        {noResults && !isLoading && (
          <div 
            className="text-center py-8 sm:py-12 bg-white/60 backdrop-blur-sm rounded-2xl border border-red-100 mb-6 sm:mb-8 mx-2 sm:mx-0"
            style={{ animation: 'fadeIn 0.5s ease-out' }}
          >
            <div className="relative">
              <AlertCircle className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mx-auto mb-3 sm:mb-4 text-red-400 animate-pulse" />
              <div className="absolute inset-0 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mx-auto bg-red-100 rounded-full animate-ping opacity-20"></div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-slate-800 px-4 sm:px-0">
              No quotes found
            </h3>
            <p className="text-gray-600 text-base sm:text-lg px-4 sm:px-0">
              No quotes found for <span className="font-semibold text-red-500 break-words">&ldquo;{searchTopic}&rdquo;</span>. Try one of the popular topics below.
            </p>
          </div>
        )}

        {/* Popular Topics - responsive grid */}
        {(hasSearched || quotes.length === 0) && !isLoading && (
          <div 
            className="mb-6 sm:mb-8"
            style={{ animation: 'slideInFromBottom 0.8s ease-out 0.6s both' }}
          >
            <div className="flex items-center justify-center mb-4 sm:mb-6 px-4 sm:px-0">
              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 text-green-500" />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                {hasSearched ? 'Try Other Popular Topics' : 'Popular Topics'}
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 px-2 sm:px-0">
              {popularTopics.map((topic, index) => (
                <button
                  key={topic}
                  onClick={() => handleSearch(topic)}
                  disabled={isLoading}
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-full border-2 border-slate-200 hover:border-green-400 transition-all duration-300 disabled:opacity-50 hover:scale-105 hover:shadow-lg group relative overflow-hidden"
                  style={{ 
                    background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                    color: '#0D1B2A'
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  <span className="relative z-10 capitalize text-center block">{topic}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Initial State - responsive text and emoji */}
        {!hasSearched && quotes.length === 0 && !isLoading && !noResults && (
          <div 
            className="text-center py-8 sm:py-12 md:py-16 px-4 sm:px-0"
            style={{ animation: 'fadeIn 1s ease-out' }}
          >
            <div className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6 animate-bounce">💭</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-800">
              Ready to get inspired?
            </h3>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Enter a topic above or click on one of the popular topics to discover amazing quotes that will motivate and inspire you!
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInFromTop {
          from { 
            opacity: 0; 
            transform: translateY(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slideInFromBottom {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </main>
  )
}