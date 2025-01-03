export type SocialAccount = {
    platform: string
    username: string
  }
  
  export type FormData = {
    name: string
    email: string
    budget: string
    customBudget: string
    videoType: string
    videoLength: string
    socialAccounts: SocialAccount[]
  }
  
  export type FormErrors = {
    [K in keyof FormData]?: string
  }
  
  