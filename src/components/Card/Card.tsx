import Image from 'next/image'
import { FC } from 'react'

import { useThumbnailExists } from '../../hooks/useImageExists'

import * as styles from './styles'

export type CardProps = {
  name: string
  thumnail: any
}

const DEFAULT_CARD_THUMBNAIL = '/700x933.png'

const Card: FC<CardProps> = ({ name, thumnail }) => {
  const thu = useThumbnailExists(thumnail, DEFAULT_CARD_THUMBNAIL)

  return (
    <div css={styles.container}>
      <div css={styles.imgWrapper}>
        <Image src={thu.url} alt={thu.alt} width={200} height={266} />

        <div css={styles.ctaAdd}>
          <Image src="/plus.svg" alt="add" height={16} width={16} />
        </div>
      </div>

      <div css={styles.labelWrapper}>
        <a href="#" css={styles.label}>
          {name.slice(0, 20)}
        </a>
      </div>
    </div>
  )
}

export default Card
