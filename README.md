
# Dynamix Button

**Dynamix Button** é um componente de botão personalizável em React, desenvolvido com `styled-components` e `framer-motion`, que permite:

- Personalizar cor, variante (default ou outlined), posição do ícone (esquerda ou direita).
- Suporte a navegação via `react-router-dom`.
- Transições suaves ao interagir com o botão.

### Instalação

Para instalar o pacote, use o comando:

```
npm install dynamix-button
```

### Uso básico

```tsx
import React from 'react';
import Botao from 'dynamix-button';

const App = () => {
  return (
    <Botao
      color="#FF0000"
      variant="outlined"
      icon={<MyIcon />}
      iconPosition="left"
      onClick={() => console.log('Botão clicado!')}
    >
      Clique aqui
    </Botao>
  );
};
```

### Props

- `onClick`: Função chamada ao clicar no botão.
- `children`: Conteúdo do botão.
- `icon`: Ícone a ser exibido no botão.
- `disabled`: Define se o botão está desabilitado.
- `color`: Cor do botão.
- `variant`: Variantes "default" ou "outlined".
- `iconPosition`: Posições "left" ou "right" para o ícone.
- `to`: Se fornecido, o botão atuará como um link de navegação com `react-router-dom`.

### Dependências

Certifique-se de que as seguintes dependências estão instaladas no seu projeto:

- `react`
- `react-dom`
- `styled-components`
- `framer-motion`
- `react-router-dom`

### Contribuindo

Se você quiser contribuir, fique à vontade para enviar pull requests ou abrir issues.
