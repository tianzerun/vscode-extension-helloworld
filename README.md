After you have installed the extension, you need to add a folder into the workspace. 

Within the folder, please add two files: `old.txt` and `new.txt` (named exactly like these). 

Now, you can type `cmd+shift+p`, and enter `Show diff editor` to bring up the diff editor. 

Then, open the developer tools and inspect the console logs, specifically the logged `document.uri`.

Everything works fine when run in VSCode. When run in Codespaces, `document.uri` misses the `query` field. 
