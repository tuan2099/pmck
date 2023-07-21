import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div>
      {' '}
      <main className='flex h-screen w-full flex-col items-center justify-center'>
        <h1 className='text-[100px] font-extrabold tracking-widest text-gray-900'>404</h1>
        <div className='bg-orange absolute rotate-12 rounded px-2 text-sm text-white'>Page Not Found</div>
        <button className='mt-5'>
          <Link
            to='/'
            className='group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring active:text-[#1e7115]'
          >
            <span className='bg-orange absolute inset-0 translate-x-0.5 translate-y-0.5 transition-transform group-hover:translate-x-0 group-hover:translate-y-0' />
            <span className='relative block border border-current px-8 py-3'>
              <span>Go Home</span>
            </span>
          </Link>
        </button>
      </main>
    </div>
  )
}

export default Notfound
