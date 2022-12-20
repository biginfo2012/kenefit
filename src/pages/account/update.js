import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Brand from '../../components/main/Brand'

const Update = () => {
    return (

        <div>

            <Head>
                <title>Update Account :: Relcanonical</title>
            </Head>

            <div className="d-flex flex-column flex-root">
                <div className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white" id="kt_login">
                    <div className="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-20 mx-auto">
                        <div className="d-flex flex-column-fluid flex-center text-center">
                            <div className="login-form login-signup">
                                <form className="">
                                    <div className="text-center pb-8">
                                        <Link href={"/"}>
                                            <a>
                                                <Image alt="Relcanonical Logo" src="/assets/media/logos/logo_primary_letter.png" width="20" height="20" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="pb-4">
                                        <h3 className="font-weight-boldest text-dark font-size-h4 display-4">Update Account
                                        </h3>
                                        <p className="text-muted font-weight-bold font-size-h4">it only takes a few seconds</p>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-12">
                                            <input className="form-control text-center form-control-solid h-auto p-6 rounded-lg font-size-h6" type="password" placeholder="Enter New Password" />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-12">
                                            <input className="form-control text-center form-control-solid h-auto p-6 rounded-lg font-size-h6" type="password" placeholder="Confirm New Password" />
                                        </div>
                                    </div>
                                    <div className="pb-8">
                                        <Link href="">
                                            <a className="btn btn-primary font-weight-boldest font-size-h6 px-8 py-5 btn-block" type="submit">SAVE</a></Link>
                                    </div>
                                    <div className="">
                                        <span className="text-muted font-weight-bold font-size-h6"><Link href={"/account"}><a>view
                                            account</a></Link> / <Link href={"/"}><a>exit
                                                account</a></Link></span>
                                    </div>
                                </form>
                                <Brand />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Update