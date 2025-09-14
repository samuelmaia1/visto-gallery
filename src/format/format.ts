export function dateToPattern(date: Date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear}`
}

export function getHourAndMinuteByDate(date: Date) {
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`
}