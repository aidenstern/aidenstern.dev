import { articleBySlugQuery } from 'src/lib/queries';
import { previewClient } from 'src/lib/sanity.server';

export default async function preview(req: any, res: any) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (
    req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Check if the article with the given `slug` exists
  const article = await previewClient.fetch(articleBySlugQuery, {
    slug: req.query.slug,
  });

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!article) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched article
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/article/${article.slug}` });
  res.end();

  return true;
}
