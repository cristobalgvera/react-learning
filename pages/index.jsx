import React from 'react';
import Link from 'next/link';

const IndexPage = () => (
    <div>
        <h1>The Main Page</h1>
        <Link href={'/auth'}>Auth</Link>
    </div>
);

export default IndexPage;