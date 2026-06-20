import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

let serifItalicData: ArrayBuffer | null = null;
let monoData: ArrayBuffer | null = null;

async function fetchGoogleFont(family: string, weight: number, italic = false): Promise<ArrayBuffer> {
  const encodedFamily = family.replace(/ /g, '+');
  const params = italic
    ? `${encodedFamily}:ital,wght@1,${weight}`
    : `${encodedFamily}:wght@${weight}`;
  const url = `https://fonts.googleapis.com/css2?family=${params}&display=swap`;

  const css = await fetch(url, {
    headers: {
      // Old Safari UA forces Google Fonts to serve TTF/OTF — required by satori
      'User-Agent':
        'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
    },
  }).then(r => r.text());

  const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!match) throw new Error(`No TTF/OTF font in response. CSS snippet: ${css.slice(0, 300)}`);

  return fetch(match[1]).then(r => r.arrayBuffer());
}

export async function renderOgCard(title: string, description?: string): Promise<Uint8Array> {
  if (!serifItalicData) serifItalicData = await fetchGoogleFont('Newsreader', 500, true);
  if (!monoData) monoData = await fetchGoogleFont('JetBrains Mono', 600);

  const titleFontSize = title.length > 60 ? 56 : title.length > 40 ? 68 : 80;
  const desc = description
    ? description.length > 110 ? description.slice(0, 110) + '…' : description
    : null;

  const element = {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: '#FDFCF8',
        fontFamily: '"JetBrains Mono"',
      },
      children: [
        // Green top accent bar
        {
          type: 'div',
          props: {
            style: {
              height: 8,
              background: 'linear-gradient(90deg, #2E7047 0%, #1A4029 100%)',
              flexShrink: 0,
            },
            children: '',
          },
        },
        // Main content area
        {
          type: 'div',
          props: {
            style: {
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              padding: '52px 72px 48px',
            },
            children: [
              // Eyebrow
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: 18,
                    fontWeight: 600,
                    color: '#2E7047',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: 24,
                  },
                  children: 'engineering, untangled',
                },
              },
              // Title
              {
                type: 'div',
                props: {
                  style: {
                    fontFamily: '"Newsreader"',
                    fontStyle: 'italic',
                    fontSize: titleFontSize,
                    fontWeight: 500,
                    color: '#211E1A',
                    lineHeight: 1.08,
                    flex: 1,
                    display: 'flex',
                    alignItems: 'flex-start',
                    letterSpacing: '-0.025em',
                  },
                  children: title,
                },
              },
              // Description (optional)
              ...(desc
                ? [{
                    type: 'div',
                    props: {
                      style: {
                        fontSize: 26,
                        color: '#756E60',
                        lineHeight: 1.5,
                        marginTop: 16,
                        marginBottom: 32,
                      },
                      children: desc,
                    },
                  }]
                : [{ type: 'div', props: { style: { marginBottom: 32 }, children: '' } }]
              ),
              // Footer
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    borderTop: '1.5px solid #D6E9DC',
                    paddingTop: 20,
                    fontSize: 22,
                    fontWeight: 600,
                    color: '#2E7047',
                  },
                  children: 'convoluted.io',
                },
              },
            ],
          },
        },
      ],
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const svg = await satori(element as any, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Newsreader', data: serifItalicData, weight: 500, style: 'italic' },
      { name: 'JetBrains Mono', data: monoData, weight: 600, style: 'normal' },
    ],
  });

  const resvg = new Resvg(svg);
  return resvg.render().asPng();
}
