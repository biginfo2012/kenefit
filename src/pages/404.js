import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Brand from '../components/main/Brand'
import Image from 'next/image'

const error = () => {
    return (

        <div className='not-found'>

            <Head>
                <title>Error :: Relcanonical</title>
            </Head>

            <div className="d-flex flex-column flex-root">
                <div className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white" id="kt_login">
                    <div className="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-25">
                        <div className="d-flex flex-column-fluid flex-center text-center">
                            <div className="login-form login-signup">
                                <form className="">
                                    <div className="text-center pb-8">
                                        <Link href={"/"}>
                                            <a>
                                                <Image alt="Relcanonical Logo" src="/assets/media/logos/logo_primary_letter.png" width="20" height="20px" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="pb-4">
                                        <h3 className="font-weight-boldest text-dark display-2 mb-10">We tried, but we could not<br /> find the page you requested.</h3>
                                        <p className="text-muted font-weight-bold font-size-h4">Perhaps you are looking for a different page.
                                        </p>
                                    </div>
                                    <div className="">
                                        <Link href={"/"}><a className="btn btn-primary font-weight-boldest btn-lg font-size-md px-8 py-4">BACK TO HOME</a></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <Brand />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default error