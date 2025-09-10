# 📸 App Visto – Galeria de Fotos  

Este projeto foi desenvolvido como parte do **teste prático de desenvolvimento mobile** para a vaga de React Native Developer.  
O objetivo foi construir um aplicativo de galeria de fotos simples, mas funcional, priorizando **qualidade de código**, **boas práticas**, **responsividade** e **usabilidade**.  

---

## 🚀 Funcionalidades Implementadas  

- Tirar fotos utilizando a câmera do dispositivo  
- Armazenar as fotos localmente  
- Guardar **data/hora** da captura  
- Capturar e exibir a **localização (latitude/longitude)** da foto  
- Exibir cada foto em um **preview com informações adicionais**  
- Estrutura organizada com **TypeScript**  
- Interface responsiva e intuitiva  

---

## 🛠️ Tecnologias & Bibliotecas  

- **React Native CLI**  
- **TypeScript**  
- **react-navigation** – Navegação  
- **expo-camera** – Câmera  
- **expo-location** – Localização  
- **expo-file-system** – Armazenamento de arquivos  

---

## 📂 Estrutura do Projeto  

```bash
src/
 ├── components/    # Componentes reutilizáveis (UI, cards, botões, etc.)
 ├── screens/       # Telas principais do app (Galeria, Preview, Câmera)
 ├── hooks/         # Hooks customizados para lógica isolada
 ├── services/      # Serviços de acesso a câmera, localização e storage
 ├── types/         # Definições de tipagem global (TypeScript)
 └── utils/         # Funções auxiliares
