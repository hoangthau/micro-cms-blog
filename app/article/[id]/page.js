import { client } from '../../../libs/client';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getData(id) {
  const data = await client.get({ endpoint: 'blog', contentId: id });
  await sleep(5000);
  return data;
}

export default async function Home({ params: { id } }) {
  const data = await getData(id);

  return (
    <>
      <div>Article page {data.title}</div>
      <div>Related articles</div>
      <div>Other articles</div>
    </>
  );
}
