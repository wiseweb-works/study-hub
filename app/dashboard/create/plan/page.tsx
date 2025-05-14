export default function Page() {
    return (
        <>
            <div className="flex justify-center items-center w-200 max-w-[60dvw]">
                <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
                        Create Study Plan
                    </h2>
                    <form action="#" className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="planTitle"
                                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Plan Title
                                </label>
                                <input
                                    type="text"
                                    name="planTitle"
                                    id="planTitle"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Study plan title"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="e.g. Mathematics"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="startDate"
                                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    name="startDate"
                                    id="startDate"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="endDate"
                                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    name="endDate"
                                    id="endDate"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="goals"
                                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Study Goals
                            </label>
                            <textarea
                                id="goals"
                                name="goals"
                                rows={4}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Describe your study goals..."
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label
                                htmlFor="resources"
                                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Resources (optional)
                            </label>
                            <input
                                type="text"
                                name="resources"
                                id="resources"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                placeholder="e.g. Textbooks, websites, videos"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="inline-flex items-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                                Create Plan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
