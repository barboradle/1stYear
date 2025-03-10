// Import the monthNames array and getInfoText function from infoDisplay.js
import { monthNames, getInfoText } from './infoDisplay.js';

document.addEventListener('DOMContentLoaded', () => {
  const monthInput = document.getElementById('monthInput');
  const dayInput = document.getElementById('dayInput');
  const calendarContainer = document.getElementById('calendarContainer');
  const infoDisplayDiv = document.getElementById('infoDisplay');

  // Load stored date and scratch state from localStorage
  let storedDate = localStorage.getItem('userDate');
  let scratchedState = localStorage.getItem('scratchedState');
  if (storedDate) {
    storedDate = JSON.parse(storedDate);
    // Set the dropdown (value is already 0-indexed) and day input
    monthInput.value = storedDate.month;
    dayInput.value = storedDate.day;
  } else {
    storedDate = { month: 0, day: 1 };
  }
  if (scratchedState) {
    scratchedState = JSON.parse(scratchedState);
  } else {
    scratchedState = {}; // keys are month indices (0-11) with true if scratched
  }

  // Generate the calendar on load
  generateCalendar(storedDate.month, storedDate.day);

  // Update calendar on input changes and save to localStorage.
  function updateCalendar() {
    const monthVal = parseInt(monthInput.value);
    const dayVal = parseInt(dayInput.value);
    if (!isNaN(monthVal) && monthVal >= 0 && monthVal < 12 &&
        !isNaN(dayVal) && dayVal >= 1 && dayVal <= 31) {
      const dateObj = { month: monthVal, day: dayVal };
      localStorage.setItem('userDate', JSON.stringify(dateObj));
      scratchedState = {};
      localStorage.setItem('scratchedState', JSON.stringify(scratchedState));
      generateCalendar(dateObj.month, dateObj.day);
    }
  }
  
  monthInput.addEventListener('input', updateCalendar);
  dayInput.addEventListener('input', updateCalendar);

  /**
   * Generates a 12-cell calendar starting from the user-selected month.
   * For each cell, a date is computed (using the user-entered day).
   * - If the cell's date is in the future (relative to today), the cell is disabled.
   * - Clicking on a cell (if enabled and not yet scratched) marks it as scratched.
   *   The scratch state is stored, and the consolidated info area is updated.
   */
  function generateCalendar(userMonth, userDay) {
    calendarContainer.innerHTML = ''; // Clear previous calendar
    const today = new Date();
    const currentYear = today.getFullYear();
    const startMonth = userMonth; // now already 0-indexed

    for (let i = 0; i < 12; i++) {
      const cellMonth = (startMonth + i) % 12;
      const cellYear = currentYear + Math.floor((startMonth + i) / 12);
      const cellDate = new Date(cellYear, cellMonth, userDay);

      // Create the calendar cell element
      const cell = document.createElement('div');
      cell.classList.add('calendar-cell');
      cell.dataset.monthIndex = cellMonth;

      // Set the displayed month name (only the month name is shown)
      cell.innerText = monthNames[cellMonth];

      // If the cell's date is in the future, disable it
      if (today < cellDate) {
        cell.classList.add('disabled');
      }
      
      // If this month has been scratched (from storage), mark it
      if (scratchedState[cellMonth]) {
        cell.classList.add('scratched');
      }

      // Clicking on a cell (if enabled) marks it as scratched permanently.
      cell.addEventListener('click', () => {
        if (cell.classList.contains('disabled')) return;  // Do nothing if date in future
        if (!cell.classList.contains('scratched')) {
          cell.classList.add('scratched');
          // Update scratch state and store it
          scratchedState[cellMonth] = true;
          localStorage.setItem('scratchedState', JSON.stringify(scratchedState));
          updateInfoDisplay(userMonth);
        }
      });

      calendarContainer.appendChild(cell);
    }
    // Always update the consolidated info below the calendar
    updateInfoDisplay(userMonth);
  }

  /**
   * Updates the consolidated info display below the calendar.
   * It shows the full detailed info (HTML) for each scratched month,
   * in the order of the calendar (starting from the user-selected month).
   */
  function updateInfoDisplay(userMonth) {
    const startMonth = userMonth;
    let consolidatedHTML = '';
    for (let i = 0; i < 12; i++) {
      const currentMonthIndex = (startMonth + i) % 12;
      if (scratchedState[currentMonthIndex]) {
        consolidatedHTML += getInfoText(currentMonthIndex) + '<hr>';
      }
    }
    infoDisplayDiv.innerHTML = consolidatedHTML;
  }
});
