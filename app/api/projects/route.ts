import { NextResponse } from 'next/server';
import { PROJECTS } from '@/lib/data';

export async function GET() {
    return NextResponse.json(PROJECTS);
}
