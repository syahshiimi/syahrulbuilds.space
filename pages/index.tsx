import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>SYAHRULBUILDS</title>
                <link rel="shorcut icon" href="images/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/images/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/images/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/images/favicon-16x16.png"
                />
            </Head>
            <div className="flex h-screen flex-col items-center justify-center">
                <div>
                    <h1
                        className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-zinc-400 via-fuchsia-800 to-rose-200 bg-clip-text pb-2 text-center text-3xl font-bold tracking-tighter text-black
                    text-transparent lg:text-left"
                    >
                        Syahrulbuilds.space is currently under further upgrades.
                    </h1>
                    <h2 className="pb-8 text-center text-2xl font-bold tracking-tighter underline lg:text-left">
                        Design + Code.
                    </h2>
                    <p className="text-center lg:text-left">
                        Syahrulbuilds.space is{" "}
                        <a
                            href="https://github.com/syahshiimi"
                            className="font-semibold text-fuchsia-500/90 underline-offset-4 hover:underline"
                        >
                            Syahrul Anuar
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
