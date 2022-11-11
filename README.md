# Lukksarna


<hr>

About me ;)

Compile with:

```npm run build```

Find compiled files in ```./dist``` folder

Symbols meaning before version number in `package.json`:  
example version: `1.0.2`  
`~1.0.2` - install this version or latest patch, e.g. 1.0.4
`^1.0.2` - install this version or latest minor, e.g. 1.1.0

<hr>
Update history:  

Update Node to latest version, commit each change (Angular update require it)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

If any conflicts with dependency, update it in `package.json` file.  
Version od dependencies can be found:  
https://www.npmjs.com/

How to update:  
https://update.angular.io/

Version 8:
```
cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@8 update @angular/cli@8 @angular/core@8"
```
in `tsconfig.json` change to:
```
"target": "es2015",
```
```
ng update
```
```
cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@8 update @angular/cli@8 @angular/core@8"
```
```
ng update
```
Version 9:
```
cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @angular/cli@9 @angular/core@9"
```
```
ng update
```
Version 10:
```
npx @angular/cli@10 update @angular/core@10 @angular/cli@10
```
```
ng update
```
Version 11:
```
ng update @angular/core@11 @angular/cli@11
```
```
ng update
```
Version 12:
```
ng update @angular/core@12 @angular/cli@12
```
if problem with dependency run:
```
npm install --legacy-peer-deps
```
and continue:
```
ng update
```
```
ng update @angular/cli@12 --migrate-only production-by-default
```
Version 13:
```
ng update @angular/core@13 @angular/cli@13
```
Version 14:
```
ng update @angular/core@14 @angular/cli@14
```
