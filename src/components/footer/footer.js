import React from 'react';
import './footer.scss'
const FooterComp = () => {
    return (
        <footer className="appFooter">
            <p>This is the footer of the application &copy; {new Date().getFullYear()}</p>
            </footer>

    );
}

export default FooterComp;