import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import { useState } from 'react';

const AddUser = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const usernameInputHandler = event => {
        setUsername(event.target.value);
    };

    const ageInputHandler = event => {
        setAge(event.target.value);
    };

    const addUserHandler = event => {
        event.preventDefault();

        if (!username.trim().length || !age.length) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }

        if (age <= 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid age (>0)'
            });
            return;
        }

        props.onAddUser({
            username,
            age,
            id: Math.random().toString()
        });

        setUsername('');
        setAge('');
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={username} onChange={usernameInputHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" value={age} onChange={ageInputHandler} />
                    <Button onClick={addUserHandler}>Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;