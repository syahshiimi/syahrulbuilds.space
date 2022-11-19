import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>SYAHRULBUILDS</title>
                <link rel="shorcut icon" href="images/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
            </Head>
            <div className='h-screen flex flex-col items-center justify-center'>
                <div>
                    <h1 className='font-bold text-3xl tracking-tighter text-black text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-zinc-400 via-fuchsia-800 to-rose-200 pb-2
                    text-center lg:text-left'>
                        Syahrulbuilds.space is currently under further upgrades.
                    </h1>
                    <h2 className='text-2xl font-bold tracking-tighter pb-8 underline text-center lg:text-left'>
                        Design + Code.
                    </h2>
                    <p className='text-center lg:text-left'>
                        Syahrulbuilds.space is <a href="https://github.com/syahshiimi" className='font-semibold text-fuchsia-500/90 hover:underline underline-offset-4'>Syahrul Anuar</a>
                    </p>
                </div>
            </div>
        </>

    )
}
