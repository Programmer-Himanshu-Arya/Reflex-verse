import React from 'react'
import { Plus, X } from 'lucide-react'
import { FormData, SocialAccount } from '../../types/form-types'
import { SOCIAL_PLATFORMS } from '../../constants/form-constants'

type Step4Props = {
  formData: FormData
  updateFormData: (field: keyof FormData, value: SocialAccount[]) => void
  updateSocialAccount: (index: number, field: keyof SocialAccount, value: string) => void
  addSocialAccount: () => void
  removeSocialAccount: (index: number) => void
}

export const Step4SocialMedia: React.FC<Step4Props> = ({
  formData,
  updateFormData,
  updateSocialAccount,
  addSocialAccount,
  removeSocialAccount
}) => {
  return (
    <div className="space-y-6">
      <p className="text-[#0B3B2D] font-medium">Social Media Accounts (Optional)</p>
      {formData.socialAccounts.map((account, index) => (
        <div key={index} className="space-y-4 rounded-2xl border border-[#0B3B2D]/20 p-4">
          <div className="flex justify-between">
            <label className="text-[#0B3B2D] font-medium">Social Account {index + 1}</label>
            <button
              type="button"
              onClick={() => removeSocialAccount(index)}
              className="text-[#0B3B2D] hover:text-[#0B3B2D]/70"
            >
              <X size={20} />
            </button>
          </div>
          <div className="space-y-2">
            <label className="text-[#0B3B2D] font-medium">Platform</label>
            <select
              value={account.platform}
              onChange={(e) => updateSocialAccount(index, 'platform', e.target.value)}
              className="w-full text-forest-light rounded-2xl border border-[#0B3B2D]/20 bg-white p-4 focus:border-[#0B3B2D] focus:outline-none"
            >
              <option value="" disabled>Select a platform</option>
              {SOCIAL_PLATFORMS.map((platform) => (
                <option key={platform} value={platform}>{platform}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[#0B3B2D] font-medium">Username</label>
            <input
              type="text"
              value={account.username}
              onChange={(e) => updateSocialAccount(index, 'username', e.target.value)}
              className="w-full text-forest-light rounded-2xl border border-[#0B3B2D]/20 bg-white p-4 focus:border-[#0B3B2D] focus:outline-none"
              placeholder="Enter your username"
            />
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addSocialAccount}
        className="flex w-full items-center justify-center rounded-2xl border border-[#0B3B2D] p-4 text-[#0B3B2D] transition-colors hover:bg-[#0B3B2D] hover:text-[#98FFB3]"
      >
        <Plus size={20} className="mr-2" />
        Add Social Account
      </button>
    </div>
  )
}

