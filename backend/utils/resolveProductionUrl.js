const previewSecret = 'randomstring' // Copy the string you used for SANITY_PREVIEW_SECRET
const projectUrl = 'http://localhost:3000'

export default function resolveProductionUrl(document) {
  if (!(document && document.slug && document.slug.current)) return;
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`
}