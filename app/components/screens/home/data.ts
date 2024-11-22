import economyIcon from '../../../assets/images/users/1.png'
import comfortIcon from '../../../assets/images/users/2.png'
import comfortPlusIcon from '../../../assets/images/users/3.png'
import businessIcon from '../../../assets/images/users/4.png'
import premierIcon from '../../../assets/images/users/5.png'
import star from '../../../assets/images/stars/star.svg'
import nostar from '../../../assets/images/stars/nostar.svg'
import halfstar from '../../../assets/images/stars/star_half.svg'

interface IList {
  _id: string
  title: string
  img: string
  multiplier: number
  stars: [any, any, any, any, any]
}

export const optionsList: IList[] = [
  {
    _id: 'Ya-economy-439',
    title: 'Рамзан',
    img: economyIcon.src,
    multiplier: 2,
    stars: [star, star, star, star, halfstar],
  },
  {
    _id: 'Ya-comfort-541',
    title: 'Жанболот',
    img: comfortIcon.src,
    multiplier: 3,
    stars: [star, star, star, halfstar, nostar],
  },
  {
    _id: 'Ya-comfort-plus-583',
    title: 'Иван',
    img: comfortPlusIcon.src,
    multiplier: 4,
    stars: [star, star, nostar, nostar, nostar],
  },
  {
    _id: 'Ya-business-899',
    title: 'Айжан',
    img: businessIcon.src,
    multiplier: 5,
    stars: [star, star, star, halfstar, nostar],
  },
  {
    _id: 'Ya-premier-1609',
    title: 'Марина',
    img: premierIcon.src,
    multiplier: 6,
    stars: [star, star, star, star, halfstar],
  },
]
