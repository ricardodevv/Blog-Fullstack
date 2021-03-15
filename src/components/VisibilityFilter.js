import React from 'react'
import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const VisibilityFilter = () => {
  const dispatch = useDispatch()

  return (
    <div>
      all   
      <input 
        type="radio" 
        name="filter"
        onChange={() => dispatch(filterChange('ALL'))} 
      />
      ascending
      <input 
        type="radio"
        name="filter"
        onChange={() => dispatch(filterChange('ASCENDING'))}
      />
      descending
      <input 
        type="radio"
        name="filter"
        onChange={() => dispatch(filterChange('DESCENDING'))}
      />  
    </div>
  )
}

export default VisibilityFilter