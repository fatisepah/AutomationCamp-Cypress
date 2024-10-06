///<refrence types = "cypress"/>

describe('session2', () => {
    it('test1', () => {
        cy.visit('https://www.play2.automationcamp.ir/index.html')
        cy.get('fname').type('mohammad')
    })
    it('scroll_check', () => {
        cy.visit('https://datatables.net/examples/basic_init/scroll_x.html')
        cy.get(':nth-child(9) > :nth-child(9)').click()
    })

    //This is your form title:
    it('contains', () => {
        cy.visit('https://datatables.net/examples/basic_init/scroll_x.html')
        cy.contains('This is your form title:')
        cy.contains("Label[for='moption'])", "Option 2")
        cy.get("Label[for='moption']").contains("Option 2")
    })

    //datalists
    it('children', () => {
        cy.visit('https://datatables.net/examples/basic_init/scroll_x.html')
        cy.get("#owc").children()
        cy.get("#owc").children("[value='Option 2']").click()
        cy.contains("Singers").parent()
        cy.get("#owc").children("[value='Option 2']").siblings().should("have.length", 2)
    })

    it('ancestors', () => {
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        cy.get("div#mp-welcome").parents()
        cy.get("div#mp-welcome").parents("div#mp-content-text")
        cy.get("div#mp-welcome").parentsUntil("bodyContent")

    })

    it('descendants', () => {
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        cy.get("bodyContent").find("div#mv-content-text")
        cy.get("bodyContent").within(() => {
            cy.get("div#mv-content-text")
        })
    })

    it('index', () => {
        cy.visit('https://www.play2.automationcamp.ir/index.html')
        cy.get("td").eq(5)
        cy.get("td").first()
        cy.get("td").last()
    })

    it('index', () => {
        cy.visit('https://www.play2.automationcamp.ir/index.html')
        cy.get("td").filter("td_id")
        cy.get("td").not("td_id")
    })

    it('traversal', () => {
        cy.visit('https://www.play2.automationcamp.ir/index.html')
        cy.get("#fname").closest("div").should("have.class", "main")
        cy.get("[value='td1_value']").nextAll()
        cy.get("[value='td1_value']").nextUntil("[value='td4_value']")
        cy.get("[value='td5_value']").prev()
        cy.get("[value='td5_value']").prevAll()
        cy.get("[value='td5_value']").prevUntil("[value='td1_value']")
    })
})
