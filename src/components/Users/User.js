import classes from './User.module.css';

const User = props => {
    return (
        <div className={classes.user}>
            {`${props.username} (${props.age} years old)`}
        </div>
    );
};

export default User;