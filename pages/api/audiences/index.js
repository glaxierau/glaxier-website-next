import client from "@mailchimp/mailchimp_marketing";

export default async function handler(req, res) {
    const { fName, lName, email, phone, goal, status } = req.body

    client.setConfig({
        apiKey: `${process.env.NEXT_APP_MAIL_API_KEY}`,
        server: `us2`,
    });

    const merge_fields = {
        "FNAME": fName,
        "LNAME": lName,
        "PHONE": phone,
        "GOAL": goal,
    }
    try {
        const response = await client.lists.getListMembersInfo(`${process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID}`)
        res.status(200).json(response)
    } catch (err) {
        res.send(err)
    }
}