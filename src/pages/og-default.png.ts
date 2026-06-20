import type { APIRoute } from 'astro';
import { renderOgCard } from '../lib/og';

export const GET: APIRoute = async () => {
  const png = await renderOgCard(
    'Most systems aren\'t hard. They\'re just tangled.',
    'Field notes on platform engineering, distributed systems, and the deploys that keep you up at night.',
  );
  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
};
