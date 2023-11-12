import { loader } from '../assets';

const Loader = ({ title }) => {
  return (
    <div className='w-full justify-center items-center flex-col'>
      <img src={loader} alt='loader' className='w-32 h-32 object-contain'/>
    </div>
  )
}

export default Loader