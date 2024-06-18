Scenario: Visualizar métodos de pagamento quando existem
Given o usuário com id “1” está cadastrado no sistema
And o cartão com card_number “5555 5555 5555 5555” e type “debit” está registrado no seu cadastro
When uma nova requisição GET é feita para o endpoint “/metodos_de_pagamento”
Then o sistema retorna o cartão com card_number “5555555555555555” e type “debit”
And o código de resposta é "200"