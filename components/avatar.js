import Image from 'next/image'

export default function Avatar({ name, picture }) {
  return (
    <div className='flex items-center'>
      <Image
        className='rounded-full'
        src={picture}
        alt={name}
        width={40}
        height={40}
      />
      <div className='text-xl font-bold ml-2'>{name}</div>
    </div>
  )
}
