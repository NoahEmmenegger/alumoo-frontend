import axios from 'axios';

const baseUri = 'https://alumoo-backend-api.azurewebsites.net/api/';

export async function getSuggestions() {
    return (await axios.get(`${baseUri}Suggestion/getSuggestedTasks?loadedTasks=0&volunteerId=293`)).data;
}

export async function toggleStarTask(taskId, volunteerId) {
    return await axios.post(`${baseUri}Task/toggleStarTask?volunteerId=${volunteerId}&taskId=${taskId}`, {
        volunteerId,
        taskId,
    });
}

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
export async function getTask(taskId) {
    return (await axios.get(`${baseUri}Task/getDetailedTaskById?taskId=${taskId}`)).data;
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
