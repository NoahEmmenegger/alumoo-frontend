import axios from 'axios';

const baseUri = 'https://alumoo-backend-api.azurewebsites.net/api/';

export async function acceptApplication(volunteerId, taskId) {
    const res = await axios.post(`${baseUri}Task/acceptApplication`, { volunteerId, taskId });
    return res.data;
}

export async function denyApplication(volunteerId, taskId) {
    const res = await axios.delete(`${baseUri}Task/denyApplication`, { volunteerId, taskId });
    return res.data;
}

export async function addApplication(volunteerId, taskId) {
    const res = await axios.post(`${baseUri}Task/addApplication`, { volunteerId, taskId });
    return res.data;
}

export async function getApplicationsFromTaskId(taskId) {
    // const res = await axios.get(`${baseUri}Task/getApplicantsByTaskId?taskId=${taskId}`);
    // return res.data;

    return new Promise((res, rej) => {
        setTimeout(() => {
            res([
                { firstname: 'vORNAME', lastname: 'Nachname', id: 1 },
                { firstname: 'vORNAME', lastname: 'Nachname', id: 2 },
            ]);
        }, 1000);
    });
}
