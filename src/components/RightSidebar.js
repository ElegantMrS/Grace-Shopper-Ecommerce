import React from 'react';

const RightSidebar = ({category}) => {
    
    return (
        <div className="right-sidebar">
            <p id="right-sidebar-content" 
            >{category}</p>
        </div>
    )
}

export default RightSidebar;