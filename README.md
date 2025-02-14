# KeyVault API

## Overview

The KeyVault API is a RESTful service built with NestJS that provides endpoints to manage key-value pairs. It uses Prisma as the ORM to interact with the database.

## Features

- View all key-value pairs
- Find a specific key-value pair by key name
- Create a new key-value pair
- Error handling for unique constraint violations

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alphadevking/keyvault.git
   cd keyvault
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run start:dev
   ```

## Usage

1. View all key-value pairs:

   ```bash
   curl http://localhost:3000/
   ```

2. Find a specific key-value pair by key name:

   ```bash
   curl http://localhost:3000/:keyName
   ```

3. Create a new key-value pair:

   ```bash
   curl -X POST http://localhost:3000/ -H "Content-Type: application/json" -d '{"keyName": "myKey", "password": "myPassword"}'
   ```

    - If the key already exists, it will return a 409 Conflict error.
    - If the key does not exist, it will create a new key-value pair and return a 201 Created status.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Author

Favour Orukpe

- GitHub: [alphadevking](https://github.com/alphadevking)

- Twitter: [@alphadevking](https://twitter.com/alphadevking_1)
