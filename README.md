# Kids Atividades - versão HTML responsiva profissional

Versão estática em HTML, CSS e JavaScript para publicar no GitHub Pages.
Não precisa de npm, Next.js ou React.

## Arquivos principais

- `index.html` — estrutura da página.
- `styles.css` — layout, cores, responsivo, carrossel e design visual.
- `script.js` — FAQ com abre/fecha.
- `assets/` — imagens da página.
- `.nojekyll` — evita problemas no GitHub Pages.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos para a raiz do repositório.
3. Vá em **Settings > Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/root`.
6. Salve e aguarde o link ficar disponível.

## Como trocar a foto da garantia

Troque este arquivo:

```txt
assets/foto-garantia.webp
```

Mantenha o mesmo nome para não precisar alterar o HTML.

## Como trocar outras fotos

Substitua as imagens dentro da pasta `assets/`, mantendo os mesmos nomes:

- `hero-personagens.webp`
- `mockups-atividades.webp`
- `prints-depoimentos.webp`
- `card-caca-palavras.webp`
- `card-colorir-aprender.webp`
- `card-cruzadinhas.webp`
- `card-jogo-memoria.webp`

## Como trocar cores

Abra `styles.css` e edite o bloco `:root`.


## Atualização desta versão

A seção de garantia usa `assets/foto-garantia.webp` como imagem sem fundo. O FAQ usa ícone animado de `+` e `-`.
