export {Text, TextLink} from "./Text"
//Esse formato de export faz diretamente o 'import' e 'export' em um único comando. O que ele está fazendo é importar e exportar para que possa usar o arquivo com nome Text sem gerar confusão usando muitos arquivos index, ao passo que no App.jsx aparece o endereço 'Text/index' sem que fique duplicado 'Text/Text' no caminho do arquivo.