import { CardFooter, Container, Row } from "react-bootstrap"
import xernom from '../img/xernomm.png'
import * as I from 'react-bootstrap-icons'
export const Footer = () => {
    return (
        <>
        <div className="bg-dark col-12 footer p-5">
                <div >
                    <div className="d-lg-flex align-items-center justify-content-center">
                        <div className="col-lg-4 col-sm-12 px-4">
                            <img src={xernom} alt="" className="col-6" />
                            <hr />
                            <p className="text-white">
                                Sutera Elok 1 No. 2A, Alam Sutera <br />
                                Tangerang Selatan, Banten, Indonesia
                            </p>
                        </div>
                        <div className="col-lg-3 col-sm-12 px-4">
                            <div className="d-flex">
                            <ul className="col-6">
                                <li>
                                <p className="lead primary fw-bold">
                                    Sitemap
                                 </p>
                                </li>
                                <li>
                                    <a href="" className=" text-white">Home</a>
                                </li>
                                <li>
                                    <a href="" className=" text-white">Introduction</a>
                                </li>
                                <li>
                                    <a href="" className=" text-white">About</a>
                                </li>
                                
                            </ul>
                            <ul className="col-6">
                                <li>
                                    <p className=" lead d-hidden">
                                        kosongan
                                    </p>
                                </li>
                                <li>
                                    <a href="" className=" text-white">Skills</a>
                                </li>
                                <li>
                                    <a href="" className=" text-white">Projects</a>
                                </li>
                                <li>
                                    <a href="" className=" text-white">Extras</a>
                                </li>
                            </ul>
                            </div>

                        </div>
                        <div className="col-lg-5 col-sm-12 px-4 justify-content-center d-flex align-items-center">
                        <div className="">
                            <div className="d-flex align-items-center mb-3">
                                <a className="mx-1 primary" href=""><I.Linkedin className="lead" /></a>
                                <a className="mx-1 primary" href=""><I.Instagram className="lead" /></a>
                                <a className="mx-1 primary" href=""><I.Tiktok className="lead" /></a>
                                <a className="mx-1 primary" href=""><I.Github className="lead" /></a>
                            </div>
                            <p className="text-white">
                                 &copy; Copyright <strong><span>Xernomm</span></strong>. All Rights Reserved
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
        </div>

        </>
    )
}