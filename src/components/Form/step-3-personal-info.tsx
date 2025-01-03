import React from 'react'
import { FormData, FormErrors } from '../../types/form-types'
import { VIDEO_TYPES } from '../../constants/form-constants'

type Step3Props = {
  formData: FormData
  errors: FormErrors
  updateFormData: (field: keyof FormData, value: string) => void
}

export const Step3VideoType: React.FC<Step3Props> = ({ formData, errors, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-[#0B3B2D] font-medium">Video Type</label>
        <div className="grid grid-cols-2 gap-3 text-forest-light">
          {VIDEO_TYPES.map((type) => (
            <label
              key={type}
              className={`flex cursor-pointer items-center justify-center rounded-2xl border p-4 transition-colors
                ${formData.videoType === type 
                  ? 'border-[#0B3B2D] bg-[#0B3B2D] text-[#98FFB3]' 
                  : errors.videoType
                  ? 'border-red-500'
                  : 'border-[#0B3B2D]/20 hover:border-[#0B3B2D]'
                }`}
            >
              <input
                type="radio"
                name="videoType"
                value={type}
                checked={formData.videoType === type}
                onChange={(e) => updateFormData('videoType', e.target.value)}
                className="sr-only"
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
        {errors.videoType && <p className="text-red-500 text-sm mt-1">{errors.videoType}</p>}
      </div>
      {formData.videoType === 'Long Form' && (
        <div className="space-y-2">
          <label className="text-[#0B3B2D] font-medium">Video Length (in minutes)</label>
          <input
            type="number"
            value={formData.videoLength}
            onChange={(e) => updateFormData('videoLength', e.target.value)}
            className={`w-full text-forest-light rounded-2xl border p-4 focus:outline-none ${
              errors.videoLength ? 'border-red-500' : 'border-[#0B3B2D]/20 focus:border-[#0B3B2D]'
            }`}
            placeholder="Enter video length"
            min="1"
          />
          {errors.videoLength && <p className="text-red-500 text-sm mt-1">{errors.videoLength}</p>}
        </div>
      )}
    </div>
  )
}

