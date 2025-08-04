import React from 'react'
import { getInitials } from '../services/util.service'

function Avatar({ fullName }) {
    const initials = getInitials(fullName)
    return (
        <div
            className="avatar full"
        >
            {initials}
        </div>
    )
}

export default Avatar
