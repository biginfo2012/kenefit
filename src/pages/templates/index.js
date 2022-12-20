import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import { useRouter } from "next/router"


const TemplateCard = ({ template }) => {
  const [count, setCount]  = useState(0);
  const router = useRouter();
 
  useEffect(()=>{
    let sum=0;
    for(let i=0; i<template.slugPagesPer.length; i++)
      sum+=template.slugPagesPer[i].slugPage.length;
    setCount(sum);
  }
  ,[]);

  const goToTemplate = () => {
    router.push({
      pathname:'/templates/optimize',
      query:{templateId : template._id}
    })
  };


  return (

    <div>
      <div className="bgi-no-repeat bgi-position-center rounded min-h-50px mb-5" >
        <img src={template.templateIcon } alt={template.templateName} height="50" width="50" />
      </div>
      <Link href={"/templates/"+template.templateUrl}><a className="text-muted text-hover-dark-50 font-weight-bolder my-2">{template.templateName}</a></Link>
      <h3 className="text-dark font-weight-bolder mt-2">{count}</h3>
      <div className="text-center mt-4">
        <div className="d-flex justify-content-center" onClick={() => goToTemplate()}>
          <span className="btn btn-light font-weight-boldest btn-sm font-size-sm px-8 py-4">OPTIMIZE</span>
        </div>
      </div>

    </div>

  )

}

const Index = () => {
  const [templates, setTemplates] = useState([]);
 
  const [estPages,setEstPages] = useState(0);

  useEffect( () => {
    axios.get(`${process.env.NEXT_PUBLIC_API}/api/templates/?type=list&userId=61feac59df7a5ddbf88afea0`)
    .then(res => {
      if(res.data.success) {
        setTemplates(res.data.result);
        console.log(templates)
      }
    })
  }, []);

  useEffect( () =>{
    let sum=0;
    for(let i=0; i<templates.length;i++)
      for(let j=0; j< templates[i].slugPagesPer.length; j++)
        sum+=templates[i].slugPagesPer[j].slugPage.length;
    setEstPages(sum);
  },[templates]);

    return (
      <div>
        <Head>
          <title>Template Manager :: Relcanonical</title>
        </Head>
  
        <div className="d-flex flex-column flex-root">
          <div className="d-flex flex-row flex-column-fluid page bg-light">
            <div className="d-flex flex-column flex-row-fluid" id="kt_wrapper">
  
              <div className="subheader bg-white h-100px" id="kt_subheader">
                <div className="container flex-wrap flex-sm-nowrap">
                  <div className="d-none d-lg-flex align-items-center flex-wrap w-200px">
                    <Link href={"/"}>
                      <a>
                        <img alt="Relcanonical Logo" src="/assets/media/logos/logo_secondary_letter.png" width="25" height="25px" />
                      </a>
                    </Link>
                  </div>
                  <div className="subheader-nav nav flex-grow-1">
                    <div className="nav-item">
                      <div className="px-10">
                        <span className="nav-title text-dark font-weight-bolder font-size-h2 mb-2">{estPages}</span>
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
                      <span className="text-dark-50 font-weight-bold my-1 mr-5 font-size-h5">Hello, <span className="text-dark font-weight-bolder font-size-h5">Banjo!</span></span>
                      <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-0 font-size-sm">
                        <li className="breadcrumb-item">
                          <Link href={"/"}><a className="text-dark-50">Relcanonical</a></Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link href={"/templates"}><a className="text-dark-50">Templates</a></Link>
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
                    <Link href={"/templates/create"}>
                      <a className="btn btn-fixed-height btn-primary font-weight-bolder font-size-sm px-5">
                        NEW TEMPLATE</a></Link>
                  </div>
                </div>
                </div>
              </div>
  
              <div className="mt-0" id="kt_content">
                <div className="container">
                  <div className="d-flex flex-row">
                    <div className="flex-row-fluid">
                      <div className="row">
                        
                        <div className="col-xl-12 d-flex flex-wrap">
                              {
                                templates.map((template,index) => {
                                  return (
                                    <div key={index} className="flex  gutter-b col-xl-3">
                                      <div  className="card card-body text-center py-16">
                                        <TemplateCard  template={template}/>
                                      </div>
                                    </div>
                                );
                                })
                              }
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

export default Index;