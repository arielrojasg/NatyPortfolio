// middleware.js (Vercel Edge Middleware)
import { NextResponse } from 'next/server'

const BOT_USER_AGENTS = [
  'googlebot',
  'bingbot',
  'yandex',
  'duckduckbot',
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
  'rogerbot',
  'linkedinbot',
  'embedly',
  'quora link preview',
  'showyoubot',
  'outbrain',
  'pinterest/0.',
  'developers.google.com/+/web/snippet',
  'slackbot',
  'vkShare',
  'W3C_Validator',
];

export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico).*)'],
};

export function middleware(request) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';

  const isBot = BOT_USER_AGENTS.some(bot => userAgent.includes(bot));

  if (isBot) {
    const prerenderUrl = `https://service.prerender.io/${request.nextUrl.pathname}${request.nextUrl.search}`;
    return NextResponse.rewrite(prerenderUrl, {
      headers: {
        'X-Prerender-Token': 'O205ztlXQTcC7ucjcwxx',
      },
    });
  }

  // Normal users go to GitHub Pages-hosted version
  return NextResponse.rewrite(`https://itsnvillalobos.com${request.nextUrl.pathname}${request.nextUrl.search}`);
}
