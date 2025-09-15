import { render } from '@testing-library/react-native'
import { ImageList } from '../components/ImageList/ImageList'
import { mockPhotos } from '../__mocks__/Photos'

describe('Renderização correta da lista de imagens', () => {
  const mock = mockPhotos

  test('Renderiza todos os itens da lista', () => {
    const { getAllByTestId } = render(<ImageList data={mock} />)

    const images = getAllByTestId('image-item')
    expect(images.length).toBe(mock.length)

    images.forEach((image, index) => {
      expect(image.props.source).toEqual({ uri: mock[index].uri })
    })
  })

  test('Renderiza vazio quando data é vazia', () => {
    const { queryAllByTestId } = render(<ImageList data={[]} />)
    expect(queryAllByTestId('image-item')).toHaveLength(0)
  })
})
