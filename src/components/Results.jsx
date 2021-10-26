import React, { useEffect } from 'react';
import { useLoaction } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Loading from './Loading'

import { useResultContext } from '../contexts/ResultContextProvider'

const Results = () => {
    const { results, isLoading, getResults, searchTerm } = useResultContext()
    const location = useLoaction();

    if(isLoading) return <Loading />;

    return (
        <div>
            React Results
        </div>
    )
}

export default Results
