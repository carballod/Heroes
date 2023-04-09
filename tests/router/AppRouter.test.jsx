import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";
import { MemoryRouter } from "react-router-dom";
import queryString from "query-string";



describe("Pruebas en <AppRouter />", () => {

  test("Debe mostrar el login si no esta autenticado", () => {

    const contextValue = {
      logged: false,
    };

    render(
        <MemoryRouter initialEntries={['/marvel']}>
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>   
        </MemoryRouter>
    );

    expect( screen.getAllByText('Login').length ).toBe(2);

  });

  test("Debe mostrar el componente de Marvel si esta autenticado", () => {

    const contextValue = {
      logged: true,
      user: {
        name: 'Fernando',
        id: 'ABC123'
      }
    };

    render(
        <MemoryRouter initialEntries={['/login']}>
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        </MemoryRouter>
    );

    expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1);

  });

});
