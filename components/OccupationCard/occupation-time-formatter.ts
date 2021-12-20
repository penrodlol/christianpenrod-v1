import { Role } from '@interfaces/occupation.interface';
import dayjs from 'dayjs';

export function getTotalTime(roles: Array<Role>) {
  let years = 0;
  let months = 0;

  roles?.forEach(({ time }) => {
    const to = dayjs(time.to || dayjs().valueOf());

    years += to.diff(time.from, 'year');
    months += to.month() - dayjs(time.from).month();
  });

  let payload = '';

  if (years > 0) payload = `${years} Years `;
  if (months > 0) payload += `${months} Months`;

  return payload.trim();
}

export function formatFrom(time: number) {
  return dayjs.utc(time).format('MMM Do, YYYY');
}

export function formatTo(time: number | undefined) {
  return time ? dayjs.utc(time).format('MMM Do, YYYY') : 'Present';
}
