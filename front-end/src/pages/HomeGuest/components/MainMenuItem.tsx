import { Link } from 'react-router-dom'

function MainMenuItem({ images, link, title, description }: any) {
  return (
    <li>
      <Link to={link} className='my-4 flex items-center rounded-[10px] p-3 transition hover:bg-[#f4fcf3]'>
        <div>{images}</div>
        <div className='ml-3'>
          <h5 className='font-semibold'>{title}</h5>
          <p className='text-sm'>{description}</p>
        </div>
      </Link>
    </li>
  )
}

export default MainMenuItem
