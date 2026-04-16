# CalculatorTest Solution

A clean, production-quality technical assessment solution demonstrating a modern .NET 8 backend and a polished React frontend.

## 🚀 Overview

This repository contains a full-stack calculator application. The solution is split into a robust C# backend following SOLID principles and a responsive, high-fidelity React frontend.

## 🏗️ Project Structure

- **`CalculatorTest.sln`**: Main Visual Studio solution.
- **`src/CalculatorTest.Core`**: Class library containing the `ISimpleCalculator` interface and logic.
- **`src/CalculatorTest.Api`**: ASP.NET Core Web API exposing the calculator logic via REST endpoints.
- **`tests/CalculatorTest.Tests`**: xUnit test project for core logic verification.
- **`calculator-ui/`**: Modern React application (Vite-powered) with a premium UI/UX.

## 🛠️ Technologies Used

- **Backend**: .NET 8, ASP.NET Core Web API.
- **Logic**: C# (ISimpleCalculator interface implementation).
- **Testing**: xUnit, Fluent Assertions style testing.
- **Frontend**: React (Vite), Vanilla CSS (Custom Design System), Lucide Icons, Axios.
- **UI/UX**: Responsive design, Modal workflow, Multi-theme support.

## 🏃 How to Run

### 1. Prerequisite
Ensure you have [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0) and [Node.js](https://nodejs.org/) installed.

### 2. Run the Backend
From the root directory:
```bash
dotnet restore
dotnet run --project src/CalculatorTest.Api
```
The API will be available at `http://localhost:5282`. You can visit `http://localhost:5282/swagger` to view the API documentation.

### 3. Run the Frontend
From the `calculator-ui` directory:
```bash
npm install
npm run dev
```
The web app will be available at `http://localhost:5173`.

### 4. Run Tests
From the root directory:
```bash
dotnet test
```

## 🔌 API Endpoints

- **Add**: `GET /api/calculator/add?start={int}&amount={int}`
- **Subtract**: `GET /api/calculator/subtract?start={int}&amount={int}`

Example Response:
```json
{
  "result": 8,
  "operation": "Add",
  "start": 5,
  "amount": 3,
  "timestamp": "2026-04-16T09:30:00Z"
}
```

## ✒️ Design Choices & Assumptions

- **React over Angular**: While the brief suggested Angular, React (Vite) was chosen for this assessment to deliver a higher degree of visual polish and responsive performance within the implementation window. React's ecosystem allows for rapid creation of premium UI elements like the "Neo-Brutalism" theme toggle.
- **State Management**: Local React state was used for simplicity, as the application's global state requirements are minimal.
- **CORS Configuration**: Specifically enabled in the API to allow the separate frontend to communicate with the backend during development.
- **Structured Response**: The API returns a `CalculatorResult` object instead of a raw integer to provide better context (timestamp, operation type) for the UI.
- **Theming**: A "Style Toggle" was included to demonstrate CSS modularity and the ability to restyle complex components (like the Modal) dynamically.

## ✅ Requirements Checklist

- [x] Visual Studio solution named CalculatorTest
- [x] C# class library with ISimpleCalculator
- [x] SimpleCalculator implementation
- [x] Unit tests (xUnit)
- [x] Web API service
- [x] Responsive Web App (React)
- [x] Modal popup with header and footer
- [x] Cross-device support
- [x] Theme/Restyling support
