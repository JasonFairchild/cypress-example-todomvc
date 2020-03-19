describe('Franks site', function () {
//   before(function () {
//   })

  it('Visits franks page and creates order', function () {
    cy.visit('/?site=lindon&wm=dev&db_conn=qa&sap=qe4')
    cy.get('input#DO-name').type('jason_test')
    cy.get('input#shippingpriorityinput').type('02US - 2 Day')
    cy.get('input#waveAllocationTypeinput').type('ST1')
    cy.get('input#doselect').type('30010001')
    cy.get('input#do_quantity').clear().type('9')
    cy.get('input#create_randomaddress').check()
    cy.get('input#order_quantity').clear().type('2')
    cy.get('button#DOcreate').click()
  })
})
