# Real-time Code and Package Listener

This project enables real-time monitoring of code and packages in containers running within the Docker Compose environment.

## Usage

Follow these steps to use the program:

1. Clone the repository:
   git clone https://github.com/mosheilan942/working_demo_for_hot_reload_with_docker_compose

2. Install dependencies in the server and client folders:
  cd server
  npm install
  cd ../client
  npm install

3. Run the Docker Compose file:
  docker compose watch

5. Start the development server:
  cd server
  npm run start:dev
6. Ensure that changes are reflected in real-time.
