describe('Проверка авторизации', function () {

    it('Верный пароль и не верный логин', function () 
    {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('anatoly.4nikin@yandex.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
      })
      })
