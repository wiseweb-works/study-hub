const studyPlans = [
    {
        id: 1,
        title: 'Frontend Mastery',
        description: 'A 4-week plan to master React, TypeScript, and CSS.',
        subjects: ['React', 'TypeScript', 'CSS'],
        progress: 60,
        active: true,
    },
    {
        id: 2,
        title: 'Backend Bootcamp',
        description: 'Learn Node.js, Express, and MongoDB in 6 weeks.',
        subjects: ['Node.js', 'Express', 'MongoDB'],
        progress: 20,
        active: false,
    },
];

export default function Page() {
    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">My Study Plans</h1>
            <div className="grid gap-6">
                {studyPlans.map(plan => (
                    <div
                        key={plan.id}
                        className={`rounded-lg border p-6 shadow-sm transition ${
                            plan.active
                                ? 'border-green-500 bg-green-50'
                                : 'border-gray-200 bg-white'
                        }`}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-xl font-semibold">{plan.title}</h2>
                            <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    plan.active
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-gray-100 text-gray-500'
                                }`}
                            >
                                {plan.active ? 'Active' : 'Inactive'}
                            </span>
                        </div>
                        <div className="mb-2 text-gray-700">{plan.description}</div>
                        <div className="mb-4">
                            <span className="font-medium">Subjects:</span>{' '}
                            {plan.subjects.join(', ')}
                        </div>
                        <div className="mb-4">
                            <span className="font-medium">Progress:</span> {plan.progress}%
                            <div className="w-full bg-gray-200 rounded h-2 mt-1">
                                <div
                                    className="bg-green-500 h-2 rounded"
                                    style={{ width: `${plan.progress}%` }}
                                />
                            </div>
                        </div>
                        {!plan.active && (
                            <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                                Resume Plan
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
