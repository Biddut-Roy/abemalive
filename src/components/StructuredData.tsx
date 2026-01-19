export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ABEMA',
    url: 'https://abema.tv',
    description: 'Stream 25+ live channels and thousands of shows on demand. News, anime, drama, sports, and entertainment available 24/7.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://abema.tv/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ABEMA',
      logo: {
        '@type': 'ImageObject',
        url: 'https://abema.tv/logo.png',
      },
    },
  };

  const videoService = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'ABEMA Live Streaming Service',
    description: 'Watch live TV channels and on-demand content including news, anime, drama, sports, and entertainment.',
    uploadDate: '2024-01-01',
    thumbnailUrl: 'https://bolt.new/static/og_default.png',
    contentUrl: 'https://abema.tv',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoService) }}
      />
    </>
  );
}
