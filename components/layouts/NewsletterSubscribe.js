import MailchimpSubscribe from 'react-mailchimp-subscribe'
import NewsletterForm from './NewsletterForm'

const NewsletterSubscribe = ({ label }) => {
    const id = process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID
    const u = process.env.NEXT_PUBLIC_MAILCHIMP_U
    const MAILCHIMP_URL = `https://glaxier.us2.list-manage.com/subscribe/post?u=${u}&amp;id=${id}`

    return (
        <MailchimpSubscribe
            url={MAILCHIMP_URL}
            render={({ subscribe, status, message }) => {
                return (
                    <NewsletterForm
                        label={label}
                        status={status}
                        message={message}
                        onValidated={(formData) => subscribe(formData)}
                    />
                )
            }}
        />
    )
}

export default NewsletterSubscribe
