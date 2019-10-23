import { observer } from "mobx-react"
import React, { useEffect } from "react"
import { Text, View } from "react-native"
import { useStores } from "../../../hooks/useStores"

const GenresList = () => {
  const { genres } = useStores()

  useEffect(() => {
    genres.load()
  }, [])

  return (
    <View>
      {genres.list.map(({ name, id }) => (
        <Text key={id}>{name}</Text>
      ))}
    </View>
  )
}

export default observer(GenresList)
