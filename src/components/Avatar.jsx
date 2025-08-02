import React from 'react'

export const Avatar = ({ initials }) => {
    return (
        <div
            className="avatar full"
            style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                background: 'var(--color-primary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '.9em',
                marginRight: 12,
            }}
        >
            {initials}
        </div>
    )
}
