# Desafio ZettaLab

## Instalação do Projeto

Siga estas instruções para obter uma cópia funcional do projeto em sua máquina local para desenvolvimento e testes.

---

### Pré-requisitos

Antes de começar, certifique-se de ter o [**Node.js**](https://nodejs.org/) instalado (o `npm` já vem incluso). - *Recomendação pessoal*<br>
Você também pode usar o [**Yarn**](https://yarnpkg.com/) se preferir.

---

### Instalação

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/henrique117/desafiozettalab1.git
   ```

2. **Acesse o diretório do projeto:**
   ```sh
   cd desafiozettalab1
   ```

3. **Instale as dependências:**
   ```sh
   npm install
   ```
   *ou, se estiver usando Yarn:*
   ```sh
   yarn install
   ```

---

### Executando o Projeto

Para iniciar o projeto em modo de desenvolvimento, execute:

```sh
npm run dev
```

O servidor local será iniciado e o projeto estará acessível no seu navegador.

---

## Tecnologias Utilizadas

- **TypeScript** – Adiciona tipagem estática ao JavaScript, tornando o código mais robusto.  
- **React + Vite** – Framework moderno para construção de interfaces e ambiente de desenvolvimento rápido.  
- **Axios** – Biblioteca utilizada para realizar requisições HTTP.  
- **Bootstrap 5** – Framework de CSS para estilização dos componentes.  
- **CSS Modules** – Utilizado para aplicar estilos personalizados de forma isolada em cada componente.

---

## API Utilizada

O projeto consome dados da **[PokeAPI](https://pokeapi.co/)**, uma API pública que retorna informações em formato **JSON** sobre o universo Pokémon.

### Rotas utilizadas

#### Página de Berries
```
https://pokeapi.co/api/v2/berry/
https://pokeapi.co/api/v2/berry/{name}
```

#### Página de Pokémons
```
https://pokeapi.co/api/v2/generation/{id}
https://pokeapi.co/api/v2/pokemon/{name}/
```

#### Página de Detalhes do Pokémon
```
https://pokeapi.co/api/v2/pokemon/{name}/
```

---

## Autor

Todos os componentes e estilizações foram desenvolvidos por mim, **Henrique Assis Moreira**.

- **GitHub:** [@henrique117](https://github.com/henrique117)  
- **LinkedIn:** [Henrique Assis Moreira](https://www.linkedin.com/in/henrique-moreira-274b8027b/)

---

*Projeto desenvolvido como parte do desafio técnico da ZettaLab.*