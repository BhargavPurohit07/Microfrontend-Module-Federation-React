# Microfrontend-Module-Federation-React
microfrontend that communicate react to react application with shared data. currently i shared the auth demo. 

# Point's that keep in mind
```
- remote means who share the code
- if remote code is change no need to redeploy the host code
- host means who uses the code
- both can be remote or host no restrication 
- we can commuicate react with vue or any other framework no restrication 
- if remote is down it's not the case our host will not work because that share the assest public code to host
- we can share and use the data between code on runtime as well
- remote had to had fixed port host can have any port no restrication 
- for this example to work you need to first install package on both project and the build those project
- just copy the remote path into confing and you good to go
```
