import React, { useState } from 'react';

const Navbar = ({ dropDown }) => {
    const [isFormVisible, setFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setFormVisible((prevVisibility) => !prevVisibility);
    };

    return (
        <div className="navbar">
            <button onClick={toggleFormVisibility}>Display</button>
            { isFormVisible && dropDown }
        </div>
    )
}

export default Navbar