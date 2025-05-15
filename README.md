# Botão React Avançado

Uma biblioteca React para botões personalizáveis, expandíveis e com alta usabilidade.

[![NPM Version](https://img.shields.io/npm/v/dynamix-button.svg)](https://www.npmjs.com/package/dynamix-button)
[![License](https://img.shields.io/npm/l/dynamix-button.svg)](https://github.com/ramonexe/dynamix-button/blob/main/LICENSE)

![Exemplo de botões](https://raw.githubusercontent.com/ramonexe/dynamix-button/refs/heads/develop/src/assets/demo.gif)

## Características

- ✨ **Expansão ao hover** - Botões com ícone expandem para mostrar texto quando o mouse passa sobre eles
- 🎨 **Personalização completa** - Tamanhos, variantes, cores e posicionamento de ícones
- 📱 **Responsivo** - Design adaptável para diferentes dispositivos
- ♿ **Acessível** - Suporte a ARIA e alto contraste
- 🔄 **Estado de carregamento** - Spinner integrado com texto opcional
- 🛠️ **Fácil de usar** - API simples e intuitiva

## Uso Básico

```jsx
import React from 'react';
import { Botao } from 'dynamix-button';
import { Heart } from 'lucide-react'; // ou qualquer biblioteca de ícones

function App() {
  return (
    <div>
      {/* Botão básico */}
      <Botao onClick={() => alert('Clicado!')}>
        Clique aqui
      </Botao>
      
      {/* Botão com ícone - expande ao passar o mouse */}
      <Botao icon={<Heart />}>
        Favoritar
      </Botao>
    </div>
  );
}
```

## API

### Propriedades do Componente

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `children` | ReactNode | - | Conteúdo do botão (texto) |
| `icon` | ReactNode | - | Ícone a ser exibido no botão |
| `onClick` | () => void | - | Função chamada ao clicar no botão |
| `size` | 'sm' \| 'md' \| 'lg' | 'md' | Tamanho do botão |
| `variant` | 'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger' | 'primary' | Estilo do botão |
| `iconPosition` | 'left' \| 'right' | 'left' | Posicionamento do ícone |
| `fullWidth` | boolean | false | Se o botão deve ocupar 100% da largura do container |
| `disabled` | boolean | false | Se o botão está desabilitado |
| `loading` | boolean | false | Se o botão está em estado de carregamento |
| `loadingText` | string | - | Texto a ser exibido durante o carregamento |
| `title` | string | - | Atributo title para tooltip e acessibilidade |
| `ariaLabel` | string | - | Atributo aria-label para acessibilidade |
| `backgroundColor` | string | - | Cor de fundo personalizada |
| `hoverBackgroundColor` | string | - | Cor de fundo ao passar o mouse |
| `activeBackgroundColor` | string | - | Cor de fundo ao clicar |
| `textColor` | string | - | Cor do texto |
| `borderColor` | string | - | Cor da borda |

## Exemplos Avançados

### Diferentes Variantes

```jsx
<Botao variant="primary">Primário</Botao>
<Botao variant="secondary">Secundário</Botao>
<Botao variant="outline">Outline</Botao>
<Botao variant="ghost">Ghost</Botao>
<Botao variant="danger">Danger</Botao>
```

### Diferentes Tamanhos

```jsx
<Botao size="sm">Pequeno</Botao>
<Botao size="md">Médio</Botao>
<Botao size="lg">Grande</Botao>
```

### Botão com Ícone (Expansão ao Hover)

```jsx
import { Send } from 'lucide-react';

// Ícone à esquerda (padrão)
<Botao icon={<Send />}>Enviar</Botao>

// Ícone à direita
<Botao icon={<Send />} iconPosition="right">Enviar</Botao>
```

### Estado de Carregamento

```jsx
// Botão de carregamento com texto
<Botao loading loadingText="Enviando...">Enviar</Botao>

// Botão de carregamento sem texto
<Botao loading>Enviar</Botao>
```

### Cores Personalizadas

```jsx
// Botão com cores totalmente personalizadas
<Botao 
  backgroundColor="#3498db"
  hoverBackgroundColor="#2980b9"
  activeBackgroundColor="#1c6ca1"
  textColor="#ffffff"
  borderColor="#2980b9"
>
  Botão Azul
</Botao>

// Botão outline com cor personalizada
<Botao 
  variant="outline"
  textColor="#9b59b6"
  borderColor="#9b59b6"
  hoverBackgroundColor="rgba(155, 89, 182, 0.1)"
>
  Opção Roxa
</Botao>
```

### Botão de Largura Total

```jsx
<Botao fullWidth>Botão de Largura Total</Botao>
```

### Botão Desabilitado

```jsx
<Botao disabled>Botão Desabilitado</Botao>
```

### Acessibilidade

```jsx
<Botao 
  ariaLabel="Botão para enviar formulário"
  title="Clique para enviar o formulário"
>
  Enviar
</Botao>
```

## Comportamento de Expansão

Um dos principais recursos deste componente é o comportamento de expansão ao passar o mouse. Quando um botão possui um ícone:

1. No estado inicial, apenas o ícone é visível
2. Ao passar o mouse sobre o botão, ele expande suavemente para mostrar o texto
3. Ao remover o mouse, ele colapsa novamente para o estado de ícone

Este comportamento é ideal para interfaces onde o espaço é limitado, como barras laterais, barras de ferramentas ou menus compactos.

```jsx
import { Heart, Send, Settings, User } from 'lucide-react';

// Barra de ferramentas com botões expansíveis
<div style={{ display: 'flex', gap: '8px' }}>
  <Botao icon={<Heart />}>Favoritar</Botao>
  <Botao icon={<Send />}>Enviar</Botao>
  <Botao icon={<Settings />}>Configurações</Botao>
  <Botao icon={<User />}>Perfil</Botao>
</div>
```

## Uso com Bibliotecas de Ícones

O componente foi projetado para trabalhar bem com bibliotecas de ícones populares:

### Lucide React

```jsx
import { Download } from 'lucide-react';

<Botao icon={<Download />}>Download</Botao>
```

### React Icons

```jsx
import { FiDownload } from 'react-icons/fi';

<Botao icon={<FiDownload />}>Download</Botao>
```

### Material UI Icons

```jsx
import DownloadIcon from '@mui/icons-material/Download';

<Botao icon={<DownloadIcon />}>Download</Botao>
```

## Personalização de Estilo

O componente redimensiona automaticamente os ícones conforme o tamanho do botão, garantindo uma aparência coesa e proporcional.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

MIT © [ramonexe]