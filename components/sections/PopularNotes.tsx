export default function PopularNotes() {
    return (
        <section>
            <aside className="px-6 py-12 bg-white">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
                    Popular Notes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {Array(8)
                        .fill('')
                        .map((_, index) => (
                            <div
                                key={index}
                                className="rounded-xl p-6 shadow-sm hover:shadow-md transition"
                            >
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Data Structures
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    Summary notes on algorithms, stacks, queues, and tree
                                    structures.
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span className="px-2 py-1.5">👤 James H.</span>
                                    <span className="bg-[#F5F7FB] px-2 py-1.5 rounded-lg">
                                        ⚙️ Organic Chemistry
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span className="px-2 py-1.5">⭐ 4.8</span>
                                    <span className="px-2 py-1.5">❤️ Add to Favorites</span>
                                </div>
                            </div>
                        ))}
                </div>
            </aside>
        </section>
    );
}
