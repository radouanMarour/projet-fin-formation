import React from 'react';
import { useStateContext } from '../../context/ContextProvider';

function Home() {
    const { user } = useStateContext()
    return (
        <h1>Welcome <strong>{user.name}</strong></h1>
    )
}

export default Home