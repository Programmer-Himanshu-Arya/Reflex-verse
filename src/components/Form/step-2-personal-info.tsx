import React from 'react'
import { FormData, FormErrors } from '../../types/form-types'
import { BUDGET_OPTIONS } from '../../constants/form-constants'

type Step2Props = {
  formData: FormData
  errors: FormErrors
  updateFormData: (field: keyof FormData, value: string) => void
}

export const Step2Budget: React.FC<Step2Props> = ({ formData, errors, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-[#0B3B2D] font-medium">Budget Range</label>
        <div className="grid gap-3 text-forest-light">
          {BUDGET_OPTIONS.map((option) => (
            <label
              key={option}
              className={`flex cursor-pointer items-center rounded-2xl border p-4 transition-colors
                ${formData.budget === option 
                  ? 'border-[#0B3B2D] bg-[#0B3B2D] text-[#98FFB3]' 
                  : errors.budget
                  ? 'border-red-500'
                  : 'border-[#0B3B2D]/20 hover:border-[#0B3B2D]'
                }`}
            >
              <input
                type="radio"
                name="budget"
                value={option}
                checked={formData.budget === option}
                onChange={(e) => updateFormData('budget', e.target.value)}
                className="sr-only"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
      </div>
      {formData.budget === 'Custom' && (
        <div className="space-y-2">
          <label className="text-[#0B3B2D] font-medium">Custom Budget</label>
          <input
            type="text"
            value={formData.customBudget}
            onChange={(e) => updateFormData('customBudget', e.target.value)}
            className={`w-full text-forest-light rounded-2xl border p-4 focus:outline-none ${
              errors.customBudget ? 'border-red-500' : 'border-[#0B3B2D]/20 focus:border-[#0B3B2D]'
            }`}
            placeholder="Enter your budget"
          />
          {errors.customBudget && <p className="text-red-500 text-sm mt-1">{errors.customBudget}</p>}
        </div>
      )}
    </div>
  )
}

