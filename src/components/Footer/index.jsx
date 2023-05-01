import React, { forwardRef } from 'react';
import styled from 'styled-components';

const FooterContainer = ({ className, width, height }, ref) => {
    console.log(width);
    return (
        <div className={className} ref={ref}>
            <div className="footer-middle" >
                <div className="container">
                    <div className="row">
                        {/* Column 1*/}
                        <div className="col-md-3 col-sm-6">
                            <h1>React JS</h1>
                            <p>You can Learn ReactJS Everytime Everywhere
                                You Always have to Ready
                            </p>
                        </div>
                        {/* Column 2*/}
                        <div className="col-md-3 col-sm-7">
                            <h4>Program</h4>
                            <ul className="list-unstyled">
                                <li>Achievement</li>
                                <li>Bootcamp</li>
                                <li>Training</li>
                                <li>Webinar</li>
                            </ul>
                        </div>
                        {/* Column 3*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>Bidang Ilmu</h4>
                            <ul className="list-unstyled">
                                <li>IoT</li>
                                <li>ReactJS</li>
                                <li>Flutter</li>
                                <li>DataAnalyst</li>
                            </ul>
                        </div>
                        {/* Column 4*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>Tentang Kami</h4>
                            <ul className="list-unstyled">
                                <li>wilayah</li>
                                <li>OnSite</li>
                                <li>Online</li>
                                <li>Others</li>
                            </ul>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

const refFooter = forwardRef(FooterContainer)

export default styled(refFooter)`
.footer-middle {
    background: --var(--mainDark);
    padding-top: 3rem;
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
`;
