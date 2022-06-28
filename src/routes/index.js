import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from 'react-router-dom';
//layout
import MainLayout from '../layout';
import EmptyLayout from '../emptyLayout';

const Loadable = (Component) => (props) => {
    return (
        <Suspense>
            <Component {...props} />
        </Suspense>
    )
}

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { element: <Navigate to="/home" replace />, index: true },
                { path: 'home', element: <HomePage /> },
                { path: 'product', element: <ProductPage /> },
                { path: '404', element: <Show404Page /> },
                { path: 'qrscan', element: <QRscan /> },
            ]
        }
    ])
}

const HomePage = Loadable(lazy(() => import('../pages/Home')));
const ProductPage = Loadable(lazy(() => import('../pages/Product')));
const OrderPage = Loadable(lazy(() => import('../pages/Order')));
const FinishOrderPage = Loadable(lazy(() => import('../pages/FinishOrder')));
//error page
const Show404Page = Loadable(lazy(() => import('../pages/Show404')));
const QRscan = Loadable(lazy(() => import('../pages/QRscan')));