import { render } from '@testing-library/react-native'
import { AlbumScreen } from '../screens/Album'

const mockNavigation = { navigate: jest.fn() }
const mockRoute = { params: { name: 'Meu Álbum' } }

jest.mock('../services/AlbumService', () => ({
  loadAlbumByName: jest.fn().mockResolvedValue({
    id: '1',
    name: 'Meu Álbum',
    createdAt: '15/09/2025'
  })
}))

jest.mock('../services/PhotoService', () => ({
  getPhotosByAlbum: jest.fn().mockResolvedValue([])
}))

describe('AlbumScreen', () => {
  test('Renderiza título e botão voltar', async () => {
    const { findByText, findByRole } = render(
      <AlbumScreen navigation={mockNavigation as any} route={mockRoute as any} />
    )

    expect(await findByText('Meu Álbum')).toBeTruthy()

    expect(await findByText('Voltar')).toBeTruthy()

    expect(await findByText('(0) Fotos')).toBeTruthy()
  })
})
