import React from "react";
import "../css/portfolio.css"
import Container from "../pagesComponents/Container"
import Portfolio_Data from "../../utils/Portfolio_data"
import Image1 from "../pagesComponents/PortfolioPage/image1"
import Image2 from "../pagesComponents/PortfolioPage/image1"
import Viewsite from "../pagesComponents/PortfolioPage/viewsite";
import Viewcode from "../pagesComponents/PortfolioPage/viewcode";
import Titlerow from "../pagesComponents/PortfolioPage/titlerow";
import Mainbox from "../pagesComponents/PortfolioPage/mainbox";
import Row from "../pagesComponents/PortfolioPage/row";
import ProjectTitle from "../pagesComponents/PortfolioPage/projectTitle";

const Portfoilio = () => (
    <Mainbox>
        <Titlerow />
        {Portfolio_Data.map(data => {
            return (

                <Row className="portfolio-row">
                    <ProjectTitle>{data.projectTitleh3} <br /> <span id="service">{data.span} </span></ProjectTitle>
                    <div className="myphoto">
                        <div className="image-wrapper">
                            <div className="desk-image">
                                <Image1 src={data.image1} alt={data.projectTitleh3} />
                            </div>
                            <div className="mobile-image">
                                <Image2 src={data.image2} alt={data.projectTitleh3} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-sm-12">
                        <p className="techniques">{data.techniques} </p>
                    </div>
                    <div className="col-lg-12 col-sm-12 buttons">
                        <Viewsite href={data.viewSite}
                            title={data.projectTitleh3} />
                        <Viewcode href={data.viewCode}
                            title={data.projectTitleh3} />
                    </div>
                </Row>

            )
        })}

    </Mainbox>
   


);

export default Portfoilio ;
