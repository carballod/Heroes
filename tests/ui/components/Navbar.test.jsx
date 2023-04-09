import { fireEvent, render, screen } from "@testing-library/react"
import { AuthContext } from "../../../src/auth"
import { Navbar } from "../../../src/ui/components/Navbar"
import { MemoryRouter, useNavigate } from "react-router-dom"

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <Navbar />', () => {

    const contextValue = { 
        user: {
            name: 'Juan'
        }, 
        logged: true,
        logout: jest.fn()
    }
    
    beforeEach( () => jest.clearAllMocks() )

    test('Debe mostrar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Juan') ).toBeTruthy();

    })

    test('debe llamar el logout y navigate cuando se hace click en el boton', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', { replace: true });

    })

})