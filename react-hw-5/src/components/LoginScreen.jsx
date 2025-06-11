import styles from '../styles/loginScreen.module.css'
import appleLogo from '../assets/appleLogo.svg'
import googleLogo from '../assets/googleLogo.svg'
import xLogo from '../assets/xLogo.svg'
import logo from '../assets/logo.svg'
import appleLogoBlue from '../assets/appleLogoBlue.svg'
import googleLogoBlue from '../assets/googleLogoBlue.svg'
import xLogoBlue from '../assets/xLogoBlue.svg'
import { useState } from 'react'

const LoginScreen = () => {
  const [appleLogoSrc, setAppleLogoSrc] = useState(appleLogo)
  const [googleLogoSrc, setGoogleLogoSrc] = useState(googleLogo)
  const [xLogoSrc, setXLogoSrc] = useState(xLogo)

  return (
    <div className={styles.login_container}>
      <img src={logo} alt="Spotify Logo" className={styles.spotify_logo} />
      <h1 className={styles.quote}>LIFE IS WASTED ON THE LIVING</h1>
      <p className={styles.sign_in_text}>
        Sign in <br />
        with
      </p>
      <div className={styles.login_buttons}>
        <button
          className={styles.login_btn}
          onMouseEnter={() => setAppleLogoSrc(appleLogoBlue)}
          onMouseLeave={() => setAppleLogoSrc(appleLogo)}
        >
          <img src={appleLogoSrc} alt="Apple" className={styles.login_logo} />
        </button>
        <button
          className={styles.login_btn}
          onMouseEnter={() => setGoogleLogoSrc(googleLogoBlue)}
          onMouseLeave={() => setGoogleLogoSrc(googleLogo)}
        >
          <img src={googleLogoSrc} alt="Google" className={styles.login_logo} />
        </button>
        <button
          className={styles.login_btn}
          onMouseEnter={() => setXLogoSrc(xLogoBlue)}
          onMouseLeave={() => setXLogoSrc(xLogo)}
        >
          <img src={xLogoSrc} alt="X" className={styles.login_logo} />
        </button>
      </div>
    </div>
  )
}

export default LoginScreen
