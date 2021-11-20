import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import { useState } from 'react';

function App() {
    const [users, setUsers] = useState([]);

    const addUserHandler = user => {
        setUsers(prevUsers => {
            return [user, ...prevUsers];
        });
    };

    return (
        <div className="App">
            <AddUser onAddUser={addUserHandler}></AddUser>
            <UserList users={users}></UserList>
        </div>
    );
}

export default App;
