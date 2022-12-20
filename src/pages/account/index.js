import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Brand from '../../components/main/Brand'

const Index = () => {
    return (

        <div>

            <Head>
                <title>Account :: Relcanonical</title>
            </Head>

            <div className="d-flex flex-center text-center bg-light py-15">
                <div className="login-form">
                    <div className="image-input image-input-outline mb-8" id="kt_image_1">
                        <div className="image-input-wrapper" style={{ backgroundImage: 'url("/assets/media/people/blank.jpg")', }}></div>
                        <label className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="change" data-toggle="tooltip">
                            <i className="fa fa-pen icon-sm text-muted"></i>
                            <input type="file" name="profile_avatar" accept=".png, .jpg, .jpeg" />
                            <input type="hidden" name="profile_avatar_remove" />
                        </label>

                        <span className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="cancel" data-toggle="tooltip" title="Cancel avatar">
                            <i className="ki ki-bold-close icon-xs text-muted"></i>
                        </span>
                    </div>
                    <div className="font-size-md font-weight-bold">
                        <span className="text-dark-50">Hey, Banjo! Welcome back to <mark>Relcanonical</mark>! On this page, you can<br /> manage your <code>Relcanonical accounts</code>, <code>custom domains</code>, and <code>dynamic templates</code>.</span>
                    </div>
                    <div className="row mb-2 mt-8">
                        <div className="col-xl-4">
                            <div className="card gutter-b">
                                <div className="card-body text-center py-10">
                                    <h2 className="text-dark font-weight-bolder mb-2 display-4">00</h2>
                                    <Link href={"/account"}><a className="text-muted text-hover-dark-50 font-weight-bolder font-size-sm">ACCOUNTS</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card gutter-b">
                                <div className="card-body text-center py-10">
                                    <h2 className="text-dark font-weight-bolder mb-2 display-4">00</h2>
                                    <Link href={"/domains"}><a className="text-muted text-hover-dark-50 font-weight-bolder font-size-sm">DOMAINS</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card gutter-b">
                                <div className="card-body text-center py-10">
                                    <h2 className="text-dark font-weight-bolder mb-2 display-4">00</h2>
                                    <Link href={"/templates"}><a className="text-muted text-hover-dark-50 font-weight-bolder font-size-sm">TEMPLATES</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-2">
                        <Link href={"/account"}><a className="label label-primary label-inline font-weight-bolder">MANAGE</a></Link>
                    </div>
                    <div className="container d-flex flex-column flex-md-row justify-content-md-center">
                        <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold font-size-sm">
                            <li className="breadcrumb-item font-weight-bolder text-muted">
                                <Link href={"/account/update"}>
                                    <a className="text-dark-50 text-hover-primary">
                                        UPDATE
                                    </a>
                                </Link>
                            </li>
                            <li className="breadcrumb-item font-weight-bolder text-muted">
                                <Link href={"/"}>
                                    <a className="text-dark-50 text-hover-primary">
                                        EXIT
                                    </a>
                                </Link>
                            </li>
                            <li className="breadcrumb-item font-weight-bolder text-muted">
                                <Link href={"/account"}>
                                    <a className="text-dark-50 text-hover-primary">
                                        SNOOZE
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Brand />
                </div>
            </div>

        </div>
    )
}

export default Index