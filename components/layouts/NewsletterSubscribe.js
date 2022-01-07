import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from './NewsletterForm';

const NewsletterSubscribe = () => {

    const id = process.env.NEXT_APP_MAILCHIMP_LIST_ID
    const u = process.env.NEXT_APP_MAILCHIMP_U
    const MAILCHIMP_URL = `https://glaxier.us2.list-manage.com/subscribe/post?u=${u}&amp;id=${id}`

    return (
        <MailchimpSubscribe
            url={MAILCHIMP_URL}
            render={(props) => {
                const { subscribe, status, message } = props || {};
                return (
                    <NewsletterForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                );
            }}
        />
    );
};

export default NewsletterSubscribe;