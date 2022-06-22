import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from 'react-router-dom';
//layout
import MainLayout from '../layout';

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
                { path: 'order', element: <OrderPage /> },
                { path: 'finishorder', element: <FinishOrderPage /> },
            ]
        }
    ])
}

const HomePage = Loadable(lazy(() => import('../pages/Home')));
const ProductPage = Loadable(lazy(() => import('../pages/Product')));
const OrderPage = Loadable(lazy(() => import('../pages/Order')));
const FinishOrderPage = Loadable(lazy(() => import('../pages/FinishOrder')));