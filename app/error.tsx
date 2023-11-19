'use client';

const ErrorPage = ({ error }: any) => (
  <div>
    <h1 className="text-2xl">{error.message}</h1>
  </div>
);

export default ErrorPage;
