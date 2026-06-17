import { NextRequest, NextResponse } from 'next/server';
import { computeSessionToken } from '@/lib/admin-auth';

export async function POST(request: NextRequest) {
  const { secret } = await request.json();
  const adminSecret = process.env.TP_ADMIN_SECRET;

  if (!adminSecret) {
    return NextResponse.json({ error: 'Admin access not configured' }, { status: 500 });
  }

  if (secret !== adminSecret) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  const sessionToken = computeSessionToken(adminSecret);
  const response = NextResponse.json({ success: true });
  response.cookies.set('tp_admin', sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
