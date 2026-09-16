import blueImage from '../assets/blueeleodeslogo.png'
import blackImage from '../assets/blackeleodeslogo.png'

const Logo = ({ size = 'md', dark = false, black = false }) => {
  const sizes = {
    sm: { text: 'text-[2.8rem] md:text-[3.25rem]' },
    md: { text: 'text-[3.6rem] md:text-[4.2rem]' },
    lg: { text: 'text-[4.6rem] md:text-[5.3rem]' },
  }

  const { text } = sizes[size] || sizes.md
  const textColor = dark ? 'text-white' : 'text-slate-950'
  const logoImage = black ? blackImage : blueImage

  return (
    <div className={`inline-flex items-center whitespace-nowrap ${textColor} ${text} font-normal tracking-[-0.05em] leading-none`}>
      <span>ele</span>
      <img
        src={logoImage}
        alt="o"
        className="relative mx-[-0.03em] h-[0.88em] w-[0.88em] shrink-0 translate-y-[0.04em] object-contain"
      />
      <span>des</span>
    </div>
  )
}

export default Logo
