function parseCommand(command) {
    const myRegex = /\w+/g;
    const [comm, value] = command.match(myRegex);
    return [comm, parseInt(value)];
}

function submarinePosition (commands) {
    var horizontal = 0;
    var depth = 0;
    for(var i = 0; i < commands.length ; i++) {
        let [comm, value] = parseCommand(commands[i]);
        switch (true) {
            case /forward/.test(comm):
                horizontal += value;
                break;
            case /down/.test(comm):
                depth += value;
                break;
            case /up/.test(comm):
                depth -= value;
                break;
            }
     }
    return horizontal * depth;
}

function submarinePositionEnriched (commands) {
    var horizontal = 0;
    var depth = 0;
    var aim = 0;
    for(var i = 0; i < commands.length ; i++) {
        let [comm, value] = parseCommand(commands[i]);
        switch (true) {
            case /forward/.test(comm):
                horizontal += value;
                depth = depth + (aim * value);
                break;
            case /down/.test(comm):
                aim += value;
                break;
            case /up/.test(comm):
                aim -= value;
                break;
            }
     }
    return horizontal * depth;
}

module.exports = {
    submarinePosition: submarinePosition,
    submarinePositionEnriched: submarinePositionEnriched
};