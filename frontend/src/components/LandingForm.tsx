import React, {ReactNode} from 'react';
import Slide from 'react-reveal/Slide';
import {Container, SectionCarrer,}   from './LandingFormStyle';
import {Fade} from "@mui/material";
import foto from '../assets/foto.jpg';
import {Button} from "@material-ui/core";
import {useNavigate} from "react-router-dom";

function TitleSection(props: { children: ReactNode }) {
    let children;
    return <Fade >
        <h2>{children}</h2>
    </Fade>;
}
interface Props {}
const LandingForm: React.FC <Props> = props =>{
    const nav= useNavigate();

    return (

    <Container>

        <SectionCarrer id="carrer">
            <TitleSection>Carreira e Relacionamento</TitleSection>

            <div className="wrapper">
                <Slide left>
                    <div className="foto">
                        <img src={foto} alt="Carreira e Relacionamento" />
                    </div>
                </Slide>
                <Slide right>
                    <p className="description">
                        Welcome to my students project:
                        <br /> <br />
                        <br /> <br />
                        <div className="buttons">
                            <Button variant="text" onClick={() =>nav ('/register')}>
                                Lets go
                            </Button>
                        </div>
                        <br /> <br />
                        <strong> Special Thanks to Anre and Thomas </strong>
                        <br />
                        <strong>und alle Neue Fische! </strong>
                     {/*   <br /> <br />
                        Lets Go!*/}
                    </p>

                </Slide>


            </div>
        </SectionCarrer>
    </Container>
);
};
export default LandingForm;

