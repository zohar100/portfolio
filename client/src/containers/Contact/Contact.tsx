import { FC } from 'react';
import classes from './Contact.module.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import MailIllustration from '../../assets/images/mail-illustration.png';

const Contact:FC = () => (
    <section id="contact" className={classes.Contact}>
        <div className={classes.ContactHeaders}>
            <h1>Contact Me</h1>
            <span>Send me a message, make sure I will answer!</span>
        </div>
        <div className={classes.ContactDiv}> 
            <div className={classes.ContactIllustration}>
                <img src={MailIllustration} alt={'mail-illustration'}/>
            </div>
            <div className={classes.ContactForm}>
                <form>
                    <div className={classes.ContactFormRow}>
                        <Input
                        changed={(event:any) => console.log(event.target.value)}
                        elementConfig={{
                            placeholder: 'Full name'
                        }}/>
                        <Input
                        changed={(event:any) => console.log(event.target.value)}
                        elementConfig={{
                            placeholder: 'Email'
                        }}/>
                    </div>
                    <Input
                    changed={(event:any) => console.log(event.target.value)}
                    elementConfig={{
                        placeholder: 'Subject'
                    }}/>
                    <Input
                    elementType={'textarea'}
                    changed={(event:any) => console.log(event.target.value)}
                    elementConfig={{
                        placeholder: 'Write me here...'
                    }}/>
                    <Button btnType={'Primary'}>Send</Button>
                </form>
            </div>
        </div>
    </section>
);

export default Contact;