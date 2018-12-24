import React from 'react';
import './styles.css';

const FetchFailure = ({stylingProperty}) => (
<div className={stylingProperty}>
Failed to fetch the movie details!
</div>
)

export default FetchFailure;
