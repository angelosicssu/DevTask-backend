const tasks = [
    {
        id: 1,
        title: "Estudar Node.js",
        completed: false
    },
    {
        id: 2,
        title: "Estudar Docker",
        completed: false
    }
];

export function getTasksService() {
    return tasks;
}

export function getTasksByIdService(id: Number) {
    const indice = tasks.findIndex(task => task.id === id);
    if(indice !== 1) {
        const taskEncontrada = tasks[indice];
        return taskEncontrada;
    }
}