const { fdkAxios } = require('../../sdk/common/AxiosHelper.js');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(fdkAxios);
describe('Testing generated standalone JS', () => {
    let applicationClient;

    before(() => {
        cy.readFile('dist/application.js').then((standaloneBundle) => {
            cy.window().then((win) => {
                const scriptElement = win.document.createElement('script');
                scriptElement.textContent = standaloneBundle;
                win.document.head.appendChild(scriptElement);
            });
        });
    });

    it('should fetch products', () => {
        cy.window().then((win) => {
            const { ApplicationConfig, ApplicationClient } = win;
            expect(ApplicationConfig).to.be.a('function');
            expect(ApplicationClient).to.be.a('function');
            const config = new ApplicationConfig({
                domain: "https://api.fynd.com",
                applicationID: "000000000000000000000001",
                applicationToken: "9502d710-5a22-11e9-a001-57d85417c280",
            });
            applicationClient = new ApplicationClient(config);
        });

        cy.then(() => {
            cy.intercept('GET', applicationClient.catalog._urls.getProducts, {
                statusCode: 200,
                body: { items: ['Test Product 1'] },
            });
        });

        cy.then(() => applicationClient.catalog.getProducts()).then((products) => {
            expect(products.items.length).to.be.greaterThan(0);
        });
    });
});
