import { css } from '@emotion/react'

export const container = css({
  margin: 'auto',
  marginTop: '200px',
  width: '90%',
  height: '300px',
  position: 'relative',
})

export const content = css({
  width: '100%',
  height: '100%',
  whiteSpace: 'nowrap',
  overflowX: 'scroll',
  scrollBehavior: 'smooth',
  '::-webkit-scrollbar': {
    display: 'none',
  },
  '.scrollhost ::-moz-scrollbar': {
    display: 'none',
  },
})

export const arrowButton = css({
  backgroundColor: '#000',
  opacity: '0.7',
  padding: '8px 8px 4px 10px',
  cursor: 'pointer',
})

export const arrowButtonLeft = css({
  position: 'absolute',
  left: '-24px',
  top: '50%',
  transform: 'translateY(-50%)',
})

export const arrowButtonRight = css({
  position: 'absolute',
  right: '-24px',
  top: '50%',
  transform: 'translateY(-50%)',
})
