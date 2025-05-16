declare type FormDataType = {
    get: (key: string) => string;
};

declare type Note = {
    id: number;
    title: string;
    subject: string;
    createdAt: string;
    updatedAt: string;
    status: 'Draft' | 'Published';
};
