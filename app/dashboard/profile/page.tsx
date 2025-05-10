import { UserProfile } from '@clerk/nextjs';

export default function Page() {
    return (
        <div className="">
            <UserProfile routing="hash" />
        </div>
    );
}
