export default async function handler(req, res) {
  console.log(req.body.id);
  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate(`/blog/${req.body.id}`);
    return res.json({ revalidated: true, id: req.body.id });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating, id is wrong');
  }
}