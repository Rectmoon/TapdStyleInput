import React, { useState, useRef, useCallback, useEffect } from 'react'
import AutoCompleteInput from './AutoCompleteInput'
import Item from './Item'

function TapdStyleInput ({ value = [], fetchOptions, onSelect }) {
  const [selectedItems, setSelectedItems] = useState(value)
  const [selectedValue, setSelectedValue] = useState(null)
  const searchRef = useRef()

  const handleContainerClick = useCallback(e => {
    e.stopPropagation()
    searchRef.current?.focus()
  }, [])

  const handleItemClick = useCallback(
    v => {
      setSelectedValue(v)
    },
    [setSelectedValue]
  )

  const addSelectedItemsGenerator = useCallback(
    i => {
      let index = i + 1

      return item => {
        const newSelectedItems = JSON.parse(JSON.stringify(selectedItems))
        newSelectedItems.splice(index, 0, item)
        setSelectedItems(newSelectedItems)
        onSelect(newSelectedItems, item)
        setSelectedValue(null)
      }
    },
    [selectedItems, onSelect, setSelectedValue]
  )

  useEffect(() => {
    searchRef.current?.focus()
  }, [])

  return (
    <div className='tapd-style-input__container' onClick={handleContainerClick}>
      {selectedItems.map(({ label, value }, i) => (
        <Item
          label={label}
          value={value}
          selectedValue={selectedValue}
          key={value}
          onItemClick={handleItemClick}
          fetchOptions={fetchOptions}
          dropdownClassName='certain-category-search-dropdown'
          dropdownMatchSelectWidth={500}
          onSelect={obj => addSelectedItemsGenerator(i)(obj)}
        />
      ))}

      {selectedItems.length === 0 && (
        <AutoCompleteInput fetchOptions={fetchOptions} />
      )}
    </div>
  )
}

export default TapdStyleInput
