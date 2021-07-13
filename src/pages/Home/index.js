import React from 'react';
import { CustomDivider, HeroTextWrapper } from './styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MenuService from '../../components/MenuService';
import HomeAccordion from '../../components/HomeAccordion';
import HomeForm from '../../components/HomeForm';
import Hero from '../../components/Hero';

const Home = () => {
    return (
        <div>
            <Hero>
                <HeroTextWrapper>
                    <Typography gutterBottom variant="h5">
                        Welcome Back!
                    </Typography>
                    <Typography gutterBottom variant="h4">
                        Unlimeted movies, TV shows, and more.
                    </Typography>
                    <Typography gutterBottom variant="h5">
                        Watch anywhere. Cancel anytime.
                    </Typography>
                    
                    <HomeForm />
                </HeroTextWrapper>
            </Hero>

            <CustomDivider/>

            <MenuService divider={<CustomDivider/>} />

            <HomeAccordion />

            <Container maxWidth="md">
                <HomeForm />
            </Container>

            <CustomDivider/>
           
        </div>
    )
}

export default Home
