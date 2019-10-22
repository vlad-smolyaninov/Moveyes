import React from 'react'
import Layout from '../../layout/Layout'
import { Text } from 'react-native'
import GenresList from '../genresList/GenresList'

const MainView: React.FC = () => (
  <Layout>
    <Text>Main screen</Text>
    <GenresList></GenresList>
  </Layout>
)

export default MainView
