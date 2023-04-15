import { Sparkle } from '@phosphor-icons/react'
import './Header.css'

interface IHeaderProps {
  title: string
}

function Header(props: IHeaderProps) {
  return (
    <div className="timeline-header">
      {props.title}
      <Sparkle />
    </div>

  )
}

export default Header