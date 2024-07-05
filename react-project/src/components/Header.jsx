import reactLogo from '../assets/react-core-concepts.png'
import viteLogo from '../assets/jsx-ui.png'
export default function Header() {
    return (
      <header className="header">
        <img src={reactLogo} className="header-logo" alt="logo" />
        <img src={viteLogo} className="header-logo" alt="logo" />
      </header>
    )
  }