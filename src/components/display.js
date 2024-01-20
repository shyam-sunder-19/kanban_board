import React from 'react';
import Heading from './heading';
import Card from './card';

const Display = ({ displayData }) => {
    const { groupedBy, groups, users } = displayData;
    let status = false
    let user = false
    let priority = false    

    if (groupedBy === 'status') {
        status = true
    } else if (groupedBy === 'user') {
        user = true 
    } else {
        priority = true
    }

    const getUser = (userId) => {
        const result = users.find(item => item.id === userId)
        return result
    }

    const getPriority = (pri) => {
        if (pri == 4) {
            return 'Urgent'
        } else if (pri == 3) {
            return 'High'
        } else if (pri == 2) {
            return 'Medium'
        } else if (pri == 1) {
            return 'Low'
        } else {
            return 'No Priority'
        }
    }
    console.log(priority)
    return (
        <div className='display'>
        {
            status?
                Object.keys(groups).map((groupName) => (
                    <div key={groupName} className="group">
                        <Heading headingName={groupName} count={groups[groupName].length} groupedby={'status'}/>
                        <div>
                            {groups[groupName].map((member) => (
                            <Card id={member.id} title={member.title} tag={member.tag} groupedby={'status'} online={getUser(member.userId).available}/>
                            ))}
                        </div>
                    </div>
                ))
            : user?
                Object.keys(groups).map((groupName) => (
                    <div key={groupName} className="group">
                        <Heading headingName={getUser(groupName).name} count={groups[groupName].length} groupedby={'user'} online={getUser(groupName).available}/>
                        <div>
                            {groups[groupName].map((member) => (
                            <Card id={member.id} title={member.title} tag={member.tag} groupedby={'user'}/>
                            ))}
                        </div>
                    </div>
                ))
            :
                Object.keys(groups).map((groupName) => (
                    <div key={groupName} className="group">
                        <Heading headingName={getPriority(groupName)} count={groups[groupName].length} groupedby={'priority'}/>
                        <div>
                            {groups[groupName].map((member) => (
                            <Card id={member.id} title={member.title} tag={member.tag} groupedby={'priority'} online={getUser(member.userId).available}/>
                            ))}
                        </div>
                    </div>
                ))                  
        }
        </div>
    );
};

export default Display;