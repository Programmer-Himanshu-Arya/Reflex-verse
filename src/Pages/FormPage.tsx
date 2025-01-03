'use client'

import React, { useState } from 'react'
import { FormData, FormErrors, SocialAccount } from '../types/form-types'
import { validateStep } from '../utils/form-utils'
import { Step1PersonalInfo } from '../components/Form/step-1-personal-info'
import { Step2Budget } from '../components/Form/step-2-personal-info'
import { Step3VideoType } from '../components/Form/step-3-personal-info'
import { Step4SocialMedia } from '../components/Form/step-4-personal-info'

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    budget: '',
    customBudget: '',
    videoType: '',
    videoLength: '',
    socialAccounts: []
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const updateFormData = (field: keyof FormData, value: string | SocialAccount[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: '' }))
  }

  const addSocialAccount = () => {
    setFormData(prev => ({
      ...prev,
      socialAccounts: [...prev.socialAccounts, { platform: '', username: '' }]
    }))
  }

  const updateSocialAccount = (index: number, field: keyof SocialAccount, value: string) => {
    setFormData(prev => ({
      ...prev,
      socialAccounts: prev.socialAccounts.map((account, i) =>
        i === index ? { ...account, account, [field]: value } : account
      )
    }))
  }

  const removeSocialAccount = (index: number) => {
    setFormData(prev => ({
      ...prev,
      socialAccounts: prev.socialAccounts.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateStep(1, formData) && validateStep(2, formData) && validateStep(3, formData)) {
      setIsSubmitted(true)
    } else {
      // If any required fields are missing, move to the first incomplete step
      for (let step = 1; step <= 3; step++) {
        if (Object.keys(validateStep(step, formData)).length > 0) {
          setCurrentStep(step)
          setErrors(validateStep(step, formData))
          break
        }
      }
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1PersonalInfo formData={formData} errors={errors} updateFormData={updateFormData} />
      case 2:
        return <Step2Budget formData={formData} errors={errors} updateFormData={updateFormData} />
      case 3:
        return <Step3VideoType formData={formData} errors={errors} updateFormData={updateFormData} />
      case 4:
        return (
          <Step4SocialMedia
            formData={formData}
            updateFormData={updateFormData}
            updateSocialAccount={updateSocialAccount}
            addSocialAccount={addSocialAccount}
            removeSocialAccount={removeSocialAccount}
          />
        )
      default:
        return null
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#0B3B2D]">Thank You!</h2>
          <p className="text-xl text-[#0B3B2D]/70">
            We've received your submission and will contact you within the next 24 hours.
          </p>
          <p className="text-xl text-[#0B3B2D]/70">
            Please check your email & social media for updates.
          </p>
          <button className="bg-forest-light mt-5 text-mint px-6 py-2 rounded-lg hover:bg-mint-dark hover:text-forest-light transition-all duration-300 font-medium" onClick={() => { window.location.href = '/' }}>
            Return Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto max-w-2xl px-4">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0B3B2D]">Project Details</h1>
            <p className="mt-2 text-[#0B3B2D]/60">
              Step {currentStep} of 4
            </p>
          </div>

          {/* Progress Bar */}
          <div className="h-2 w-full overflow-hidden rounded-full bg-[#0B3B2D]/10">
            <div
              className="h-full bg-[#0B3B2D] transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>

          {/* Form Fields */}
          <div className="rounded-3xl border border-[#0B3B2D]/10 bg-white p-8 shadow-lg">
            {renderStep()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between space-x-4">
            <button
              type="button"
              onClick={() => setCurrentStep(prev => Math.max(prev - 1, 1))}
              className={`rounded-2xl px-8 py-4 font-medium transition-colors
                ${currentStep === 1
                  ? 'invisible'
                  : 'bg-white text-[#0B3B2D] border border-[#0B3B2D] hover:bg-[#0B3B2D] hover:text-[#98FFB3]'
                }`}
            >
              Previous
            </button>
            {currentStep < 5 ? (
              <button
                type="button"
                onClick={() => {
                  const stepErrors = validateStep(currentStep, formData)
                  if (Object.keys(stepErrors).length === 0) {
                    setCurrentStep(prev => prev + 1)
                  } else {
                    setErrors(stepErrors)
                  }
                }}
                className="rounded-2xl bg-[#0B3B2D] px-8 py-4 font-medium text-[#98FFB3] transition-colors hover:bg-[#0B3B2D]/90"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="rounded-2xl bg-[#0B3B2D] px-8 py-4 font-medium text-[#98FFB3] transition-colors hover:bg-[#0B3B2D]/90"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

