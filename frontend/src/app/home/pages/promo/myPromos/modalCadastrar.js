import React, { useState } from "react";
import CadastrarPromo from "../../../services/promo/cadastrarPromo.js";
import Button from "../../Compartilhado/button.js";

const ModalCadastrar = ({ onClose }) => {
    const [id, setId] = useState('');
    const [desconto, setDesconto] = useState('');
    const [promoName, setPromoName] = useState('');
    const [data_inicio, setData_inicio] = useState('');
    const [data_fim, setData_fim] = useState('');

    const handleCadastrarPromo = async (e) => {
        e.preventDefault();
        const data = {
            id,
            desconto,
            promoName,
            data_inicio,
            data_fim
        };
        try {
            const response = await CadastrarPromo(data);
            console.log('Response:', response);
            alert(response.message || 'Promoção cadastrada com sucesso!');
            if (response === 'Promoção cadastrada com sucesso!') {
                onClose();
            }
        } catch (error) {
            console.error('Error creating promotion:', error);
            alert('Erro ao criar promoção');
        }
    };
    return (
        <div>
            <h1>Cadastrar Nova Promoção</h1>
            <form onSubmit={handleCadastrarPromo}>
                <label>
                    ID do Hotel:
                    <input type="number" name="id" value={id} onChange={e => setId(e.target.value)} required />
                </label>
                <br />
                <label>
                    Desconto:
                    <input type="number" name="desconto" value={desconto} onChange={e => setDesconto(e.target.value)} required />
                </label>
                <br />
                <label>
                    Nome da Promoção:
                    <input type="text" name="promoName" value={promoName} onChange={e => setPromoName(e.target.value)} required />
                </label>
                <br />
                <label>
                    Data de Início:
                    <input type="date" name="data_inicio" value={data_inicio} onChange={e => setData_inicio(e.target.value)} required />
                </label>
                <br />
                <label>
                    Data de End:
                    <input type="date" name="data_fim" value={data_fim} onChange={e => setData_fim(e.target.value)} required />
                </label>
                <br />
                <Button nome="Finalizar e Cadastrar" type="submit" />
            </form>
        </div>
    );
}

export default ModalCadastrar;