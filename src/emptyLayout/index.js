import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

export default function EmptyLayout() {
    return (
        <Fragment>
            <Outlet />
        </Fragment>
    )
}