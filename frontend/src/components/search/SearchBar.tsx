'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, X, Loader2, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

/**
 * SearchBar Component
 *
 * Premium search interface with AdamFTD brand colors.
 * Features natural language parsing, intelligent autocomplete,
 * and smooth animations for a professional user experience.
 */

interface SearchBarProps {
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  className?: string;
  size?: 'default' | 'large';
}

interface Suggestion {
  type: 'hs_code' | 'company' | 'country' | 'product' | 'recent';
  value: string;
  label: string;
  description?: string;
}

export function SearchBar({
  onFocus,
  onBlur,
  placeholder = 'Search...',
  className = '',
  size = 'large',
}: SearchBarProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  // Debounced autocomplete fetch
  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      // Mock suggestions - would call API
      const mockSuggestions: Suggestion[] = [
        { type: 'hs_code', value: '730890', label: '730890', description: 'Iron/steel structures, parts' },
        { type: 'company', value: 'comp_123', label: 'Müller Stahlbau GmbH', description: 'Hamburg, DE' },
        { type: 'country', value: 'DE', label: 'Germany', description: '15.2M shipments' },
      ];
      setSuggestions(mockSuggestions);
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const searchParams = new URLSearchParams();
    searchParams.set('q', query);
    router.push(`/search?${searchParams.toString()}`);
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    if (suggestion.type === 'company') {
      router.push(`/companies/${suggestion.value}`);
    } else if (suggestion.type === 'hs_code') {
      router.push(`/search?hsCode=${suggestion.value}`);
    } else if (suggestion.type === 'country') {
      router.push(`/search?destination=${suggestion.value}`);
    }
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
      onBlur?.();
    }, 200);
  };

  const sizeClasses = {
    default: 'h-12',
    large: 'h-16',
  };

  return (
    <div className={`relative ${className}`}>
      {/* Glow effect behind search bar - using brand teal/green */}
      <div
        className={`
          absolute inset-0 rounded-2xl blur-xl transition-all duration-500
          ${isFocused
            ? 'bg-gradient-to-r from-[#00ACC1]/30 via-[#4CAF50]/30 to-[#00ACC1]/30 scale-105'
            : 'bg-gradient-to-r from-[#00ACC1]/10 via-[#4CAF50]/10 to-[#00ACC1]/10'
          }
        `}
      />

      <form onSubmit={handleSubmit} className="relative">
        <div
          className={`
            relative flex items-center rounded-2xl
            transition-all duration-300 overflow-hidden
            ${isFocused
              ? 'bg-white shadow-2xl shadow-[#00ACC1]/20 ring-2 ring-[#00ACC1]/50'
              : 'glass hover:shadow-lg'
            }
            ${sizeClasses[size]}
          `}
        >
          {/* Search icon */}
          <div className="pl-5 pr-3 flex items-center">
            {isLoading ? (
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ACC1] to-[#4CAF50] rounded-full blur-sm opacity-50" />
                <Loader2 className="relative h-5 w-5 text-[#00ACC1] animate-spin" />
              </div>
            ) : (
              <div className={`transition-all duration-300 ${isFocused ? 'scale-110' : ''}`}>
                <Search className={`h-5 w-5 transition-colors duration-300 ${isFocused ? 'text-[#00838F]' : 'text-gray-400'}`} />
              </div>
            )}
          </div>

          {/* Input */}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            className="flex-1 h-full bg-transparent border-0 outline-none text-gray-900 placeholder-gray-400 text-base"
          />

          {/* Clear button */}
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="px-3 py-2 text-gray-400 hover:text-[#00838F] transition-colors rounded-full hover:bg-[#00ACC1]/10"
            >
              <X className="h-4 w-4" />
            </button>
          )}

          {/* Search button with brand gradient */}
          <button
            type="submit"
            className="h-full px-8 bg-gradient-to-r from-[#00ACC1] via-[#26C6DA] to-[#4CAF50] text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#00ACC1]/30 hover:scale-[1.02] active:scale-100 flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4" />
            <span>Search</span>
          </button>
        </div>
      </form>

      {/* Suggestions dropdown with glassmorphism */}
      {isFocused && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-3 glass rounded-2xl overflow-hidden animate-scale-in shadow-xl shadow-[#00ACC1]/10">
          {suggestions.map((suggestion, index) => (
            <button
              key={`${suggestion.type}-${suggestion.value}`}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-5 py-4 flex items-start gap-4 hover:bg-gradient-to-r hover:from-[#00ACC1]/5 hover:to-transparent text-left transition-all duration-200 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Type badge with brand gradients */}
              <span className="flex-shrink-0 mt-0.5">
                {suggestion.type === 'hs_code' && (
                  <span className="px-2.5 py-1 text-xs font-semibold text-white bg-gradient-to-r from-[#00ACC1] to-[#26C6DA] rounded-lg shadow-sm">
                    HS
                  </span>
                )}
                {suggestion.type === 'company' && (
                  <span className="px-2.5 py-1 text-xs font-semibold text-white bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] rounded-lg shadow-sm">
                    Co
                  </span>
                )}
                {suggestion.type === 'country' && (
                  <span className="px-2.5 py-1 text-xs font-semibold text-white bg-gradient-to-r from-[#FF9800] to-[#FFC107] rounded-lg shadow-sm">
                    Loc
                  </span>
                )}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate group-hover:text-[#00838F] transition-colors">
                  {suggestion.label}
                </p>
                {suggestion.description && (
                  <p className="text-xs text-gray-500 truncate mt-0.5">
                    {suggestion.description}
                  </p>
                )}
              </div>

              {/* Arrow indicator */}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#00838F]">
                →
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
