import css from 'styled-jsx/css';

// Scoped styles
export const button = css`
  button {
    background: rgb(3, 110, 30);
    font-size: 2rem;
  }
`;

// tslint:disable-next-line: no-default-export
export default css`
  .root {
    border-style: dashed;
    border-width: 0.3rem;
    border-color: indianred;
    border-radius: 0.4rem;
    padding: 0.4rem;
  }
  .x1 {
    font-size: 2rem;
    background: rgb(199, 123, 0);
  }
  .x2 {
    font-size: 2em;
    background: rgb(107, 6, 40);
  }
`;
