import connectToDB from '../../../../server/db';
import { Templates } from '../../../../server/schemas/models';
export const config = {
    api: {
        bodyParser: {
        sizeLimit: '20mb',
        },
    },
}
const handler = async (req, res) => {
    const { headers, method, body } = req;
    const {type} =body;
    switch (type) {
        case "getData":
            try {
                const { templateId } = body;
                await connectToDB();
                await Templates.findOne({
                    _id: templateId
                })
                .then((result) => {
                    return res.status(200).json({ success: true, result: result })
                })
                .catch((error) => {
                    if (error.code === 11000)
                        return res.status(200).json({ success: false, error: "This template name already exists." })
                    else
                        throw "";
                })
            } catch (error) {
                return res.status(200).json({ success: false, error: 'This method does not exists.' })
            }
            break;
        case "setData":
            try {
                const { template, userId, tempFile,templateId,templateUrl } = body;
                await connectToDB();
                await Templates.findOneAndUpdate(
                    {_id:templateId},
                    {
                        ...template.templates,
                        ...template,
                        templateFile: tempFile,
                        templateUrl:templateUrl,
                        account: userId
                    }
                )
                .then((result) => {
                    return res.status(200).json({ success: true, result: result })
                })
                .catch((error) => {
                    if (error.code === 11000)
                        return res.status(200).json({ success: false, error: "This template name already exists." })
                    else
                        throw "";
                })
            } catch (error) {
                return res.status(200).json({ success: false, error: 'This method does not exists.' })
            }
            break;

        default:
            return res.status(200).json({ success: false, error: 'This method does not exists.' })
    }
}

export default handler;