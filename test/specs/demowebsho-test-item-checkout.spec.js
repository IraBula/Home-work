describe("Test suite", () => {
    it("Check item checkout", async () => {
        await browser.maximizeWindow();
        await browser.url("https://demowebshop.tricentis.com/");
        const loginLink = await $('.ico-login');
        browser.pause(6000);
        await loginLink.click();


        const email = await $('#Email');
        await email.addValue('kisso.ir@gmail.com');
        const password = await $('#Password');
        await password.addValue('!Epam1234');
        const loginButton = await $('.login-button');
        browser.pause(6000);
        await loginButton.click();

        await browser.url("https://demowebshop.tricentis.com/album-3");
        const productName = await $('.product-name > h1:nth-child(1)');
        const productNameValue = await productName.getText();
        browser.pause(6000);
        const cardButton = await $('#add-to-cart-button-53');
        //browser.pause(6000);
        await cardButton.click();
        browser.pause(12000);

        const shopCart = await $('#topcartlink > a:nth-child(1)');
        await shopCart.click();
        browser.pause(12000);

        const cardProductName = await $('.product-name');
        const cardProductNameText = await cardProductName.getText();
        expect(cardProductNameText).toEqual(productNameValue);

        const termsService = await $('#termsofservice');
        await termsService.click();
        browser.pause(12000);

        const checkoutButton = await $('#checkout');
        await checkoutButton.click();
        browser.pause(12000);

        const billingContinue = await $('.new-address-next-step-button');
        await billingContinue.click();
        browser.pause(12000);
        const paymentMethod = await $('#paymentmethod_0');
        const paymentMethodValue = await paymentMethod.getAttribute('checked');
        console.log(await paymentMethodValue);
        browser.pause(20000);
        const paymentContinue = await $('.payment-method-next-step-button');
        await paymentContinue.click();
        browser.pause(20000);

        const paymentInfoValid = await $('.info > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1)');
        browser.pause(20000);
        const paymentInfoValidValue = await paymentInfoValid.getText();
        console.log(await paymentInfoValidValue);
        //browser.pause(20000);
        expect(paymentInfoValidValue).toEqual('You will pay by COD');
        browser.pause(20000); 
        
        const paymentConfNext = $('.payment-info-next-step-button')
        browser.pause(20000);
       // await paymentConfNext.waitForExist({ reverse: true })
        await paymentConfNext.click(); 

        const confirmReview = await $('li.payment-method')
        const confirmReviewText = await confirmReview.getText();
        console.log(await confirmReviewText);//READY

        const confirmOrder = await $('input[type="button"].confirm-order-next-step-button');

        await confirmOrder.click();
        browser.pause(120000);

        const orderNumber = await $('.details > li:nth-child(1)');
        await orderNumber.waitForExist();

        const orderConfirm = await $('.title');
        const orderConfirmText = await orderConfirm.getText();

        expect(orderConfirmText).toEqual('Your order has been successfully processed!')

    })
})
