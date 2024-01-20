import { groupBy } from "./groupBy"
import { orderBy } from "./orderBy"

export const fetchData = async () => {
    const grouping = localStorage.getItem('grouping') ? localStorage.getItem('grouping') : 'status'
    const ordering = localStorage.getItem('ordering') ? localStorage.getItem('ordering') : 'priority'
    console.log(grouping, ordering)
    
    try {
        const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
        if (!response.ok) {
            throw new Error(`Error fetching data. Status: ${response.status}`)
        }
        const data = await response.json();
        const groups = groupBy(data, grouping)
        const ordered_groups = orderBy(groups, ordering)
        return ordered_groups;
    } catch (error) {
        console.error('Error fetching data:', error.message)
        throw error
    }
}