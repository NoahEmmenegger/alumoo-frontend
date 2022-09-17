export function getSuggestions() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([
                {
                    id: 1,
                    title: 'Read me a bedtime story',
                    isRemote: true,
                    location: '',
                },
                {
                    id: 2,
                    title: 'Old woman wants to cross the road!',
                    isRemote: false,
                    location: 'Rotkreuz',
                },
            ]);
        }, 1000);
    });
}

export function getMyTasks() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([
                {
                    id: 1,
                    title: 'My task',
                    isRemote: true,
                    location: '',
                },
                {
                    id: 2,
                    title: 'Other task',
                    isRemote: false,
                    location: 'Rotkreuz',
                },
            ]);
        }, 1000);
    });
}

export async function createProjectCall(project) {
    res = await fetch('https://api-server.loca.lt/api/Project/createProject', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
    })
    .then((data) => {
        console.log(JSON.stringify(data));
    })
    .catch(error => {
        console.log(error);
    })
}

export async function setupSkillsCall(skillsUpdate) {
    res = await fetch('https://api-server.loca.lt/api/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(skillsUpdate)
    })
    .then((data) => {
        console.log(JSON.stringify(data));
    })
    .catch(error => {
        console.log(error);
    })
}