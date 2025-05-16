const favorites = [
    {
        id: 1,
        type: 'note',
        title: 'React Hooks',
        description: 'Learn about useState and useEffect.',
    },
    {
        id: 2,
        type: 'plan',
        title: 'Study TypeScript',
        description: 'Complete TypeScript course by next week.',
    },
];

export default function FavoritesPage() {
    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-6">Your Favorites</h1>
            <div className="grid gap-4">
                {favorites.map(fav => (
                    <div
                        key={fav.id}
                        className="border rounded-lg p-4 bg-white shadow flex flex-col gap-2"
                    >
                        <span className="text-xs uppercase text-gray-500 font-semibold">
                            {fav.type === 'note' ? 'Note' : 'Plan'}
                        </span>
                        <h2 className="text-lg font-semibold">{fav.title}</h2>
                        <p className="text-gray-700">{fav.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
