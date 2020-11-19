import markdownStyles from './markdown-styles.module.css'
import BlockContent from '@sanity/block-content-to-react'
import client from '../lib/sanity'

import BlockRenderer from '../styles/blockRenderer'

export default function PostBody({ content }) {
  return (
    <div className='max-w-2xl mx-auto'>
      <BlockContent
        blocks={content}
        serializers={{ types: { block: BlockRenderer } }}
        {...client.config()}
      />
    </div>
  )
}
