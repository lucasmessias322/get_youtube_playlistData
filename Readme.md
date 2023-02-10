<h1>Documentação do Código</h1>
<p>
  Este código foi desenvolvido para coletar informações de uma playlist do
  YouTube e salvar em um arquivo JSON.
</p>
<h2>Bibliotecas Utilizadas</h2>
<ul>
  <li>fs: responsável por lidar com o sistema de arquivos do Node.js</li>
  <li>path: responsável por lidar com o caminho de arquivos no Node.js</li>
  <li>axios: responsável por fazer requisições HTTP no Node.js</li>
  <li>dotenv: responsável por lidar com variáveis de ambiente no Node.js</li>
</ul>
<h2>Funções</h2>
<h3>getPlaylistData(playlistId)</h3>
<p>
  Esta função é responsável por coletar as informações da playlist do YouTube.
  Recebe como parâmetro o ID da playlist e retorna um objeto com o nome da
  playlist e um array de objetos com informações sobre cada vídeo da playlist.
</p>
<h3>main({ playlistId })</h3>
<p>
  Esta é a função principal do código. Recebe como parâmetro o ID da playlist e
  realiza as seguintes ações:
</p>
<ul>
  <li>
    Chama a função getPlaylistData(playlistId) para coletar as informações da
    playlist.
  </li>
  <li>
    Verifica se a pasta "playlist_dataSave" existe. Caso não exista, cria a
    pasta.
  </li>
  <li>Salva as informações coletadas em um arquivo JSON.</li>
  <li>Exibe uma mensagem de sucesso na console.</li>
</ul>
<h2>Variáveis de Ambiente</h2>
<p>
  A chave da API do YouTube deve ser armazenada como uma variável de ambiente
  com o nome YOUTUBE_API_KEY. O arquivo .env é responsável por ler essa
  variável.
</p>
