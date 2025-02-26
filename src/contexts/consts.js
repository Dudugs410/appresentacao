import { createContext, useState, useEffect } from 'react';

export const ConstsContext = createContext({
    db: [],
    setDb: () => {},
});

function ConstsProvider({ children }) {

    const [db, setDb] = useState(JSON.parse(localStorage.getItem('db')) ?? []);
    const [editObj, setEditObj] = useState({})
    const [deleteObj, setDeleteObj] = useState({})

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