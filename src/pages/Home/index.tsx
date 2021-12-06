import React from 'react';

type RoutesProps = {
    title?: string;
};

const Home = ({ title = 'Hello World' }: RoutesProps) => {
    return <h1>{title}</h1>;
};

export default Home;
