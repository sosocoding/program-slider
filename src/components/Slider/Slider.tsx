import Image from 'next/image'
import { FC, useRef } from 'react'

import SliderArrow from './SliderArrow'

import * as styles from './styles'

type SliderProps = {
  children: JSX.Element | JSX.Element[]
  hasArrows?: boolean
}

const Slider: FC<SliderProps> = ({ children, hasArrows = false }) => {
  const mySliderRef = useRef<HTMLDivElement>(null)

  const handleClickLeft = () => {
    if (mySliderRef && mySliderRef.current) {
      mySliderRef.current.scrollLeft -= mySliderRef.current.offsetWidth
    }
  }

  const handleClickRight = () => {
    if (mySliderRef && mySliderRef.current) {
      mySliderRef.current.scrollLeft += mySliderRef.current.offsetWidth
    }
  }

  return (
    <div css={styles.container}>
      {hasArrows && (
        <SliderArrow css={styles.arrowButtonLeft} onClick={handleClickLeft}>
          <Image src="/arrow-left.svg" alt="arrow-left" height={30} width={30} />
        </SliderArrow>
      )}

      <div ref={mySliderRef} css={styles.content}>
        {children}
      </div>

      {hasArrows && (
        <SliderArrow css={styles.arrowButtonRight} onClick={handleClickRight}>
          <Image src="/arrow-right.svg" alt="arrow-right" height={30} width={30} />
        </SliderArrow>
      )}
    </div>
  )
}

export default Slider
