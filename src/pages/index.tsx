import {Button} from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import {lexendDeca, quicksand, raleway} from '@/utils/fonts'
import IndexParallaxThree from '@/utils/components/animated/IndexParallaxThree'

const index = () => {
  const transitionValues = {
    duration: 0.8,
    yoyo: Infinity,
    ease: 'easeOut',
  }

  const ballStyle = {
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
  }
  return (
    <React.Fragment>
      <section className=" min-xl:max-h-auto h-auto w-full max-xl:px-12">
        <div className="grid grid-cols-6 container max-xl:grid-cols-1 max-xl:flex max-md:flex-col">
          <div className="col-span-2 mt-2">
            <div className="text-dialogue p-4 w-auto h-88 max-h-full">
              <hr className="w-24 float-right max-sm:hidden -rotate-45 border-black dark:border-white" />
              <h1
                className={`${raleway.className} max-sm:text-6xl max-sm:font-font-extrabold text-8xl pb-2  max-xl:mr-12  dark:mix-blend-normal uppercase  text-black font-extrabold dark:text-white`}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Naive optimism
              </h1>
              <hr className="w-24 float-right  -rotate-45 border-black dark:border-white" />
              <div className="image-pane mt-4 relative">
                <div className="image-anchor h-8 w-4 -z-10 dark:bg-white absolute -top-3 -right-2 bg-black rotate-180" />
                <div className="image-anchor h-8 w-4 -z-10 dark:bg-white absolute -top-3 -left-2 bg-black rotate-180" />
                <div className="image-anchor h-8 w-4 -z-10 dark:bg-white absolute -bottom-3 -left-2 bg-black rotate-180" />
                <div className="image-anchor h-8 w-4 -z-10 dark:bg-white absolute -bottom-3 -right-2 bg-black rotate-180" />

                <img
                  data-aos="fade-up"
                  src="/important/shoots/something.jpg"
                  alt=""
                  className="w-full h-full object-cover light:hidden"
                />
              </div>
              <div className="button-pane mt-4 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
                <Button
                  className="btn-one bg-none float-right bg-black text-white dark:bg-white dark:text-black max-sm:my-8 rounded-none  uppercase font-bold"
                  size="md"
                >
                  Meet your protagonist
                </Button>
              </div>
            </div>
          </div>
          <div className="max-sm:container col-span-2 relative  -z-30">
            <hr className="w-24 float-right rotate-45 border-black dark:border-white" />
            <Image
              className=""
              src={'/important/shoots/image.jpg'}
              width={400}
              height={600}
              alt="Hero section home pag"
              data-aos="fade-down"
              data-aos-duration="1500"
            />
            <hr className="w-24 - rotate-45 border-black dark:border-white" />
            <motion.h1
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 4}}
              className={`cursor-text ${lexendDeca.className} text-5xl absolute bottom-0 -right-12 font-bold max-xl:-right-8 
              max-md:text-3xl max-md:bottom-0 max-md:-right-4
              `}
            >
              PROTAGONIST
            </motion.h1>
          </div>
          <div className="col-span-2  max-xl:mt-4">
            <div className="video-pane w-inherit h-96 relative">
              <div className="image-anchor h-8 w-4 dark:bg-white absolute -bottom-3 -left-2  bg-black rotate-180" />
              <div className="image-anchor h-8 w-4 dark:bg-white absolute -top-3 -left-2  bg-black rotate-180" />
              <div className="image-anchor h-8 w-4 dark:bg-white absolute -bottom-3 -right-2  bg-black rotate-180" />
              <img
                src="/important/shoots/som.jpg"
                alt=""
                data-aos="fade-up"
                data-aos-duration="2000"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="image-anchor h-8 w-4 -z-10 dark:bg-white absolute -top-3 -right-2 bg-black rotate-180" />
            </div>
            <div className="foot-pax-3d model h-inherit h-12 flex items-center justify-center">
              <motion.span
                // maybe i would change it further ball-hidden-query
                className="rounded-full max-sm:hidden  bg-black dark:bg-white w-[8rem] h-[8rem]"
                style={ballStyle}
                transition={{
                  ease: 'easeOut',
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                animate={{
                  y: ['4rem', '8rem', '6rem'],
                  width: ['8rem', '5rem', '3rem'],
                  height: ['8rem', '5rem', '2rem'],
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="video-editing-parallax-banner  max-h-screen flex items-center justify-center mt-4 ">
        <div className="wrapper relative h-inherit">
          <div className="text-texture absolute -top-4 -right-2 max-md:right-0  bg-black p-4">
            <h1 className="text-5xl font-extrabold text-white">#1</h1>
          </div>

          <div className="container imagery-text h-inherit text-center items-center justify-center flex flex-col overflow-x-hidden relative py-[2rem] w-full">
            <img
              src="/images/textures/lens-broke.jpg"
              data-aos="fade-right"
              data-aos-duration="2000"
              className="absolute top-0 left-0 w-full h-full object-cover -z-20"
              alt=""
            />
            <h1
              className="text-8xl font-extrabold max-sm:text-4xl uppercase text-white"
              data-aos="fade-down"
            >
              The realm of video editing
            </h1>
          </div>
        </div>
      </section>

      <section className="video-editing-parallax  mt-8">
        <div className="wrapper container">
          <IndexParallaxThree />
        </div>
      </section>
     
      <section className="who-we-are container  mt-8 relative h-auto">
        <div className="pointer-circle w-12 h-12 absoute mb-2  top-0 left-0 bg-black dark:bg-white" />
        <div className="grid grid-cols-6 max-md:grid-cols-1 max-md:flex max-md:flex-col px-6">
          <div className="col-span-4">
            <div className="text-pane">
              <h1 className="uppercase text-5xl font-extrabold">About agenflow</h1>
              <div className="description-text w-[70%] mt-5">
                <p className={`${quicksand.className} text-lg  font-medium  `}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium soluta rem
                  iure corporis, molestias nulla accusantium labore obcaecati maiores, repudiandae
                  unde architecto enim molestiae voluptatibus deleniti odio recusandae sed
                  perspiciatis.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="image-container relative h-48 w-full">
              <Image
                src={'/images/textures/kitwave.jpg'}
                className="w-full h-full absolute top-0 left-0 object-cover"
                width={400}
                height={800}
                alt=""
              />
            </div>
            <div className="image-pane-more bg-cyan-500 h-96 relative mt-5 w-full">
              <Image
                src={'/images/textures/texture-wave.jpg'}
                className="w-full h-full absolute top-0 left-0 object-cover"
                width={400}
                height={800}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <br />

      <section className="3d models">
        <h1>Attractive 3d models to build</h1>
      </section>
    </React.Fragment>
  )
}

export default index
