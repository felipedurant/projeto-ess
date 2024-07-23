import { defineFeature, loadFeature } from 'jest-cucumber';
import supertest from 'supertest';
import app from '../..';
import fs from 'fs';
import path from 'path';

const feature = loadFeature('./features/Avaliacao/avaliacao.feature');
const request = supertest(app);


defineFeature(feature, test => {

    test('Acesso a página de Avaliações de uma Acomodação', ({ given, and, when, then }) => {
        given(/^usuário de id "(.*)" está na página Meu Perfil$/, (arg0) => {

        });

        and(/^dentro da Seção Avaliações Pendentes está a avaliação da acomodação de id_acom "(.*)"$/, (arg0) => {

        });

        and(/^número da sua reserva na estadia foi "(.*)"$/, (arg0) => {

        });

        when('usuário seleciona a opção Realizar Avaliação', () => {

        });

        and(/^fornece o número de reserva "(.*)", validando operação$/, (arg0) => {

        });

        then('usuário segue para a página Avaliação de Acomodação', () => {

        });
    });



})

defineFeature(feature, test => {
    test('Confirmar avaliação', ({ given, when, and, then }) => {
        given(/^usuário de id "(.*)" está na página de escrever avaliação sobre a acomodação de id_acom "(.*)"$/, (arg0, arg1) => {

        });

        when(/^usuário insere "(.*)" em Limpeza$/, (arg0) => {

        });

        and(/^insere "(.*)" em Exatidão do Anúncio$/, (arg0) => {

        });

        and(/^insere "(.*)" em Check-in$/, (arg0) => {

        });

        and(/^insere "(.*)" em Comunicação$/, (arg0) => {

        });

        and(/^insere "(.*)" em Localização$/, (arg0) => {

        });

        and(/^insere "(.*)" em Custo-benefício$/, (arg0) => {

        });

        and(/^insere "(.*)" em Comentário$/, (arg0) => {

        });

        and('seleciona para concluir o comentário', () => {

        });

        then(/^Nota geral é calculada a parte da média de todas as notas, resultando em "(.*)"$/, (arg0) => {

        });

        and(/^sistema confere se nenhum campo da avaliação é "(.*)"$/, (arg0) => {

        });

        and(/^Código de resposta "(.*)"$/, (arg0) => {

        });
    });
})

defineFeature(feature, test => {
    test('Avaliação incompleta', ({ given, when, and }) => {
        given(/^usuário de id "(.*)" está na página de escrever avaliação sobre a acomodação de id_acom "(.*)"$/, (arg0, arg1) => {

        });

        when(/^usuário insere "(.*)" em Limpeza$/, (arg0) => {

        });

        and(/^insere "(.*)" em Exatidão do Anúncio$/, (arg0) => {

        });

        and(/^insere "(.*)" em Check-in$/, (arg0) => {

        });

        and(/^insere "(.*)" em Custo-benefício$/, (arg0) => {

        });

        and('seleciona para concluir o comentário', () => {

        });

        and(/^Sistema detecta campos "(.*)" dentro da avaliação e os sinaliza$/, (arg0) => {

        });

        and(/^Código de resposta "(.*)"$/, (arg0) => {

        });
    });
})
