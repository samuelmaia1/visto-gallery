import { render, waitFor } from '@testing-library/react-native'
import { CameraScreen } from '../screens/Camera'

const mockNavigation = { goBack: jest.fn(), navigate: jest.fn() }
const mockRoute = { params: { album: 'Meu Álbum' } }

jest.mock('../permissions/GeoLocationPermission', () => ({
  getGeoLocationPermissionStatus: jest.fn().mockResolvedValue(true),
  requestGeoLocationPermission: jest.fn().mockResolvedValue(true)
}))

jest.mock('../permissions/CameraPermission', () => ({
  getCameraPermissionStatus: jest.fn().mockResolvedValue(true),
  requestCameraPermission: jest.fn().mockResolvedValue(true)
}))

jest.mock('react-native-vision-camera', () => ({
  Camera: jest.fn(() => null),
  useCameraDevice: jest.fn(() => ({}))
}))

describe('Renderiza corretamente a câmera com base em permissões', () => {
  test('Renderiza loading enquanto checa permissões', async () => {
    const { getByTestId } = render(
      <CameraScreen navigation={mockNavigation as any} route={mockRoute as any} />
    )

    expect(getByTestId('ActivityIndicator')).toBeTruthy()
  })

  test('Renderiza câmera quando permissões são dadas', async () => {
    const { findByTestId } = render(
      <CameraScreen navigation={mockNavigation as any} route={mockRoute as any} />
    )

    const camera = await findByTestId('camera-view')
    expect(camera).toBeTruthy()
  })
})
