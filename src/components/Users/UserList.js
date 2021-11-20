import Card from '../UI/Card';
import User from './User';
import classes from './UserList.module.css';

const UserList = props => {
    if (props.users.length === 0) {
        return (null);
    }

    return (
        <Card className={classes.users}>
            {props.users.map(user => {
                return (
                    <User
                        username={user.username}
                        age={user.age}
                        key={user.id}
                    >
                    </User>
                );
            })}
        </Card>
    );
};

export default UserList;