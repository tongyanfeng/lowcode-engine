import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'counterAPI',
        'ts',
        `
// A mock function to mimic making an async request for data
export const fetchCount = async (amount = 1) => {
    const response = await fetch("http://localhost:8000/api/counter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
    });
    const result: { data: number } = await response.json();

    return result;
};
    `,
    );

    return [['src', 'models', 'counter'], file];
}

