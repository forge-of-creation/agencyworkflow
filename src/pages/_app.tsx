import '@/sass/out/globals.css'
import SharedNavbar from '@/utils/components/shared/SharedNavbar'
import {inter} from '@/utils/fonts'
import RootProvider from '@/utils/providers/RootProvider'
import {SessionProvider} from 'next-auth/react'
import type {AppProps} from 'next/app'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {FaFacebookSquare, FaGoogle, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {useEffect} from 'react'
import {useTheme} from 'next-themes'
import {useRouter} from 'next/router'
import {motion, AnimatePresence} from 'framer-motion'

function SocialMediaIcons() {
  const {theme} = useTheme()
  return (
    <>
      <ul className="inherit-line flex flex-col fixed bottom-12 right-12 float-right">
        {theme === 'dark' ? (
          <img src="/important/signature.png" alt="" className="h-10 object-cover" />
        ) : (
          <img src="/important/signature-black.png" alt="" className="h-10 object-cover" />
        )}
      </ul>
      <div className="icon-handler fixed bottom-4 p-3 py-4    dark:bg-white bg-black  text-black">
        <ul className="flex gap-4 text-white dark:text-black flex-col text-xl ">
          <li className="list-style-none">
            <FaFacebookSquare />
          </li>
          <li className="list-style-none">
            {' '}
            <FaInstagram />
          </li>
          <li className="list-style-none">
            <FaLinkedin />
          </li>
          <li className="list-style-none">
            <FaGoogle />
          </li>
        </ul>
      </div>
    </>
  )
}

export default function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])
  const router = useRouter()
  return (
    <>
      <SessionProvider session={session}>
        <RootProvider>
          <AnimatePresence mode='wait'>
            <motion.div
              key={router.pathname}
              className={`${inter.className} `}
              suppressHydrationWarning
            >
              <SharedNavbar />
              <Component {...pageProps} />
              <SocialMediaIcons />
              <motion.div
                className="slide-in"
                initial={{scaleY: 0}}
                animate={{scaleY: 0}}
                exit={{scaleY: 1}}
                transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
              />
              <motion.div
                className="slide-out"
                initial={{scaleY: 1}}
                animate={{scaleY:0}}
                exit={{scaleY: 0}}
                transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
               />
            </motion.div>
          </AnimatePresence>
        </RootProvider>
      </SessionProvider>
    </>
  )
}
