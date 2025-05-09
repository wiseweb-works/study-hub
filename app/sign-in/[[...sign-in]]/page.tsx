import { SignIn } from '@clerk/nextjs';

export default function Page() {
    return (
        <div className="flex justify-center items-center h-full min-h-[calc(100dvh-64px)]">
            <SignIn />
        </div>
    );
}
