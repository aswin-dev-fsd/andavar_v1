export type ClinicStatus = 'open' | 'closing_soon' | 'closed' | 'opens_at';

export interface StatusResult {
  status: ClinicStatus;
  timeString?: string;
}

export function getClinicStatus(date: Date = new Date()): StatusResult {
  // Convert current time to IST
  const istDate = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  
  const day = istDate.getDay(); // 0 is Sunday
  const hours = istDate.getHours();
  const minutes = istDate.getMinutes();
  
  const timeInMinutes = hours * 60 + minutes;

  // Sunday closed
  if (day === 0) {
    return { status: 'closed' };
  }

  // Morning Session: 10:00 AM (600) to 2:00 PM (840)
  if (timeInMinutes >= 600 && timeInMinutes < 840) {
    if (840 - timeInMinutes <= 30) {
      return { status: 'closing_soon' };
    }
    return { status: 'open' };
  }

  // Evening Session: 5:00 PM (1020) to 7:00 PM (1140)
  if (timeInMinutes >= 1020 && timeInMinutes < 1140) {
    if (1140 - timeInMinutes <= 30) {
      return { status: 'closing_soon' };
    }
    return { status: 'open' };
  }

  // Between morning and evening session -> Opens at 5:00 PM
  if (timeInMinutes >= 840 && timeInMinutes < 1020) {
    return { status: 'opens_at', timeString: '5:00 PM' };
  }

  // Before 10 AM -> Opens at 10:00 AM
  if (timeInMinutes < 600) {
    return { status: 'opens_at', timeString: '10:00 AM' };
  }

  // After 7 PM -> Closed
  return { status: 'closed' };
}
