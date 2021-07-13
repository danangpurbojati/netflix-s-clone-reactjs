import React, { useState } from 'react';
import Container from '@material-ui/core/Container';

import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import accordionItems from './data';
import { AccordionMargin, AccordionTittle, CustomAccordion, OpenIcon, CloseIcon } from './styles';

const HomeAccordion = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container maxWidth="sm">            
            <AccordionMargin>
                <Typography align="center" variant="h4">
                    Frequentry Asked Question
                </Typography>

                {
                    accordionItems.map((item, index) =>(
                        <CustomAccordion
                            key={index}
                            expanded={expanded === index} 
                            onChange={handleChange(index)}
                        >
                            <AccordionSummary
                                expandIcon={expanded === index ? <CloseIcon /> : <OpenIcon />}
                            >
                                <AccordionTittle>{item.title}</AccordionTittle>
                            </AccordionSummary>
                            <Divider />
                            <AccordionDetails>
                                <AccordionTittle>
                                    {item.content}
                                </AccordionTittle>
                            </AccordionDetails>
                        </CustomAccordion>
                    ))
                }
            </AccordionMargin>
        </Container>
    )
}

export default HomeAccordion
