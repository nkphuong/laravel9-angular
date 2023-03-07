## Prerequisites
1. (**Administrator Required**) Install xampp s php 8.1 (https://www.apachefriends.org/download.html)
2. (**Administrator Required**) Install composer 2.4+ (https://getcomposer.org/Composer-Setup.exe
3. (**Administrator Required**) Install Nodejs 18 (https://nodejs.org/en/)
4. Install Angular-CLI (https://angular.io/guide/setup-local)
   5. ``npm install -g @angular/cli``
   6. Run this in Window PowerShell:
      
   ``Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned``

## Setup source
1. Place this source as C:\xampp\htdocs (or where you want)
2. Setup vhost for httpd. Go open file `C:\xampp\apache\conf\extra\httpd-vhost`
   3. Add this in the end of file
    ```
   <VirtualHost *:80>
     ServerAdmin webmaster@dummy-host2.example.com
     DocumentRoot "C:/xampp/htdocs/laravel_angular/public" #where you place your source
     ServerName laravel-angular.localhost #the local domain you want to use
     ErrorLog "logs/dummy-host2.example.com-error.log"
     CustomLog "logs/dummy-host2.example.com-access.log" common
   </VirtualHost>
   ```
3. (**Administrator Required**) Config local domain (point your local domain back to your localhost at 127.0.0.1).
   4. Open `Nnotepad` as Administrator permission
   5. Open file `C:\Windows\System32\drivers\etc\hosts` by `Notepad`
   6. Add this line 
   ````
   127.0.0.1  laravel-angular.localhost # your local domain
    ````
## Installation & Configuration Laravel 9
1. Open cmd at the source dir
2. (**Github Required**) Install laravel: `composer install`
3. `php -r "file_exists('.env') || copy('.env.example', '.env');"`
4. (**Only need run once as 1st init**) `php artisan key:generate --ansi`
5. Open file `.env`. Place your database connection as
   ````
   APP_URL=http://localhost #replace with your local domain
   ...
   DB_HOST=127.0.0.1 #replace with your info
   DB_PORT=3306
   DB_DATABASE=laravel #replace with your info
   DB_USERNAME=root #replace with your info
   DB_PASSWORD="#%(*kahem"  #replace with your info
    ````
6. (Optional) Migrate DB `php artisan migrate`
7. (Optional)  Migrate and seed data `php artisan migrate:fresh --seed`
8. (Optional)  Seed data `php artisan db:seed`

## Installation & Configuration Angular 14
1. Open cmd at the source dir
2. Install node_modules `npm i`

## Start develop with angular
1. Make sure xampp is started
2. Open cmd at the source dir
3. Start angular `npm run start`

## Production check
1. Build angular `npm run build:prod`
2. Check your local domain
