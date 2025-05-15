# Dynamix Button

**Dynamix Button** é um componente de botão personalizável em React

# Futuras Features

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
      icon={<MyIcon />}
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

### Contribuindo

Se você quiser contribuir, fique à vontade para enviar pull requests ou abrir issues.