// Auth Hook
import { useState, useEffect } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Simulate fetching user
        const userData = { name: 'John Doe' };
        setUser(userData);
    }, []);

    return { user };
};

export default useAuth;
