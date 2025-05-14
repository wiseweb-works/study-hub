import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { id, email_addresses, first_name, last_name } = body.data;

    await prisma.user.upsert({
        where: { clerkUserId: id },
        update: {},
        create: {
            clerkUserId: id,
            email: email_addresses?.[0]?.email_address ?? '',
            name: `${first_name ?? ''} ${last_name ?? ''}`.trim(),
        },
    });

    return NextResponse.json({ ok: true });
}
