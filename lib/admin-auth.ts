import { createHmac } from 'crypto';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'tp_admin';

export function computeSessionToken(secret: string): string {
  return createHmac('sha256', secret).update('tp_admin_session').digest('hex');
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const secret = process.env.TP_ADMIN_SECRET;
  if (!secret) return false;

  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;

  return token === computeSessionToken(secret);
}
