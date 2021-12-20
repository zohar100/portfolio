import { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import classes from './Contact.module.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import MailIllustration from '../../assets/images/mail-illustration.png';

const Contact:FC = () => {
    const form:any = useRef();
    const {
        register,
        handleSubmit
      } = useForm();
      
    const sendEmail = () => {
        //@TODO - check form validity and use capcha
        emailjs.sendForm('service_5vm9fuh', 'template_1wn4g1e', form.current, 'user_gY4mOSmq8OEjFznUJEmeh')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    const submit = (data:any) => {
        sendEmail();
    }

 return (
    <section id="contact" className={classes.Contact}>
        <div className={classes.Headers}>
            <h1>Contact Me</h1>
            <span>Send me a message, make sure I will answer!</span>
        </div>
        <div className={classes.ContactDiv}> 
            <div className={classes.ContactIllustration}>
                <img src={MailIllustration} alt={'mail-illustration'}/>
            </div>
            <div className={classes.ContactForm}>
                <form ref={form} onSubmit={handleSubmit(submit)}>
                    <div className={classes.ContactFormRow}>
                        <Input                       
                        // {...register('name')}
                        handleChanges={register('name')}
                        elementConfig={{
                            placeholder: 'Full name'
                        }}/>
                        <Input                       
                        handleChanges={register('mail')}
                        elementConfig={{
                            placeholder: 'Email'
                        }}/>
                    </div>
                    <Input                    
                    handleChanges={register('subject')}
                    elementConfig={{
                        placeholder: 'Subject'
                    }}/>
                    <Input
                    handleChanges={register('body')}
                    elementType={'textarea'}
                    elementConfig={{
                        placeholder: 'Write me here...'
                    }}/>
                    <Button btnType={'Primary'} clicked={handleSubmit(submit)}>Send</Button>
                </form>
            </div>
        </div>
    </section>
)};

export default Contact;