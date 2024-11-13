import React from 'react';

export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="copyright">
                            &copy; {new Date().getFullYear()} <strong><span>NiceAdmin</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
