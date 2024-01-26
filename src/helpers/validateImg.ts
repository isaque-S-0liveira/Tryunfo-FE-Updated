function validarImagem(url: string, callback: (success: boolean) => void) {
  const img = new Image();
  img.onload = function () {
    // Imagem carregada com sucesso
    callback(true);
  };
  img.onerror = function () {
    // Erro ao carregar a imagem
    callback(false);
  };
  img.src = url;
}

export default validarImagem;
