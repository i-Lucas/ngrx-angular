export function getEntities() {
    return _entities;
}

export function setEntities(entities: Todo[]) {
    _entities = entities;
}

let _entities: Todo[] = [
    {
        id: 200,
        createdAt: new Date(1599344794571),
        title: 'Delectus aut autem',
        done: false,
    },
    {
        id: 199,
        createdAt: new Date(1599308134571),
        title: 'Quis ut nam facilis et officia qui',
        done: false,
    },
    {
        id: 198,
        createdAt: new Date(1599271474571),
        title: 'Fugiat veniam minus',
        done: false,
    }
];
