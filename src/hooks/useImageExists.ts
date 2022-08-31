import { useEffect, useState } from 'react'

import { Thumbnail } from '../types'

async function getThumbnail(thumbnail: Thumbnail, placeholder: string) {
  const { url } = thumbnail
  const res = await fetch(url, { method: 'HEAD' })

  if (res.ok) {
    return thumbnail
  } else {
    return {
      ...thumbnail,
      url: placeholder,
    }
  }
}

export const useThumbnailExists = (thumnail: Thumbnail, placeholder: string) => {
  const [thu, setThu] = useState(thumnail)
  useEffect(() => {
    async function handleCheckImage() {
      const thumbnail = await getThumbnail(thumnail, placeholder)
      setThu(thumbnail)
    }
    handleCheckImage()
  }, [thumnail, placeholder])

  return thu
}
