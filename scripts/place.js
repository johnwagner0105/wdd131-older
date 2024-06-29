document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();
    const element = document.getElementById("currentyear");
    element.innerHTML = `&#169; ${year}`;

    const now = new Date(document.lastModified).toLocaleDateString();
    const time = new Date(document.lastModified).toLocaleTimeString();
    document.getElementById("lastModified").innerHTML = `Last Modified: ${now} ${time}`;

    const temp = 9;
    const windSpeed = 13;

    const calculateWindChill = () => {
        const windChill = 13.12 + (0.6215 * temp) - (11.37 * (windSpeed ** 0.16)) + (0.3965 * temp * (windSpeed ** 0.16));
        return windChill;
    }

    document.getElementById("wind-chill").innerHTML = calculateWindChill().toFixed(1) + " °C";
});
