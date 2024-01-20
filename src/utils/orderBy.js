export const orderBy = (data, key) => {
    
    if (key === 'priority' && data.groupedBy === 'priority') {
        return data
    }

    if (key === 'priority') {
        for (const key_ in data.groups) {
            data.groups[key_].sort((a, b) => b.priority - a.priority)
        }
    }

    if (key === 'title') {
        for (const key_ in data.groups) {
            data.groups[key_].sort((a, b) => a.title.localeCompare(b.title))
        }
    }

    return data
}