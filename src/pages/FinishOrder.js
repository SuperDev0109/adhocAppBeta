import React, { Fragment } from 'react';
import OrderTitle from '../sections/order/OrderTitle';
import { FinishPayment, FinishTips, FinishDiscount, FinishInvoice, FinishSummary } from '../sections/finishOrder';

export default function FinishOrder() {
    return (
        <Fragment>
            <OrderTitle title="Finish Order" />
            <div className='container'>

                <FinishPayment />

                <FinishTips />

                <FinishDiscount />

                <FinishInvoice />

                <FinishSummary />

            </div>
        </Fragment>
    )
}