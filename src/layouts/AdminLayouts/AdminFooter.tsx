import React from 'react';

const AdminFooter = ({Collapse}: {Collapse: Boolean}) => {
    return (
        <footer style={{marginLeft: Collapse? 80:350}}>
            <div className="footer-content">
                <div className="footer-text">
                    <p>© Create by MDung0807</p>
                </div>
            </div>
        </footer>
    );
};

export default AdminFooter;
