'use client' // Error components must be Client Components

import Image from 'next/image'
import { useEffect } from 'react' 
import style from './error/error.module.css'
import banner from './error/500.png'
import { Heading } from '@/app/components/Heading'
import { ArrowBack } from '@/app/components/icons/ArrowBack'

export default function Error({
  error,
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <div className={style.container}>
      <Image src={banner}/>
      <Heading>Opa! Ocorreu um erro.</Heading>
      <p className={style.text}>Não conseguimos carregar a página, volte para seguir navegando.</p>
    <a href="/">
        Voltar ao feed <ArrowBack color='#81FE88'/>
    </a>
    </div>
  )
}