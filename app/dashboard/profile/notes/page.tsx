const notes = [
    {
        id: 1,
        title: 'React Basics',
        subject: 'Web Development',
        createdAt: '2024-06-01',
        updatedAt: '2024-06-05',
        status: 'Published',
    },
    {
        id: 2,
        title: 'Linear Algebra Summary',
        subject: 'Mathematics',
        createdAt: '2024-05-20',
        updatedAt: '2024-05-22',
        status: 'Draft',
    },
    {
        id: 3,
        title: 'World War II Notes',
        subject: 'History',
        createdAt: '2024-04-15',
        updatedAt: '2024-04-18',
        status: 'Published',
    },
    {
        id: 4,
        title: 'Organic Chemistry',
        subject: 'Chemistry',
        createdAt: '2024-03-10',
        updatedAt: '2024-03-12',
        status: 'Draft',
    },
];

export default function Page() {
    return (
        <section className="p-3 sm:p-5 antialiased">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Study Notes
                        </h2>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-medium">
                            + New Note
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th className="px-4 py-3">Title</th>
                                    <th className="px-4 py-3">Subject</th>
                                    <th className="px-4 py-3">Created</th>
                                    <th className="px-4 py-3">Updated</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {notes.map(note => (
                                    <tr key={note.id} className="border-b dark:border-gray-700">
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {note.title}
                                        </td>
                                        <td className="px-4 py-3">{note.subject}</td>
                                        <td className="px-4 py-3">{note.createdAt}</td>
                                        <td className="px-4 py-3">{note.updatedAt}</td>
                                        <td className="px-4 py-3">
                                            <span
                                                className={`px-2 py-1 rounded text-xs font-semibold ${
                                                    note.status === 'Published'
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-yellow-100 text-yellow-700'
                                                }`}
                                            >
                                                {note.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 flex items-center justify-end gap-2">
                                            <button className="text-blue-600 hover:underline text-xs">
                                                Edit
                                            </button>
                                            <button className="text-gray-600 hover:underline text-xs">
                                                View
                                            </button>
                                            <button className="text-red-600 hover:underline text-xs">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {notes.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={6}
                                            className="px-4 py-8 text-center text-gray-400"
                                        >
                                            No notes found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
