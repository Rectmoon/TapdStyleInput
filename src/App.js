import { useState, useCallback } from 'react'
import TapdStyleInput from './TapdStyleInput'
import './styles.css'

export default function App () {
  const [list, setList] = useState([
    { label: '雪梨', value: 23 },
    { label: '牛杂', value: 24 },
    { label: '牛油', value: 25 },
    { label: '牛舌', value: 26 },
    { label: '牛鼻', value: 27 },
    { label: '牛尾', value: 28 },
    { label: '牛百叶', value: 29 }
  ])

  const search = useCallback(keyword => {
    const list = [
      { label: '牛奶', value: 1 },
      { label: '猪肉', value: 2 },
      { label: '牛肉', value: 3 },
      { label: '苹果', value: 12 },
      { label: '香蕉', value: 13 },
      { label: '牛腿', value: 14 },
      { label: '猪肝', value: 21 },
      { label: '牛排', value: 22 },
      { label: '雪梨', value: 23 },
      { label: '牛杂', value: 24 },
      { label: '牛油', value: 25 },
      { label: '牛舌', value: 26 },
      { label: '牛鼻', value: 27 },
      { label: '牛尾', value: 28 },
      { label: '牛百叶', value: 29 }
    ]

    return new Promise(resolve => {
      setTimeout(() => {
        if (keyword) {
          resolve(list.filter(item => item.label.indexOf(keyword) > -1))
        } else {
          resolve(list)
        }
      }, 100)
    })
  }, [])

  const handleSelect = useCallback(newSelectedItems => {
    setList(newSelectedItems)
  }, [])

  return (
    <div className='App'>
      <div>
        <TapdStyleInput
          value={list}
          placeholder='请输入关键字'
          fetchOptions={search}
          onSelect={handleSelect}
        />
        <p>{JSON.stringify(list)}</p>
      </div>
    </div>
  )
}
