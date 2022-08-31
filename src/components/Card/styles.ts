import { css } from '@emotion/react'

export const container = css({
  height: '300px',
  width: '200px',
  display: 'inline-block',
  borderRadius: '8px',
  marginLeft: '12px',
  marginRight: '12px',
  textAlign: 'center',
})

export const imgWrapper = css({
  borderRadius: '8px',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
})

export const ctaAdd = css({
  position: 'absolute',
  right: '8px',
  bottom: '8px',
  borderRadius: '8px',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  textAlign: 'center',
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
})

export const labelWrapper = css({
  marginTop: '10px',
})

export const label = css({
  color: '#fff',
})
