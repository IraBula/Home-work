describe("Test suite", () => {
    it("Test download report", async () => {
        await browser.maximizeWindow();
        await browser.url("https://www.epam.com/about");
        // const downloadButton = await ($('div.button:nth-child(3) > div:nth-child(1)')).nextElement();

        //     const buttonHref = await downloadButton.getAttribute("href");
        //     console.log(buttonHref);
        const coockiesBut = await $('#onetrust-accept-btn-handler');
        coockiesBut.click();

        // const downloadButton = await $('.button-ui-23.btn-focusable a');


        const downloadButton1 = await $('div.button:nth-child(3) > div:nth-child(1) > a');
        console.log(await downloadButton1.getValue());
        console.log(await downloadButton1.getAttribute('href'));
        downloadButton1.scrollIntoView();
        await downloadButton1.waitForExist();
        downloadButton1.click();
         //await browser.debug()
        await browser.pause(10000);
      



        // Verify that the file is downloaded successfully
        const isFileDownloaded = await browser.call(() => {

            const fs = require('fs');
            const downloadPath = 'C:/Users/Iryna_Bula/Downloads/'; 
            const files = fs.readdirSync(downloadPath);
            return files.some(file => file.startsWith('EPAM_Corporate_Overview') && file.endsWith('.pdf'));
            
        });
        console.log(isFileDownloaded);

        //browser.pause(60000);
        
        expect(isFileDownloaded).toEqual(true);


       
    });
});


