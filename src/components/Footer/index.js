import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import footerLinks from './data';
import { CustomOption, CustomSelect, SelectWrapper, SelectIcon, FooterWrapper } from './styles';

const Footer = () => {
    return (
        <FooterWrapper>
            <Container maxWidth="md">
                <Typography color="textSecondary">
                    Question? Call 077-803-321-2130
                </Typography>

                <br />

                <Grid direction="row" container spacing={1}>
                    {
                        footerLinks.map((link, index) => (
                            <Grid key={index} item xs={6} sm={4} md={3}>
                                <Typography color="textSecondary" variant="subtitle2">
                                    {link.title}
                                </Typography>
                            </Grid>
                        ))
                    }
                </Grid>

                <SelectWrapper>
                    <SelectIcon />
                    <CustomSelect>
                        <CustomOption value="1">Indonesia</CustomOption>
                        <CustomOption value="2">English</CustomOption>
                    </CustomSelect>
                </SelectWrapper>

                <Typography color="textSecondary">
                    Netflix Indonesia
                </Typography>
            </Container>
        </FooterWrapper>
    )
}

export default Footer
