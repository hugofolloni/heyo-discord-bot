const execute = async (message) => {
    const args = message.content.split(' ').slice(1)
    if (!args.length) {
        return message.channel.send(`Você não disse valores suficientes, ${message.author}!`);
    } 
    var today = new Date();
    var hourTime = Number(today.getHours())
    var minuteTime = Number(today.getMinutes())

    var alarmOClock = args[0]
    var alarmTimeSplited = alarmOClock.split(':');
    var alarmHour = Number(alarmTimeSplited[0]);
    var alarmMinute = Number(alarmTimeSplited[1]);

    if(alarmHour == hourTime && alarmMinute < minuteTime){
        alarmHour = Number(alarmHour) + 24;
        var minutesDiff = ((alarmMinute - minuteTime) * 60 * 1000)
        var minuteError = 0
        console.log(alarmHour, hourTime, alarmMinute, minuteTime)
    }
    else if(alarmHour < hourTime){
        alarmHour = Number(alarmHour) + 24;
        var minutesDiff = ((alarmMinute - minuteTime) * 60 * 1000)
        var minuteError = 0
        console.log(alarmHour, hourTime, alarmMinute, minuteTime)
    }
    else{
        if(alarmMinute >= minuteTime){
            var minutesDiff = ((alarmMinute - minuteTime) * 60 * 1000)
            var minuteError = 0
        }
        else{
            var minutesDiff = 0
            var minuteError = 0 - (60 + (minuteTime - alarmMinute))
            hourTime = hourTime - 1
        }
    }

    var hoursDiff = (((alarmHour - hourTime) * 60 + minuteError) * 60 * 1000)

    var timeout = (hoursDiff + minutesDiff)

    console.log(alarmHour, minutesDiff, hoursDiff, timeout)
    
    message.reply(`um alarme está programado para daqui a ${timeout / (60 * 1000)} minutos!`)

    setTimeout(function(){ 
        const voiceChannel = message.member.voice.channel
        voiceChannel.join();
        message.channel.send('.p https://www.youtube.com/watch?v=o1OK8jOf0lE&ab_channel=EfeitoSonoro2');
    }, timeout);
};

module.exports = {
  name: 'alarm',
  help: 'Seta um alarme para a hora selecionada',
  execute
}