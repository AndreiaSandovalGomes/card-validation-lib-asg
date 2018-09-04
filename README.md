Conversor de números v.1.0.0
Esta biblioteca se destina à validação do número do cartão de credito, para uso em aplicações web. Na versão atual é capaz de retornar TRUE(Verdadeiro) para números de cartão de crédito existentes e false(falso) para numeros inválidos.

Os métodos utilizados na biblioteca são:
cardValidator(num);
Exemplo de uso:

$node
> let card = require("card-validation-lib-asg")
> cardValidator(4417123456789113); // true

versão 1.0.0
funcionalidades: validação de números de cartão de crédito;
Retorna true para números válidos e false para números inválidos.
instalação
você deverá ter o node + npm instalados. Para guia de instalação, visite o site oficial.
proceda com a instalação com $npm install card-validation-lib-asg
roadmap oficial do projeto
versão 2.0.0 (em implementação)
Retornar mensagem de erro quando o numero de dígitos incluídos para verificação não for correspondente ao número de dígitos de cartão de crédito;
retornar mensagem de erro quando não for digitado nenhum número para verificação;
retornar mensagem de erro quando o número for uma string;
retornar mensagem de erro quando for digitado dígito;
versão 3.0.0 (sem previsão ainda, aceita-se sugestões de melhorias através do contato gomesandreia27@outlook.com)

versão 1.0.0 (released) e versão 2.0.0 (em implementação)
funcionalidades: validação de cartão de crédito e testes para erros na digitação dos números.
