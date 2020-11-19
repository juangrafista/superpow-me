const BlockRenderer = (props) => {
  const { style } = props.node

  if (style === 'h2') {
    return (
      <h2 className='text-2xl text-red-500 font-bold leading-loose pb-3'>
        {props.children}
      </h2>
    )
  }

  if (style === 'normal') {
    return <p className='text-blue-500 font-bold pb-2'>{props.children}</p>
  }

  if (style === 'blockquote') {
    return (
      <blockquote className='p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote pb-3'>
        {props.children}
      </blockquote>
    )
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props)
}

export default BlockRenderer
