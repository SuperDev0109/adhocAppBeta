import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuthToken } from '../actions/auth';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAuthToken());
    }, [])

    return (
        <Fragment>
            Home Component
            
        </Fragment>
    )
}