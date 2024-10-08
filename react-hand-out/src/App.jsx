import React, { createContext, useState, useContext } from 'react';

// Create User Context
/**
 *
 */
const UserContext = createContext();

// Create UserProvider Component
/**
 * A component that provides user information through context.
 */
const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState('John Doe'); // Default name

    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserContext.Provider>
    );
};

// Child Component that consumes UserContext
/**
 * Represents a functional component for updating and displaying user name.
 * Uses the UserContext to access and set the user name.
 * Provides a button to trigger a prompt for entering a new user name.
 * When a new user name is entered and submitted, the user name is updated using setUserName.
 *
 * @returns {JSX.Element} The JSX element containing the component UI for user name management.
 */
const ChildComponent = () => {
    const { userName, setUserName } = useContext(UserContext);

    const handleChangeName = () => {
        const newName = prompt("Enter new user name:", userName);
        if (newName) {
            setUserName(newName);
        }
    };

    return (
        <div>
            <h2>User Name: {userName}</h2>
            <button onClick={handleChangeName}>Change Name</button>
        </div>
    );
};

// Main App Component
const App = () => {
    return (
        <UserProvider>
            <h1>User Context Example</h1>
            <ChildComponent />
        </UserProvider>
    );
};

export default App;
