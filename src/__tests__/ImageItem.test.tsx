import { render, fireEvent } from '@testing-library/react-native'
import { ImageItem } from '../components/ImageItem/ImageItem'
import { mockPhotos } from '../__mocks__/Photos'

const mockNavigate = jest.fn()

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate
  })
}))

describe('Renderização correta dos itens de imagens da lista', () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('Renderiza a imagem corretamente', () => {
    const { getByTestId } = render(
      <ImageItem uri={mockPhotos[0].uri} photo={mockPhotos[0]} />
    )
    const image = getByTestId('image-item')
    expect(image.props.source).toEqual({ uri: mockPhotos[0].uri })
  })

  test('Pressable chama navigation.navigate com o id correto', () => {
    const { getByTestId } = render(
      <ImageItem uri={mockPhotos[0].uri} photo={mockPhotos[0]} />
    )

    const pressable = getByTestId('pressable-image-item')
    fireEvent.press(pressable)

    expect(mockNavigate).toHaveBeenCalledWith('PhotoPreview', { id: mockPhotos[0].id })
  })

})
