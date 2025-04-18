import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware pour protéger les pages authentifiées
export function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken'); // Récupère le cookie 'authToken'

  // Si le token n'est pas présent, rediriger vers la page de login
  if (!token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Sinon, permettre l'accès à la page
  return NextResponse.next();
}

// Définir les routes protégées
export const config = {
  matcher: ['/admin/:path*'], // Protéger toutes les sous-routes de /dashboard
};