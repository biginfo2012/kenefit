import React from 'react'

const Footer = () => {
    
    return (

        <div>

            <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
            <li className="breadcrumb-item font-weight-bolder text-muted">
                    <a href="https://relcanonical.gitbook.io/docs/resources/legal/terms/" className="text-dark-50">Terms</a>
                </li>
                <li className="breadcrumb-item font-weight-bolder text-muted">
                    <a href="https://relcanonical.gitbook.io/docs/resources/legal/privacy/" className="text-dark-50">Privacy</a>
                </li>
                <li className="breadcrumb-item font-weight-bolder text-muted">
                    <a href="https://relcanonical.gitbook.io/docs/resources/legal/cookies/" className="text-dark-50">Cookies</a>
                </li>
                <li className="breadcrumb-item font-weight-bolder text-muted">
                    <a href="https://relcanonical.gitbook.io/docs/resources/legal/copyright/" className="text-dark-50">Copyright</a>
                </li>
                <li className="breadcrumb-item font-weight-bolder text-muted">
                    <a href="https://relcanonical.gitbook.io/docs/resources/legal/disclaimer/" className="text-dark-50">Disclaimer</a>
                </li>
            </ul>

        </div>
    )
}

export default Footer