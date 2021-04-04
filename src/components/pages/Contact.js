import React from "react";
import "../css/style.css";
import Mainbox from "../pagesComponents/ContactPage/mainbox";
import Row from "../pagesComponents/ContactPage/row";
import Col from "../pagesComponents/ContactPage/col";
import Form from "../pagesComponents/ContactPage/form";
import Button from "../pagesComponents/ContactPage/button";
import ContactText from "../pagesComponents/ContactPage/contactText";
import Container from "../pagesComponents/ContactPage/container";
import OuterRow from "../pagesComponents/ContactPage/outerRow";



const Contact = () => (
  <Container>
    <OuterRow>
      <Mainbox>
        <Row>
         <Col>
            <ContactText/>
            <Form/>
            </Col>
        </Row>
        <Row>
            <Col>
             <Button/>
            </Col>
        </Row>
      </Mainbox>
      </OuterRow>
    </Container>
 
);

export default Contact;