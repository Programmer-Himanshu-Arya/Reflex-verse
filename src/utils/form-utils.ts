import { FormData, FormErrors } from '../types/form-types'

export const validateStep = (step: number, formData: FormData): FormErrors => {
  const errors: FormErrors = {}

  switch (step) {
    case 1:
      if (!formData.name) {
        errors.name = 'Name is required'
      }
      if (!formData.email) {
        errors.email = 'Email is required'
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email is invalid'
      }
      break
    case 2:
      if (!formData.budget) {
        errors.budget = 'Budget is required'
      }
      if (formData.budget === 'Custom' && !formData.customBudget) {
        errors.customBudget = 'Custom budget is required'
      }
      break
    case 3:
      if (!formData.videoType) {
        errors.videoType = 'Video type is required'
      }
      if (formData.videoType === 'Long Form' && !formData.videoLength) {
        errors.videoLength = 'Video length is required for Long Form videos'
      }
      break
  }

  return errors
}

