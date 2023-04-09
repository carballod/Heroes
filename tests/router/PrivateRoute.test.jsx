import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe("Pruebas en el <PrivateRoute />", () => {

  test("Debe mostrar el children si esta autenticado", () => {

    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
        user: {
            name: "Juan",
            id: "ABC123",
        },
    };

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( screen.getByText("Ruta privada") ).toBeTruthy();
    expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/");

  });

});
