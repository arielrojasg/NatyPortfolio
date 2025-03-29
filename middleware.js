export const config = {
  matcher: '/:path*',
};

export default async function middleware(request) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  const isBot = [
    'googlebot',
    'bingbot',
    'yandex',
    'duckduckbot',
    'baiduspider',
    'facebookexternalhit',
    'twitterbot',
    'linkedinbot',
    'slackbot',
  ].some(bot => userAgent.includes(bot));

  const url = new URL(request.url);

  if (isBot) {
    return fetch(`https://service.prerender.io${url.pathname}`, {
      headers: {
        'X-Prerender-Token': 'O205ztlXQTcC7ucjcwxx',
      },
    });
  }

  // For normal users, forward to GitHub Pages
  return fetch(`https://itsnvillalobos.com${url.pathname}`);
}