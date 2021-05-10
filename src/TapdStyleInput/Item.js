import React, { useState, useRef, useCallback, forwardRef } from 'react'
import AutoCompleteInput from './AutoCompleteInput'

function Item (
  {
    label = '',
    value,
    selectedValue,
    separator = ';',
    fetchOptions,
    onItemClick,
    onSelect
  },
  ref
) {
  const [v, setV] = useState('')
  const [w, setW] = useState(6)

  const inputRef = useRef()
  const sensorRef = useRef()

  const handleItemClick = useCallback(() => {
    inputRef.current.focus()
    onItemClick(value)
  }, [])

  const handleInput = useCallback(newValue => {
    setV(newValue)

    setTimeout(() => {
      setW(sensorRef.current.clientWidth + 6)
    }, 0)
  }, [])

  const handleSelect = useCallback(item => {
    setV('')
    setW(6)
    onSelect(item)
  }, [])

  return (
    <div className='item' onClick={handleItemClick}>
      <span className={`label ${value === selectedValue ? 'marked' : ''}`}>
        {label + separator}
      </span>
      <AutoCompleteInput
        className='placehold'
        style={{ width: w }}
        value={v}
        onInput={handleInput}
        ref={inputRef}
        fetchOptions={fetchOptions}
        onSelect={handleSelect}
        dropdownClassName='certain-category-search-dropdown'
        dropdownMatchSelectWidth={500}
      />
      <pre ref={sensorRef}>{v}</pre>
    </div>
  )
}

export default forwardRef(Item)
