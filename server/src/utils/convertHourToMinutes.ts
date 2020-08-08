export default function convertHourToMinutes(time: string) {
    const [hour, minute] = time.split(":").map(Number);
    const timeToMinutes = (hour * 60) + minute;

    return timeToMinutes
}