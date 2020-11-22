import React from 'react';
import Link from 'next/link';

const Error = () => (
    <div>
        <h1>Oops, something went wrong.</h1>
        <p>Try <Link href={'/'}>going back</Link></p>
    </div>
);

export default Error;