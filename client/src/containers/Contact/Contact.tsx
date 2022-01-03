import { FC, useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import classes from './Contact.module.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import MailIllustration from '../../assets/images/mail-illustration.png';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

const schema = yup.object({
  name: yup.string().required().max(25),
  email: yup.string().required().email(),
  subject: yup.string().required().max(35),
  body: yup.string().min(5).max(150),
}).required();

interface MailFormInput {
    name: string;
    email: string;
    subject: string;
    body: string;
}

const Contact:FC = () => {
    const form:any = useRef<MailFormInput>();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<MailFormInput>({
        resolver: yupResolver(schema)
    });
    const [successMsg, setSuccessMsg] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if(successMsg || loading){
            document.body.style.overflow = 'hidden';
        }else {
            document.body.style.overflow = 'unset';
        }
    }, [successMsg, loading])

    const sendEmail = () => {
        setLoading(true);
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE || '', process.env.REACT_APP_EMAILJS_TEMPLATE || '', form.current, process.env.REACT_APP_EMAILJS_USER || '')
        .then((result) => {
            console.log(result.text);
            setLoading(false);
            setSuccessMsg(true);
            reset();
        }, (error) => {
            setLoading(false);
            console.log(error.text);
        });
    };

    let successMsgModal = (
        <>
            <Modal show={successMsg}>
                <div data-aos="slide-up" className={classes.SuccessMsg}>
                    <h3>Thank you!</h3>
                    <p>Your form submission has been received.</p>

                    <span onClick={() => setSuccessMsg(false)}>← Back to our site</span>
                </div>
            </Modal>
        </>
    )

    let lodaingSpinner = null;
    if(loading) {
        lodaingSpinner = (
            <Spinner fixed={true}/>
        )
    }

 return (
    <section id="contact" className={classes.Contact}>
        <Backdrop show={successMsg || loading ? true : false} type="secondary"/>
        {lodaingSpinner}
        {successMsgModal}
        <div className={classes.Headers}>
            <h1>Contact Me</h1>
            <span>Send me a message, rest assured I will answer!</span>
        </div>
        <div className={classes.ContactDiv}> 
            <div className={classes.ContactIllustration} data-aos="fade-right">
                <img src={MailIllustration} alt={'mail-illustration'}/>
            </div>
            <div className={classes.ContactForm} data-aos="fade-up">
                <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                    <div className={classes.ContactFormRow}>
                        <Input                       
                        handleChanges={register}
                        label='name'
                        errors={errors}
                        elementConfig={{
                            placeholder: 'Full name'
                        }}/>
                        <Input                       
                        handleChanges={register}
                        label='email'
                        errors={errors}
                        elementConfig={{
                            placeholder: 'Email'
                        }}/>
                    </div>
                    <Input                    
                    handleChanges={register}
                    label='subject'
                    errors={errors}
                    elementConfig={{
                        placeholder: 'Subject'
                    }}/>
                    <Input
                    handleChanges={register}
                    label='body'
                    errors={errors}
                    elementType={'textarea'}
                    elementConfig={{
                        placeholder: 'Write me here...'
                    }}/>
                    <Button btnType={'Primary'}>Send</Button>
                </form>
            </div>
        </div>
    </section>
)};

export default Contact;