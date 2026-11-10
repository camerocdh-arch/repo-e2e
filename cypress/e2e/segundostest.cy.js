describe('Pruebas de Automatización en TodoMVC', () => {

    // Antes de cada prueba
    beforeEach(() => {
        cy.visit('https://todomvc.com/examples/react/dist/');
    });

    // Primera prueba: Cargar la página
    it('debe cargar la página principal correctamente', () => {
        cy.get('.new-todo').should('be.visible');
    });

    // Segunda prueba: Marcar tarea como completada
    it('Marcar tarea como completada', () => {
        // 1. Agregar una tarea a la lista
        cy.get('.new-todo').type('Estudiar QA{enter}');

        // 2. Hacer clic en el botón de marca de verificación
        cy.get('.todo-list li .toggle').click();

        // 3. Verificar que la tarea está completada
        cy.get('.todo-list li').should('have.class', 'completed');
    });


    // Tercera prueba: Desmarcar tarea completada
    it('Desmarcar tarea completada', () => {

        // 1. Agregar una tarea a la lista
        cy.get('.new-todo').type('Hacer la compra{enter}');

        // 2. Marcar la tarea como completada
        cy.get('.todo-list li .toggle').click();

        // Comprobar que está completada
        cy.get('.todo-list li').should('have.class', 'completed');

        // 3. Hacer clic nuevamente para desmarcarla
        cy.get('.todo-list li .toggle').click();

        // 4. Verificar que ya no está completada
        cy.get('.todo-list li').should('not.have.class', 'completed');

    });
// Cuarta prueba: Editar tarea
it('Editar tarea', () => {
    // 1. Agregar una tarea
    cy.get('.new-todo').type('Estudiar Cypress{enter}');

    // 2. Hacer doble clic en el texto de la tarea
    cy.get('.todo-list li label').dblclick();

    // 3. Seleccionar el campo de edición, borrar el texto e introducir el nuevo nombre
    cy.get('.todo-list li .edit')
      .clear()
      .type('Aprender automatización QA{enter}');

    // 4. Verificar que el nombre se ha actualizado correctamente
    cy.get('.todo-list li label')
      .should('have.text', 'Aprender automatización QA');
});
// Quinta prueba: Borrar tarea
it('Borrar tarea', () => {

    // 1. Agregar una tarea
    cy.get('.new-todo').type('Tarea para eliminar{enter}');

    // 2. Mostrar el botón de borrar y hacer clic en él
    cy.get('.todo-list li').trigger('mouseover');
    cy.get('.todo-list li .destroy').click({ force: true });

    // 3. Verificar que la tarea se ha eliminado
    cy.get('.todo-list li').should('have.length', 0);
});

// Sexta prueba: Filtrar tareas
it('Filtrar tareas', () => {

    // 1. Agregar tres tareas
    cy.get('.new-todo').type('Estudiar Cypress{enter}');
    cy.get('.new-todo').type('Practicar QA{enter}');
    cy.get('.new-todo').type('Aprender JavaScript{enter}');

    // 2. Marcar dos tareas como completadas
    cy.get('.todo-list li .toggle').eq(0).click();
    cy.get('.todo-list li .toggle').eq(1).click();

    // 3. Filtrar las tareas completadas
    cy.contains('a', 'Completed').click();

    // 4. Verificar que solo aparecen las dos tareas completadas
    cy.get('.todo-list li').should('have.length', 2);
    cy.get('.todo-list li.completed').should('have.length', 2);

    // 5. Filtrar las tareas no completadas
    cy.contains('a', 'Active').click();

    // 6. Verificar que solo aparece la tarea pendiente
    cy.get('.todo-list li').should('have.length', 1);
    cy.get('.todo-list li').should('not.have.class', 'completed');

    // 7. Volver a mostrar todas las tareas
    cy.contains('a', 'All').click();

    // 8. Verificar que aparecen las tres tareas
    cy.get('.todo-list li').should('have.length', 3);
});

}); // Aquí se cierra correctamente el describe global

