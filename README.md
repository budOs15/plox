# Welcome to Plox!

Plox is a project for a food delivery app, born from the ashes of another project
which never saw the light, where my team and I were trying to create a delivery
application implementing AI.

This project is primarily aimed at helping me practice coding and learn various
tools involved in it.
However, if for some reason this project becomes more serious over time, that would be great, who knows!

P.S.
(I don't know if I will involve AI in this project soon, as I have little to no time to 
get into that as of now, but if it happens, I'll let you know here, lol).

Anyway!
Here are some guidelines for you if you want to get involved in this project.


## Requirements

- **Java**: 21.0.4
- **Spring Boot**: 3.3.4
- **Maven**: 3.11.0
- **NodeJS**: v18.19.1
- **npm**: 9.2.0
- **Angular**: 18.1.4
- **Postgres**: 17.0
- **Docker**: 27.3.1 (contains just the database in my environment)


## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/budOs15/plox.git
    ```

2. Backend:

    ```bash
    cd com/budos15/plox/plox-backend
    ./mvnw compile
    mvn clean install
    mvn spring-boot:run
    ```

3. Frontend:
    
    ```bash
    cd com/budos15/plox-frontend
    npm install
    ng serve
    ```

## Usage

1. Access the frontend at `http://localhost:4200`


## Contributing

1. Fork the project.
2. Create a new branch:

    ```bash
    git checkout -b feature/feature-name
    ```

3. Commit your changes:

    ```bash
    git add .
    git commit -m "Add feature: your-feature-description"
    ```

4. Push the branch:

    ```bash
    git push origin feature/your-feature-name
    ```

5. Create a Pull Request.


## License

This project is licensed under the MIT license.
