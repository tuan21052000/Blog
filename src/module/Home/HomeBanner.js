import React from 'react';
import styled from 'styled-components';
import { Button } from '../../components/button';

const HomeBannerStyles = styled.div`
    height: 520px;
    padding: 40px 0;
    background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.primary},
        ${(props) => props.theme.secondary}
    );
    .banner-content{
        max-width: 400px;
        color: white;
    }
    margin-bottom: 60px;
    .banner{
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-content{
          max-width: 600px;
          color: white;
        }
        &-heading{ 
            font-size: 36px;
            margin-bottom: 20px;
        }
        &-desc{
            line-height: 1.75;
            margin-bottom: 40px;
        }
    }
`;
const HomeBanner = () => {
    return (
        <HomeBannerStyles>
            <div className='container'>
                <div className="banner">
                    <div className="banner-content">
                        <h1 className='banner-heading'>Monkey Blogging</h1>
                        <p className='banner-desc'>Lorem ipsum dolor, sit amet consectetur
                         adipisicing elit. Eum aut commodi, ab iure perspiciatis, similique non, 
                         fugiat quaerat incidunt dolorem repudiandae eligendi. Dignissimos id nihil
                          obcaecati optio ipsum molestiae. Et.</p>
                          <Button to="/sign-up" kind="secondary">Get Started</Button>
                    </div>
                    <div className="banner-image">
                        <img src="/img-banner.png" alt="banner" />
                    </div>
                </div>
            </div>
        </HomeBannerStyles>
    );
};

export default HomeBanner;