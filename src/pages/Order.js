import React, { Fragment } from 'react';
import { OrderTitle, OrderContent, OrderComplete, SpecialMention, OrderSummary } from '../sections/order';

export default function Order() {
    return (
        <Fragment>
            
            <OrderTitle title="My Order" />
            <div className='container'>

                <OrderContent />

                <OrderComplete />

                <SpecialMention />

                <OrderSummary />

            </div>

        </Fragment>
    )
}