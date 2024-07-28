import { AiOutlineSearch } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
function SearchBar({placeholder,onChangeHandler}) {
  return (
    <div className='w-full my-4 relative flex items-center'>
        <input type='text' placeholder={placeholder} onChange={ onChangeHandler } className='w-full overflow-hidden border-2 px-4 py-2 border-gray-500 border-solid rounded-lg'></input>
        <div className="absolute right-0 pr-3">
        <AiOutlineSearch className="w-5 h-5 text-gray-400" />
        </div>
    </div>
  )
}

export default SearchBar