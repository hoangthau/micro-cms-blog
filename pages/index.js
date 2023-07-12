import Link from 'next/link';
import { client } from '../libs/client';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function Home({ blog }) {
  return (
    <div>
      <AppBar />
      <Button>MUI Button</Button>
      <Badge badgeContent={4} color="primary">
        <MailIcon color="action" />
      </Badge>
      <p>Page Router</p>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
      <p>App Router</p>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/article/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};
