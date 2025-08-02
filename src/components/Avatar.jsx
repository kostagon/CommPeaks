import React from 'react'
import { getInitials } from '../services/util.service'

function Avatar({ fullName }) {
    const initials = getInitials(fullName)
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

export default Avatar
