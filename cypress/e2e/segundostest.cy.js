describe('agregar tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')    
    cy.get('.new-todo').type('Tarea 1{enter}')
