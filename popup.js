/* DKIM MODULE VERIFICATION */ 

//click to process function, create dkim key
document.getElementById("dkimSubmit").addEventListener("click", function(){
    var accountIDOutput = document.getElementById("accountId").value;
    var domainOutput = document.getElementById("domain").value;
    var DKIM = accountIDOutput + 'aoauth._domainkey.' + domainOutput;
    document.getElementById('dkim-record').innerHTML = DKIM;
}, false);

// check dkim cname, opens mxtoolbox
document.getElementById("dkimVerify").addEventListener("click", function(){
    var dkimVerifyOutput = document.getElementById("dkim-record").innerHTML;
    window.open('https://mxtoolbox.com/SuperTool.aspx?action=cname%3a'+dkimVerifyOutput+'&run=toolpage', '_blank');
}, false);

/* MARKETING SUBDOMAIN */

// check marketing subdomain, opens mxtoolbox
document.getElementById("subdomainSubmit").addEventListener("click", function(){
    var subdomainOutput = document.getElementById("marketingSubdomain").value;
    window.open('https://mxtoolbox.com/SuperTool.aspx?action=cname%3a'+subdomainOutput+'&run=toolpage', '_blank');
}, false);

/* SSL VERIFY */
document.getElementById("sslSubmit").addEventListener("click", function(){
    var sslOutput = document.getElementById("sslSubdomain").value;
    window.open('https://www.sslshopper.com/ssl-checker.html?hostname='+sslOutput+'','_blank');
}, false);

/* MAILNIG RECORDS VERIFY */

// mx/spf/txt dropdown choice assigned
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#recordChoice').addEventListener('change',function(){
        var choice = document.querySelector('option').value = this.value;
        console.log(choice)

      // onclick submit to mx toolbox
        document.getElementById("spfSubmit").addEventListener("click", function(){
            var spfOutput = document.getElementById("sendingDomain").value;
           
            if (choice === "SPF") {
                window.open('https://mxtoolbox.com/SuperTool.aspx?action=spf%3a'+spfOutput+'&run=toolpage', '_blank');
            }
            if (choice === "MX") {
                window.open('https://mxtoolbox.com/SuperTool.aspx?action=mx%3a' +spfOutput+'&run=toolpage','_blank');
            }
            if (choice === "TXT") {
                window.open('https://mxtoolbox.com/SuperTool.aspx?action=txt%3a' +spfOutput+'&run=toolpage','_blank');
            }
        }, false);
     });
})