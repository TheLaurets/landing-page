// "use client";

import { Button } from '@components/Button'
import { Features } from '@components/Features';
import Image from 'next/image';
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main >
      <div>
        <Image
          src="/rectangle.jpg"
          alt="Picture of the author"
          width={1920}
          height={1080}
          className='absolute top-0 left-0 w-screen h-screen object-cover brightness-25 z-0'
        />
        <div>
          <section className="h-screen absolute">
            <div className='py-64 max-sm:py-20'>
              <div
                className='flex justify-center items-center flex-col max-sm:justify-start max-sm:items-start w-screen'
              >
                <div className='flex w-1/2  p-5 text-center flex-col '>
                  <h1 className='text-white text-5xl font-bold max-sm:text-6xl'>Leve sua empresa para a era da transformação digital</h1>
                  <p className='text-white mt-5'>
                    Se você não está transformando digitalmente, está ficando para trás
                  </p>
                </div>
                <div className='m-5'>
                  <Button label='Demostração' />
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
      <div>
        <section className="h-screen ">
          <div className='pt-32 max-sm:pt-20'>
            <div
              className='flex justify-center items-center flex-col max-sm:justify-start max-sm:items-start w-screen'
            >
              <div className='flex w-1/2  p-5 text-center flex-col '>
                <h1 className='text-white text-5xl font-bold max-sm:text-6xl'>tete ßLeve sua empresa para a era da transformação digital</h1>
                <p className='text-white mt-5'>
                  Se você não está transformando digitalmente, está ficando para trás
                </p>
              </div>
              <div className='m-5'>
                <Button label='Demostração' />
              </div>
            </div>
          </div>
        </section>

      </div>
      <div>
        <section className="h-screen ">
          <div className='pt-32 max-sm:pt-20'>
            <div
              className='flex justify-center items-center flex-col max-sm:justify-start max-sm:items-start w-screen'
            >
              <div className='flex w-1/2  p-5 text-center flex-col '>
                <h1 className='text-white text-5xl font-bold max-sm:text-6xl'>Leve sua empresa para a era da transformação digital</h1>
                <p className='text-white mt-5'>
                  Se você não está transformando digitalmente, está ficando para trás
                </p>
              </div>
              <div className='m-5'>
                <Button label='Demostração' />
              </div>
            </div>
          </div>
        </section>

      </div>
      <div>
        <section className="h-screen ">
          <div className='pt-32 max-sm:pt-20'>
            <div
              className='flex justify-center items-center flex-col max-sm:justify-start max-sm:items-start w-screen'
            >
              <div className='flex w-1/2  p-5 text-center flex-col '>
                <h1 className='text-white text-5xl font-bold max-sm:text-6xl'>Leve sua empresa para a era da transformação digital</h1>
                <p className='text-white mt-5'>
                  Se você não está transformando digitalmente, está ficando para trás
                </p>
              </div>
              <div className='m-5'>
                <Button label='Demostração' />
              </div>
            </div>
          </div>
        </section>

      </div>
      <div>
        <section className="h-screen ">
          <div className='pt-32 max-sm:pt-20'>
            <div
              className='flex justify-center items-center flex-col max-sm:justify-start max-sm:items-start w-screen'
            >
              <div className='flex w-1/2  p-5 text-center flex-col '>
                <h1 className='text-white text-5xl font-bold max-sm:text-6xl'>Leve sua empresa para a era da transformação digital</h1>
                <p className='text-white mt-5'>
                  Se você não está transformando digitalmente, está ficando para trás
                </p>
              </div>
              <div className='m-5'>
                <Button label='Demostração' />
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* <Features /> */}
    </main>
  )
}
