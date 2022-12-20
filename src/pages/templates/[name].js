import React, {useState, useEffect } from 'react'
import axios from 'axios'

import Link from 'next/link'
import Head from 'next/head'
import Brand from '../../components/main/Brand'
import Image from 'next/image'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

function BreadcrumbItem({template, pages, image }) {
    return (
        <div>
            <div className="mb-4 text-center">
                <Link href={"/templates/"+template.templateUrl}>
                    <a>
                        <Image alt="Page Name" src={image ? image : "/assets/media/logos/logo_secondary_letter.png"} width="25" height="25px" />
                    </a>
                </Link>
            </div>
            <div className="container d-flex flex-column flex-md-row justify-content-md-center">
                <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold font-size-sm">
                    <li className="breadcrumb-item font-weight-bolder text-muted">
                        <Link href={`${process.env.NEXT_PUBLIC_API}/templates/${template.templateName}`}>
                            <a className="text-muted text-hover-primary">
                                {template.templateName}
                            </a>
                        </Link>
                    </li>
                    {
                        pages.map(({ slugPageMainInfos }, index) => {
                            if (slugPageMainInfos[0].slugUrl !== "" && slugPageMainInfos[0].pageBreadcrumb !== "") {
                                return (
                                    <li className="breadcrumb-item font-weight-bolder text-muted">
                                        <a className="text-muted text-hover-primary" rel="noreferrer"
                                        href={`${process.env.NEXT_PUBLIC_API}/templates/${template.templateUrl}/${slugPageMainInfos[0].slugUrl}`} target="_blank">
                                            {slugPageMainInfos[0].pageBreadcrumb}
                                        </a>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
            <div className="text-center">
                <Link href={`/templates/${template.templateName}`}><a className="label label-light-primary label-inline font-weight-bolder">{template.templateName}</a></Link>
            </div>
        </div>
    )
}

function ButtonItem({ button }) {
    return (
        <div>
            <div className="text-center">
                <a rel="noreferrer" className="btn btn-primary font-weight-boldest btn-lg btn-shadow px-12 py-5" href={button.buttonLink} target='_blank'>
                    {button.buttonName}
                </a>
            </div>
        </div>
    )
}

function SectionBlock({ section,linkUrl }) {
    return (
        <div>
            <div className="">
                <div className="text-center">
                    <Link href={"/templates/"+linkUrl}>
                        <a className="label label-primary label-inline font-weight-bolder mb-8">
                            {section.sectionTag || ""}
                        </a>
                    </Link>
                </div>
                <blockquote className="blockquote text-center mb-10">
                    <h2 className="mb-0 display-2 text-dark font-weight-boldest">
                        {section.sectionTitle || ""}
                    </h2>
                    <div className="my-6 font-weight-bold font-size-h4 text-dark-50 px-40">
                        {section.sectionDescription || ""}
                    </div>
                </blockquote>
            </div>
        </div>
    )
}

function BenefitCard({ name, label, image,link }) {
    return (
        <div>
            <div className="card-body text-center">
                <div className="mb-4">
                    <Image src={image ? image : "https://ik.imagekit.io/kenefit/default_faq_image_i6mGVN1g6.jpg?updatedAt=1640423259316/"}
                        alt="Benefit Name" className="rounded-circle" height="50" width="50" />
                </div>
                <div className="text-dark font-weight-bolder font-size-lg">
                    {name}
                </div>
                <a className="label label-light-info label-inline font-weight-bolder my-2" href ={link} >
                    {label}
                </a>
            </div>
        </div>
    )
}

function PageCard({ card,media,link }) {
    return (
        <div>
            <div className="mb-4">
                <a rel="noreferrer" href={card.pageSlug || ""} target="_blank">
                    <img src={media ? media : "https://ik.imagekit.io/kenefit/default_faq_image_i6mGVN1g6.jpg?updatedAt=1640423259316/"}
                        alt={card.pageName} className="rounded" height="250" width="350" />
                </a>
            </div>
            <span>
                <a rel="noreferrer" className="text-dark text-hover-dark-75 font-weight-bolder font-size-h4" href={card.slugUrl} target="_blank">
                    {card.pageName || ""}
                </a>
            </span>
            <div className="text-dark-50 font-weight-bold my-2">
                {card.pageDescription || ""}
            </div>
            <a className="label label-success label-inline font-weight-bolder my-2" href={link}>
                {card.pageLabel || ""}
            </a>
        </div>
    )
}

function SolutionsCard({ solution, link }) {
    return (
        <div>
            <div className="card-body text-center px-15 py-20">
                <div className="mb-4">
                    <Image src={solution.solutionIcon ? solution.solutionIcon : "https://ik.imagekit.io/kenefit/default_faq_image_i6mGVN1g6.jpg?updatedAt=1640423259316/"}
                        alt="Benefit Name" className="rounded-circle" height="50" width="50" />
                </div>
                <div className="text-dark font-weight-bolder font-size-h4">
                    {solution.solutionName}
                </div>
                {
                    solution.solutionDescription && <div className="text-dark-50 font-weight-bold my-2">
                        {solution.solutionDescription}
                    </div>
                }
                {
                    solution.solutionLabel && <a className="label label-light-danger label-inline font-weight-bolder my-2" href={link}>
                        {solution.solutionLabel}
                    </a>
                }
            </div>
        </div>
    )
}

function QuestionCard({ question }) {
    return (
        <div>
            <div className="card-body">
                <div className="text-dark-50 font-weight-bold font-size-h5 pb-5">
                    {question.questionAnswer}
                </div>
                <div className="d-flex align-items-center">
                    <div className="mr-4">
                        <Image src={question.questionAvatar ? question.questionAvatar : "https://ik.imagekit.io/kenefit/default_faq_image_i6mGVN1g6.jpg?updatedAt=1640423259316/"}
                            alt="Benefit Name" className="rounded-circle" height="50" width="50" />
                    </div>
                    <div className="d-flex flex-column text-left">
                        <span className="text-dark font-weight-bolder font-size-lg">
                            {question.questionUser}
                        </span>
                        <span className="text-muted font-weight-bold">
                            {question.questionDescriptor}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ReferenceCard({ references, link }) {
    return (
        <div>
            <div className="card-body text-center px-15 py-20">
                <div className="mb-4">
                    <Image src={references.referenceAvatar ? references.referenceAvatar : "https://ik.imagekit.io/kenefit/default_faq_image_i6mGVN1g6.jpg?updatedAt=1640423259316/"}
                        alt="Benefit Name" className="rounded-circle" height="50" width="50" />
                </div>
                <div className="mt-4">
                    <span className="font-weight-bolder font-size-h6 text-dark-50">
                        {references.referenceUser ? references.referenceUser : ""}
                    </span>
                </div>
                <div className="">
                    <span className="font-weight-bolder text-primary font-size-md">
                        {references.referenceDescriptor ? references.referenceDescriptor : ""}
                    </span>
                </div>
                <p className="text-dark-75 font-weight-bolder font-size-h4 my-3">
                    {references.referenceDescription ? references.referenceDescription : ""}
                </p>
                <a className="label label-light-warning label-inline font-weight-bolder my-2" href ={link}> 
                    {references.referenceLabel ? references.referenceLabel : ""}
                </a>
            </div>
        </div>
    )
}

const Name = ({templateName, slug, template}) => {
    
    const [slugThisPage,setSlugThisPage] =useState([]);
    const [pageNum, setPageNum] =useState(-1);
    
    useEffect( () =>{
        getPage();
      }, []);
    const getPage = () =>{
        const randI = Math.floor(Math.random() * template.slugPagesPer.length);
        const randJ = Math.floor(Math.random() * template.slugPagesPer[randI].slugPage.length);
            setPageNum(randI);
            setSlugThisPage(template.slugPagesPer[randI].slugPage[randJ]);
                
    }
    const randomFun = (arr,n) =>{
        if(!arr) return [];
        let newArr = [];
        for (let i = 0; i < n; i++) {
            newArr.push(
                arr[Math.floor(Math.random() * arr.length)]
            );
        }
        return newArr;
    };
     if(pageNum>=0)
       {
        return (

            <div>
    
                <Head>
                    <title>{template.templateName || ""} | {template.templateTitle || ""}</title>
                    <meta name="description" content={template.templateDescription || ""} />
                </Head>
    
                <div className="d-flex flex-column flex-root">
                {/* Breadcurmb */}
                    <div className="d-flex flex-column-fluid bg-white py-40">
                        <div className="container">
                            <BreadcrumbItem  pages={randomFun(template.slugPagesPer[pageNum].slugPage,5)}  template={template} image={template.templateIcon} />
                            <blockquote className="blockquote text-center mt-10">
                                <h2 className="mb-0 display-1 text-dark font-weight-boldest">
                                    {template.templateName}
                                </h2>
                                <div className="my-6 font-weight-bold font-size-h4 text-dark-50 px-40">
                                    {template.templateDescription}
                                </div>
                                <ButtonItem button={slugThisPage.slugButtons[0]} />
                            </blockquote>
                        </div>
                    </div>
                 {/* Section 1 */}
                    {slugThisPage.slugSections[0].sectionTag != "" &&
                        (
                            <div className="d-flex flex-column-fluid bg-light p-40">
                                <div className="container">
                                    {slugThisPage.slugSections && <SectionBlock section={slugThisPage.slugSections[0]} linkUrl = {template.templateUrl+"/"+slugThisPage.slugPageMainInfos[0].slugUrl} />}
                                    <div className="flex-row-fluid ml-lg-8">
                                        <div className="row">
                                            {
                                                slugThisPage.slugBenefits.map(({ benefitLabel, benefitName, benefitIcon }, index) => {
                                                    if (benefitLabel.length > 0 && benefitName.length > 0) {
                                                        return (
                                                            <div className="col-xl-3 text-center">
                                                                <div className="card card-custom py-8 px-4 gutter-b">
                                                                    <BenefitCard name={benefitName} label={benefitLabel} link={template.templateUrl+"/"+slugThisPage.slugPageMainInfos[0].slugUrl} image={benefitIcon} />
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                         )
                    }  
                
                 {/* Section 2,3 */}          
                    {
                        slugThisPage.slugSections.map((section, index) => {
                            if (index > 0 && section.sectionTitle.length > 0 && index < 3) {
                               // console.log(randomFun(template.slugPagesPer[index-1].slugPage,6));
                                return (
                                    <div className="d-flex flex-column-fluid bg-light-primary p-40">
                                        <div className="container">
                                            <SectionBlock section={section}  linkUrl = {template.templateUrl+"/"+slugThisPage.slugPageMainInfos[0].slugUrl}  />
                                            <div className="flex-row-fluid ml-lg-8">
                                                <div className="row mb-10">
                                                    {
                                                       randomFun(template.slugPagesPer[index-1].slugPage,6).map((page, index) => {
                                                            if (page.slugPageMainInfos[0].pageName.length > 0) {
                                                                return (
                                                                    <div className="col-xl-4 text-center">
                                                                        <PageCard card={page.slugPageMainInfos[0]} link = {template.templateUrl+"/"+page.slugPageMainInfos[0].slugUrl} media = {randomFun(page.slugPageMainInfos[0].pageMedia,1)} />
                                                                    </div>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                {/* Section 4 */}
                   {slugThisPage.slugSections[3].sectionTag != "" &&
                        (
                            <div className="d-flex flex-column-fluid bg-light-primary p-40">
                                <div className="container">
                                    <SectionBlock section={slugThisPage.slugSections[3]} linkUrl = {template.templateUrl+"/"+slugThisPage.slugPageMainInfos[0].slugUrl}/>
                                    <ButtonItem button={slugThisPage.slugButtons[0]} />
                                    <div className="flex-row-fluid ml-lg-8 mt-20">
                                        <div className="row">
                                            {
                                                slugThisPage.slugSolutions.map((solution, index) => {
                                                    if (solution.solutionName.length > 0) {
                                                        return (
                                                            <div className="col-xl-4">
                                                                <div className="card card-custom gutter-b">
                                                                    <SolutionsCard solution={solution}  link={template.templateUrl+"/"+slugThisPage.slugPageMainInfos[0].slugUrl}  />
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }   
                {/* Section 5,6,7*/}
                    {
                        slugThisPage.slugSections.map((section, index) => {
                            if (index > 3 && section.sectionTitle.length > 0 && index < 7) {
                                
                                return (
                                    <div className="d-flex flex-column-fluid bg-light-primary p-40">
                                        <div className="container">
                                            <SectionBlock section={section} linkUrl = {template.templateUrl+"/"+slugThisPage.slugPageMainInfos[0].slugUrl}/>
                                            <div className="flex-row-fluid ml-lg-8">
                                                <div className="row mb-10">
                                                    {

                                                        randomFun(template.slugPagesPer[index-2].slugPage,6).map((page, index) => {
                                                            if (page.slugPageMainInfos[0].pageName.length > 0) {
                                                                return (
                                                                    <div className="col-xl-4 text-center">
                                                                        <PageCard card={page.slugPageMainInfos[0]}  link = {template.templateUrl+"/"+page.slugPageMainInfos[0].slugUrl} media = {randomFun(page.slugPageMainInfos[0].pageMedia,1)} />
                                                                    </div>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                {/* Section 8 */}
                   {slugThisPage.slugSections[7].sectionTag != "" &&
                        (
                            <div className="d-flex flex-column-fluid bg-secondary p-40">
                                <div className="container">
                                    <SectionBlock section={slugThisPage.slugSections[7]} linkUrl = {template.templateUrl+"/"+slugThisPage.slugPageMainInfos[0].slugUrl} />
                                    <ButtonItem button={slugThisPage.slugButtons[0]} />
                                    <div className="flex-row-fluid mt-20">
                                        <div className="card card-custom gutter-b">
                                            <div className="card-body px-30 py-25">
                                                <div className="accordion accordion-light  accordion-toggle-arrow" id="faqContents">
                                                <Accordion allowZeroExpanded> 
                                                    {
                                                        slugThisPage.slugQuestions.map((question, index) => {
                                                            if (question.questionName.length > 0) {
                                                                return (
                                                                    <AccordionItem  className="card">
                                                                        <AccordionItemHeading className="card-header" >
                                                                            <AccordionItemButton className="card-title font-size-h4">
                                                                                {question.questionName}
                                                                            </AccordionItemButton>
                                                                        </AccordionItemHeading>
                                                                        <AccordionItemPanel>
                                                                            <QuestionCard question={question} />
                                                                        </AccordionItemPanel>
                                                                    </AccordionItem>
                                                                
                                                                )
                                                            }
                                                        })
                                                    }
                                                    </Accordion>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {/* Section 9 */}
                    {slugThisPage.slugSections[8].sectionTag != "" &&
                        (
                            <div className="d-flex flex-column-fluid bg-light p-40">
                                <div className="container">
                                    <SectionBlock section={slugThisPage.slugSections[8]} linkUrl = {template.templateUrl+"/"+slugThisPage.slugPageMainInfos[0].slugUrl}/>
                                    <ButtonItem button={slugThisPage.slugButtons[0]} />
                                    <div className="flex-row-fluid ml-lg-12 mt-20">
                                        <div className="row">
                                            {
                                                slugThisPage.slugReferences.map((value, index) => {
                                                    if (value.referenceUser.length > 0) {
                                                        return (
                                                            <div className="col-xl-6">
                                                                <div className="card card-custom gutter-b">
                                                                    <ReferenceCard references={value} link={template.templateUrl+"/"+slugThisPage.slugPageMainInfos[0].slugUrl} />
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <div className="login-footer pb-40 bg-light">
                     <BreadcrumbItem  pages={randomFun(template.slugPagesPer[pageNum].slugPage,5)}  template={template} image={template.templateIcon} />
                    </div>
    
                </div>
    
            </div >
    )
    }
    else {
        return (<div>
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
        </div>)
    }
}

export async function getServerSideProps(context) {
    const {name} = context.query;
    if (name) {
        try {
            const response = await axios({
                method: "GET",
                url: `${process.env.NEXT_PUBLIC_API}/api/templates/${name}`
            })

            const { success, error, result } = response.data;
            
            if (success) {
                return {
                    props: {
                        template: result,
                        templateName: name
                    }
                }
            }

        } catch (error) {

        }

    }

    return {
        props: {},
        redirect: {
            permanent: false,
            destination: "/"
        }
    }
   
}

export default Name