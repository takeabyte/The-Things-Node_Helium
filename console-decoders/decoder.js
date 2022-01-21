function Decoder(bytes, port) {
    var decoded = {};
    var events = {
      1: 'setup',
      2: 'interval',
      3: 'motion',
      4: 'button'
    };
    decoded.event = events[port];
    decoded.battery = (bytes[0] << 8) + bytes[1];
    decoded.light = (bytes[2] << 8) + bytes[3];
    if (bytes[4] & 0x80)
      decoded.temperature = ((0xffff << 16) + (bytes[4] << 8) + bytes[5]) / 100;
    else
      decoded.temperature = ((bytes[4] << 8) + bytes[5]) / 100;
    return decoded;
  }