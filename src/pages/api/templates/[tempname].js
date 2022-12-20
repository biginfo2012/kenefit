import connectToDB from '../../../../server/db';
import { Templates } from '../../../../server/schemas/models';

const handler = async (req, res) => {
    const { headers, method, query } = req;

    switch (method) {
        case "GET":
            try {
                const templateName = query.tempname;

                if (templateName) {
                    await connectToDB();
                    await Templates.findOne({
                        templateUrl:templateName
                    })
                    .then((result) => {
                        if (result === null) {
                            return res.status(200).json({ success: false, error: "not found" })
                        } else {
                            return res.status(200).json({ success: true, result })
                        }
                    })
                    .catch((error) => {
                        return res.status(200).json({ success: false, error: error.message.replace(/\"/g, "") })
                    })
                } else {
                    return res.status(200).json({ success: false, error: 'not found' })
                }
            } catch (error) {
                return res.status(200).json({ success: false, error: "Please try again." })
            }
            break;

        default:
            return res.status(200).json({ success: false, error: 'This method does not exists.' })
    }
}

export default handler;