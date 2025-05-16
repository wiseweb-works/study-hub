export default function DashboardPage() {
    const stats = [
        { title: 'Plans', value: 5, description: 'Active study plans' },
        { title: 'Notes', value: 12, description: 'Saved notes' },
        { title: 'Progress', value: '75%', description: 'Completed' },
        { title: 'Study Hours', value: 120, description: 'Total hours logged' },
    ];

    const quote =
        '“Success is the sum of small efforts, repeated day in and day out.” – Robert Collier';

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <blockquote className="italic text-gray-600 my-8">{quote}</blockquote>
            <section>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map(stat => (
                        <div key={stat.title} className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold">{stat.title}</h2>
                            <p className="text-4xl font-bold m-0">{stat.value}</p>
                            <p className="text-gray-500 mt-2">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
