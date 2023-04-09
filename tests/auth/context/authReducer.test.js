import { authReducer, types } from "../../../src/auth";


describe("Pruebas en authReducer", () => {

  test("Debe retornar el estado por defecto", () => {

    const state = authReducer({ logged: false }, {});
    expect( state ).toEqual({ logged: false });

  });

  test("Debe llamar el login autenticar y establecer el usuario", () => {

    const action = {
        type: types.login,
        payload: {
            name: "Juan",
            id: '123'
        },
    };

    const state = authReducer({ logged: false }, action);
    expect( state ).toEqual({
        logged: true,
        user: action.payload
    });

  });

  test("Debe borrar el name del usuario y el logger en false", () => {

    const state = {
        logged: true,
        user: { name: "Juan", id: '123' }
    };

    const action = {
        type: types.logout,
    };

    const newState = authReducer(state, action);
    expect( newState ).toEqual({ logged: false });

  });

});
