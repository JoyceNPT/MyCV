import { NextResponse } from 'next/server';
import { CERTIFICATIONS } from '@/lib/data';

export async function GET() {
    return NextResponse.json(CERTIFICATIONS);
}
