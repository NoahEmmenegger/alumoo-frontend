import axios from 'axios';

const baseUri = 'https://alumoo-backend-api.azurewebsites.net/api/';

export async function getSuggestions() {
    return (await axios.get(`${baseUri}Suggestion/getSuggestedTasks?loadedTasks=0&volunteerId=293`)).data;
}

export function toggleStarTask() {}

export async function getMyTasks() {
    return (await axios.get(`${baseUri}Task/getFavoritTasks?volunteerId=293`)).data;
}

export function getMyprojects() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([
                {
                    projectId: 1,
                    title: 'PC Build',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus lacus in nisi pellentesque, eu aliquet nibh condimentum. Nullam efficitur.',
                },
                {
                    projectId: 2,
                    title: 'Doctors beyond borders',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus lacus in nisi pellentesque, eu aliquet nibh condimentum. Nullam efficitur.',
                },
            ]);
        }, 1000);
    });
}
export function getTask(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                id: 1,
                title: 'Old woman wants to cross the road!',
                description:
                    'I am an old lady who needs someone to help me cross the roads. Why did the old lady need to cross the road? To get to the other side of course.',
                isRemote: true,
                projectName: 'Grandma Project',
                owner: 'John Doe',
                location: '',
                skills: ['JavaScript', 'React', 'Node.js'],
            });
        }, 1000);
    });
}

export async function createProjectCall(project) {
    projectDatapoint = {
        title: project.title,
        description: project.description,
        userId: project.userId,
    };
    const res = await axios.post(
        `https://alumoo-backend-api.azurewebsites.net/api/Project/createProject`,
        projectDatapoint
    );

    createTasks(project.tasks, res.data);
}

export async function createTasks(tasks, projectId) {
    const res = axios.post(
        `https://alumoo-backend-api.azurewebsites.net/api/Task/createTasksForProject?projectId=${projectId}`,
        tasks
    );
}

export async function setupSkillsCall(skillsUpdate) {
    res = await fetch('https://alumoo-backend-api.azurewebsites.net/api/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(skillsUpdate),
    })
        .then((data) => {
            console.log(JSON.stringify(data));
        })
        .catch((error) => {
            console.log(error);
        });
}

export async function getProjectById(id) {
    //axios.get(baseUri + '');
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                id: 1,
                title: 'My task',
                description: 'lorem ipsum',
                tasks: [
                    {
                        id: 2,
                        title: 'Task',
                        description: 'lorem lorem',
                    },
                ],
            });
        }, 1000);
    });
}
