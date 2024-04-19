describe('Testing generated standalone JS', () => {

    before(async () => {
        cy.get("html")
        const fdkSciptFilePath = '../../dist/application.js';
        const scriptElement = document.createElement('script');
        scriptElement.setAttribute('src', fdkSciptFilePath);
        document.querySelector("head").appendChild(scriptElement);
    });

    it('should fetch products', async () => {
            await cy.wait(2000);
            const { ApplicationConfig, ApplicationClient } = window;
            const config = new ApplicationConfig({
                domain: "https://api.fynd.com",
                applicationID: "000000000000000000000001",
                applicationToken: "9502d710-5a22-11e9-a001-57d85417c280",
                });
            let applicationClient = new ApplicationClient(config);
            let products = await applicationClient.catalog.getProducts();
            cy.expect(products.items.length).to.be.greaterThan(0);
    });
});
