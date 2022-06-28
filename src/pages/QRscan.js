import React, { Fragment, useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRscan = () => {
    const [data, setData] = useState('No result');

    return (
        <Fragment>
            
            <QrReader
                onResult={(result, error) => {
                if (!!result) {

                    alert("Site url: "+JSON.parse(result?.text).siteUrl+"\n"+"Table ID: "+JSON.parse(result?.text).tableID);
                    window.location.href(JSON.parse(result?.text).siteUrl);
                    // setData(result?.text);
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