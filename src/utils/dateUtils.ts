const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = Math.abs(now.getTime() - date.getTime());

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));

    if (seconds < 60) {
        return `${seconds} ${decline(seconds, 'секунду', 'секунды', 'секунд')} назад`;
    } else if (minutes < 60) {
        return `${minutes} ${decline(minutes, 'минуту', 'минуты', 'минут')} назад`;
    } else if (hours < 24) {
        return `${hours} ${decline(hours, 'час', 'часа', 'часов')} назад`;
    } else {
        return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}, ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
    }
};

const decline = (num: number, single: string, few: string, many: string) => {
    const mod10 = num % 10;
    const mod100 = num % 100;
    if (mod100 >= 11 && mod100 <= 19) {
        return many;
    }
    if (mod10 === 1) {
        return single;
    }
    if (mod10 >= 2 && mod10 <= 4) {
        return few;
    }
    return many;
};

const pad = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
};

export default formatDate;
