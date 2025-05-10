import Sidebar from '@/components/Sidebar';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-[calc(100dvh-124px)] h-full">
            <Sidebar />
            <div className="p-4 border border-red-400 w-full grid place-items-center">
                {children}
            </div>
        </div>
    );
}
