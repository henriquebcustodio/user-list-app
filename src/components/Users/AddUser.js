import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';

const AddUser = props => {
    return (
        <Card className={classes.input}>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
                <label htmlFor="age">Age (Years)</label>
                <input type="number" />
                <Button>Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;