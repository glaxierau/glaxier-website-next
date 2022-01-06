import client from "@mailchimp/mailchimp_marketing";

export default async function handler(req, res) {
    const { fName, lName, email, phone, goal, ai, services, iob, revenue } = req.body

    client.setConfig({
        apiKey: `${process.env.NEXT_APP_MAIL_API_KEY}`,
        server: `us2`,
    });

    let response = undefined

    const merge_fields = {
        "FNAME": fName,
        "LNAME": lName,
        "PHONE": phone,
        "ADDINFO": ai,
        "GOAL": goal,
        "IOB": iob,
        "REVENUE": revenue,
        "SERVICES": services
    }
    if (req.method === 'PUT') {
        try {
            response = await client.lists.setListMember(`${process.env.NEXT_APP_MAILCHIMP_ID}`,
                `${email}`,
                { email_address: `${email}`, status_if_new: "subscribed", merge_fields }).then(res =>
                    res.send(res))
        } catch (err) { res.send(response) }
    }
}