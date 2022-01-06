import client from "@mailchimp/mailchimp_marketing";

export default async function handler(req, res) {

    client.setConfig({
        apiKey: `${process.env.NEXT_APP_MAIL_API_KEY}`,
        server: `us2`,
    });

    const response = await client.lists.getListMember(`${process.env.NEXT_APP_MAILCHIMP_ID}`, 'nick@glaxier.com.au');
    res.status(200).json(response)
}
