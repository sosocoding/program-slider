import { FC } from 'react'

import Card, { CardProps } from '../Card/Card'
import Slider from '../Slider/Slider'

export type SliderProps = {
  [id: number]: CardProps
}

const ProgramSlider: FC<SliderProps> = (program) => {
  const programList = Object.values(program)

  return (
    <Slider hasArrows>
      {programList?.map((item) => {
        return <Card thumnail={item.thumnail} name={item.name} key={item.id} />
      })}
    </Slider>
  )
}

export default ProgramSlider
