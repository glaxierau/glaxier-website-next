import mailchimp from "@mailchimp/mailchimp_marketing";

export const mailchimpClient = () => {
    const newClient = mailchimp.setConfig({
        apiKey: "1af339e4cf09505a15352f0c9a27579b-us2",
        server: "us2",
    });
    return newClient
};
