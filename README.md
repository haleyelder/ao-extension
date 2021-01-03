## AO Chrome Extension Refactor 

This chrome extension was built by myself primarily for Technical Solutions Engineer's usage, but once sharing internally with a wider audience, more departments within the organization found it useful as well. Ideally, each of our customer's should go through our onboarding documentation including our [Technical Requirements](https://connect.act-on.com/hc/en-us/articles/360023759574-Required-Technical-Setup-Overview) prior to using the application fully. When I was a TSE, it felt like repeative work we repeatedly do to generate these records and reopen the same windows to validate with third party tools; this extension saves a few clicks!

I got the idea from a previous Women Who Code Portland JavaScript study night I atteneded and co-led to create "new tab" Chrome Extension (similar to [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=en)) and figured it would not be too difficult to create and use internally. 

---------------------------------------
### Changelog
v2 - code refactoring/tidying
- remove 'reset' button functions; figured didn't really need these 
- added bootstrap for click toggle; adding the library removed extranneous/repetitive code

![Current Extension View](/imgs/new1.PNG "Current Extension View")

v1 - "make it work, then make it pretty" 
- DKIM template record and open in new tab to verify placement with MX Toolbox
- Marketing subdomain creation and verify in new tab with MX Toolbox
- SSL domain verification in new tab with SSL Shopper
- Filter options to open in new tab based on TXT/SPF/MX records specifications with a dropdown

v0.5 - planning/styling in browser -- [codepen](https://codepen.io/haleyelder/full/dQwGEg)