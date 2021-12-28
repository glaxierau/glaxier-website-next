import style from '../styles/404.module.css'
import Link from 'next/link'
import Head from '../components/common/Head'
export default function Cumstom500() {
    return (
        <div id={style.notfound} className='-mt-20'>
            <Head title="404- Page Not Found!" description="404- Page Not Found!"></Head>
            <div className={style.notfound}>
                <div className={style.notfound_404}>
                    <h1 className='text-purple'>Oops!</h1>
                    <h2>500 - Internal Server Error server error response</h2>
                </div>
                <Link href="/">Go TO Homepage</Link>
            </div>
        </div>
    )
}