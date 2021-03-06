import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  publishedAt,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className='mb-5'>
        <CoverImage slug={slug} title={title} url={coverImage} />
      </div>
      <div className='text-3xl mb-3 leading-snug'>
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a className='hover:underline'>{title}</a>
        </Link>
      </div>
      <div className='text-lg mb-4'>
        <Date dateString={publishedAt} />
      </div>
      <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
      <Avatar name={author.name} picture={author.image} />
    </div>
  )
}
