import Image from 'next/image'
import preloaderImage from '../../assets/images/Дизайн без названия (2).png'

const Loader = () => {
  return (
    <div className="w-[80vw] h-screen">
      <Image
        src={preloaderImage.src}
        alt="preloader"
        layout="fill"
        priority={true}
      />
    </div>
  )
}

export default Loader
