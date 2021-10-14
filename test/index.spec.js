const { accept_all, register } = require('../index');

global.OK = 250;

describe('register', () => {
  test('registers plugin and loads config', () => {
    const registerHookMock = jest.fn(() => {});

    class TestClass  {
      constructor() {
        this.register_hook = registerHookMock;
      }
    };

    testFunc = new TestClass();
    testFunc.register = register;
    testFunc.register();

    expect(registerHookMock.mock.calls[0][0]).toEqual('rcpt');
    expect(registerHookMock.mock.calls[0][1]).toEqual('accept_all');
    expect(registerHookMock.mock.calls[0][3]).toEqual(undefined);
    expect(registerHookMock.mock.calls[1]).toEqual(undefined);
  });
});

describe('accept_all', () => {
  test('calls next with OK', () => {
    const next = responseCode => {
      expect(responseCode).toEqual(OK);
    };

    accept_all(next);
  });
});
