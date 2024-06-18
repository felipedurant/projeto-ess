import { defineFeature, loadFeature } from 'jest-cucumber';
import supertest from 'supertest';
import app from '../..';
import fs from 'fs';
import path from 'path';


const feature = loadFeature('../../features/Pagamento/visualizar.feature');
const request = supertest(app);

var data = JSON.parse(fs.readFileSync(path.resolve('./samples/users.json'), 'utf8'));

defineFeature(feature, test => {
    test('Visualizar métodos de pagamento quando existem', ({ given, when, then }) => {
        let response;
        given('o usuário com id “1” está cadastrado no sistema', () => {
            const user = data.find(element => element.id == '1');
            if (!user) {
                const id = "1";
                const empty = []; 

                const cards = empty;

                const newUser = {
                    id,
                    cards
                };

                data.push(newUser);
                fs.writeFileSync(path.resolve('./samples/users.json'), JSON.stringify(data, null, 2));
            }
        });
        given('o cartão com card_number “5555555555555555” e type “debit” está registrado no seu cadastro', () => {
            const user = data.find(element => element.id == id);
            const card = user.cards.find(element => element.cardNumber == '5555555555555555' && element.type == 'debit');

            if (!card) {
                user.cards.push({ card_number: '5555555555555555', type: 'debit' });
                fs.writeFileSync(path.resolve('./samples/users.json'), JSON.stringify(data, null, 2));
            }
        });
        when('uma nova requisição GET é feita para o endpoint “/metodos_de_pagamento”', async () => {
            response = await request.get('/metodos_de_pagamento').query({ userId: '1' });
        });
        then('o sistema retorna o cartão com card_number “5555555555555555” e type “debit”', () => {
            expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    card_number: '5555555555555555',
                    type: 'debit'
                })
            ]));
        });
        then('o código de resposta é "200"', () => {
            expect(response.status).toBe(200);
        });
    })
})

