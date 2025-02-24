import { createContext, useState, useEffect } from 'react';

export const ConstsContext = createContext({
    db: [],
    setDb: () => {},
});

function ConstsProvider({ children }) {
    // Initialize db from localStorage or default to an empty array
    const [db, setDb] = useState(JSON.parse(localStorage.getItem('db')) ?? []);
    const [editObj, setEditObj] = useState({})
    const [deleteObj, setDeleteObj] = useState({})
    // Sync db with localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('db', JSON.stringify(db));
    }, [db]);

    return (
        <ConstsContext.Provider
            value={{
                db,
                setDb,

                editObj,
                setEditObj,

                deleteObj,
                setDeleteObj,
            }}
        >
            {children}
        </ConstsContext.Provider>
    );
}

export default ConstsProvider;