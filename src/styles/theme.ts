export const theme = {
  colors: {
    primary: '#008751', // Reflex Verse emerald green
    primaryDark: '#006B3F',
    primaryLight: '#00A867',
    background: '#F8FAF9',
    text: '#1A1A1A',
    textLight: '#4A4A4A',
    white: '#FFFFFF',
  }
} as const;

export type Theme = typeof theme;