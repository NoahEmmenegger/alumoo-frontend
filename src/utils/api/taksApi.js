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
