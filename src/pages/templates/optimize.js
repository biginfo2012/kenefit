import React, { useRef, useEffect, useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import axios from "axios"
import { useRouter } from "next/router"
import * as xlsx from 'xlsx';

const Optimize = () => {
    const router = useRouter();
    const fileRef = useRef(null);

    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState("StepTemplate");
    const [templateId, setTemplateId] = useState();
    const [tempFile, setTempFile] = useState({ json: {},data:{}, name: "" });
    const [templateFileData, setTemplateFileData] = useState([]);

    const [levels, setLevels] = useState({
        templates: 0,
        pages: 0,
        sections: 0,
        benefits: 0,
        solutions: 0,
        references: 0,
        questions: 0,
        buttons: 0

    })

    const [templates, setTemplate] = useState(
        {
            templateDescription: "",
            templateName: "",
            templateTitle: "",
            templateFile: "",
            templateIcon: "",
        }
    )

    const [pages, setPage] = useState([
        {
            pageBreadcrumb: "",
            pageDescription: "",
            pageLabel: "",
            pageMedia: "",
            pageName: "",
            pageSlug: "",
            pageTitle: "",
        },
        {
            pageBreadcrumb: "",
            pageDescription: "",
            pageLabel: "",
            pageMedia: "",
            pageName: "",
            pageSlug: "",
            pageTitle: "",
        },
        {
            pageBreadcrumb: "",
            pageDescription: "",
            pageLabel: "",
            pageMedia: "",
            pageName: "",
            pageSlug: "",
            pageTitle: "",
        },
        {
            pageBreadcrumb: "",
            pageDescription: "",
            pageLabel: "",
            pageMedia: "",
            pageName: "",
            pageSlug: "",
            pageTitle: "",
        },
        {
            pageBreadcrumb: "",
            pageDescription: "",
            pageLabel: "",
            pageMedia: "",
            pageName: "",
            pageSlug: "",
            pageTitle: "",
        },
    ]

    )

    const [sections, setSection] = useState(
        [
            {
                sectionDescription: "",
                sectionTag: "",
                sectionTitle: "",
            },
            {
                sectionDescription: "",
                sectionTag: "",
                sectionTitle: "",
            },
            {
                sectionDescription: "",
                sectionTag: "",
                sectionTitle: "",
            },
            {
                sectionDescription: "",
                sectionTag: "",
                sectionTitle: "",
            },
            {
                sectionDescription: "",
                sectionTag: "",
                sectionTitle: "",
            },
            {
                sectionDescription: "",
                sectionTag: "",
                sectionTitle: "",
            },
            {
                sectionDescription: "",
                sectionTag: "",
                sectionTitle: "",
            },
            {
                sectionDescription: "",
                sectionTag: "",
                sectionTitle: "",
            },
            {
                sectionDescription: "",
                sectionTag: "",
                sectionTitle: "",
            },
        ]


    )

    const [benefits, setBenefit] = useState(
        [
            {
                benefitDescription: "",
                benefitIcon: "",
                benefitLabel: "",
                benefitName: "",
            },
            {
                benefitDescription: "",
                benefitIcon: "",
                benefitLabel: "",
                benefitName: "",
            },
            {
                benefitDescription: "",
                benefitIcon: "",
                benefitLabel: "",
                benefitName: "",
            },
            {
                benefitDescription: "",
                benefitIcon: "",
                benefitLabel: "",
                benefitName: "",
            },
            {
                benefitDescription: "",
                benefitIcon: "",
                benefitLabel: "",
                benefitName: "",
            },
            {
                benefitDescription: "",
                benefitIcon: "",
                benefitLabel: "",
                benefitName: "",
            },
            {
                benefitDescription: "",
                benefitIcon: "",
                benefitLabel: "",
                benefitName: "",
            },
            {
                benefitDescription: "",
                benefitIcon: "",
                benefitLabel: "",
                benefitName: "",
            },
        ]

    )

    const [solutions, setSolution] = useState(
        [
            {
                solutionDescription: "",
                solutionIcon: "",
                solutionLabel: "",
                solutionName: "",
            },
            {
                solutionDescription: "",
                solutionIcon: "",
                solutionLabel: "",
                solutionName: "",
            },
            {
                solutionDescription: "",
                solutionIcon: "",
                solutionLabel: "",
                solutionName: "",
            },
        ]

    )

    const [references, setReference] = useState([
        {
            referenceAvatar: "",
            referenceDescription: "",
            referenceDescriptor: "",
            referenceUser: "",
            referenceLabel: "",
        },
        {
            referenceAvatar: "",
            referenceDescription: "",
            referenceDescriptor: "",
            referenceUser: "",
            referenceLabel: "",
        },
        {
            referenceAvatar: "",
            referenceDescription: "",
            referenceDescriptor: "",
            referenceUser: "",
            referenceLabel: "",
        },
        {
            referenceAvatar: "",
            referenceDescription: "",
            referenceDescriptor: "",
            referenceUser: "",
            referenceLabel: "",
        },
    ]

    )

    const [questions, setQuestion] = useState(
        [
            {
                questionAnswer: "",
                questionAvatar: "",
                questionDescriptor: "",
                questionName: "",
                questionUser: "",
            },
            {
                questionAnswer: "",
                questionAvatar: "",
                questionDescriptor: "",
                questionName: "",
                questionUser: "",
            },
            {
                questionAnswer: "",
                questionAvatar: "",
                questionDescriptor: "",
                questionName: "",
                questionUser: "",
            },
            {
                questionAnswer: "",
                questionAvatar: "",
                questionDescriptor: "",
                questionName: "",
                questionUser: "",
            },
            {
                questionAnswer: "",
                questionAvatar: "",
                questionDescriptor: "",
                questionName: "",
                questionUser: "",
            },
        ]

    )
    const getDataFromDatabase = () =>{
        axios.post(`${process.env.NEXT_PUBLIC_API}/api/templates/optimize`,{templateId:router.query.templateId,type:"getData",})
        .then(res => {
            if(res.data.success) {
                console.log(res.data.result);
                fillData(res.data.result);
            }
        })
    }
    const fillData =(data) =>{
 
        setTemplate({
            templateDescription: data.templateDescription,
            templateName: data.templateName,
            templateTitle: data.templateTitle,
            templateFile: data.templateFile,
            templateIcon: data.templateIcon,
        });


        setTempFile(data.templateFile);
        setPage(data.pages);
        setSection(data.sections);
        setBenefit(data.benefits);
        setSolution(data.solutions);
        setReference(data.references);
        setQuestion(data.questions);
        setButton(data.buttons[0]);
    }

    useEffect(()=>{
        if(router.query.templateId)
            getDataFromDatabase();
    },[router]);


    const getSteps = () => {
        return ["Template", "Sections", "Pages", "Benefits", "Solutions", "Questions", "References", "Buttons"]
    }

    const steps = getSteps()
    
    const [buttons, setButton] = useState(
        {
            buttonName: "",
            buttonLink: "",
            buttonDescription: "",
        }
    )
    const replace = (pageNum, main, newVal) =>{
        if(!main) return main;
        const mSplite=main.match(/\$(\w)(\d)+/);
        if(!mSplite) return main;
        const cKey=mSplite[1];
        const cNum=mSplite[2];
        
        if(cNum == 1) return main.replace(/\$(\w)(\d)+/, newVal);
        else return main.replace(/\$(\w)(\d)+/, data[cKey.charCodeAt(0)-97][cNum-2]);
        
       
    }
    const handleChange = (e, type) => {
        if (type == "StepTemplate") {
            // let update = templates;
            // let templateData = update[levels?.templates]
            // templateData[e.target.name] = e.target.value;
            // update[levels.templates] = templateData
            // setTemplate([...update])
            setTemplate({ ...templates, [e.target.name]: e.target.value })
        }
        else if (type == 'StepPage') {
            let update = pages;
            let templateData = update[levels?.pages]
            templateData[e.target.name] = e.target.value;
            update[levels.pages] = templateData
            setPage([...update])
            // setPage({ ...pages, [e.target.name]: e.target.value })
        }
        else if (type == 'StepSection') {
            let update = sections;
            let templateData = update[levels?.sections]
            templateData[e.target.name] = e.target.value;
            update[levels.sections] = templateData
            setSection([...update])
            //  setSection({ ...sections, [e.target.name]: e.target.value })
        }
        else if (type == 'StepBenefit') {
            let update = benefits;
            let templateData = update[levels?.benefits]
            templateData[e.target.name] = e.target.value;
            update[levels.benefits] = templateData
            setBenefit([...update])
            //  setSection({ ...sections, [e.target.name]: e.target.value })
        }
        else if (type == 'StepSolution') {
            let update = solutions;
            let templateData = update[levels?.solutions]
            templateData[e.target.name] = e.target.value;
            update[levels.solutions] = templateData
            setSolution([...update])
            //  setSection({ ...sections, [e.target.name]: e.target.value })
        }
        else if (type == 'StepQuestion') {
            let update = questions;
            let templateData = update[levels?.questions]
            templateData[e.target.name] = e.target.value;
            update[levels.questions] = templateData
            setQuestion([...update])
            //  setSection({ ...sections, [e.target.name]: e.target.value })
        }
        else if (type == 'StepReference') {
            let update = references;
            let templateData = update[levels?.references]
            templateData[e.target.name] = e.target.value;
            update[levels.references] = templateData
            setReference([...update])
            //  setSection({ ...sections, [e.target.name]: e.target.value })
        }
        else if (type == 'StepButton') {
            setButton({ ...buttons, [e.target.name]: e.target.value })
        }

        // setReference({ ...references, [input]: e.target.value })
        // setButton({ ...buttons, [input]: e.target.value })
    }

    return (

        <div>

            <Head>
                <title>Optimize Template :: Relcanonical</title>
                <meta name="description" content="Create millions of dynamic landing pages in minutes. It's 5x cheaper to scale than hiring agencies and 8x easier to optimize than landing page builders." />
            </Head>

            <div className="d-flex flex-column-fluid bg-white py-20">
                <div className="container text-center">
                    <div className="d-flex flex-column-fluid flex-center text-center">

                        <div>

                            <div className="mb-0 text-center">
                                <Link href={"/templates"}>
                                    <a>
                                        <Image alt="Relcanonical Logo" src="/assets/media/logos/logo_primary_letter.png" width="20" height="20px" />
                                    </a>
                                </Link>
                                <div className="container d-flex flex-column flex-md-row justify-content-md-center p-4">
                                    <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
                                        <li className="breadcrumb-item font-weight-bolder text-muted cursor-pointer">
                                            <a className="text-dark-50" onClick={() => setStep('StepTemplate')}>Template</a>
                                        </li>
                                        <li className="breadcrumb-item font-weight-bolder text-muted cursor-pointer">
                                            <a className="text-dark-50" onClick={() => setStep('StepPage')}>Pages</a>
                                        </li>
                                        <li className="breadcrumb-item font-weight-bolder text-muted cursor-pointer">
                                            <a className="text-dark-50" onClick={() => setStep('StepSection')}>Sections</a>
                                        </li>
                                        <li className="breadcrumb-item font-weight-bolder text-muted cursor-pointer">
                                            <a className="text-dark-50" onClick={() => setStep('StepBenefit')}>Benefits</a>
                                        </li>
                                        <li className="breadcrumb-item font-weight-bolder text-muted cursor-pointer">
                                            <a className="text-dark-50" onClick={() => setStep('StepSolution')}>Solutions</a>
                                        </li>
                                        <li className="breadcrumb-item font-weight-bolder text-muted cursor-pointer">
                                            <a className="text-dark-50" onClick={() => setStep('StepQuestion')}>Questions</a>
                                        </li>
                                        <li className="breadcrumb-item font-weight-bolder text-muted cursor-pointer">
                                            <a className="text-dark-50" onClick={() => setStep('StepReference')}>References</a>
                                        </li>
                                        <li className="breadcrumb-item font-weight-bolder text-muted cursor-pointer">
                                            <a className="text-dark-50" onClick={() => setStep('StepButton')}>Buttons</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <form>

                                {step === "StepTemplate" && (
                                    <div>

                                        <div className="w-800px">
                                            <div className="">
                                                <h2 className="font-weight-bolder text-dark">Template</h2>
                                                <p className="mb-6 font-weight-bold text-dark-50">Insert in the <code>Template File</code> field, a <code>Google Drive</code> link to a <code>CSV File</code> and use your $variable as shown below.</p>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-12-goat">
                                                    <input
                                                        className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6"
                                                        name='templateFile'
                                                        style={{ display: "none" }}
                                                        ref={fileRef}
                                                        onChange={async (e) => {
                                                            if (e.target.files && e.target.files[0]) {

                                                                if (e.target.files[0].size < 10e9) {
                                                                    const reader = new FileReader();
                                                                    const fileName = e.target.files[0].name || "file selected";

                                                                    reader.onload = (e) => {
                                                                        const data = e.target.result;
                                                                        const workbook = xlsx.read(data, { type: "array" });
                                                                        const sheetName = workbook.SheetNames[0];
                                                                        const worksheet = workbook.Sheets[sheetName];
                                                                        const dataByRow = xlsx.utils.sheet_to_json(worksheet);

                                                                        let dataByCol=[];    
                                                                        const range = xlsx.utils.decode_range(worksheet['!ref']);
                                                                        for(let i=0;i<=range.e.c;i++)
                                                                        {
                                                                            let tempCol = dataByRow.map((data)=>Object.values(data)[i]);
                                                                            dataByCol = [...dataByCol,tempCol];
                                                                        }
                                                                        setTempFile({ json: { ...dataByRow }, data:{...dataByCol}, name: fileName });
                                                                    };
                                                                    reader.readAsArrayBuffer(e.target.files[0]);
                                                                } else {
                                                                    alert("Maximun size is 10 mb");
                                                                }
                                                            }
                                                        }}
                                                        type="file"
                                                        placeholder="Template File"
                                                        title="Template File"
                                                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .xls, .xlsx"
                                                    />

                                                    <h4
                                                        className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6 cursor-pointer"
                                                        onClick={() => {
                                                            fileRef.current.click()
                                                        }}
                                                    >
                                                        {tempFile.name ? tempFile.name : "Template File"}
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-4-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" value={templates?.templateName} name='templateName' onChange={e => handleChange(e, 'StepTemplate')} type="text" placeholder="Template Name" title="Template Name" />
                                                </div>
                                                <div className="col-md-4-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" value={templates?.templateTitle} name='templateTitle' onChange={e => handleChange(e, 'StepTemplate')} type="text" placeholder="Template Title" title="Template Title" />
                                                </div>
                                                <div className="col-md-4-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" defaultValue={templates.templateIcon} name='templateIcon' onChange={e => handleChange(e, 'StepTemplate')} type="url" placeholder="Template Icon" title="Template Icon" />
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-12-goat">
                                                    <textarea className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" defaultValue={templates.templateDescription} name='templateDescription' onChange={e => handleChange(e, 'StepTemplate')} maxLength="250" rows="2" placeholder="Template Description" title="Template Description" >
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center text-center mt-5">
                                                <a className="btn btn-sm btn-primary font-weight-bolder text-white-75 disabled mr-2">$a1</a>
                                                <a className="btn btn-sm btn-warning font-weight-bolder text-white-75 disabled mr-2">$b1</a>
                                                <a className="btn btn-sm btn-info font-weight-bolder text-white-75 disabled mr-2">$c1</a>
                                                <a className="btn btn-sm btn-dark font-weight-bolder text-white-75 disabled mr-2">$d1</a>
                                                <a className="btn btn-sm btn-danger font-weight-bolder text-white-75 disabled mr-0 ">$e1</a>
                                            </div>
                                        </div>

                                    </div>
                                )}


                                {step === "StepPage" && (

                                    <div>

                                        <div className="w-800px">
                                            <div className="">
                                                <h2 className="font-weight-bolder text-dark">Pages</h2>
                                                <p className="mb-6 font-weight-bold text-dark-50">Use $ with any variable from your <code>Template File</code> to add up to 5 <code>Page Categories</code> to your Template.</p>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-4-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" name='pageName' value={pages[levels.pages].pageName} onChange={(e) => handleChange(e, 'StepPage')} type="text" placeholder="Page Name" title="Page Name" />
                                                </div>
                                                <div className="col-md-4-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" name='pageTitle' value={pages[levels.pages].pageTitle} onChange={(e) => handleChange(e, 'StepPage')} type="text" placeholder="Page Title" title="Page Title" />
                                                </div>
                                                <div className="col-md-4-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" name='pageSlug' value={pages[levels.pages].pageSlug} onChange={(e) => handleChange(e, 'StepPage')} type="text" placeholder="Page Slug" title="Page Slug" />
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-4-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" name='pageLabel' value={pages[levels.pages].pageLabel} onChange={(e) => handleChange(e, 'StepPage')} type="text" placeholder="Page Label" title="Page Label" />
                                                </div>
                                                <div className="col-md-4-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" name='pageBreadcrumb' value={pages[levels.pages].pageBreadcrumb} onChange={(e) => handleChange(e, 'StepPage')} type="text" placeholder="Page Breadcrumb" title="Page Breadcrumb" />
                                                </div>
                                                <div className="col-md-4-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" name='pageMedia' value={pages[levels.pages].pageMedia} onChange={(e) => handleChange(e, 'StepPage')} type="text" placeholder="Page Media" title="Page Media" />
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-12-goat">
                                                    <textarea className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" name='pageDescription' value={pages[levels.pages].pageDescription} onChange={(e) => handleChange(e, 'StepPage')} maxLength="250" rows="2" placeholder="Page Description" title="Page Description" >
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center text-center mt-5">
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.pages == 0 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, pages: 0 })}>01</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.pages == 1 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, pages: 1 })}>02</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.pages == 2 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, pages: 2 })}>03</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.pages == 3 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, pages: 3 })}>04</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-0 ${levels.pages == 4 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, pages: 4 })}>05</a>
                                            </div>
                                        </div>

                                    </div>
                                )}
                                {step === "StepSection" && (
                                    <div>

                                        <div className="w-800px">
                                            <div className="">
                                                <h2 className="font-weight-bolder text-dark">Sections</h2>
                                                <p className="mb-6 font-weight-bold text-dark-50">Use $ with any variable from your <code>Template File</code> to add up to 9 <code>Targeted Sections</code> to your Template.</p>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-12-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" value={sections[levels.sections].sectionTag} name="sectionTag" onChange={(e) => handleChange(e, 'StepSection')} type="text" placeholder="Section Tag" title="Section Tag" />
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-12-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" value={sections[levels.sections].sectionTitle} name="sectionTitle" onChange={(e) => handleChange(e, 'StepSection')} type="text" placeholder="Section Title" title="Section Title" />
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-12-goat">
                                                    <textarea className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" value={sections[levels.sections].sectionDescription} name="sectionDescription" onChange={(e) => handleChange(e, 'StepSection')} maxLength="250" rows="2" placeholder="Section Description" title="Section Description" >
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center text-center mt-5">

                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary mr-2 ${levels.sections == 0 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, sections: 0 })}>01</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary mr-2 ${levels.sections == 1 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, sections: 1 })}>02</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary mr-2 ${levels.sections == 2 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, sections: 2 })}>03</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary mr-2 ${levels.sections == 3 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, sections: 3 })}>04</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary mr-2 ${levels.sections == 4 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, sections: 4 })}>05</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary mr-2 ${levels.sections == 5 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, sections: 5 })}>06</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary mr-2 ${levels.sections == 6 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, sections: 6 })}>07</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary mr-2 ${levels.sections == 7 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, sections: 7 })}>08</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary mr-0 ${levels.sections == 8 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, sections: 8 })}>09</a>
                                            </div>
                                        </div>

                                    </div>

                                )}
                                {step === "StepBenefit" && (
                                    <div>

                                        <div className="w-800px">
                                            <div className="">
                                                <h2 className="font-weight-bolder text-dark">Benefits</h2>
                                                <p className="mb-6 font-weight-bold text-dark-50">Use $ with any variable from your <code>Template File</code> to add up to 8 <code>Competitive Advantages</code> to your Template.</p>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-12-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" name='benefitName' value={benefits[levels.benefits].benefitName} onChange={(e) => handleChange(e, 'StepBenefit')} type="text" placeholder="Benefit Name" title="Benefit Name" />
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-6-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" name='benefitLabel' value={benefits[levels.benefits].benefitLabel} onChange={(e) => handleChange(e, 'StepBenefit')} type="text" placeholder="Benefit Label" title="Benefit Label" />
                                                </div>
                                                <div className="col-md-6-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" name='benefitIcon' value={benefits[levels.benefits].benefitIcon} onChange={(e) => handleChange(e, 'StepBenefit')} type="url" placeholder="Benefit Icon" title="Benefit Icon" />
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-12-goat">
                                                    <textarea className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" name='benefitDescription' value={benefits[levels.benefits].benefitDescription} onChange={(e) => handleChange(e, 'StepBenefit')} maxLength="250" rows="2" placeholder="Benefit Description" title="Benefit Description" >
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center text-center mt-5">
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.benefits == 0 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, benefits: 0 })}>01</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.benefits == 1 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, benefits: 1 })}>02</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.benefits == 2 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, benefits: 2 })}>03</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.benefits == 3 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, benefits: 3 })}>04</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.benefits == 4 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, benefits: 4 })}>05</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.benefits == 5 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, benefits: 5 })}>06</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.benefits == 6 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, benefits: 6 })}>07</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.benefits == 7 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, benefits: 7 })}>08</a>

                                            </div>
                                        </div>

                                    </div>
                                )}
                                {step === "StepSolution" && (
                                    <div>

                                        <div className="w-800px">
                                            <div className="">
                                                <h2 className="font-weight-bolder text-dark">Solutions</h2>
                                                <p className="mb-6 font-weight-bold text-dark-50">Use $ with any variable from your <code>Template File</code> to add up to 3 <code>Customer Segmentations</code> to your Template.</p>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-12-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" value={solutions[levels.solutions].solutionName} name="solutionName" onChange={(e) => handleChange(e, 'StepSolution')} type="text" placeholder="Solution Name" title="Solution Name" />
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-6-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" value={solutions[levels.solutions].solutionLabel} name="solutionLabel" onChange={(e) => handleChange(e, 'StepSolution')} type="text" placeholder="Solution Label" title="Solution Label" />
                                                </div>
                                                <div className="col-md-6-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" value={solutions[levels.solutions].solutionIcon} name="solutionIcon" onChange={(e) => handleChange(e, 'StepSolution')} type="url" placeholder="Solution Icon" title="Solution Icon" />
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-12-goat">
                                                    <textarea className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" value={solutions[levels.solutions].solutionDescription} name="solutionDescription" onChange={(e) => handleChange(e, 'StepSolution')} maxLength="250" rows="2" placeholder="Solution Description" title="Solution Description" >
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center text-center mt-5">
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.solutions == 0 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, solutions: 0 })}>01</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.solutions == 1 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, solutions: 1 })}>02</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-0 ${levels.solutions == 2 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, solutions: 2 })}>03</a>
                                            </div>
                                        </div>

                                    </div>

                                )}
                                {step === "StepQuestion" && (
                                    <div>

                                        <div className="w-800px">
                                            <div className="">
                                                <h2 className="font-weight-bolder text-dark">Questions</h2>
                                                <p className="mb-6 font-weight-bold text-dark-50">Use $ with any variable from your <code>Template File</code> to add up to 5 <code>Helpful FAQs</code> to your Template.</p>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-6-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" value={questions[levels.questions].questionName} name="questionName" onChange={(e) => handleChange(e, 'StepQuestion')} type="text" placeholder="Question Name" title="Question Name" />
                                                </div>
                                                <div className="col-md-6-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" value={questions[levels.questions].questionUser} name="questionUser" onChange={(e) => handleChange(e, 'StepQuestion')} type="text" placeholder="Question User" title="Question User" />
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-6-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" value={questions[levels.questions].questionDescriptor} name="questionDescriptor" onChange={(e) => handleChange(e, 'StepQuestion')} type="text" placeholder="Question Descriptor" title="Question Descriptor" />
                                                </div>
                                                <div className="col-md-6-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" value={questions[levels.questions].questionAvatar} name="questionAvatar" onChange={(e) => handleChange(e, 'StepQuestion')} type="url" placeholder="Question Avatar" title="Question Avatar" />
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-12-goat">
                                                    <textarea className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" value={questions[levels.questions].questionAnswer} name="questionAnswer" onChange={(e) => handleChange(e, 'StepQuestion')} maxLength="250" rows="2" placeholder="Question Answer" title="Question Answer" >
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center text-center mt-5">
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.questions == 0 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, questions: 0 })}>01</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.questions == 1 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, questions: 1 })}>02</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.questions == 2 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, questions: 2 })}>03</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.questions == 3 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, questions: 3 })}>04</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-0 ${levels.questions == 4 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, questions: 4 })}>05</a>
                                            </div>
                                        </div>

                                    </div>
                                )}
                                {step === "StepReference" && (
                                    <div>

                                        <div className="w-800px">
                                            <div className="">
                                                <h2 className="font-weight-bolder text-dark">References</h2>
                                                <p className="mb-6 font-weight-bold text-dark-50">Use $ with any variable from your <code>Template File</code> to add up to 4 <code>Verifiable Testimonials</code> to your Template.</p>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-6-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" name='referenceUser' value={references[levels.references].referenceUser} onChange={(e) => handleChange(e, 'StepReference')} type="text" placeholder="Reference User" title="Reference User" />
                                                </div>
                                                <div className="col-md-6-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" name='referenceLabel' value={references[levels.references].referenceLabel} onChange={(e) => handleChange(e, 'StepReference')} type="text" placeholder="Reference Label" title="Reference Label" />
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-6-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" value={references[levels.references].referenceDescriptor} name='referenceDescriptor' onChange={(e) => handleChange(e, 'StepReference')} type="text" placeholder="Reference Descriptor" title="Reference Descriptor" />
                                                </div>
                                                <div className="col-md-6-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" value={references[levels.references].referenceAvatar} name='referenceAvatar' onChange={(e) => handleChange(e, 'StepReference')} type="url" placeholder="Reference Avatar" title="Reference Avatar" />
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-12-goat">
                                                    <textarea className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" value={references[levels.references].referenceDescription} name='referenceDescription' onChange={(e) => handleChange(e, 'StepReference')} maxLength="250" rows="2" placeholder="Reference Description" title="Reference Description" >
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center text-center mt-5">
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.references == 0 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, references: 0 })}>01</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.references == 1 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, references: 1 })}>02</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-2 ${levels.references == 2 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, references: 2 })}>03</a>
                                                <a className={`btn btn-icon btn-sm border-0  font-weight-bolder btn-hover-primary  mr-0 ${levels.references == 3 ? ' btn-primary' : " btn-light"}`} onClick={() => setLevels({ ...levels, references: 3 })}>04</a>
                                            </div>
                                        </div>

                                    </div>
                                )}
                                {step === "StepButton" && (

                                    <div>

                                        <div className="w-800px">
                                            <div className="">
                                                <h2 className="font-weight-bolder text-dark">Buttons</h2>
                                                <p className="mb-6 font-weight-bold text-dark-50">Use $ with any variable from your <code>Template File</code> to add a <code>Call To Action</code> to your Template.</p>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-12-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" defaultValue={buttons.buttonName} name="buttonName" onChange={(e) => handleChange(e, 'StepButton')} type="text" placeholder="Button Name" title="Button Name" />
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-12-goat">
                                                    <input className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" defaultValue={buttons.buttonLink} name="buttonLink" onChange={(e) => handleChange(e, 'StepButton')} type="url" placeholder="Button Link" title="Button Link" />
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-12-goat">
                                                    <textarea className="form-control form-control-solid font-weight-bold h-auto p-6 rounded-lg font-size-h6" defaultValue={buttons.buttonDescription} name='buttonDescription' onChange={(e) => handleChange(e, 'StepButton')} maxLength="250" rows="2" placeholder="Button Description" title="Button Description" >
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center text-center mt-5">
                                                <a
                                                    className="btn btn-icon btn-sm px-10 btn-primary font-weight-bolder"
                                                    type="submit"
                                                    onClick={async () => {
                                                        // /try {
                                                            if (templates.templateName.length >= 4) {
                                                                setIsLoading(true);
                                                                
                                                                
                                                                let slugPagesPer = [];
                                                                let slugPages = [];

                                                                pages.map((page,index) =>{
                                                                    slugPages = [];
                                                                    if(page.pageName!=""){
                                                                    const pageSlugSplit=page.pageSlug.match(/\$(\w)(\d)+/);
                                                                    const slugUrlPrefix=page.pageSlug.replace(/\s+/g,'-').replace(/\$\w\d+/,"").toLowerCase();
                                                                    
                                                                    let slugSuffixs =[];
                                                                    if(!pageSlugSplit){
                                                                        slugSuffixs = [""];
                                                                    }
                                                                    else{
                                                                        const columnKey=pageSlugSplit[1];
                                                                        const columnNum=pageSlugSplit[2];

                                                                        slugSuffixs = [... new Set(tempFile.data[columnKey.charCodeAt(0)-97])];
                                                                        if(columnNum !=1) slugSuffixs=[tempFile.data[columnKey.charCodeAt(0)-97][columnNum]];
                                                                    }                                                        
                                                                    let slugSections = [];
                                                                    let slugPageMainInfos=[];
                                                                    let slugBenefits=[];
                                                                    let slugSolutions=[];
                                                                    let slugReferences=[];
                                                                    let slugQuestions=[];
                                                                    let slugButtons=[];
                                                                    //Media 
                                                                    let pageMedia=[];
                                                                    const pageMediaSplit=page.pageMedia.match(/\$(\w)(\d)+/);
                                                                        const mediaUrlPrefix=page.pageMedia.replace(/[\s,]+/g,'-').replace(/\$\w\d+/,"").toLowerCase();
                                                                    if(!pageMediaSplit) pageMedia=[page.pageMedia];
                                                                    else {
                                                                        const mediaKey=pageMediaSplit[1];
                                                                        const mediaNum=pageMediaSplit[2];
                                                                        if(mediaNum==1) pageMedia = tempFile.data[mediaKey.charCodeAt(0)-97];
                                                                        else pageMedia = [tempFile.data[mediaKey.charCodeAt(0)-97][mediaNum]];
                                                                    }
                                                                    ////
                                                                    slugSuffixs.map((slugSuffix)=>{
                                                                        slugSections = [];
                                                                        slugPageMainInfos=[];
                                                                        slugBenefits=[];
                                                                        slugSolutions=[];
                                                                        slugReferences=[];
                                                                        slugQuestions=[];
                                                                        slugButtons=[];
                                                                            let stemp = slugUrlPrefix.toLowerCase()+"-"+slugSuffix.replace(/[\s,]/g,'-').toLowerCase();
                                                                        slugPageMainInfos = {
                                                                            pageBreadcrumb: replace(index, page.pageBreadcrumb, slugSuffix),
                                                                            pageDescription: replace(index, page.pageDescription, slugSuffix),
                                                                            pageLabel: replace(index, page.pageLabel, slugSuffix),
                                                                            pageMedia: pageMedia.filter(function(e){return e}),
                                                                            pageName: replace(index, page.pageName, slugSuffix),
                                                                            pageTitle:replace(index, page.pageTitle, slugSuffix),
                                                                            slugUrl:stemp.replace(/-+/g,'-')
                                                                        };
                                                                        sections.map((section) =>{
                                                                            slugSections = [...slugSections, {
                                                                                sectionDescription: replace(index, section.sectionDescription, slugSuffix),
                                                                                sectionTag: replace(index, section.sectionTag, slugSuffix),
                                                                                sectionTitle: replace(index, section.sectionTitle, slugSuffix),
                                                                            }];
                                                                        });
                                                                        benefits.map((benefit) =>{
                                                                            slugBenefits = [...slugBenefits, {
                                                                                benefitDescription: replace(index, benefit.benefitDescription, slugSuffix),
                                                                                benefitIcon: replace(index, benefit.benefitIcon, slugSuffix),
                                                                                benefitLabel: replace(index, benefit.benefitLabel, slugSuffix),
                                                                                benefitName: replace(index, benefit.benefitName, slugSuffix),
                                                                            }];
                                                                        });
                                                                        solutions.map((solution) =>{
                                                                            slugSolutions = [...slugSolutions, {
                                                                                solutionDescription: replace(index, solution.solutionDescription, slugSuffix),
                                                                                solutionIcon: replace(index, solution.solutionIcon, slugSuffix),
                                                                                solutionLabel: replace(index, solution.solutionLabel, slugSuffix),
                                                                                solutionName: replace(index, solution.solutionName, slugSuffix),
                                                                            }];
                                                                        });
                                                                        references.map((reference) =>{
                                                                            slugReferences = [...slugReferences, {
                                                                                referenceAvatar: replace(index, reference.referenceAvatar, slugSuffix),
                                                                                referenceDescription: replace(index, reference.referenceDescription, slugSuffix),
                                                                                referenceDescriptor: replace(index, reference.referenceDescriptor, slugSuffix),
                                                                                referenceUser: replace(index, reference.referenceUser, slugSuffix),
                                                                                referenceLabel: replace(index, reference.referenceLabel, slugSuffix),
                                                                            }];
                                                                        });
                                                                        questions.map((question) =>{
                                                                            slugQuestions = [...slugQuestions, {
                                                                                questionAvatar: replace(index, question.questionAvatar, slugSuffix),
                                                                                questionAnswer: replace(index, question.questionAnswer, slugSuffix),
                                                                                questionDescriptor: replace(index, question.questionDescriptor, slugSuffix),
                                                                                questionUser: replace(index, question.questionUser, slugSuffix),
                                                                                questionName: replace(index, question.questionName, slugSuffix),
                                                                            }];
                                                                        });
                                                                        slugButtons={
                                                                                buttonName: replace(index, buttons.buttonName, slugSuffix),
                                                                                buttonLink: replace(index, buttons.buttonLink, slugSuffix),
                                                                                buttonDescription: replace(index, buttons.buttonDescription, slugSuffix)
                                                                        };
                                                                        slugPages =[...slugPages,{
                                                                            slugPageMainInfos,
                                                                            slugSections,
                                                                            slugBenefits,
                                                                            slugSolutions,
                                                                            slugReferences,
                                                                            slugQuestions,
                                                                            slugButtons
                                                                        }];
                                                                    });
                                                                    
                                                                    slugPagesPer = [...slugPagesPer,{slugPage: slugPages}];
                                                                        
                                                                    }
                                                                });
                                                                const response = await axios({
                                                                    method: "POST",
                                                                    url: `${process.env.NEXT_PUBLIC_API}/api/templates/optimize`,

                                                                    data: {
                                                                        type: "setData",
                                                                        templateId: router.query.templateId,
                                                                        template: {
                                                                            templates,
                                                                            pages,
                                                                            sections,
                                                                            benefits,
                                                                            solutions,
                                                                            questions,
                                                                            references,
                                                                            buttons,
                                                                            slugPagesPer
                                                                        },
                                                                        userId: "61feac59df7a5ddbf88afea0",
                                                                        tempFile: {data: tempFile.data, name: tempFile.name},
                                                                        templateUrl : templates.templateName.toString().toLowerCase() 
                                                                    }
                                                                });

                                                                const { success, error, result } = response.data;

                                                                if (!success)
                                                                    alert(error);

                                                                else {
                                                                    router.push(`/templates/${templates.templateName.toString().toLowerCase()}`)
                                                                }
                                                            }

                                                            else {
                                                                alert('Template name must be min 4 letters')
                                                            }
                                                        // } catch (error) {
                                                        //     alert(error)
                                                        // } finally {
                                                        //     setIsLoading(false);
                                                        // }

                                                        setIsLoading(false);
                                                    }}
                                                >
                                                    {
                                                        isLoading ? "WAIT" : "SAVE"
                                                    }
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                )}

                            </form>

                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Optimize