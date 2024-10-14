# Timer App in React

## Objective


Build a simple timer app with start, pause, reset, and editable time functionality.

----------

## Steps:


### 1. **State Management**


-   Use `useState` to track:
    -   `time` (in seconds)
    -   `isRunning` (timer status)
    -   `editingField` (part of the time being edited)
    -   `editValue` (value being edited)

### 2. **Countdown Logic**


-   Implement a `useEffect` that updates the `time` every second when the timer is active.

### 3. **Editable Time**


-   Allow users to click on hours, minutes, or seconds to edit that specific part of the time.

### 4. **Input Handling**


-   Ensure inputs are limited to two digits (hours, minutes, seconds).

### 5. **Controls**


-   Provide buttons for:
    -   Starting/pausing the timer.
    -   Resetting the timer.

## Goal:


-   Implement the timer with functionality for start, pause, and reset.
-   Allow users to edit the time by clicking and updating individual time components.

### Reference UI:

[![Image](https://camo.githubusercontent.com/87f4a85da75606cabd08ce982c6f19fdb4149a2f9e5606edcc5af8220119c1c9/68747470733a2f2f757466732e696f2f662f41384a5a7a77304c6166396a496474544f366365507832335377684e57546f69754f515a6a64746738426d595535474b)](https://camo.githubusercontent.com/87f4a85da75606cabd08ce982c6f19fdb4149a2f9e5606edcc5af8220119c1c9/68747470733a2f2f757466732e696f2f662f41384a5a7a77304c6166396a496474544f366365507832335377684e57546f69754f515a6a64746738426d595535474b)
