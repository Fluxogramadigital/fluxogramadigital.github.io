# Passeio TT Cubo – Guarda

Landing page estática, sem frameworks, otimizada para computador e telemóvel.

## Testar

Abre `index.html` num navegador para consultar o site. Em alternativa, na pasta do projeto executa `python -m http.server 8000` e visita `http://localhost:8000`.

## Ativar ligações

Abre o ficheiro `config.js` num editor de texto e preenche:

```js
window.EVENT_LINKS = {
  registrationUrl: "https://endereco-do-formulario",
  gpxUrl: "assets/tracks/percurso.gpx",
  kmlUrl: "assets/tracks/percurso.kml"
};
```

Não foram inventados endereços nem fornecidos ficheiros GPX/KML. Até à sua configuração os botões ficam visualmente indisponíveis, em vez de apontarem para ligações inexistentes.

Se preferires ligar a um ficheiro remoto, podes indicar um URL `https://...` nos campos GPX e KML. Para ficheiros locais, cria a pasta `assets/tracks` e coloca nela os ficheiros com os nomes referidos em `config.js`.

## Alterar conteúdos

- **Cartaz:** substitui `assets/cartaz-oficial.png` por outro PNG com o mesmo nome ou altera o caminho em `index.html`.
- **Texto e data:** edita `index.html`.
- **Cores, tipos de letra e espaçamentos:** edita `styles.css`; a cor base é `--green: #053107`.
- **Logótipo da comissão:** substitui `assets/comissao-festas.png`.
- **Entidades de apoio:** o rodapé contém nomes em texto editáveis no `index.html`; o cartaz oficial mantém os logótipos originais.

## Publicar

**Netlify Drop:** compacta ou usa a pasta do projeto, entra em `https://app.netlify.com/drop` e arrasta a pasta. A plataforma fornece um endereço temporário que depois podes personalizar.

**GitHub Pages:** cria um repositório, envia todos os ficheiros da pasta para a raiz do repositório, ativa `Settings > Pages > Deploy from a branch` e seleciona `main` / root.

**Alojamento tradicional:** envia o conteúdo da pasta (não necessariamente a pasta envolvente) para `public_html` por FTP ou pelo gestor de ficheiros do alojamento.

Ao publicar, verifica o cartaz, o comportamento mobile e as ligações de inscrições e downloads.
