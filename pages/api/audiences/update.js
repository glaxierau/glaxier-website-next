import client from "@mailchimp/mailchimp_marketing";

export default async function handler(req, res) {
    const { email, ai, services, iob, revenue, status } = req.body

    client.setConfig({
        apiKey: `${process.env.NEXT_APP_MAIL_API_KEY}`,
        server: `us2`,
    });

    const merge_fields = {
        "ADDINFO": ai,
        "IOB": iob,
        "REVENUE": revenue,
        "SERVICES": services
    }
    if (req.method === 'PATCH') {
        try {
            const response = await client.lists.updateListMember(`${process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID}`,
                email,
                { status, merge_fields })

            return res.status(200).json(response)
        } catch (err) {
            return res.send(err)
        }
    }
}