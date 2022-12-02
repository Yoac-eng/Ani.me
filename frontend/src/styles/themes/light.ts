export const light = {
  titleColor: 'var(--dark-color)',
  secondaryTextColor: 'var(--medium-gray)',

  backgroundColor: 'var(--lighter-white)',
  buttonBackgroundColor: 'var(--primary-color)',
  MenuBackgroundColor: 'var(--lighter-gray)',

  cardGradient: 'linear-gradient(180deg, rgba(6, 9, 15, 0) 60%, #06090f 100%);',
  iconColor: '#000000',
} as const

export type DefaultType = typeof light
