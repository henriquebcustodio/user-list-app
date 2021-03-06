import classes from './ErrorModal.module.css';
import Button from './Button';
import Card from './Card';

const ErrorModal = props => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2 className={classes.title}>{props.title}</h2>
                </header>
                <section className={classes.message}>
                    <p>{props.message}</p>
                </section>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;