describe("Test suite", () => {
    it("Test contct us form validation", async () => {
        await browser.maximizeWindow();
        await browser.url("https://www.epam.com/about/who-we-are/contact");
        const coockiesBut = await $('#onetrust-accept-btn-handler');
        coockiesBut.click();
        const submitButton = await $('.button-ui');
        //await browser.pause(6000);
        console.log(await submitButton.getText());
        submitButton.scrollIntoView();
        await submitButton.waitForExist();
        await submitButton.click();
        //submitButton.submit();
        await browser.pause(6000);


        const inputFirstName = await $('input[id*="user_first_name"]')
        const FirstNameAttribute = await inputFirstName.getAttribute('aria-invalid');
        expect(FirstNameAttribute).toEqual("true");

        const inputLastName = await $('input[id*="user_last_name"]')
        const LastNameAttribute = await inputLastName.getAttribute('aria-invalid');
        expect(LastNameAttribute).toEqual("true");

        const inputEmail = await $('input[id*="user_email"]')
        const EmailAttribute = await inputEmail.getAttribute('aria-invalid');
        expect(EmailAttribute).toEqual("true");

        const inputPhone = await $('input[id*="user_phone"]')
        const PhoneAttribute = await inputPhone.getAttribute('aria-invalid');
        expect(PhoneAttribute).toEqual("true");

        const inputComment = await $('//*[@id="_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor"]/div[2]/div/div/div/div/div[8]/div[1]/div/span[1]/span[1]/span')
        const CommentAttribute = await inputComment.getAttribute('aria-invalid');
        expect(CommentAttribute).toEqual("true");

    })
})
