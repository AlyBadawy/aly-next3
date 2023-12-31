import { Metadata } from 'next';
import ABDateFormatter from './AbDateFormatter';
import createOgImage from './createOgImage';
import PageProps from '@/types/PageProps';
import { BlogPost } from '.contentlayer/generated/types';

export const PostOgMeta = async (post: BlogPost): Promise<Metadata> => {
  const meta = [];
  meta.push('Aly Badawy');
  meta.push('Blog Post');
  post?.date && meta.push(ABDateFormatter(post.date));

  const ogImage = createOgImage({
    title: post?.title || '',
    meta: ['alybadawy.com'].join(' · '),
  });

  return {
    metadataBase: new URL('https://alybadawy.com'),
    title: 'Aly Badawy · Blog · ' + post.title,
    description: 'Aly Badawy · Blog · ' + post.description,
    twitter: {
      card: 'summary_large_image',
    },
    openGraph: {
      title: 'Aly Badawy · Blog · ' + post.title,
      description: post.description || '',
      siteName: 'alybadawy.com',
      images: [{ url: ogImage }],
      locale: 'en_US',
      type: 'website',
    },
  };
};

export const PageOgMeta = async ({
  title,
  description,
}: PageProps): Promise<Metadata> => {
  const meta = [];
  meta.push('Aly Badawy');

  const ogImage = createOgImage({
    title: title,
    meta: 'alybadawy.com',
  });

  return {
    metadataBase: new URL('https://alybadawy.com'),
    title: 'Aly Badawy · ' + title,
    description: description,
    twitter: {
      card: 'summary_large_image',
    },
    openGraph: {
      title: 'Aly Badawy · ' + title,
      description: description || '',
      siteName: 'alybadawy.com',
      images: [{ url: ogImage }],
      locale: 'en_US',
      type: 'website',
    },
  };
};
