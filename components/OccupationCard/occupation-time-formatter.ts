import { Roles } from '@models/occupation';
import dayjs from 'dayjs';

export function getTotalTime(roles: Roles) {
  let years = 0;
  let months = 0;

  roles?.forEach((role) => {
    const to = dayjs(role.to || dayjs().valueOf());

    years += to.diff(role.from, 'year');
    months += to.month() - dayjs(role.from).month();
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
