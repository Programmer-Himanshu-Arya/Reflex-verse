import React from 'react'
import { FormData, FormErrors } from '../../types/form-types'

type Step1Props = {
  formData: FormData
  errors: FormErrors
  updateFormData: (field: keyof FormData, value: string) => void
}

export const Step1PersonalInfo: React.FC<Step1Props> = ({ formData, errors, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-[#0B3B2D] font-medium">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => updateFormData('name', e.target.value)}
          className={`w-full text-forest-light rounded-2xl border p-4 focus:outline-none ${
            errors.name ? 'border-red-500' : 'border-[#0B3B2D]/20 focus:border-[#0B3B2D]'
          }`}
          placeholder="Enter your name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
      <div className="space-y-2">
        <label className="text-forest-light font-medium">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
          className={`w-full text-forest-light rounded-2xl border p-4 focus:outline-none ${
            errors.email ? 'border-red-500' : 'border-[#0B3B2D]/20 focus:border-[#0B3B2D]'
          }`}
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
    </div>
  )
}

