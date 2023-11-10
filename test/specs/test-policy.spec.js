describe("Test suite", () => {
    it("Check the policies list", async () => {
        await browser.maximizeWindow();
        await browser.url("https://epam.com");
        const policiesBlock = await $('.policies');
        browser.pause(6000);
        await policiesBlock.scrollIntoView();
        //browser.pause(12000);
        const policyLinks = $$('.policies-links-wrapper .fat-links');
        const policyNames = await policyLinks.map((link) => {
            return link.getText();

        });
        const expectPolicyName = [
            'INVESTORS',
            'OPEN SOURCE',
            'PRIVACY POLICY',
            'COOKIE POLICY',
            'APPLICANT PRIVACY NOTICE',
            'WEB ACCESSIBILITY'
        ];
        expect(policyNames).toEqual(expectPolicyName);

    })
})
