import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Brand from '../../components/main/Brand'
import { Multiselect } from 'multiselect-react-dropdown'

const Create = () => {

    const data = [
        { template: 'Template1', id: 1 },
        { template: 'Template2', id: 2 },
    ]

    const [options] = useState(data);

    return (

        <div>

            <Head>
                <title>Create Domain :: Relcanonical</title>
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
                                        <h3 className="font-weight-boldest text-dark font-size-h4 display-4">Create Domain
                                        </h3>
                                        <p className="text-muted font-weight-bold font-size-h4">it only takes a few seconds</p>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-12">
                                            <input className="form-control text-center form-control-solid h-auto p-6 rounded-lg font-size-h6" type="text" placeholder="Domain Name" />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-12">
                                            <Multiselect options={options} displayValue="template" />
                                        </div>
                                    </div>
                                    <div className="pb-6">
                                        <Link href="">
                                            <a className="btn btn-primary font-weight-boldest font-size-h6 px-8 py-5 btn-block" type="submit">CREATE</a></Link>
                                    </div>
                                    <div className="font-size-sm font-weight-bold">
                                        <span className="text-dark-50">If your <code>Domain Name</code> is <mark>MyApp</mark>, your <code>Relcanonical Domain</code> will be <mark>myapp.relcanonical.com</mark>.<br /> If you would like to use a <mark>Custom Domain</mark> i.e. <code>myapp.com</code>, add <code>MyApp</code> as a <mark>CNAME Record</mark><br /> and <code>route.relcanonical.com</code> as a <mark>Hostname Record</mark> with your provider i.e. GoDaddy.</span>
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

export default Create