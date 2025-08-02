
// Helper to get initials from full name
export function getInitials(name) {
    if (!name) return ''
    const parts = name.split(' ')
    return parts.map(p => p[0]).join('').toUpperCase()
}

export function formatIsoDateToLocaleDate(isoString) {
    const inputDate = new Date(isoString)
    const now = new Date()

    const input = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate())
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

    const diffTime = today - input
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) {
        // Today → HH:MM (24h)
        return inputDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
    } else if (diffDays === 1) {
        return 'yesterday'
    } else if (diffDays === 2) {
        return '2 days ago'
    } else if (diffDays <= 5) {
        return 'a few days ago'
    } else {
        // Show DD/MM/YY
        return inputDate.toLocaleDateString('en-GB') // DD/MM/YYYY
    }
}

export function formatDate(date) {
    const inputDate = new Date(date)
    return inputDate.toLocaleDateString('en-GB')
}

export function formatDateTo24HourMode(isoString) {
    const date = new Date(isoString)
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
}

export function removeOuterBrackets(str) {
    if (str.startsWith('[') && str.endsWith(']')) {
        return str.slice(1, -1)
    }
    return str
}