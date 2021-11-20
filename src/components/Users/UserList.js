import Card from '../UI/Card';
import User from './User';
import classes from './UserList.module.css';

const UserList = props => {
    return (
        <Card className={classes.users}>
            <User username={'Test'} age={32}></User>
            <User username={'Test'} age={32}></User>
            <User username={'Test'} age={32}></User>
        </Card>
    );
};

export default UserList;