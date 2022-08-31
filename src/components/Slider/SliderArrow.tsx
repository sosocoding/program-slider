import { FC, ReactElement } from 'react'

import * as styles from './styles'

type SliderArrowProps = {
  children?: ReactElement
  className?: string
  onClick: () => void
}

const SliderArrow: FC<SliderArrowProps> = ({ children, className, onClick }) => {
  return (
    <button className={className} css={[styles.arrowButton, className]} onClick={onClick}>
      {children}
    </button>
  )
}

export default SliderArrow
