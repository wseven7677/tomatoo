import moment from 'moment';
import logUpdate from 'log-update';
function handleEnding() {
    console.log(`
 ___     ___   ____     ___      __ 
|   \\   /   \\ |    \\   /  _]    |  |
|    \\ |     ||  _  | /  [_     |  |
|  D  ||  O  ||  |  ||    _]    |__|
|     ||     ||  |  ||   [_      __ 
|     ||     ||  |  ||     |    |  |
|_____| \\___/ |__|__||_____|    |__|
`);
    const endTime = moment();
    const endTimeStr = endTime.format('YYYY-MM-DD HH:mm:ss');
    console.log(`done time: ${endTimeStr}`);
}
function start() {
    const durationCount = 25; // minutes
    const startTime = moment();
    const startTimeStr = startTime.format('YYYY-MM-DD HH:mm:ss');
    const endTime = startTime.add(durationCount, 'minute');
    console.log(`start time: ${startTimeStr}`);
    console.log('start counting...');
    const t = setInterval(() => {
        const now = moment();
        if (now.isAfter(endTime)) {
            handleEnding();
            clearInterval(t);
        }
        else {
            const nowStr = now.format('YYYY-MM-DD HH:mm');
            const leftTime = startTime.diff(now, 'second');
            const leftTimeDuration = moment.duration(leftTime, 'second');
            const leftTimeStr = `${leftTimeDuration.hours()}:${leftTimeDuration.minutes()}:${leftTimeDuration.seconds()}`;
            logUpdate(`now: ${nowStr}
[ ${leftTimeStr} ]
`);
        }
    }, 1000);
}
export default start;
