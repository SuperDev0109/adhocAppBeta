import React, { Fragment, useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRscan = () => {
    const [data, setData] = useState('No result');

    return (
        <Fragment>
            <QrReader
                onResult={(result, error) => {
                if (!!result) {
                    setData(JSON.parse(result?.data).tableID);
                }

                if (!!error) {
                    console.info(error);
                }
                }}
                style={{ width: '100%' }}
            />
            <p>{data}</p>
        </Fragment>
    )
}

export default QRscan;