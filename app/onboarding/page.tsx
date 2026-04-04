'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, Check, Rocket, Globe2 } from 'lucide-react'
import Link from 'next/link'
import { countries, productCategories, targetChannels } from '@/lib/mock-data'

const steps = [
  { id: 1, label: 'Country' },
  { id: 2, label: 'Product' },
  { id: 3, label: 'Channel' },
  { id: 4, label: 'Launch' },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
}

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null)

  const popularCountries = countries.filter((c) => c.popular)
  const allCountries = countries.filter((c) => !c.popular)

  const canContinue =
    (currentStep === 1 && selectedCountry) ||
    (currentStep === 2 && selectedCategory) ||
    (currentStep === 3 && selectedChannel) ||
    currentStep === 4

  function goNext() {
    if (!canContinue || currentStep >= 4) return
    setDirection(1)
    setCurrentStep((s) => s + 1)
  }

  function goBack() {
    if (currentStep <= 1) return
    setDirection(-1)
    setCurrentStep((s) => s - 1)
  }

  const selectedCountryData = countries.find((c) => c.code === selectedCountry)
  const selectedCategoryData = productCategories.find((c) => c.id === selectedCategory)
  const selectedChannelData = targetChannels.find((c) => c.id === selectedChannel)

  return (
    <div className="min-h-screen bg-surface-950 flex">
      {/* Left Panel - hidden on mobile */}
      <div className="hidden lg:flex w-80 bg-surface-900 border-r border-surface-800 flex-col p-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center">
            <Globe2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Global GTM OS</h1>
            <p className="text-xs text-surface-400">Setup Wizard</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {steps.map((step) => {
            const isActive = step.id === currentStep
            const isComplete = step.id < currentStep
            return (
              <div
                key={step.id}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-brand-500/10 text-brand-400'
                    : isComplete
                    ? 'text-accent-400'
                    : 'text-surface-500'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all ${
                    isActive
                      ? 'border-brand-500 bg-brand-500/20 text-brand-400'
                      : isComplete
                      ? 'border-accent-500 bg-accent-500/20 text-accent-400'
                      : 'border-surface-600 text-surface-500'
                  }`}
                >
                  {isComplete ? <Check className="w-4 h-4" /> : step.id}
                </div>
                <span className="font-medium">{step.label}</span>
              </div>
            )
          })}
        </nav>

        <div className="mt-auto pt-8 border-t border-surface-800">
          <p className="text-xs text-surface-500">Step {currentStep} of 4</p>
          <div className="mt-2 h-1.5 bg-surface-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-gradient rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-12">
          <div className="w-full max-w-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              {/* Step 1: Country */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <h2 className="text-3xl font-bold text-white mb-2">Where are you based?</h2>
                  <p className="text-surface-400 mb-8">
                    Select your home country so we can tailor your GTM strategy.
                  </p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-3">
                      Popular Countries
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {popularCountries.map((country) => (
                        <button
                          key={country.code}
                          onClick={() => setSelectedCountry(country.code)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all hover:bg-surface-800 ${
                            selectedCountry === country.code
                              ? 'border-brand-500 bg-brand-500/10'
                              : 'border-surface-700 bg-surface-900'
                          }`}
                        >
                          <span className="text-2xl">{country.flag}</span>
                          <span className="text-sm font-medium text-white">{country.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-3">
                      All Countries
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {allCountries.map((country) => (
                        <button
                          key={country.code}
                          onClick={() => setSelectedCountry(country.code)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all hover:bg-surface-800 ${
                            selectedCountry === country.code
                              ? 'border-brand-500 bg-brand-500/10'
                              : 'border-surface-700 bg-surface-900'
                          }`}
                        >
                          <span className="text-2xl">{country.flag}</span>
                          <span className="text-sm font-medium text-white">{country.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Product Category */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <h2 className="text-3xl font-bold text-white mb-2">What do you sell?</h2>
                  <p className="text-surface-400 mb-8">
                    Choose a product category to find the right buyers in the U.S.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {productCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`flex flex-col items-center gap-2 px-4 py-5 rounded-xl border-2 transition-all hover:bg-surface-800 ${
                          selectedCategory === cat.id
                            ? 'border-brand-500 bg-brand-500/10'
                            : 'border-surface-700 bg-surface-900'
                        }`}
                      >
                        <span className="text-3xl">{cat.icon}</span>
                        <span className="text-sm font-medium text-white text-center">{cat.name}</span>
                        <span className="text-xs text-surface-400">
                          {cat.count} buyers
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Target Channel */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Target channel in the U.S.
                  </h2>
                  <p className="text-surface-400 mb-8">
                    How do you want to reach American buyers?
                  </p>

                  <div className="space-y-3">
                    {targetChannels.map((ch) => (
                      <button
                        key={ch.id}
                        onClick={() => setSelectedChannel(ch.id)}
                        className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border-2 transition-all hover:bg-surface-800 text-left ${
                          selectedChannel === ch.id
                            ? 'border-brand-500 bg-brand-500/10'
                            : 'border-surface-700 bg-surface-900'
                        }`}
                      >
                        <div>
                          <h4 className="text-base font-semibold text-white">{ch.name}</h4>
                          <p className="text-sm text-surface-400 mt-0.5">{ch.description}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-surface-500 flex-shrink-0 ml-4" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 4: Summary */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-accent-gradient flex items-center justify-center mx-auto mb-4">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      Your GTM System is Ready
                    </h2>
                    <p className="text-surface-400">
                      Here&apos;s a summary of your go-to-market configuration.
                    </p>
                  </div>

                  <div className="bg-surface-900 border border-surface-700 rounded-2xl p-6 space-y-4 mb-8">
                    <div className="flex items-center justify-between py-3 border-b border-surface-800">
                      <span className="text-surface-400">Country</span>
                      <span className="text-white font-medium flex items-center gap-2">
                        {selectedCountryData && (
                          <>
                            <span className="text-lg">{selectedCountryData.flag}</span>
                            {selectedCountryData.name}
                          </>
                        )}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-surface-800">
                      <span className="text-surface-400">Product Category</span>
                      <span className="text-white font-medium flex items-center gap-2">
                        {selectedCategoryData && (
                          <>
                            <span className="text-lg">{selectedCategoryData.icon}</span>
                            {selectedCategoryData.name}
                          </>
                        )}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-surface-400">Target Channel</span>
                      <span className="text-white font-medium">
                        {selectedChannelData?.name}
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/dashboard"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-gradient text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                  >
                    <Rocket className="w-5 h-5" />
                    Launch GTM Dashboard
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="border-t border-surface-800 px-6 py-4 flex items-center justify-between">
          <button
            onClick={goBack}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              currentStep === 1
                ? 'text-surface-600 cursor-not-allowed'
                : 'text-surface-300 hover:text-white hover:bg-surface-800'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>

          <div className="flex items-center gap-2">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`w-2 h-2 rounded-full transition-all ${
                  step.id === currentStep
                    ? 'w-6 bg-brand-500'
                    : step.id < currentStep
                    ? 'bg-accent-500'
                    : 'bg-surface-700'
                }`}
              />
            ))}
          </div>

          {currentStep < 4 ? (
            <button
              onClick={goNext}
              disabled={!canContinue}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                canContinue
                  ? 'bg-brand-500 text-white hover:bg-brand-600'
                  : 'bg-surface-800 text-surface-600 cursor-not-allowed'
              }`}
            >
              Continue
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <div className="w-[100px]" />
          )}
        </div>
      </div>
    </div>
  )
}
