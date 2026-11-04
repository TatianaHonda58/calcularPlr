import { calcularSalarioPlr } from '../source/calcularPlr.js'
import assert from 'node:assert';

describe('Testes de Calcular PLR', function(){
    it('Cenário 1: Calcular se senior', function(){ 
        let resultado = calcularSalarioPlr('senior', 10000)
        assert.equal(resultado, 20000)
    })
    it('Cenário 2: Calcular se pleno', function(){
        let resultado = calcularSalarioPlr('pleno', 6000)
        assert.equal(resultado, 6000)
    })
})


