import React from 'react'

const DropDown = ({grouping, ordering, handleGroupingChange, handleOrderingChange}) => {

    return (
        <form className='form'>
            <div className='formel'>
                <label className='label' htmlFor="grouping">Grouping:</label>
                <select id="grouping" name="grouping" value={grouping} onChange={handleGroupingChange}>
                    <option value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                </select>
            </div>

            <div className='formel'>
                <label className='label' htmlFor="ordering">Ordering:</label>
                <select id="ordering" name="ordering" value={ordering} onChange={handleOrderingChange}>
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                </select>
            </div>
        </form>
    )
}

export default DropDown