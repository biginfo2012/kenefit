import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

function DomainCard() {

  return (

    <div>

      <div className="bgi-no-repeat bgi-position-center rounded min-h-50px mb-5" style={{ backgroundImage: 'url("/assets/media/files/html.svg")', }}></div>
      <Link href={"#"}><a className="text-muted text-hover-dark-50 font-weight-bolder my-2">domainName</a></Link>
      <h3 className="text-dark font-weight-bolder mt-2">00</h3>

    </div>

  )

}

const Index = ({ data }) => {

  return (

    <div>

      <Head>
        <title>Domain Manager :: Relcanonical</title>
      </Head>

      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-row flex-column-fluid page bg-light">
          <div className="d-flex flex-column flex-row-fluid" id="kt_wrapper">

            <div className="subheader bg-white h-100px" id="kt_subheader">
              <div className="container flex-wrap flex-sm-nowrap">
                <div className="d-none d-lg-flex align-items-center flex-wrap w-200px">
                  <Link href={"/"}>
                    <a>
                      <Image alt="Relcanonical" src="/assets/media/logos/logo_secondary_letter.png" width="25" height="25px" />
                    </a>
                  </Link>
                </div>
                <div className="subheader-nav nav flex-grow-1">
                  <div className="nav-item">
                    <div className="px-10">
                      <span className="nav-title text-dark font-weight-bolder font-size-h2 mb-2">0</span>
                      <div className="nav-desc text-muted font-weight-bold font-size-sm">EST. PAGES</div>
                    </div>
                  </div>
                  <div className="nav-item">
                    <div className="vl px-10">
                      <span className="nav-title text-dark font-weight-bolder font-size-h2 mb-2">0</span>
                      <div className="nav-desc text-muted font-weight-bold font-size-sm">EST. SITEMAPS</div>
                    </div>
                  </div>
                  <div className="nav-item">
                    <div className="vl px-10">
                      <span className="nav-title text-dark font-weight-bolder font-size-h2 mb-2">0</span>
                      <div className="nav-desc text-muted font-weight-bold font-size-sm">EST. VISITS</div>
                    </div>
                  </div>
                  <div className="nav-item">
                    <div className="vl px-10">
                      <span className="nav-title text-dark font-weight-bolder font-size-h2 mb-2">0</span>
                      <div className="nav-desc text-muted font-weight-bold font-size-sm">EST. CONVERSIONS</div>
                    </div>
                  </div>
                  <div className="nav-item">
                    <div className="vl px-10">
                      <span className="nav-title text-dark font-weight-bolder font-size-h2 mb-2">0</span>
                      <div className="nav-desc text-muted font-weight-bold font-size-sm">EST. SALES</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="gutter-b mt-9" id="kt_breadcrumbs">
              <div className="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                <div className="d-flex align-items-center flex-wrap mr-1">
                  <div className="d-flex align-items-baseline flex-wrap mr-5">
                    <span className="text-dark-50 font-weight-bold my-1 mr-5 font-size-h5">Hello, <span className="text-dark font-weight-bolder font-size-h5">accountName!</span></span>
                    <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-0 font-size-sm">
                      <li className="breadcrumb-item">
                        <Link href={"/"}><a className="text-dark-50">Relcanonical</a></Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link href={"/templates"}><a className="text-dark-50">Domains</a></Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="">
                    <Link href={"/account"}>
                      <a className="btn btn-fixed-height btn-bg-white btn-text-dark-50 btn-hover-text-primary btn-icon-primary font-weight-bolder font-size-sm px-5 mr-3">
                        MY ACCOUNT</a></Link>
                  </div>
                  <div className="">
                    <Link href={"/domains/create"}>
                      <a className="btn btn-fixed-height btn-primary font-weight-bolder font-size-sm px-5">
                        NEW DOMAIN</a></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-0" id="kt_content">
              <div className="container">
                <div className="d-flex flex-row">
                  <div className="flex-row-fluid">
                    <div className="row">
                      <div className="col-xl-3">
                        <div className="card gutter-b">
                          <div className="card-body text-center py-16">
                            <DomainCard />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3">
                        <div className="card gutter-b">
                          <div className="card-body text-center py-16">
                            <DomainCard />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3">
                        <div className="card gutter-b">
                          <div className="card-body text-center py-16">
                            <DomainCard />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3">
                        <div className="card gutter-b">
                          <div className="card-body text-center py-16">
                            <DomainCard />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-3">
                        <div className="card gutter-b">
                          <div className="card-body text-center py-16">
                            <DomainCard />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3">
                        <div className="card gutter-b">
                          <div className="card-body text-center py-16">
                            <DomainCard />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3">
                        <div className="card gutter-b">
                          <div className="card-body text-center py-16">
                            <DomainCard />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3">
                        <div className="card gutter-b">
                          <div className="card-body text-center py-16">
                            <DomainCard />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="login-footer bg-white py-10">
        <div className="container d-flex flex-column flex-md-row justify-content-md-center">
          <div className="font-size-h6 font-weight-bolder order-2 order-md-1 py-2 py-md-0">
            <span className="text-muted font-weight-bold mr-2">2022 ©</span>
            <span className="text-dark-50">Relcanonical :: 76 Cannon Street, London EC4N
              6AE</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Index