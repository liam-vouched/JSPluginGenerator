(function($) {

    var form = $("#signup-form");
    form.steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        labels: {
            previous: 'Previous',
            next: 'Next',
            finish: 'Download JS File',
            current: ''
        },
        titleTemplate: '<h3 class="title">#title#</h3>',
        onFinished: function(event, currentIndex) {
            if (conversion.checked == true) {
                var conversionSettings = `
<!DOCTYPE html>
<html>
<head>
  <!-- utf-8 is required for JS Plugin default fonts -->
  <!-- VOUCHED HIGH CONVERSION SETTINGS -->
  <meta charset="utf-8" />
  <meta name=“viewport” content=“width=device-width, initial-scale=1.0">
  <\script src="https://static.vouched.id/widget/vouched-2.0.0.js"><\/script>
  <\script type='text/javascript'>
    (function() {
      var vouched = Vouched({
      // Optional verification properties.
        verification: {
          // verify the user's information 
          firstName: '',
          lastName: '',
          // used for the crosscheck feature
          email: '',
          phone: ''
        },
        liveness: 'straight',
        face: 'both',
        id: 'both',
        manualCaptureTimeout: '10000',
        showTermsAndPrivacy: true,
        appId: '`+ apiKey.value + `',
       // your webhook for POST verification processing
        callbackURL: 'https://website.com/webhook',

        // mobile handoff
        crossDevice: true,
        crossDeviceQRCode: true,
        crossDeviceSMS: true,
        
        // called when the verification is completed.
        onDone: (job) => {
          // token used to query jobs
          console.log("Scanning complete", { token: job.token });

          // An alternative way to update your system based on the 
          // results of the job. Your backend could perform the following:
          // 1. query jobs with the token
          // 2. store relevant job information such as the id and 
          //    success property into the user's profile
          fetch(\`/yourapi/idv?job_token=\$\{\job\.\token\}\`);

          // Redirect to the next page based on the job success
          if( job.result.success){
            window.location.replace("");
          }else{
            window.location.replace("");
          }
        },
        
        // theme
        theme: {
          name: 'verbose',
        },
      });
      vouched.mount("#vouched-element");
    })();
    <\/script>
</head>
<body>
  <div id='vouched-element' style="height: 100%"/>
</body>
</html> 
`;
            var filename = "vouchedPluginConversion.html";
            download(filename, conversionSettings);
            }
            if (balanced.checked == true) {
                var balancedSettings = `
    <!DOCTYPE html>
    <html>
    <head>
        <!-- utf-8 is required for JS Plugin default fonts -->
        <!-- VOUCHED BALANCED SECURITY SETTINGS -->
      <meta charset="utf-8" />
      <meta name=“viewport” content=“width=device-width, initial-scale=1.0">
      <\script src="https://static.vouched.id/widget/vouched-2.0.0.js"><\/script>
      <\script type='text/javascript'>
        (function() {
          var vouched = Vouched({
          // Optional verification properties.
            verification: {
              // verify the user's information 
              firstName: '',
              lastName: '',
              // used for the crosscheck feature
              email: '',
              phone: ''
            },
            liveness: 'mouth',
            id: 'camera',
            includeBarcode: 'true',
            manualCaptureTimeout: '15000',
            showTermsAndPrivacy: true,
            appId: '`+ apiKey.value + `',
           // your webhook for POST verification processing
            callbackURL: 'https://website.com/webhook',
    
            // mobile handoff
            crossDevice: true,
            crossDeviceQRCode: true,
            crossDeviceSMS: true,
            
            // called when the verification is completed.
            onDone: (job) => {
              // token used to query jobs
              console.log("Scanning complete", { token: job.token });
    
              // An alternative way to update your system based on the 
              // results of the job. Your backend could perform the following:
              // 1. query jobs with the token
              // 2. store relevant job information such as the id and 
              //    success property into the user's profile
              fetch(\`/yourapi/idv?job_token=\$\{\job\.\token\}\`);
    
              // Redirect to the next page based on the job success
              if( job.result.success){
                window.location.replace("");
              }else{
                window.location.replace("");
              }
            },
            
            // theme
            theme: {
              name: 'verbose',
            },
          });
          vouched.mount("#vouched-element");
        })();
        <\/script>
    </head>
    <body>
      <div id='vouched-element' style="height: 100%"/>
    </body>
    </html> 
    `;
                var filename = "vouchedPluginBalanced.html";
                download(filename, balancedSettings);
            }
            if (security.checked == true) {
               
                var securitySettings = `
    <!DOCTYPE html>
    <html>
    <head>
        <!-- utf-8 is required for JS Plugin default fonts -->
       <!-- VOUCHED HIGH SECURITY SETTINGS -->
      <meta charset="utf-8" />
      <meta name=“viewport” content=“width=device-width, initial-scale=1.0">
      <\script src="https://static.vouched.id/widget/vouched-2.0.0.js"><\/script>
      <\script type='text/javascript'>
        (function() {
          var vouched = Vouched({
          // Optional verification properties.
            verification: {
              // verify the user's information 
              firstName: '',
              lastName: '',
              // used for the crosscheck feature
              email: '',
              phone: ''
            },
            liveness: 'orientation',
            id: 'camera',
            includeBarcode: true,
            idLiveness: 'distance',
            showTermsAndPrivacy: true,
            manualCaptureTimeout: 15000,
            maxRetriesBeforeNext: 3,
            numForceRetries: 3,
            
            appId: '`+ apiKey.value + `',
           // your webhook for POST verification processing
            callbackURL: 'https://website.com/webhook',
    
            // mobile handoff
            crossDevice: true,
            crossDeviceQRCode: true,
            crossDeviceSMS: true,
            
            // called when the verification is completed.
            onDone: (job) => {
              // token used to query jobs
              console.log("Scanning complete", { token: job.token });
    
              // An alternative way to update your system based on the 
              // results of the job. Your backend could perform the following:
              // 1. query jobs with the token
              // 2. store relevant job information such as the id and 
              //    success property into the user's profile
              fetch(\`/yourapi/idv?job_token=\$\{\job\.\token\}\`);
    
              // Redirect to the next page based on the job success
              if( job.result.success){
                window.location.replace("");
              }else{
                window.location.replace("");
              }
            },
            
            // theme
            theme: {
              name: 'verbose',
            },
          });
          vouched.mount("#vouched-element");
        })();
        <\/script>
    </head>
    <body>
      <div id='vouched-element' style="height: 100%"/>
    </body>
    </html> 
    `;
                var filename = "vouchedPluginSecurity.html";
                download(filename, securitySettings);
            }
        },
    });


})(jQuery);

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function conversion_clicked() {
    // Show conversion desc and hide other descs
    conversion_desc.style.display="";
    balanced_desc.style.display="none";
    security_desc.style.display="none";
}

function balanced_clicked() {
  // Show conversion desc and hide other descs
  conversion_desc.style.display="none";
  balanced_desc.style.display="";
  security_desc.style.display="none";
}

function security_clicked() {
  // Show security desc and hide other descs
  conversion_desc.style.display="none";
  balanced_desc.style.display="none";
  security_desc.style.display="";

}

function autoClick() {
    document.getElementById('apiKey').click();
    document.getElementById('apiKey').focus();
    console.log("Auto Click Completed");
}