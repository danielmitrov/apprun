import Docker from 'dockerode';

const APPRUN_CONTAINER_NAME = "/apprun";


class DockerService {
    #docker: Docker;

    constructor() {
        this.#docker = new Docker({socketPath: '/var/run/docker.sock'});
    }

    async getRunningContainers(): Promise<Docker.ContainerInfo[]> {
        return new Promise((resolve, reject) => {
            const filters = {
                status: "running",
            };

            this.#docker.listContainers(filters, (err, containers) => {
                if (err) {
                    return reject(err);
                }
                const containersList = containers.filter(container => !container.Names.includes(APPRUN_CONTAINER_NAME));
                resolve(containersList);
            });
        });
    }
}

export default (new DockerService());