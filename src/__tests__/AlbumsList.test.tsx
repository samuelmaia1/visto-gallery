import { render, waitFor } from '@testing-library/react-native'
import { AlbumsList } from '../components/AlbunsList/AlbumsList'
import { AlbumItem } from '../components/AlbumItem/AlbumItem'
import { ListEmptyComponent } from '../components/Utils/Utils'
import { loadAlbums } from '../services/AlbumService'
import { mockAlbums } from '../__mocks__/Albums'

jest.mock('../services/AlbumService', () => ({
  loadAlbums: jest.fn()
}))

jest.mock('../components/AlbumItem/AlbumItem', () => ({
  AlbumItem: jest.fn(({ album }) => null)
}))

jest.mock('../components/Utils/Utils', () => ({
  ListEmptyComponent: jest.fn(() => null)
}))

jest.mock('@react-navigation/native', () => ({
  useFocusEffect: (callback: any) => callback()
}))

describe('Renderiza corretamente a lista de álbuns de fotos', () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('Mostra componente de lista vazia quando o array não tem itens', async () => {
    (loadAlbums as jest.Mock).mockResolvedValue([])

    render(<AlbumsList />)

    await waitFor(() => {
      expect(ListEmptyComponent).toHaveBeenCalled()
    })
  })

  test('Renderiza um AlbumItem para cada item do array', async () => {
    (loadAlbums as jest.Mock).mockResolvedValue(mockAlbums)

    render(<AlbumsList />)

    await waitFor(() => {
      expect(AlbumItem).toHaveBeenCalledTimes(mockAlbums.length)
      mockAlbums.forEach(album => {
        expect(AlbumItem).toHaveBeenCalledWith(
          expect.objectContaining({ album })
        )
      })
    })
  })

})
