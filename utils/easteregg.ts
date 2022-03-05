export const logMessage = () => {
  console.log(
    `%cGreetings!\n%cCurious about how this site was built?\nCheck out the source code here: https://github.com/penrodlol/christianpenrod`,
    `
      color: hsl(229, 42%, 69%) !important;
      font-size: 2em;
      font-weight: bold;
      text-shadow: 0 0 5px rgba(0,0,0,0.2);
      padding-bottom: 5px;
    `,
    `
      font-size: 1.5em;
      font-weight: bold;
      text-shadow: 0 0 5px rgba(0,0,0,0.2);
    `,
  );
};
