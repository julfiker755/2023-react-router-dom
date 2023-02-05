import React from 'react';
import {useMatch,useResolvedPath,Link} from 'react-router-dom'

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
        <Link
          style={{color:match ? 'green':'white',}}
          to={to}
          {...props}
        >
          {children}
        </Link>
    );
};

export default CustomLink;