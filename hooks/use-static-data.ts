import useSwr from 'swr';

export function useStaticData<T>(requestUrl: string) {
  const { data } = useSwr<T>(requestUrl, (url) =>
    fetch(url).then((res) => res.json()),
  );

  return data;
}
