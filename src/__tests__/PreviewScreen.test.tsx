import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { PhotoPreviewScreen } from '../screens/PhotoPreview';
import { getPhotoById, deletePhoto } from '../services/PhotoService';
import { mockPhotos } from '../__mocks__/Photos';

jest.mock('../services/PhotoService', () => ({
  getPhotoById: jest.fn(),
  deletePhoto: jest.fn(),
}))

describe('Renderiza corretamente a screen do preview da foto', () => {
  const mockNavigate = jest.fn();

  const props = {
    navigation: { goBack: mockNavigate } as any,
    route: { params: { id: mockPhotos[0].id } } as any,
  }

  beforeEach(() => {
    jest.clearAllMocks();
    (getPhotoById as jest.Mock).mockResolvedValue(mockPhotos[0])
    (deletePhoto as jest.Mock).mockResolvedValue(true)
  })

  test('Renderiza corretamente os elementos principais', async () => {
    const { getByText, getByRole, getByTestId } = render(
      <PhotoPreviewScreen {...props} />
    )

    await waitFor(() => {
      expect(getByText('Voltar')).toBeTruthy();
      expect(getByText(mockPhotos[0].album)).toBeTruthy();
    })

    const image = getByRole('image')
    expect(image.props.source).toEqual({ uri: mockPhotos[0].uri })
  })

  test('Clicar em "Voltar" chama navigation.goBack', async () => {
    const { getByText } = render(<PhotoPreviewScreen {...props} />)
    const backButton = getByText('Voltar')

    fireEvent.press(backButton)

    expect(mockNavigate).toHaveBeenCalled()
  })

  test('Abrir modal de confirmação ao clicar no DeleteButton', async () => {
    const { getByText } = render(<PhotoPreviewScreen {...props} />)
    const deleteButton = getByText(/delete/i) || getByText(/Excluir/i)

    fireEvent.press(deleteButton)

    await waitFor(() => {
      const confirmBtn = getByText(/confirm/i) || getByText(/Confirmar/i)
      expect(confirmBtn).toBeTruthy()
    })
  })
})
