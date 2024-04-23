'use client';

export default function MyButton() {
  const testAlert = () => {
    alert('Hello World');
  };
  return (
    <button type="button" onClick={() => testAlert()}>
      Click Me
    </button>
  );
}
