
import { NextResponse } from 'next/server';
import {supabaseAdmin} from '../../../lib/supabase';

export async function POST(req: Request) {
  return NextResponse.json({ success: true });
}
