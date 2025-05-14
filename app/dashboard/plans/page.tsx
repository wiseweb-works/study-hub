export default function Page() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Çalışma Planlarım</h2>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {Array(8)
                    .fill('')
                    .map((_, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    YKS Matematik Planı
                                </h3>
                                <span className="text-sm text-gray-400">📅 3 - 10 Mayıs</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                                Günlük konu tekrarı ve test çözümü. Fonksiyonlar, Permütasyon,
                                Olasılık gibi konular.
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500">
                                    8 görevden 5&apos;i tamamlandı
                                </span>
                                <button className="text-[#4C7EFF] text-sm font-medium hover:underline">
                                    Detay
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
