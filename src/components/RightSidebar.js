import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const RightSidebar = ({category}) => {

    const theme = useTheme();

    return (
        <div className="right-sidebar">
            <Typography id="right-sidebar-content">
            {category}
            </Typography>
        </div>
    )
}

export default RightSidebar;