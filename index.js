 const puppeteer = require('puppeteer')

 try {
   (async () => {
     const browser = await puppeteer.launch({ headless: false })
     const page = await browser.newPage()
     await page.setViewport({ width: 1280, height: 800 })
     await page.goto('https://www.amazon.com.mx')

     //INICAMOS CON UNA CAPTURA AL INICIO
     await page.screenshot({ path: 'start_website.png' })
     //ESCRIBIMOS LA BUSQUEDA
     await page.type('#twotabsearchtextbox', 'laptop')
     await page.click('#nav-search-submit-button') //BOTON DE BUSQUEDA
     await page.screenshot({ path: 'mi_busqueda.png' })

     await page.waitForTimeout(5000);

     console.log("Se realizaron las capturas")
     await browser.close()
   })()
 } catch (err) {
   console.error(err)
 }