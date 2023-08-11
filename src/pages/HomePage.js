import React from 'react';
import styled from 'styled-components';
import HomeBanner from '../module/Home/HomeBanner';
import Layout from '../components/layout/Layout';
import HomeFeature from '../module/Home/HomeFeature';
import HomeNewest from '../module/Home/HomeNewest';

const HomePageStyles = styled.div`
    
`;

const HomePage = () => {
   
    return <HomePageStyles>
           <Layout>
             <HomeBanner></HomeBanner>
             <HomeFeature></HomeFeature>
             <HomeNewest></HomeNewest>
           </Layout>
          
        </HomePageStyles>
    
};

export default HomePage;