# Affiliate-Javascript-module

 This specific browser extension performs targeted affiliate fraud by falsely associating all of the user’s 
 activities and eventual purchases on a website to an affiliate that never actually referred the user.
 
 
 File and Directries used
 ------------------------
 
 1 Manifest.json : This manifest is nothing more than a metadata file in JSON format that contains properties like our 
 extension's name, description, version number and so on. At a high level, we will use it to declare what the extension
 is going to do, and what permissions it requires in order to do those things.
 
 2 Background.js : This is the background file that runs in background when extension is loaded. this file calls the inject.js file
 which is responsible for changing the Affiliate id by fradulent's id.
 
 3 inject.js : code file
 
 4 jquery file : contains all necessary permissions for using queries.
 
 
 Load the Affiliate extension 
 ---------------------------
 
 1 Visit chrome://extensions in your browser
 
 2 Ensure that the Developer mode checkbox in the top right-hand corner is checked.

 3 Click Load unpacked extension… to pop up a file-selection dialog.

 4 Navigate to the directory in which your extension files live, and select it.
