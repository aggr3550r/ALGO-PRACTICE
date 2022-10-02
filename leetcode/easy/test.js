function is24HoursAgo(date) {
  const twentyFourHours = 24 * 60 * 60 * 1000;

  const twentyFourHoursAgo = Date.now() - twentyFourHours;

  return date > twentyFourHoursAgo;
}

is24HoursAgo();
