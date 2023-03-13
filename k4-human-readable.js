function formatDuration(seconds) {
  let remainingSeconds = seconds;
  let result = '';

  // now
  if (remainingSeconds <= 0) {
    return 'now';
  }

  // years
  if (remainingSeconds >= 31536000) {
    result += `${Math.floor(remainingSeconds / 31536000)} years`;
    remainingSeconds = remainingSeconds % 31536000;
  }

  // days
  if (remainingSeconds >= 86400) {
    result += `, ${Math.floor(remainingSeconds / 86400)} days`;
    remainingSeconds = remainingSeconds % 86400;
  }

  // hours
  if (remainingSeconds >= 3600) {
    result += `, ${Math.floor(remainingSeconds / 3600)} hours`;
    remainingSeconds = remainingSeconds % 3600;
  }

  // minutes
  if (remainingSeconds >= 60) {
    result += `, ${Math.floor(remainingSeconds / 60)} minutes`;
    remainingSeconds = remainingSeconds % 60;
  }

  // seconds 
  if (remainingSeconds > 0) {
    result += `, ${Math.floor(remainingSeconds)} seconds`;
  }

  return result.replace(/(.*)(, )(.*)$/, '$1 and $3').replace(/^( and |, )(.*)/, '$2').replace(/\b(1\s\w*)(s)\b/g, '$1');
}


console.log(formatDuration(132030240));