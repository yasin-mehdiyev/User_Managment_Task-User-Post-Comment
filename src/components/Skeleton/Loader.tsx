import React, { Fragment } from 'react'
import { Skeleton } from '@material-ui/lab';

const Loader : React.FC = () => {
    return (
        <Fragment>
            {
                Array(3)
                .fill(1)
                .map((_, i) => (
                    <div style={{ borderRadius: '8px' }} key={i + 1}>
                        <Skeleton variant='rect' width='100%' height={156} />
                        <Skeleton
                            variant='text'
                            height='1.5rem'
                            style={{ marginBottom: '1rem', marginTop: '1rem' }}
                        />
                        <Skeleton
                            variant='text'
                            height='1.5rem'
                            style={{ marginBottom: '0.5rem' }}
                        />
                        <Skeleton
                            variant='text'
                            height='1.5rem'
                            style={{ marginBottom: '0.5rem' }}
                        />
                    </div>
                ))
            }
        </Fragment>
    )
}

export default Loader
