import React from 'react';
import Link from 'next/link';

function Error() {
  return (
      <div>
          <Link href="/">
            <div>Please Login Before You Proceed Further</div>
          </Link>
      </div>
    
  )
}

export default Error