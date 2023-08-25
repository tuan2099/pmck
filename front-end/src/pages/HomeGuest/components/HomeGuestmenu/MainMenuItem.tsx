import { Link } from 'react-router-dom'

function MainMenuItem({ item }: any) {
  return (
    <li>
      <Link to={item.url} className='my-2 flex items-center rounded-[10px] p-3 transition hover:bg-[#f4fcf3]'>
        <div className='w-[50px]'>
          <img src={`http://localhost:1337${item.icon}`} alt='icon' />
          {}
        </div>
        <div className='ml-3'>
          <h5 className='font-semibold'>{item.label}</h5>
          <p className='text-sm font-normal text-slate-400'>{item.description}</p>
        </div>
      </Link>
    </li>
  )
}

export default MainMenuItem
