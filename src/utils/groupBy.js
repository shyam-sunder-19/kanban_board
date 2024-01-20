export const groupBy = (data, key) => {
    const groupedData = {}
    groupedData.groups = {}
    groupedData.groupedBy = key
    groupedData.users = data.users
    if (key === 'priority') {
        for(let i = 0; i <= 4; i++){
            groupedData.groups[i] = []
        }
        data["tickets"].forEach( el => {
            groupedData.groups[el.priority].push(el)
        })
    } else if (key === 'user') {
        for(let i = 0; i < data.users.length; i++){
            groupedData.groups[data.users[i]['id']] = []
        }
        data["tickets"].forEach( el => {
            groupedData.groups[el.userId].push(el)
        })
    } else {
        groupedData.groups.Backlog = []
        groupedData.groups.Todo = []
        groupedData.groups['In progress'] = []
        groupedData.groups.Done = []
        groupedData.groups.Canceled = []
        // console.log(data["tickers"])
        data["tickets"].forEach( el => {
            groupedData.groups[el.status].push(el)
        })
    }
    return groupedData
}