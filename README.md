# Guess the Number Game

This is a simple **Guess Number** game built with React Native. In this game, the user tries to guess a randomly generated number between a specified range. The game provides hints after each guess, indicating whether the guess is too high or too low, helping the player to guess the number correctly.

## Features

- Random number generation between a defined range (e.g., 1 to 100).
- User input for making guesses.
- Feedback on whether the guess was too high, too low, or correct.
- A reset option to start a new game after a successful guess.
- Minimalistic UI to focus on game logic.

## How to Play

1. When the game starts, a random number will be generated.
2. The player will enter their guess in the input field.
3. The game will provide feedback:
   - **Too High:** The guess is higher than the correct number.
   - **Too Low:** The guess is lower than the correct number.
4. Keep guessing until you find the correct number.
5. Once the number is guessed correctly, the game will allow you to reset and start a new game.

## Screenshots

**Main Game Screen:**

- Displays input for guessing the number.
- Shows feedback for each guess.

**Winning Screen:**

- Displays a success message and a "Play Again" button.

## Installation

To run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Android Studio (for Android) or Xcode (for iOS)](https://reactnative.dev/docs/environment-setup)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/frkinal/GuessNumber.git
   ```

2. Navigate to the project directory:

   ```bash
   cd GuessNumber
   ```

3. Install the dependencies:

   ```bash
   yarn install
   ```

4. Run the project on an emulator or connected device:
   ```bash
   npx react-native run-android # for Android
   npx react-native run-ios # for iOS
   ```
