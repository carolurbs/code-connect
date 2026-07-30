import Image from 'next/image'
import Link from 'next/link'
import style from '@/app/error/error.module.css'
import banner from '@/app/error/404.png'
import { Heading } from '@/app/components/Heading'
import { ArrowBack } from '@/app/components/icons/ArrowBack'


export default function NotFound() {
    return (
        <div className={style.container}>
            <Image src={banner} alt="Página não encontrada" />
            <Heading>404 - Opa! Ocorreu um erro.</Heading>
            <p className={style.text}>Não conseguimos carregar a página, volte para seguir navegando.</p>
            <Link href="/">
                Voltar ao feed <ArrowBack color='#81FE88' />
            </Link> 
            </div>
    )
}