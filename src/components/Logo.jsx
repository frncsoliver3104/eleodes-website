import blueImage from '../assets/blueeleodeslogo.png'
import blackImage from '../assets/blackeleodeslogo.png'

const Logo = ({ size = 'md', dark = false, black = false }) => {
  const sizes = {
    sm: { text: 'text-[2.8rem] md:text-[3.25rem]', icon: 55 },
    md: { text: 'text-[3.6rem] md:text-[4.2rem]', icon: 58 },
    lg: { text: 'text-[4.6rem] md:text-[5.3rem]', icon: 74 },
  }

  const { text, icon } = sizes[size] || sizes.md
  const textColor = dark ? 'text-white' : 'text-slate-950'
  const logoImage = black ? blackImage : blueImage

  return (
    <div className={`inline-flex items-center whitespace-nowrap ${textColor} ${text} font-normal tracking-[-0.05em] leading-none`}>
      <span>ele</span>
      <img
        src={logoImage}
        alt="o"
        width={icon}
        className="relative left-[calc(0.04em-1.5px)] h-auto shrink-0 object-contain -mx-1"
      />
      <span>des</span>
    </div>
  )
}

export default Logo
