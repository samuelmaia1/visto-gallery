# Visto Gallery - Galeria de Fotos 📸

Bem-vindo ao **Visto Gallery**, um aplicativo mobile desenvolvido em **React Native** com **TypeScript**, que permite aos usuários tirar fotos, registrar informações de localização e data/hora, e visualizar suas fotos em uma galeria interativa.

---

## Funcionalidades

O aplicativo implementa as seguintes funcionalidades:

- 📷 **Tirar foto:** Captura de fotos diretamente pela câmera do dispositivo.  
- 🗂️ **Armazenamento de informações:** Salva cada foto juntamente com dados relevantes.  
- 📍 **Registro de localização:** Armazena latitude e longitude da foto usando geolocalização.  
- ⏱️ **Data e hora da foto:** Cada foto salva exibe a data e hora em que foi tirada.  
- 🖼️ **Preview da foto:** Visualização detalhada da imagem com suas informações.  
- 📱 **Responsividade e usabilidade:** Interface adaptada para diferentes tamanhos de tela.  
- 🧩 **Organização do código:** Código modular, legível e escalável.  

---

## Bibliotecas Utilizadas

O projeto utiliza bibliotecas recomendadas e outras auxiliares para melhor performance e manutenção:

| Funcionalidade        | Lib                      |
|-----------------------|------------------------------------------------|
| Navegação             | `react-navigation`           |
| Câmera                |  `react-native-vision-camera`  |
| Localização           | `react-native-community/geolocation` |
| Controle de arquivos  |  `react-native-fs`        |
| Gerenciamento de estado | React Hooks (`useState`, `useEffect`)        |
| Armazenamento local   | `AsyncStorage`                                 |
| Estilização           | `StyleSheet` do React Native                   |