import MailchimpSubscribe from 'react-mailchimp-subscribe'
import SignUp from './SignUp';


const NewsletterSubscribe = () => {

  const url = process.env.NEXT_PUBLIC_MAILCHIMP_URI;

  console.log(url)

  return (
    
    <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <SignUp status={status}
              message={message}
              onValidated={formData => subscribe(formData)}/>
      </div>
    )}
  />
  )

};

export default NewsletterSubscribe;