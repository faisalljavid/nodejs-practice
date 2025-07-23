import sanitizeHtml from 'sanitize-html'

function stripTags(input) {
    return input.replace(/<[^>]*>?/gm, '')
}

export const sanitizeInput = (data) => {
    const sanitizedData = {}
    for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'string') {
            if (key === 'text') {
                sanitizedData[key] = sanitizeHtml(value, { allowedTags: ['b'], allowedAttributes: [] })
            } else {
                sanitizedData[key] = stripTags(value)
            }
        } else {
            sanitizedData[key] = value
        }
    }
    return sanitizedData
}