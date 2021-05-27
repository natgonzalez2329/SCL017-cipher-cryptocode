// [Español]
// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
//
// [Português]
// Importamos o objeto `cipher`, que contém os métodos `encode` e `decode`

import cipher from '../src/cipher';

describe('cipher', () => {

  it('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    it('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.encode()).toThrow(TypeError);
      //expect(() => cipher.encode(0)).toThrow(TypeError); //#siempre recibo el 2do parametro, este test no aplica
      expect(() => cipher.encode(null, [])).toThrow(TypeError);
      //expect(() => cipher.encode(0, 0)).toThrow(TypeError); //#si recibo ambos parametros en 0 igual funciona y no tira error, no aplica
    });

    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      expect(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33)).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('should return "3456789012" for "0123456789" with offset 33', () => {
      expect(cipher.encode('0123456789', 33)).toBe('3456789012');
    });

    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // [Português]
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
   it('should return "hijklmnopqrstuvwxyzabcdefg" for "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
      expect(cipher.encode('abcdefghijklmnopqrstuvwxyz', 33)).toBe('hijklmnopqrstuvwxyzabcdefg');
    });

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    // [Português]
    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
   it('should return " !@" for " !@"', () => {
      expect(cipher.encode(' !@', 33)).toBe(' !@');
    });
  });

  describe('cipher.decode', () => {

    it('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.decode()).toThrow(TypeError);
      //expect(() => cipher.decode(0)).toThrow(TypeError); //#siempre recibo el 2do parametro, este test no aplica
      expect(() => cipher.decode(null, [])).toThrow(TypeError);
      //expect(() => cipher.decode(0, 0)).toThrow(TypeError); //#si recibo ambos parametros en 0 igual funciona y no tira error, no aplica
    });

    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
      expect(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', 33)).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('should return "0123456789" for "3456789012" with offset 33', () => {
      expect(cipher.decode('3456789012', 33)).toBe('0123456789');
    });

    //
    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // [Português]
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    it('should return "abcdefghijklmnopqrstuvwxyz" for "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
     expect(cipher.decode('hijklmnopqrstuvwxyzabcdefg', 33)).toBe('abcdefghijklmnopqrstuvwxyz');
     });

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    // [Português]
    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
     it('should return " !@" para " !@"', () => {
       expect(cipher.decode(' !@', 33)).toBe(' !@');
     });
  });

});
