# laravel-vue-sample-project
Laravel Vue.js Sample Project

## Laravel
- locate into `laravel-api` directory
- run `composer install` to install composer dependencies
- rename `.env.example` to `.env` and update database connection settings
- change meduim.com client configuration in `laravel-api/config/medium.php`
- run `php artisan config:cache` to cache the env configurations
- run `php artisan migrate` to migrate the database
- run `php artisan serve` to start the api: server will started on http://127.0.0.1:8000

### Postman Collection
Follow this API collection for API usage: https://www.getpostman.com/collections/8a76ad8fcfadfdf50a65

## Frontend App (SPA): Vue.js
- locate into `meduim-app` directory
- run `npm install` and `npm run serve` to start the frontend app: app will be served by http://localhost:8080 