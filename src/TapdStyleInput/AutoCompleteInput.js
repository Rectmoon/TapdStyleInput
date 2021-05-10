import React, { forwardRef, useState, useCallback } from 'react'
import { AutoComplete, Input } from 'antd'
import { debounce } from '../utiis/debounce'

function AutoCompleteInput (
  { value, onInput, fetchOptions, onSelect, ...restProps },
  ref
) {
  const [v, setV] = useState(value)
  const [isOpened, setIsOpened] = useState(false)
  const [options, setOptions] = useState([])

  const doSearch = useCallback(
    debounce(async k => {
      const arr = await fetchOptions(k)
      setOptions(arr)
      setIsOpened(true)
    }, 300),
    []
  )

  const handleInput = useCallback(e => {
    const newValue = e.target.value

    doSearch(newValue)
    setV(newValue)
    onInput(newValue)
  }, [])

  const handleSelect = useCallback(
    e => {
      onSelect(options.find(item => item.value === e))
      setIsOpened(false)
    },
    [options, onSelect]
  )

  return (
    <AutoComplete
      {...restProps}
      options={options}
      open={isOpened}
      onSelect={handleSelect}
    >
      <Input value={v} onInput={handleInput} ref={ref} />
    </AutoComplete>
  )
}

export default forwardRef(AutoCompleteInput)
