import React, {useEffect} from 'react'
import { Text } from 'react-native'
import { observer, useObservable } from 'mobx-react-lite'
import GenreListStore from './store'

const GenresList: React.FC = () => {
  const store = useObservable(GenreListStore)
  useEffect(() => {
    store.load()
  }, [])
  return (
    <React.Fragment>
      {store.genres.map(({name, id}) => (
        <Text key={id}>{name}</Text>
      ))}
    </React.Fragment>
  )
}

export default observer(GenresList)
