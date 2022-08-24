const PREFIX = 'TODO_LIST_';

export interface TodoData {
    title: string
    content: string
    isDone: boolean
    timestamp: number
}

export function saveData(name: string, data: TodoData[]): void {
    localStorage.setItem(`${PREFIX}${name}`, JSON.stringify(data));
}

export function getData(name: string): TodoData[] {
    const data = localStorage.getItem(`${PREFIX}${name}`) || '';
    if (!data) {
        return [];
    }
    return JSON.parse(data);
}
