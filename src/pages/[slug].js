import React from 'react'
import Name from './templates/[name]'
import axios from 'axios'

const Slug = ({ template }) => {
    return (

        <div className=''>

            <Name template={template} />

        </div>
    )
}

export async function getServerSideProps(context) {
    const TemplateName = context.query.slug;

    if (TemplateName) {
        try {
            const response = await axios({
                method: "GET",
                url: `${process.env.NEXT_PUBLIC_API}/api/templates/${TemplateName}`
            })

            const { success, error, result } = response.data;

            if (success) {
                return {
                    props: {
                        template: result
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

export default Slug