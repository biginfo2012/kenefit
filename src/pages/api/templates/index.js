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
    switch (method) {
        case "GET":
            if(req.query.type=="list")
            {
                try {
                    const userId = req.query.userId;
                    await connectToDB();
                    await Templates.find({
                        account: userId
                    })
                    .then((result) => {
                        return res.status(200).json({ success: true, result})
                    })
                    .catch((error) => {
                        return res.status(200).json({ success: false, error: error.message.replace(/\"/g, "") })
                    })
                } catch (error) {
                    return res.status(200).json({ success: false, error: 'This method does not exists.' })
                }
            }
            else
            {
                try {
                    const userId = headers["user-id"];
                    if (userId) {
                        await connectToDB();
                        await Templates.findOne({
                            account: userId
                        })
                        .then((result) => {
                            return res.status(200).json({ success: true, result })
                        })
                        .catch((error) => {
                            return res.status(200).json({ success: false, error: error.message.replace(/\"/g, "") })
                        })
                    } else return res.status(200).json({ success: false, error: "template dose not exists" })
                } catch (error) {
                    return res.status(200).json({ success: false, error: error.message.replace(/\"/g, "") })
                }
            }
            break;
        case "POST":
            try {
                const { template,templateUrl, userId, tempFile } = body;
                await connectToDB();
                await Templates.create({
                    ...template.templates,
                    ...template,
                    templateUrl:templateUrl,
                    templateFile: tempFile,
                    account: userId
                })
                .then((result) => {
                    return res.status(200).json({ success: true, result: template })
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