# Digital Clock Animated SVG

This project demonstrates how to create a digital clock using SVG, CSS, and JavaScript, encapsulated within a single SVG file. The clock displays hours, minutes, and seconds with a retro digital font and a pulsating effect for seconds.

## Technical Details:

- **SVG Markup**: The clock layout is defined using SVG elements. The `<text>` element is positioned at the center of the SVG canvas to display the digital time.
  
- **CSS Animation**: CSS keyframes are utilized to create a pulsating effect for the seconds display. The animation cycles between full opacity, half opacity, and full opacity again.
  
- **JavaScript Logic**: JavaScript handles the logic for updating the time displayed on the clock. The `updateTimer` function is called every second to increment the seconds counter and update the displayed time accordingly.
  
- **Font**: The clock text uses the VT323 font, imported from Google Fonts.

## Usage:

To use this SVG Digital Clock, simply copy the provided SVG code and paste it into your HTML file or directly embed it into your web page. You can customize the clock's appearance by modifying the CSS styles or adjusting the SVG attributes.

## Example:

```xml
<svg viewBox="0 0 500 200" class="clock-container" width="600" height="600" 
  xmlns="http://www.w3.org/2000/svg" 
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Digital Clock Animated SVG code here -->
  <title>Clock</title>
  <defs>
    <style type="text/css">
      <![CDATA[
        @import url('https://fonts.googleapis.com/css?family=VT323&display=swap');

        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }

        .digital-clock {
          font-family: 'VT323', sans-serif;
          font-size: 5em;
          fill: #00FF00;
        }

        .seconds {
          animation: pulse 1s infinite;
        } 
      ]]>
    </style>
  </defs>
  <text x="50%" y="50%" text-anchor="middle" class="digital-clock">
    <tspan id="hours">00</tspan>:<tspan id="minutes">00</tspan>:<tspan id="seconds" class="seconds">00</tspan>
  </text>
  <script type="text/javascript">
    <![CDATA[
      let [hours, minutes, seconds] = [0, 0, 0];
      
      const updateTime = (element, value) => {
        element.textContent = value.toString().padStart(2, '0');
      };

      const hoursElement = document.getElementById('hours');
      const minutesElement = document.getElementById('minutes');
      const secondsElement = document.getElementById('seconds');

      const updateTimer = () => {
        seconds = (seconds + 1) % 60;
        if (seconds === 0) minutes = (minutes + 1) % 60;
        if (minutes === 0 && seconds === 0) hours = (hours + 1) % 24;

        updateTime(hoursElement, hours);
        updateTime(minutesElement, minutes);
        updateTime(secondsElement, seconds);
      };

      setInterval(updateTimer, 1000);
    ]]>
  </script>
</svg>
