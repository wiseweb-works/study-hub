'use server';

import { currentUser } from '@clerk/nextjs/server';

export const createNote = async (formData: FormData) => {
    const user = await currentUser();
    if (!user) {
        throw new Error('User not authenticated');
    }
    const { id } = user;
    const title = formData.get('title');
    const categoryId = formData.get('category');
    const content = formData.get('content');
    console.log(id);
};
