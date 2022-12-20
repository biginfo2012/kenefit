import React from 'react'

const Header = () => {
    
    return (

        <div>

             <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
                <li className="breadcrumb-item font-weight-bolder text-muted">
                    <a href="https://relcanonical.gitbook.io/docs/resources/benefits/" className="text-dark-50">Benefits</a>
                </li>
                <li className="breadcrumb-item font-weight-bolder text-muted">
                    <a href="https://relcanonical.gitbook.io/docs/resources/features/" className="text-dark-50">Features</a>
                </li>
                <li className="breadcrumb-item font-weight-bolder text-muted">
                    <a href="https://relcanonical.gitbook.io/docs/resources/comparisons/" className="text-dark-50">Comparisons</a>
                </li>
                <li className="breadcrumb-item font-weight-bolder text-muted">
                    <a href="https://relcanonical.gitbook.io/docs/resources/plans/" className="text-dark-50">Plans</a>
                </li>
                <li className="breadcrumb-item font-weight-bolder text-muted">
                    <a href="https://relcanonical.gitbook.io/docs/resources/partnerships/" className="text-dark-50">Partnerships</a>
                </li>
            </ul>

        </div>

    )
}

export default Header