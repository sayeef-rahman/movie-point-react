import React from 'react';
import Banner from '../home/components/banner/banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <Trending />
            <Popular />
            <HeroBanner />
            <TopRated />
        </div>
    );
};

export default Home;